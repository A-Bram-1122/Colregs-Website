/**
 * Alias for escapeHtml with fallback encoding.
 * @param {*} text - Value to escape
 * @returns {string} HTML-safe string
 */
function safeEscape(text) {
    if (typeof escapeHtml === 'function') return escapeHtml(text);
    if (text == null) return '';
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
}

/**
 * Validates and returns a safe image URL, falling back to placeholder.
 * @param {string} url - Image URL to validate
 * @returns {string} Safe image URL
 */
function safeImageUrl(url) {
    if (!url || typeof url !== 'string' || url.trim() === '') return '';
    const trimmed = url.trim();
    if (/[\x00-\x1f\x7f]/.test(trimmed)) return '';
    const t = trimmed.toLowerCase();
    if (t.startsWith('javascript:') || t.startsWith('data:') || t.startsWith('vbscript:') || t.startsWith('blob:')) return '';
    if (/[<>'"`]/.test(trimmed)) return '';
    return trimmed;
}

/**
 * Removes trailing metadata citations such as (R35c), (R8f, iii), (ATP1E) from question stems for display.
 * @param {string} text
 * @returns {string}
 */
function stripTrailingQuestionCitation(text) {
    if (text == null || text === '') return '';
    let s = String(text).trimEnd();
    const re = /\s*\(\s*(?:[Rr]\.?\d+[^)]*|ATP[^)]*)\)\s*$/;
    while (re.test(s)) {
        s = s.replace(re, '').trimEnd();
    }
    return s;
}

/**
 * Puts the rule citation / lead text on its own line with “Why this matters” directly beneath.
 * @param {string} displayText
 * @returns {{ html: string, structured: boolean }}
 */
function formatFeedbackExplanationHtml(displayText) {
    if (displayText == null || displayText === '') {
        return { html: '', structured: false };
    }
    let s = String(displayText);
    s = s.replace(/\.\s+Why this matters:\s*/i, '.\n\nWhy this matters: ');
    const parts = s.split(/\n\nWhy this matters:\s*/);
    if (parts.length === 2) {
        const lead = parts[0].trim();
        const whyBody = parts[1].trim();
        return {
            html:
                `<p class="feedback-explanation-lead">${safeEscape(lead)}</p>` +
                `<p class="feedback-explanation-why"><span class="feedback-explanation-why-label">Why this matters:</span> ${safeEscape(whyBody)}</p>`,
            structured: true
        };
    }
    return { html: safeEscape(s), structured: false };
}

function hasAlignedOptionRationales(question) {
    return (
        question &&
        Array.isArray(question.optionRationales) &&
        Array.isArray(question.options) &&
        question.optionRationales.length === question.options.length
    );
}

/**
 * @param {object} question
 * @param {number|null|undefined} userAnswer
 * @param {boolean} isCorrect
 * @returns {string} HTML (escaped); empty if rationales missing
 */
function buildOptionRationalesFeedbackHtml(question, userAnswer, isCorrect) {
    if (!hasAlignedOptionRationales(question)) return '';
    const rat = question.optionRationales;
    const ci = question.correct;
    const correctText = rat[ci] != null ? String(rat[ci]) : '';
    let html =
        '<div class="feedback-rationale-block"><h4 class="feedback-rationale-heading">Why this is the correct answer</h4>' +
        `<p class="feedback-rationale-body">${safeEscape(correctText)}</p></div>`;
    if (
        !isCorrect &&
        userAnswer !== null &&
        userAnswer !== undefined &&
        !Number.isNaN(userAnswer) &&
        rat[userAnswer] != null
    ) {
        html +=
            '<div class="feedback-rationale-block"><h4 class="feedback-rationale-heading">Why your answer is not correct</h4>' +
            `<p class="feedback-rationale-body">${safeEscape(String(rat[userAnswer]))}</p></div>`;
    }
    return html;
}

const QuizUtils = {
    setupQuizHandlers(callbacks) {
        document.addEventListener('click', (e) => {
            const target = e.target.closest ? e.target.closest('#startQuiz, #submitAnswer, #nextQuestion, #prevQuestion, #retakeQuiz') : null;
            if (!target) return;
            if (target.id === 'startQuiz') callbacks.startQuiz();
            else if (target.id === 'submitAnswer') callbacks.submitAnswer();
            else if (target.id === 'nextQuestion') callbacks.nextQuestion();
            else if (target.id === 'prevQuestion') callbacks.prevQuestion();
            else if (target.id === 'retakeQuiz') location.reload();
        });
    },

    submitAnswer(state, showFeedbackCallback) {
        const selected = document.querySelector('input[name="answer"]:checked');
        
        if (!selected) {
            alert('Please select an answer before submitting.');
            return false;
        }
        
        const val = parseInt(selected.value, 10);
        state.userAnswers[state.currentQuestion] = Number.isNaN(val) ? null : val;
        showFeedbackCallback();
        return true;
    },

    showFeedback(state, options) {
        const question = state.quizQuestions[state.currentQuestion];
        if (!question) return;
        const userAnswer = state.userAnswers[state.currentQuestion];
        const isCorrect = userAnswer === question.correct;
        const expand =
            options && typeof options.expandExplanation === 'function' ? options.expandExplanation : null;

        const feedbackArea = document.getElementById('questionFeedback');
        if (!feedbackArea) return;

        feedbackArea.classList.remove('hidden');

        document.querySelectorAll('.option').forEach((opt) => {
            opt.classList.add('disabled');
            const radio = opt.querySelector('input');
            if (radio) radio.disabled = true;
            const optValue = parseInt(radio?.value, 10);
            if (optValue === question.correct) {
                opt.classList.add('correct');
            } else if (optValue === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        const rationaleHtml = buildOptionRationalesFeedbackHtml(question, userAnswer, isCorrect);
        let bodyHtml = '';
        if (rationaleHtml) {
            bodyHtml = `<div class="feedback-rationale-wrap">${rationaleHtml}</div>`;
        } else {
            const rawExplanation = question.explanation || 'No explanation available.';
            const displayExplanation = expand
                ? expand.length >= 2
                    ? expand(rawExplanation, question)
                    : expand(rawExplanation)
                : rawExplanation;

            const explParts = formatFeedbackExplanationHtml(displayExplanation);
            const explClass =
                'feedback-explanation' + (explParts.structured ? ' feedback-explanation--structured' : '');
            bodyHtml = `<div class="${explClass}">${explParts.html}</div>`;
        }

        feedbackArea.innerHTML = `
            <div class="feedback-title">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
            ${bodyHtml}
        `;
        feedbackArea.className = `question-feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
        
        const submitBtn = document.getElementById('submitAnswer');
        const nextBtn = document.getElementById('nextQuestion');
        if (submitBtn) submitBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');
    },

    nextQuestion(state, loadQuestionCallback, showResultsCallback) {
        if (state.currentQuestion < state.quizQuestions.length - 1) {
            state.currentQuestion++;
            loadQuestionCallback();
        } else {
            showResultsCallback();
        }
    },

    prevQuestion(state, loadQuestionCallback) {
        if (state.currentQuestion > 0) {
            state.currentQuestion--;
            loadQuestionCallback();
        }
    },

    updateProgressBar(state) {
        const progress = ((state.currentQuestion + 1) / state.quizQuestions.length) * 100;
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            const w = Math.min(100, Math.max(0, progress));
            progressFill.setAttribute('width', String(w));
        }
    },

    updateProgressText(state) {
        const currentEl = document.getElementById('currentQuestion');
        if (currentEl) {
            currentEl.textContent = state.currentQuestion + 1;
        }
    },

    renderQuestionHTML(question, optionsHtml, currentIndex, totalCount, renderOpts) {
        const embedHeading = !renderOpts || renderOpts.embedQuestionHeading !== false;
        const questionText = safeEscape(stripTrailingQuestionCitation(question.question || ''));
        const imgUrl = safeImageUrl(question.image);
        const optionsClass = question.optionsFormat === 'images' ? 'options-container options-image-grid' : 'options-container';
        const mid = [
            embedHeading ? `<h3 class="question-text">${questionText}</h3>` : '',
            imgUrl ? `<img src="${safeEscape(imgUrl)}" alt="Quiz reference image" class="question-image question-image--quiz-main" loading="lazy">` : ''
        ].join('');
        return `
            <div class="question-number">Question ${currentIndex + 1} of ${totalCount}</div>
            ${mid}
            <div class="${optionsClass}">${optionsHtml}</div>
        `;
    },

    setupOptionHandlers() {
        document.querySelectorAll('.option').forEach(opt => {
            opt.addEventListener('click', function() {
                if (this.classList.contains('disabled')) return;
                const radio = this.querySelector('input[type="radio"]');
                if (radio?.disabled) return;
                radio.checked = true;
                document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    },

    displayResultsSummary(state, passingPercentage, config) {
        if (!state.quizQuestions?.length) {
            return { correctCount: 0, percentage: 0, passed: false };
        }
        const correctCount = state.userAnswers.filter((answer, index) => 
            answer === state.quizQuestions[index].correct
        ).length;
        
        const percentage = Math.round((correctCount / state.quizQuestions.length) * 100);
        const passed = percentage >= passingPercentage;
        
        const summary = document.getElementById('resultsSummary');
        if (summary) {
            summary.innerHTML = `
                <div class="score-display">${correctCount}/${state.quizQuestions.length}</div>
                <div class="percentage-display">${percentage}%</div>
                <div class="pass-status ${passed ? 'pass' : 'fail'}">${passed ? 'PASSED' : 'FAILED'}</div>
                <p class="quiz-result-passing-line">Passing score: ${passingPercentage}% (${config?.passingCount ?? '-'}/${config?.totalCount ?? '-'} correct)</p>
            `;
        }
        
        return { correctCount, percentage, passed };
    },

    createResultItemHTML(
        question,
        index,
        userAnswer,
        isCorrect,
        showQuestionNumber = false,
        expandExplanation = null
    ) {
        const stem = stripTrailingQuestionCitation(question.question || '');
        const questionText = showQuestionNumber 
            ? `Question ${index + 1}: ${safeEscape(stem)}`
            : safeEscape(stem);
        const formatOption = (opt) => {
            if (opt == null) return 'N/A';
            if (typeof formatQuizOptionForDisplay === 'function') {
                const s = formatQuizOptionForDisplay(opt);
                if (s) return s;
            }
            if (typeof opt === 'object' && opt.letter) return `${opt.letter} - ${opt.phonetic || ''}`;
            return String(opt);
        };
        const userAnswerText = userAnswer !== null && question.options?.[userAnswer] !== undefined
            ? safeEscape(formatOption(question.options[userAnswer])) : 'Not answered';
        const correctAnswerText = safeEscape(formatOption(question.options?.[question.correct]) || 'N/A');
        const imgUrl = safeImageUrl(question.image);
        const rationaleResultHtml = hasAlignedOptionRationales(question)
            ? buildOptionRationalesFeedbackHtml(question, userAnswer, isCorrect)
            : '';
        let explBlock = '';
        if (rationaleResultHtml) {
            explBlock = `<div class="result-rationale-wrap result-bordered-block">${rationaleResultHtml}</div>`;
        } else {
            const rawExpl = question.explanation ? String(question.explanation) : '';
            const explForDisplay =
                rawExpl && typeof expandExplanation === 'function'
                    ? expandExplanation.length >= 2
                        ? expandExplanation(rawExpl, question)
                        : expandExplanation(rawExpl)
                    : rawExpl;
            const explParts = formatFeedbackExplanationHtml(explForDisplay || '');
            explBlock =
                !explParts.html
                    ? ''
                    : `<div class="result-explanation result-bordered-block${explParts.structured ? ' result-explanation--structured' : ' result-explanation--pre'}">
                <strong>Explanation:</strong>${explParts.structured ? '' : ' '}${explParts.html}
            </div>`;
        }
        return `
            <div class="result-question">
                <span class="answer-icon ${isCorrect ? 'correct' : 'incorrect'}" aria-hidden="true">${isCorrect ? 'Correct' : 'Incorrect'}</span>
                <span class="result-question-body">${questionText}</span>
            </div>
            ${imgUrl ? `<img src="${safeEscape(imgUrl)}" alt="Question" class="question-image question-image--result" loading="lazy">` : ''}
            <div class="result-answer user">
                <strong>Your answer:</strong> ${userAnswerText}
            </div>
            <div class="result-answer correct-answer">
                <strong>Correct answer:</strong> ${correctAnswerText}
            </div>
            ${explBlock}
        `;
    },

    /**
     * Fills the results breakdown list used by standard multiple-choice quizzes.
     * @param {HTMLElement|null} breakdownEl
     * @param {object[]} quizQuestions
     * @param {Array<number|null>} userAnswers
     * @param {boolean} showQuestionNumber
     * @param {{ expandExplanation?: (raw: string, question?: object) => string }} [options]
     */
    populateStandardResultsBreakdown(breakdownEl, quizQuestions, userAnswers, showQuestionNumber, options) {
        if (!breakdownEl || !Array.isArray(quizQuestions)) return;
        const expand = options && typeof options.expandExplanation === 'function' ? options.expandExplanation : null;
        breakdownEl.innerHTML = '<h3>Question Review</h3>';
        quizQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            const div = document.createElement('div');
            div.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
            div.innerHTML = QuizUtils.createResultItemHTML(
                question,
                index,
                userAnswer,
                isCorrect,
                showQuestionNumber,
                expand
            );
            breakdownEl.appendChild(div);
            const iconEl = div.querySelector('.answer-icon');
            const questionEl = div.querySelector('.result-question');
            if (!iconEl || !questionEl) return;
        });
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizUtils;
    module.exports.hasAlignedOptionRationales = hasAlignedOptionRationales;
}
