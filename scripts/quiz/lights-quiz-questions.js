(function () {
    'use strict';

    const shuffle = (arr) => (typeof shuffleArray === 'function' ? shuffleArray([...arr]) : arr);

    function loadLightsData() {
        if (typeof LIGHTS_DATA !== 'undefined') return LIGHTS_DATA;
        if (typeof require === 'function') return require('../data/lights-data.js').LIGHTS_DATA || [];
        return [];
    }

    function getDiagramPath(key) {
        if (typeof getLightDiagramPath === 'function') return getLightDiagramPath(key);
        const base = typeof IMAGE_PATHS !== 'undefined' ? IMAGE_PATHS.DIAGRAMS : 'reference/Photos/Light%20Photo';
        return base + '/' + (typeof LIGHT_DIAGRAM_MAP !== 'undefined' && LIGHT_DIAGRAM_MAP[key] ? LIGHT_DIAGRAM_MAP[key] : key + '.jpg');
    }

    function pickWrong(pool, correct, n) {
        return shuffle(pool.filter((x) => x !== correct)).slice(0, n);
    }

    function orderOptions(correct, wrongs) {
        const opts = [correct, ...wrongs].slice(0, 4);
        const order = shuffle(opts.map((_, i) => i));
        return { options: order.map((i) => opts[i]), correct: order.indexOf(0) };
    }

    function buildIdentifyMeaningPairs(vessels) {
        const pairList = [];
        const names = vessels.map((v) => v.name);
        const meanings = vessels.map((v) => v.meaning);

        vessels.forEach((vessel) => {
            Object.keys(vessel.diagramKeys).forEach((viewKey) => {
                const diagramKey = vessel.diagramKeys[viewKey];
                const lightId = vessel.id + '-' + viewKey;

                const { options: nameOpts, correct: nameCorrect } = orderOptions(vessel.name, pickWrong(names, vessel.name, 3));
                const identifyQ = {
                    type: 'lights',
                    subType: 'identify-lights',
                    optionsFormat: 'text',
                    lightId,
                    question: 'What type of vessel is this?',
                    image: getDiagramPath(diagramKey),
                    options: nameOpts,
                    correct: nameCorrect,
                    explanation: `This is a ${vessel.name} (${vessel.ruleRef}).`
                };

                const { options: meaningOpts, correct: meaningCorrect } = orderOptions(vessel.meaning, pickWrong(meanings, vessel.meaning, 3));
                const meaningQ = {
                    type: 'lights',
                    subType: 'meaning',
                    optionsFormat: 'text',
                    lightId,
                    question: 'What does this vessel indicate?',
                    image: getDiagramPath(diagramKey),
                    options: meaningOpts,
                    correct: meaningCorrect,
                    explanation: vessel.meaning
                };

                pairList.push([identifyQ, meaningQ]);
            });
        });

        return shuffle(pairList);
    }

    function buildViewQuestions(vessels) {
        const questions = [];
        const views = ['Front', 'Port', 'Aft'];
        const viewMap = { front: 'Front', port: 'Port', aft: 'Aft' };

        vessels.forEach((vessel) => {
            Object.entries(vessel.diagramKeys).forEach(([viewKey, diagramKey]) => {
                const correctView = viewMap[viewKey] || viewKey;
                const opts = shuffle([...views]);
                questions.push({
                    type: 'lights',
                    subType: 'view',
                    optionsFormat: 'text',
                    question: 'From which direction is this light configuration viewed?',
                    image: getDiagramPath(diagramKey),
                    options: opts,
                    correct: opts.indexOf(correctView),
                    explanation: `This diagram shows the ${vessel.name} from the ${correctView}.`
                });
            });
        });

        return shuffle(questions);
    }

    function buildConfigQuestions(vessels) {
        const allConfigs = vessels.map((v) => v.lightConfig);
        return vessels.map((vessel) => {
            const wrongs = pickWrong(allConfigs, vessel.lightConfig, 3);
            const { options, correct } = orderOptions(vessel.lightConfig, wrongs);
            return {
                type: 'lights',
                subType: 'config',
                optionsFormat: 'text',
                question: `What lights does a ${vessel.name} display?`,
                options,
                correct,
                explanation: vessel.lightConfig
            };
        });
    }

    function getLightsQuizQuestions() {
        const vessels = loadLightsData();
        if (!vessels.length) return [];

        const pairList = buildIdentifyMeaningPairs(vessels);
        const shuffledPairs = shuffle(pairList).flat();

        const viewQ = buildViewQuestions(vessels);
        const configQ = shuffle(buildConfigQuestions(vessels));

        return [...shuffledPairs, ...viewQ, ...configQ].filter((q) => q.options?.length);
    }

    if (typeof window !== 'undefined') {
        window.getLightsQuizQuestions = getLightsQuizQuestions;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { getLightsQuizQuestions };
    }
})();
