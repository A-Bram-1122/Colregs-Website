const understandingQuestions = [
    {
        question: 'You are the stand-on vessel in a crossing situation. The give-way vessel is not taking action to avoid collision. What should you do?',
        scenario: 'Two power-driven vessels are crossing. You have the other vessel on your port side, making you the stand-on vessel. As the vessels get closer, you notice the other vessel has not altered course or speed.',
        options: [
            'Continue on course and speed; the other vessel must give way',
            'Take action to avoid collision as soon as it\'s clear the other vessel is not complying',
            'Sound five short blasts and maintain course',
            'Alter course to port immediately'
        ],
        correct: 1,
        explanation: 'Rule 17(a)(ii) allows the stand-on vessel to take action as soon as it becomes apparent the give-way vessel is not taking appropriate action. Waiting until collision is unavoidable would be dangerous.'
    },
    {
        question: 'In restricted visibility, your radar shows a vessel forward of your beam. What course alteration should you avoid?',
        scenario: 'You are proceeding in fog and detect a vessel by radar alone at 45 degrees on your starboard bow. You determine a close-quarters situation is developing.',
        options: [
            'Alteration to starboard',
            'Alteration to port',
            'Either direction is acceptable',
            'No alteration should be made'
        ],
        correct: 1,
        explanation: 'Rule 19(d)(i) states you should avoid altering course to port for a vessel forward of the beam (except when overtaking). This prevents crossing ahead of a vessel you cannot see.'
    },
    {
        question: 'You are overtaking another vessel in a narrow channel. What signals must you sound?',
        scenario: 'Your vessel is catching up to a slower vessel in a narrow channel. The channel is only wide enough for one vessel, so the vessel ahead must take action to permit safe passing.',
        options: [
            'One prolonged blast',
            'Two prolonged blasts followed by one short blast',
            'One short blast',
            'Five short blasts'
        ],
        correct: 1,
        explanation: 'Rule 34(c)(i) requires the overtaking vessel to sound two prolonged blasts followed by one short blast when overtaking on the starboard side in a narrow channel.'
    },
    {
        question: 'Two sailing vessels on different tacks are approaching each other. Which vessel must give way?',
        scenario: 'Sailing vessel A has the wind on the port side. Sailing vessel B has the wind on the starboard side. Risk of collision exists.',
        options: [
            'The vessel to windward',
            'The vessel with wind on port side',
            'The vessel with wind on starboard side',
            'The faster vessel'
        ],
        correct: 1,
        explanation: 'Rule 12(a)(i): When two sailing vessels are on different tacks, the vessel with the wind on the port side keeps out of the way.'
    },
    {
        question: 'What is the primary factor in determining safe speed?',
        scenario: 'Your vessel is proceeding at night in moderate traffic with good visibility. You need to determine an appropriate safe speed.',
        options: [
            'The maximum speed your vessel can achieve',
            'The speed that allows you to stop within half the distance of visibility',
            'The speed allowing proper action to avoid collision and stop within appropriate distance',
            'The speed limit posted for the area'
        ],
        correct: 2,
        explanation: 'Rule 6 defines safe speed as allowing the vessel to take proper action to avoid collision and be stopped within a distance appropriate to prevailing circumstances.'
    },
    {
        question: 'You hear one prolonged blast ahead in fog. What does this signal mean?',
        scenario: 'You are navigating in restricted visibility and hear one prolonged blast from a vessel apparently ahead of you.',
        options: [
            'Power-driven vessel making way',
            'Power-driven vessel underway but stopped',
            'Vessel at anchor',
            'Vessel aground'
        ],
        correct: 0,
        explanation: 'One prolonged blast at intervals of not more than 2 minutes indicates a power-driven vessel making way through the water in restricted visibility.'
    },
    {
        question: 'In a head-on situation between two power-driven vessels, what action should both vessels take?',
        scenario: 'Two power-driven vessels are meeting on reciprocal courses. Both vessels can see each other\'s masthead lights in a line and both sidelights.',
        options: [
            'Both alter course to port',
            'Both alter course to starboard',
            'The faster vessel gives way',
            'The smaller vessel gives way'
        ],
        correct: 1,
        explanation: 'Rule 14 requires both vessels in a head-on situation to alter course to starboard so they pass port-to-port.'
    },
    {
        question: 'A vessel constrained by her draught is approaching. What is your responsibility?',
        scenario: 'You are a power-driven vessel and see ahead a vessel displaying the signals for a vessel constrained by draught (three red lights in vertical line).',
        options: [
            'You must keep out of the way',
            'She must keep out of your way',
            'You should avoid impeding her safe passage if circumstances admit',
            'Neither vessel has priority'
        ],
        correct: 2,
        explanation: 'Rule 18(d) states vessels should, if circumstances admit, avoid impeding the safe passage of a vessel constrained by draught. However, this doesn\'t override other rules completely.'
    },
    {
        question: 'When is a vessel considered to be overtaking another?',
        scenario: 'Your vessel is approaching another vessel. You need to determine if you are overtaking.',
        options: [
            'When coming up from any direction astern',
            'When coming up from more than 22.5 degrees abaft her beam',
            'When traveling faster than the other vessel',
            'When within one mile of the vessel ahead'
        ],
        correct: 1,
        explanation: 'Rule 13(b) defines overtaking as approaching from a direction more than 22.5 degrees abaft the beam (where at night you would see only the stern light).'
    },
    {
        question: 'What lights does a vessel engaged in trawling display?',
        scenario: 'You need to identify a vessel engaged in trawling at night.',
        options: [
            'Red over white',
            'Green over white',
            'White over red',
            'Two red lights'
        ],
        correct: 1,
        explanation: 'Rule 26 requires a vessel engaged in trawling to display a green light over a white light, plus sidelights and stern light when making way.'
    },
    {
        question: 'In a traffic separation scheme, when may you cross a separation zone?',
        scenario: 'You are navigating near a traffic separation scheme and need to cross a separation zone.',
        options: [
            'Never',
            'Only in emergency to avoid immediate danger or when fishing',
            'Whenever convenient',
            'Only with permission from port authority'
        ],
        correct: 1,
        explanation: 'Rule 10(e) prohibits entering a separation zone except in emergency to avoid immediate danger or to engage in fishing within the zone.'
    },
    {
        question: 'What is your primary duty when you detect another vessel by radar in restricted visibility?',
        scenario: 'You are in fog and detect a vessel by radar alone. The vessel appears to be on a collision course.',
        options: [
            'Sound five short blasts',
            'Determine if risk of collision exists and take avoiding action in ample time',
            'Maintain course and speed',
            'Alter course to port'
        ],
        correct: 1,
        explanation: 'Rule 19(d) requires determining if a close-quarters situation or risk of collision exists and taking avoiding action in ample time.'
    },
    {
        question: 'A power-driven vessel and a sailing vessel are approaching. Who has right of way?',
        scenario: 'Your power-driven vessel is approaching a sailing vessel. Both vessels are in open water (not in a narrow channel or traffic scheme), and both are making way.',
        options: [
            'Power-driven vessel',
            'Sailing vessel',
            'The larger vessel',
            'The vessel to starboard'
        ],
        correct: 1,
        explanation: 'Rule 18(a)(iv) requires power-driven vessels to keep out of the way of sailing vessels (except in narrow channels, traffic schemes, and overtaking situations).'
    },
    {
        question: 'What does the compass bearing of an approaching vessel tell you about collision risk?',
        scenario: 'You are observing an approaching vessel and taking regular compass bearings.',
        options: [
            'If the bearing changes, risk of collision exists',
            'If the bearing does not change appreciably, risk of collision should be deemed to exist',
            'Bearing has no relation to collision risk',
            'Only radar can determine collision risk'
        ],
        correct: 1,
        explanation: 'Rule 7(d)(i) states that risk of collision shall be deemed to exist if the compass bearing of an approaching vessel does not appreciably change.'
    },
    {
        question: 'In a narrow channel, where should a vessel keep?',
        scenario: 'Your vessel is proceeding along a narrow channel.',
        options: [
            'In the center of the channel',
            'As near to the outer limit on the starboard side as is safe and practicable',
            'As near to the outer limit on the port side as is safe and practicable',
            'Wherever is most convenient'
        ],
        correct: 1,
        explanation: 'Rule 9(a) requires vessels to keep as near to the outer limit of the channel on their starboard side as is safe and practicable.'
    },
    {
        question: 'Two power-driven vessels are crossing. Which vessel is the give-way vessel?',
        scenario: 'Two power-driven vessels are crossing with risk of collision. Vessel A has Vessel B on her starboard side. Vessel B has Vessel A on her port side.',
        options: [
            'Vessel A must give way',
            'Vessel B must give way',
            'Both must alter to starboard',
            'The faster vessel gives way'
        ],
        correct: 0,
        explanation: 'Rule 15 states the vessel which has the other on her starboard side must keep out of the way. Vessel A has B on starboard, so A gives way.'
    },
    {
        question: 'What action should the give-way vessel take?',
        scenario: 'You are the give-way vessel in a crossing situation with another power-driven vessel.',
        options: [
            'Take small successive alterations of course',
            'Wait until close quarters and then take action',
            'Take early and substantial action to keep well clear',
            'Sound five short blasts and maintain course'
        ],
        correct: 2,
        explanation: 'Rule 16 requires the give-way vessel to take early and substantial action to keep well clear.'
    },
    {
        question: 'A vessel displays two red lights in vertical line. What does this indicate?',
        scenario: 'At night, you observe a vessel displaying two red lights in a vertical line.',
        options: [
            'Vessel engaged in fishing',
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel on fire'
        ],
        correct: 1,
        explanation: 'Two red lights in vertical line indicate a vessel not under command - unable to maneuver as required by the rules due to exceptional circumstances.'
    },
    {
        question: 'What is the purpose of maintaining a proper lookout?',
        scenario: 'You are the officer on watch and must maintain a proper lookout.',
        options: [
            'To comply with company policy',
            'To make a full appraisal of the situation and risk of collision',
            'To watch for other vessels only',
            'To navigate the ship'
        ],
        correct: 1,
        explanation: 'Rule 5 requires maintaining a proper lookout by all available means to make a full appraisal of the situation and of the risk of collision.'
    },
    {
        question: 'In restricted visibility, you hear a fog signal forward of your beam. What should you do?',
        scenario: 'You are in fog and hear the fog signal of another vessel apparently forward of your beam.',
        options: [
            'Maintain course and speed',
            'Alter course to port',
            'Reduce speed to minimum or take all way off; navigate with extreme caution',
            'Increase speed to clear the area quickly'
        ],
        correct: 2,
        explanation: 'Rule 19(e) requires reducing speed to minimum or stopping if you hear a fog signal forward of the beam or cannot avoid close quarters. Navigate with extreme caution until danger passes.'
    },
    {
        question: 'When does an overtaking situation end?',
        scenario: 'You have been overtaking another vessel and have altered course several times. The bearing between vessels has changed significantly.',
        options: [
            'When you are alongside the other vessel',
            'When the bearing changes',
            'When you are finally past and clear',
            'After one nautical mile'
        ],
        correct: 2,
        explanation: 'Rule 13(d) states the overtaking vessel remains the give-way vessel until finally past and clear, regardless of subsequent bearing changes.'
    },
    {
        question: 'What does Rule 2 (Responsibility) emphasize?',
        scenario: 'You are following all the COLREGS rules but a special circumstance arises where following the rules might lead to collision.',
        options: [
            'Rules must be followed exactly in all circumstances',
            'Due regard must be had to dangers and special circumstances; departures may be necessary to avoid immediate danger',
            'Rules are only guidelines',
            'The master has complete discretion to ignore rules'
        ],
        correct: 1,
        explanation: 'Rule 2(b) requires due regard to all dangers, special circumstances, and limitations, and allows departures from rules when necessary to avoid immediate danger.'
    },
    {
        question: 'A small sailing vessel is in a narrow channel where a large ship can only navigate. Who has priority?',
        scenario: 'A 15-meter sailing vessel is in a narrow channel. A large vessel that can safely navigate only within the channel is approaching.',
        options: [
            'Sailing vessel has priority per Rule 18',
            'Large vessel has priority per Rule 9',
            'Vessel to starboard has priority',
            'Neither has priority'
        ],
        correct: 1,
        explanation: 'Rule 9(b) requires vessels less than 20m or sailing vessels not to impede vessels which can safely navigate only within narrow channels. This overrides the general Rule 18 hierarchy.'
    },
    {
        question: 'What alterations should be avoided when taking action to avoid collision?',
        scenario: 'You need to take action to avoid collision and are considering course and speed changes.',
        options: [
            'Large alterations',
            'Successive small alterations',
            'Speed alterations',
            'Course alterations'
        ],
        correct: 1,
        explanation: 'Rule 8(b) states that alterations of course and/or speed should be large enough to be readily apparent; a succession of small alterations should be avoided.'
    },
    {
        question: 'At what point should collision avoidance action be taken?',
        scenario: 'You observe a vessel that appears to be on a collision course.',
        options: [
            'When the vessel is very close',
            'Positive action in ample time',
            'Only after receiving a signal from the other vessel',
            'After plotting for 30 minutes'
        ],
        correct: 1,
        explanation: 'Rule 8(a) requires action to avoid collision to be positive and made in ample time, with due regard to good seamanship.'
    },
    {
        question: 'What additional equipment considerations apply to vessels with radar when determining safe speed?',
        scenario: 'Your vessel is equipped with operational radar. You are determining safe speed.',
        options: [
            'No additional factors; radar eliminates the need for safe speed considerations',
            'Characteristics, efficiency, and limitations of radar equipment; small vessel detection limits; more exact visibility assessment',
            'Only the radar range scale in use',
            'Radar allows proceeding at maximum speed'
        ],
        correct: 1,
        explanation: 'Rule 6(b) lists additional factors for radar-equipped vessels including equipment characteristics and limitations, small vessel detection limits, weather effects, and ability to assess visibility more exactly.'
    },
    {
        question: 'How should a vessel navigate when nearing a bend in a narrow channel?',
        scenario: 'Your vessel is approaching a bend in a narrow channel where other vessels may be obscured.',
        options: [
            'Maintain normal speed and course',
            'Sound five short blasts',
            'Navigate with particular alertness and caution; sound one prolonged blast',
            'Stop and wait'
        ],
        correct: 2,
        explanation: 'Rule 9(f) requires navigating with particular alertness and caution near bends or areas where vessels may be obscured, and sounding one prolonged blast.'
    },
    {
        question: 'What is the hierarchy when a power-driven vessel encounters various types of vessels?',
        scenario: 'A power-driven vessel encounters various vessels: a vessel not under command, a fishing vessel, a sailing vessel, and another power-driven vessel.',
        options: [
            'Power-driven vessel has priority over all',
            'Power-driven vessel must give way to: not under command, restricted in maneuverability, fishing, and sailing vessels',
            'All vessels are equal',
            'Largest vessel has priority'
        ],
        correct: 1,
        explanation: 'Rule 18(a) establishes the hierarchy: power-driven vessels must give way to vessels not under command, restricted in maneuverability, engaged in fishing, and sailing vessels.'
    },
    {
        question: 'When crossing a traffic lane, at what angle should you cross?',
        scenario: 'You must cross a traffic lane in a traffic separation scheme.',
        options: [
            'At any convenient angle',
            'At 45 degrees to traffic flow',
            'As nearly as practicable at right angles to the general direction of traffic flow',
            'Parallel to traffic flow'
        ],
        correct: 2,
        explanation: 'Rule 10(c) requires crossing traffic lanes on a heading as nearly as practicable at right angles to the general direction of traffic flow.'
    },
    {
        question: 'What should you assume if there is any doubt about collision risk?',
        scenario: 'You are observing another vessel and are uncertain whether risk of collision exists.',
        options: [
            'Assume no risk exists and continue',
            'Assume risk exists and act accordingly',
            'Wait for more information',
            'Contact the other vessel by radio'
        ],
        correct: 1,
        explanation: 'Rule 7(a) states that if there is any doubt about whether risk of collision exists, such risk shall be deemed to exist, and appropriate action must be taken.'
    }
];

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
    if (!understandingQuestions || understandingQuestions.length === 0) {
        console.error('Error: understandingQuestions not loaded');
        alert('Error: Quiz questions not loaded. Please refresh the page.');
        return;
    }
    
    const countInput = document.querySelector('input[name="questionCount"]:checked');
    const parsed = parseInt(countInput?.value || '20', 10);
    const safeParsed = Number.isNaN(parsed) ? 20 : parsed;
    const count = Math.max(1, Math.min(safeParsed, understandingQuestions.length));
    quizQuestions = shuffleArray(understandingQuestions).slice(0, count);
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
    QuizUtils.updateProgressText(quizState);
    QuizUtils.updateProgressBar(quizState);
    const optionsHtml = question.options.map((option, index) => `
        <div class="option" data-index="${index}">
            <input type="radio" name="answer" id="option${index}" value="${index}" 
                ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
            <label for="option${index}" class="option-label">${escapeHtml(option)}</label>
        </div>
    `).join('');
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
    const passingCount = Math.ceil(totalCount * 0.8);
    const { correctCount } = QuizUtils.displayResultsSummary(quizState, 80, {
        passingCount,
        totalCount
    });
    
    const breakdown = document.getElementById('resultsBreakdown');
    breakdown.innerHTML = '<h3>Question Review</h3>';
    
    const structuredQuestions = quizQuestions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const div = document.createElement('div');
        div.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        div.innerHTML = QuizUtils.createResultItemHTML(question, index, userAnswer, isCorrect, false);
        breakdown.appendChild(div);
        
        return {
            question: question.question,
            correct: isCorrect,
            userAnswer: userAnswer,
            correctAnswer: question.correct,
            options: question.options
        };
    });
    
    saveExamResult('understanding', correctCount, quizQuestions.length, structuredQuestions);
}
