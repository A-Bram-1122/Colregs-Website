/**
 * Flags quiz questions — generated from maritimeFlags (data/review-and-lights-data.js).
 * Loaded when the Signals & Flags quiz needs flag questions.
 * Other topics (lights, shapes) follow this pattern in their own modules.
 */
(function () {
    'use strict';

    const shuffle = (arr) => (typeof shuffleArray === 'function' ? shuffleArray([...arr]) : arr);
    const nameLabel = (f) => `${f.letter} - ${f.phonetic}`;

    function generateFlagQuestions() {
        const flags = typeof maritimeFlags !== 'undefined' ? maritimeFlags : [];
        if (flags.length === 0) return [];

        const basePath = typeof IMAGE_PATHS !== 'undefined' ? IMAGE_PATHS.FLAGS : 'reference/Photos/Flag%20Photo/COLREGS_Flags_AZ_Corrected_ThinBlackBorder_v2';
        const allMeanings = [...new Set(flags.flatMap(f => [f.international, f.nato]))];

        const pickWrongMeanings = (correct, n) => shuffle(allMeanings.filter(m => m !== correct)).slice(0, n);
        const pickWrongFlags = (exclude, n) => shuffle(flags.filter(f => f.letter !== exclude)).slice(0, n);

        function buildMeaningQuestion(flag, questionText, meaning, explanation) {
            const wrong = pickWrongMeanings(meaning, 3);
            const opts = [meaning, ...wrong];
            const order = shuffle(opts.map((_, i) => i));
            return {
                type: 'flags', subType: 'meaning', optionsFormat: 'text',
                question: questionText,
                image: `${basePath}/${flag.letter}.jpg`,
                options: order.map(i => opts[i]),
                correct: order.indexOf(0),
                explanation,
                flagLetter: flag.letter
            };
        }

        const meaningOnly = [];
        for (const flag of flags) {
            const label = nameLabel(flag);
            if (flag.international !== flag.nato) {
                meaningOnly.push(buildMeaningQuestion(flag, 'In International usage, what does this flag mean?', flag.international, `In International usage, ${label} means "${flag.international}".`));
                meaningOnly.push(buildMeaningQuestion(flag, 'In NATO (naval) usage, what does this flag mean?', flag.nato, `In NATO usage, ${label} means "${flag.nato}".`));
            } else {
                meaningOnly.push(buildMeaningQuestion(flag, 'What does this flag mean?', flag.international, `${label} means "${flag.international}".`));
            }
        }

        const identifyFlagPairs = flags.map(flag => {
            const nameOpts = [nameLabel(flag), ...pickWrongFlags(flag.letter, 3).map(nameLabel)];
            const order = shuffle([0, 1, 2, 3]);
            return [
                { type: 'flags', subType: 'identify-flag', optionsFormat: 'text', flagLetter: flag.letter, question: 'What is this flag?', image: `${basePath}/${flag.letter}.jpg`, options: order.map(i => nameOpts[i]), correct: order.indexOf(0), explanation: `This is ${nameLabel(flag)}.` },
                buildMeaningQuestion(flag, 'What does this flag mean?', flag.international, `${nameLabel(flag)} means "${flag.international}".`)
            ];
        });

        const identifyNamePairs = flags.map(flag => {
            const imageOpts = [{ image: `${basePath}/${flag.letter}.jpg`, letter: flag.letter, phonetic: flag.phonetic }, ...pickWrongFlags(flag.letter, 3).map(f => ({ image: `${basePath}/${f.letter}.jpg`, letter: f.letter, phonetic: f.phonetic }))];
            const order = shuffle([0, 1, 2, 3]);
            return [
                { type: 'flags', subType: 'identify-name', optionsFormat: 'images', flagLetter: flag.letter, question: `Which flag is ${flag.letter} - ${flag.phonetic}?`, image: null, options: order.map(i => imageOpts[i]), correct: order.indexOf(0), explanation: `${flag.letter} - ${flag.phonetic} is shown.` },
                buildMeaningQuestion(flag, 'What does this flag mean?', flag.international, `${nameLabel(flag)} means "${flag.international}".`)
            ];
        });

        const pairedQuestions = shuffle([...identifyFlagPairs, ...identifyNamePairs]).flat();
        return [...meaningOnly, ...pairedQuestions].filter(q => q.options?.length);
    }

    function getFlagsQuizQuestions() {
        return generateFlagQuestions();
    }

    if (typeof window !== 'undefined') {
        window.getFlagsQuizQuestions = getFlagsQuizQuestions;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { getFlagsQuizQuestions };
    }
})();
