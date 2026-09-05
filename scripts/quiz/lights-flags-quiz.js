/**
 * Signals, Flags & Day Shapes Quiz — orchestrates quiz UI and loads question sets when needed.
 */

function getQuizQuestions() {
    const banks = [];
    if (typeof getLightsQuizQuestions === 'function') {
        banks.push(getLightsQuizQuestions());
    }
    if (typeof getFlagsQuizQuestions === 'function') {
        banks.push(getFlagsQuizQuestions());
    }
    if (typeof getDayShapesQuizQuestions === 'function') {
        banks.push(getDayShapesQuizQuestions());
    }
    if (typeof getBuoysQuizQuestions === 'function') {
        banks.push(getBuoysQuizQuestions());
    }
    return banks.flat().filter(Boolean);
}

function arePairedQuestions(q1, q2) {
    if (!q1 || !q2) return false;

    const isFlagPair = q2.subType === 'meaning'
        && (q1.subType === 'identify-flag' || q1.subType === 'identify-name')
        && q1.flagLetter
        && q1.flagLetter === q2.flagLetter;

    const isShapePair = q2.subType === 'meaning'
        && q1.subType === 'identify-shape'
        && q1.shapeId
        && q1.shapeId === q2.shapeId;

    const isBuoyPair = q2.subType === 'buoy-meaning'
        && (q1.subType === 'identify' || q1.subType === 'identify-cardinal')
        && q1.buoyId
        && q1.buoyId === q2.buoyId;

    const isLightsPair = q2.subType === 'meaning'
        && q1.subType === 'identify-lights'
        && q1.lightId
        && q1.lightId === q2.lightId;

    return isFlagPair || isShapePair || isBuoyPair || isLightsPair;
}

function normaliseTopicToken(token) {
    const value = String(token || '').trim().toLowerCase();
    if (value === 'flag') return 'flags';
    if (value === 'light') return 'lights';
    if (value === 'shape' || value === 'day shape') return 'shapes';
    if (value === 'buoy' || value === 'iala buoy') return 'buoys';
    return value;
}

function safeEscapeAttr(text) {
    if (typeof escapeAttr === 'function') return escapeAttr(text);
    if (typeof text === 'undefined' || text === null) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

let currentQuestion = 0;
let userAnswers = [];
let quizQuestions = [];

const quizState = {
    get currentQuestion() { return currentQuestion; },
    set currentQuestion(val) { currentQuestion = val; },
    get userAnswers() { return userAnswers; },
    get quizQuestions() { return quizQuestions; }
};

if (typeof document !== 'undefined') {
    function initLightsQuiz() {
        if (typeof QuizUtils !== 'undefined') {
            QuizUtils.setupQuizHandlers({
                startQuiz,
                submitAnswer,
                nextQuestion,
                prevQuestion
            });
        }
        document.addEventListener('change', (e) => {
            const input = e.target;
            if (input.name !== 'quizTopic' || input.type !== 'checkbox') return;
            if (document.querySelectorAll('input[name="quizTopic"]:checked').length === 0) {
                input.checked = true;
            }
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightsQuiz);
    } else {
        initLightsQuiz();
    }
}

function startQuiz() {
    try {
        const availableQuestions = getQuizQuestions();
        if (!availableQuestions || availableQuestions.length === 0) {
            alert('Error: Quiz questions not loaded. Please refresh the page.');
            return;
        }
        if (typeof shuffleArray !== 'function') {
            alert('Error: Quiz dependencies not loaded. Please refresh the page.');
            return;
        }
        const selectedTopics = Array.from(
            document.querySelectorAll('input[name="quizTopic"]:checked'),
            (el) => normaliseTopicToken(el.dataset.topic || el.value || el.id || '')
        ).filter(Boolean);
        const filtered = availableQuestions.filter((q) => selectedTopics.includes(normaliseTopicToken(q.type || q.topic || q.category || '')));
        if (filtered.length === 0) {
            alert('No questions available for the selected topics. Please select at least one topic with questions.');
            return;
        }
        const count = Math.max(1, Math.min(parseInt(document.querySelector('input[name="questionCount"]:checked')?.value || 30, 10) || 30, filtered.length));
        const pairs = [];
        let i = 0;
        while (i < filtered.length) {
            const q1 = filtered[i];
            const q2 = filtered[i + 1];
            if (arePairedQuestions(q1, q2)) {
                pairs.push([q1, q2]);
                i += 2;
            } else {
                pairs.push([q1]);
                i += 1;
            }
        }
        const shuffledPairs = shuffleArray(pairs);
        const flattened = shuffledPairs.flat();
        quizQuestions = flattened.slice(0, count);
        currentQuestion = 0;
        userAnswers = new Array(quizQuestions.length).fill(null);
        document.getElementById('quizIntro').classList.add('hidden');
        document.getElementById('quizContainer').classList.remove('hidden');
        document.getElementById('totalQuestions').textContent = quizQuestions.length;
        loadQuestion();
    } catch (e) {
        alert('Error starting quiz: ' + (e.message || 'Unknown error'));
    }
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    if (!question) return;
    const container = document.getElementById('questionContainer');
    if (!container) return;
    QuizUtils.updateProgressText(quizState);
    QuizUtils.updateProgressBar(quizState);
    let optionsHtml;
    const shuffle = (arr) => (typeof shuffleArray === 'function' ? shuffleArray([...arr]) : arr);
    const order = question._optionOrder || (question._optionOrder = shuffle(question.options.map((_, i) => i)));

    if (question.optionsFormat === 'images' && question.options?.[0]?.image) {
        optionsHtml = order.map((origIndex, displayIndex) => {
            const opt = question.options[origIndex];
            return `<div class="option option-image" data-index="${origIndex}">
                <input type="radio" name="answer" id="option${displayIndex}" value="${origIndex}" ${userAnswers[currentQuestion] === origIndex ? 'checked' : ''}>
                <label for="option${displayIndex}" class="option-label">
                    <img src="${safeEscapeAttr(opt.image)}" alt="Flag ${safeEscapeAttr(opt.letter)}" class="option-flag-img" loading="lazy">
                </label>
            </div>`;
        }).join('');
    } else {
        optionsHtml = order.map((origIndex) => {
            const rawOpt = question.options[origIndex];
            const label = typeof formatQuizOptionForDisplay === 'function'
                ? formatQuizOptionForDisplay(rawOpt) || String(rawOpt)
                : String(rawOpt);
            return `
            <div class="option" data-index="${origIndex}">
                <input type="radio" name="answer" id="option${origIndex}" value="${origIndex}" ${userAnswers[currentQuestion] === origIndex ? 'checked' : ''}>
                <label for="option${origIndex}" class="option-label">${safeEscape(label)}</label>
            </div>
        `;
        }).join('');
    }
    container.innerHTML = QuizUtils.renderQuestionHTML(question, optionsHtml, currentQuestion, quizQuestions.length);
    QuizUtils.setupOptionHandlers();
    document.getElementById('prevQuestion').disabled = currentQuestion === 0;
    document.getElementById('questionFeedback').classList.add('hidden');
    document.getElementById('submitAnswer').classList.remove('hidden');
    document.getElementById('nextQuestion').classList.add('hidden');
    if (userAnswers[currentQuestion] !== null) {
        showFeedback();
    }
}

function submitAnswer() {
    QuizUtils.submitAnswer(quizState, showFeedback);
}

function showFeedback() {
    QuizUtils.showFeedback(quizState);
}

function nextQuestion() {
    QuizUtils.nextQuestion(quizState, loadQuestion, showResults);
}

function prevQuestion() {
    QuizUtils.prevQuestion(quizState, loadQuestion);
}

function showResults() {
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');

    const totalCount = quizQuestions.length;
    const passingCount = Math.ceil(totalCount * 0.7);
    const { correctCount } = QuizUtils.displayResultsSummary(quizState, 70, {
        passingCount,
        totalCount
    });

    const breakdown = document.getElementById('resultsBreakdown');
    QuizUtils.populateStandardResultsBreakdown(breakdown, quizQuestions, userAnswers, true);

    const structuredQuestions = quizQuestions.map((q, i) => ({
        question: q.question,
        correct: userAnswers[i] === q.correct,
        userAnswer: userAnswers[i],
        correctAnswer: q.correct,
        options: q.options,
        type: q.type
    }));
    saveExamResult('lights-flags', correctCount, quizQuestions.length, structuredQuestions);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getQuizQuestions };
}
