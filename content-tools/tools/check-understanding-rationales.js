'use strict';
const { understandingQuestions } = require('../../scripts/data/understanding-quiz-data.js');
let bad = 0;
for (const q of understandingQuestions) {
    if (!Array.isArray(q.options) || q.options.length !== 4) {
        console.error('Bad options:', q.id);
        bad++;
    }
}
if (bad) process.exit(1);
console.log('OK:', understandingQuestions.length, 'questions (4 options each; rationales from understanding-quiz.js)');
