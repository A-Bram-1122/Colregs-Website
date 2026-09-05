/**
 * Rules Understanding Quiz — runtime only. Question bank: scripts/data/understanding-quiz-data.js
 * Short feedback lines cite COLREG rules parsed from the stem/options (see buildUnderstandingOptionRationales).
 */
function shuffleQuestionOptions(question) {
    const options = question.options;
    if (!Array.isArray(options) || options.length === 0) {
        return { ...question };
    }
    const tagged = options.map((text, originalIndex) => ({ text, originalIndex }));
    const shuffled = shuffleArray(tagged);
    const rest = { ...question };
    delete rest.optionRationales;
    return {
        ...rest,
        options: shuffled.map((t) => t.text),
        correct: shuffled.findIndex((t) => t.originalIndex === question.correct)
    };
}

function extractRuleRefsFromText(text) {
    const s = String(text || '');
    const found = [];
    const seen = new Set();
    let m;
    const reParen = /\(\s*R\.?\s*(\d+)\s*([a-z])?\s*(?:,\s*[^)]+)?\s*\)/gi;
    while ((m = reParen.exec(s)) !== null) {
        const label = m[2] ? `Rule ${m[1]}(${m[2].toLowerCase()})` : `Rule ${m[1]}`;
        if (!seen.has(label)) {
            seen.add(label);
            found.push(label);
        }
    }
    const reRule = /\bRule\s+(\d+)(?:\(([a-z])\))?/gi;
    while ((m = reRule.exec(s)) !== null) {
        const label = m[2] ? `Rule ${m[1]}(${m[2].toLowerCase()})` : `Rule ${m[1]}`;
        if (!seen.has(label)) {
            seen.add(label);
            found.push(label);
        }
    }
    const annex = s.match(/\bAnnex\s+[IVXLC]+/gi);
    if (annex) {
        for (const a of annex) {
            const ax = a.replace(/\s+/g, ' ');
            if (!seen.has(ax)) {
                seen.add(ax);
                found.push(ax);
            }
        }
    }
    const rePer = /\b(?:per|under)\s+R\.?\s*(\d+)/gi;
    while ((m = rePer.exec(s)) !== null) {
        const label = `Rule ${m[1]}`;
        if (!seen.has(label)) {
            seen.add(label);
            found.push(label);
        }
    }
    return found;
}

function listRuleRefsForQuestion(q) {
    let refs = extractRuleRefsFromText(q.question);
    if (!refs.length) {
        refs = extractRuleRefsFromText([q.question, ...(q.options || [])].join(' '));
    }
    if (!refs.length) refs = inferRulesFromKeywords(q);
    return refs;
}

function inferRulesFromKeywords(q) {
    const t = [q.question, ...(q.options || [])].join(' ').toLowerCase();
    const hits = [];
    const add = (rule) => {
        if (!hits.includes(rule)) hits.push(rule);
    };
    if (/fishing|trawling|nets|long line|two cones|apexes together/i.test(t)) add('Rule 26');
    if (/under sail|sailing vessel|propelled by machinery|black cone|apex down|vessel under sail/i.test(t)) add('Rule 25');
    if (/constrained by draught|\bcbd\b|cylinder day|three\s+all-?round\s+red/i.test(t)) add('Rule 28');
    if (/not under command|\bnuc\b|two\s+all-?round\s+red(?!.*three)/i.test(t)) add('Rule 27');
    if (/restricted in ability|\bram\b|mine clearance|diving operations|underwater operations/i.test(t)) add('Rule 27');
    if (/restricted visibility|thick fog|in fog|radar.*vessel\s+forward/i.test(t)) add('Rule 19');
    if (/narrow channel|fairway|impede|cannot navigate only within/i.test(t)) add('Rule 9');
    if (/overtaking|22\.5|abaft the beam|astern/i.test(t)) add('Rule 13');
    if (/head-?on|meeting.*power/i.test(t)) add('Rule 14');
    if (/crossing(?!.*channel)|on your starboard side.*give way/i.test(t)) add('Rule 15');
    if (/stand-?on|give-?way|appropriate action|rule\s*17/i.test(t)) add('Rule 17');
    if (/early and substantial|keep well clear/i.test(t)) add('Rule 16');
    if (/traffic separation|TSS|traffic lane/i.test(t)) add('Rule 10');
    if (/look-?out|lookout/i.test(t)) add('Rule 5');
    if (/safe speed/i.test(t)) add('Rule 6');
    if (/risk of collision|compass bearing|scanty radar/i.test(t)) add('Rule 7');
    if (/positive.*action|avoid.*succession.*small alterations/i.test(t)) add('Rule 8');
    if (/one short blast|five short|prolonged blast|manoeuvring and warning|rule\s*34/i.test(t)) add('Rule 34');
    if (/fog signal|sound signal.*restricted visibility|rule\s*35/i.test(t)) add('Rule 35');
    if (/navigation lights|sunset|sunrise|carry.*lights|rule\s*20/i.test(t)) add('Rule 20');
    if (/tow|towing|towline|pushing/i.test(t)) add('Rule 24');
    if (/pilot vessel|pilotage duty/i.test(t)) add('Rule 29');
    if (/local rules|harbour master|special rules|rule\s*1\b/i.test(t)) add('Rule 1');
    if (/hierarchy|keep out of the way.*(sailing|fishing|ram)|rule\s*18/i.test(t)) add('Rule 18');
    if (/escape clause|good seamanship|rule\s*2/i.test(t)) add('Rule 2');
    return hits.slice(0, 4);
}

function blurbLookupKey(label) {
    if (!label) return null;
    if (/^Annex\s+/i.test(String(label))) return label.replace(/\s+/g, ' ');
    const m = String(label).match(/^Rule\s+(\d+)/i);
    return m ? `Rule ${m[1]}` : null;
}

function getColregsBlurbs() {
    return (typeof window !== 'undefined' && window.COLREGS_EXPLANATION_RULE_BLURBS) || {};
}

function firstBlurbForRefs(refs, blurbs) {
    const tryRefs = refs.length ? refs : ['Rule 2'];
    for (const lb of tryRefs) {
        const k = blurbLookupKey(lb);
        if (k && blurbs[k]) return { sectionKey: lb, blurbKey: k, text: blurbs[k] };
    }
    if (blurbs['Rule 2']) return { sectionKey: 'Rule 2', blurbKey: 'Rule 2', text: blurbs['Rule 2'] };
    return { sectionKey: '', blurbKey: '', text: '' };
}

function stripLeadingRuleLabel(blurb) {
    return String(blurb || '').replace(/^Rule\s+\d+(?:\([^)]*\))?\s*:\s*/i, '').trim();
}

function shortenText(s, max) {
    if (!s) return '';
    const t = s.trim();
    if (t.length <= max) return t;
    return `${t.slice(0, max - 1).trim()}…`;
}

function formatRuleSectionLine(refs) {
    if (!refs.length) return 'COLREGs (general)';
    if (refs.length === 1) return refs[0];
    if (refs.length === 2) return `${refs[0]}; ${refs[1]}`;
    return `${refs[0]}; ${refs[1]}; …`;
}

function buildUnderstandingOptionRationales(q) {
    const refs = listRuleRefsForQuestion(q);
    const sectionLine = formatRuleSectionLine(refs);
    const blurbs = getColregsBlurbs();
    const { sectionKey, blurbKey, text } = firstBlurbForRefs(refs, blurbs);
    const why = shortenText(stripLeadingRuleLabel(text), 280);
    const cite = sectionKey || blurbKey || 'the cited Rule';
    const c = q.correct;
    const opts = q.options || [];
    return opts.map((_, i) => {
        if (i === c) {
            if (why) {
                return `${sectionLine} — Correct. ${why} (See COLREGs ${blurbKey || cite} for the full rule text.)`;
            }
            return `${sectionLine} — Correct: this matches the requirement in ${cite}.`;
        }
        if (why) {
            return `${sectionLine} — Not correct. ${why} This option does not match that part of the Rule.`;
        }
        return `${sectionLine} — Not correct: does not match the requirement in ${cite}.`;
    });
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

document.addEventListener('DOMContentLoaded', () => {
    QuizUtils.setupQuizHandlers({
        startQuiz,
        submitAnswer,
        nextQuestion,
        prevQuestion
    });
});

function startQuiz() {
    const bank = getUnderstandingBank();
    if (!bank.length) {
        alert('Error: Quiz questions not loaded. Please refresh the page.');
        return;
    }

    const countInput = document.querySelector('input[name="questionCount"]:checked');
    const parsed = parseInt(countInput?.value || '20', 10);
    const safeParsed = Number.isNaN(parsed) ? 20 : parsed;
    const count = Math.max(1, Math.min(safeParsed, bank.length));
    const picked = shuffleArray(
        bank.map((q) => ({
            ...q,
            options: [...q.options]
        }))
    ).slice(0, count);
    quizQuestions = picked.map((q) => {
        const shuffled = shuffleQuestionOptions(q);
        shuffled.optionRationales = buildUnderstandingOptionRationales(shuffled);
        return shuffled;
    });
    currentQuestion = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);

    document.getElementById('quizIntro').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('totalQuestions').textContent = quizQuestions.length;

    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    if (!question) return;
    const container = document.getElementById('questionContainer');
    if (!container) return;
    QuizUtils.updateProgressText(quizState);
    QuizUtils.updateProgressBar(quizState);
    const optionsHtml = question.options.map((option, index) => {
        const label = typeof formatQuizOptionForDisplay === 'function'
            ? formatQuizOptionForDisplay(option) || String(option)
            : String(option);
        return `
        <div class="option" data-index="${index}">
            <input type="radio" name="answer" id="option${index}" value="${index}" 
                ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
            <label for="option${index}" class="option-label">${safeEscape(label)}</label>
        </div>
    `;
    }).join('');
    container.innerHTML = QuizUtils.renderQuestionHTML(question, optionsHtml, currentQuestion, quizQuestions.length, {
        embedQuestionHeading: false
    });
    const headingEl = document.getElementById('questionTextHeading');
    if (headingEl) {
        const qtext = typeof stripTrailingQuestionCitation === 'function'
            ? stripTrailingQuestionCitation(question.question)
            : question.question;
        if (qtext) {
            headingEl.innerHTML = safeEscape(qtext);
            headingEl.hidden = false;
        } else {
            headingEl.textContent = '';
            headingEl.hidden = true;
        }
    }
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
    QuizUtils.showFeedback(quizState, {
        expandExplanation:
            typeof expandUnderstandingQuizExplanation === 'function'
                ? expandUnderstandingQuizExplanation
                : null
    });
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
    const passingCount = Math.ceil(totalCount * 0.8);
    const { correctCount } = QuizUtils.displayResultsSummary(quizState, 80, {
        passingCount,
        totalCount
    });

    const breakdown = document.getElementById('resultsBreakdown');
    QuizUtils.populateStandardResultsBreakdown(breakdown, quizQuestions, userAnswers, false, {
        expandExplanation:
            typeof expandUnderstandingQuizExplanation === 'function'
                ? expandUnderstandingQuizExplanation
                : null
    });

    const structuredQuestions = quizQuestions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        return {
            id: question.id,
            question: question.question,
            correct: isCorrect,
            userAnswer: userAnswer,
            correctAnswer: question.correct,
            options: question.options
        };
    });

    saveExamResult('understanding', correctCount, quizQuestions.length, structuredQuestions);
}
