/**
 * Understanding quiz bridge — same role as lights-quiz-questions.js: exposes the bank for the quiz page and statistics.
 * Raw data lives in scripts/data/understanding-quiz-data.js (loaded before this script in the browser).
 */
(function () {
    'use strict';

    function loadUnderstandingBank() {
        if (typeof window !== 'undefined' && Array.isArray(window.understandingQuestions)) {
            return window.understandingQuestions;
        }
        if (typeof understandingQuestions !== 'undefined' && Array.isArray(understandingQuestions)) {
            return understandingQuestions;
        }
        if (typeof require === 'function') {
            try {
                const m = require('../data/understanding-quiz-data.js');
                return m.understandingQuestions || [];
            } catch {
                return [];
            }
        }
        return [];
    }

    function getUnderstandingQuizQuestions() {
        return loadUnderstandingBank();
    }

    const bank = loadUnderstandingBank();

    if (typeof window !== 'undefined') {
        window.getUnderstandingQuizQuestions = getUnderstandingQuizQuestions;
        if (typeof window.understandingQuestions === 'undefined' || !Array.isArray(window.understandingQuestions)) {
            window.understandingQuestions = bank;
        }
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { getUnderstandingQuizQuestions, loadUnderstandingBank };
    }
})();
