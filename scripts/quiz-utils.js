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
    const t = url.trim().toLowerCase();
    if (t.startsWith('javascript:') || t.startsWith('data:') || t.startsWith('vbscript:')) return '';
    return url;
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

    showFeedback(state) {
        const question = state.quizQuestions[state.currentQuestion];
        if (!question) return;
        const userAnswer = state.userAnswers[state.currentQuestion];
        const isCorrect = userAnswer === question.correct;
        
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
        
        feedbackArea.innerHTML = `
            <div class="feedback-title">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
            <div class="feedback-explanation">${safeEscape(question.explanation || 'No explanation available.')}</div>
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

    renderQuestionHTML(question, optionsHtml, currentIndex, totalCount) {
        const scenario = question.scenario ? safeEscape(question.scenario) : '';
        const questionText = safeEscape(question.question || '');
        const imgUrl = safeImageUrl(question.image);
        const mid = [
            scenario ? `<div class="question-scenario">${scenario}</div>` : '',
            `<h3 class="question-text">${questionText}</h3>`,
            imgUrl ? `<img src="${safeEscape(imgUrl)}" alt="Flag or diagram" class="question-image question-image--quiz-main" loading="lazy">` : ''
        ].join('');
        return `
            <div class="question-number">Question ${currentIndex + 1} of ${totalCount}</div>
            ${mid}
            <div class="options-container">${optionsHtml}</div>
        `;
    },

    setupOptionHandlers() {
        document.querySelectorAll('.option').forEach(opt => {
            opt.addEventListener('click', function() {
                const radio = this.querySelector('input[type="radio"]');
                radio.checked = true;
                document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    },

    buildStructuredQuestions(state, additionalFields = {}) {
        return state.quizQuestions.map((question, index) => {
            const userAnswer = state.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            return {
                question: question.question,
                correct: isCorrect,
                userAnswer: userAnswer,
                correctAnswer: question.correct,
                ...additionalFields
            };
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

    createResultItemHTML(question, index, userAnswer, isCorrect, showQuestionNumber = false) {
        const questionText = showQuestionNumber 
            ? `Question ${index + 1}: ${safeEscape(question.question || '')}`
            : safeEscape(question.question || '');
        const userAnswerText = userAnswer !== null && question.options?.[userAnswer] !== undefined
            ? safeEscape(question.options[userAnswer]) : 'Not answered';
        const correctAnswerText = safeEscape(question.options?.[question.correct] || 'N/A');
        const imgUrl = safeImageUrl(question.image);
        const explanation = question.explanation ? safeEscape(question.explanation) : '';
        return `
            <div class="result-question">
                <span class="answer-icon ${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? 'Correct' : 'Incorrect'}</span>
                ${questionText}
            </div>
            ${imgUrl ? `<img src="${safeEscape(imgUrl)}" alt="Question" class="question-image question-image--result" loading="lazy">` : ''}
            <div class="result-answer user">
                <strong>Your answer:</strong> ${userAnswerText}
            </div>
            <div class="result-answer correct-answer">
                <strong>Correct answer:</strong> ${correctAnswerText}
            </div>
            ${explanation ? `<div class="result-bordered-block">
                <strong>Explanation:</strong> ${explanation}
            </div>` : ''}
        `;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizUtils;
}
