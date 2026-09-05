/**
 * IALA/Buoys quiz questions — Type 1 (IALA acronym, countries), Type 2 (charts, lateral),
 * Type 3 (buoy purpose/meaning/lights), Type 4 (identify + meaning from photos).
 */
(function () {
    'use strict';

    const shuffle = (arr) => (typeof shuffleArray === 'function' ? shuffleArray([...arr]) : [...arr]);

    const TYPE2_TEXT_QUESTIONS = [
        { question: 'What is the purpose of lateral marks (port and starboard)?', options: ['Indicate the port and starboard sides of the route to be followed', 'Indicate the main or preferred channel at junctions', 'Indicate isolated dangers', 'Indicate safe water all round'], correct: 0, explanation: 'Lateral markers indicate the port and starboard sides of the channel.' },
        { question: 'What do preferred channel markers indicate?', options: ['The main, deeper, or preferred route at channel junctions', 'Port and starboard sides of the channel', 'Isolated dangers of limited extent', 'Traffic separation schemes'], correct: 0, explanation: 'Preferred channel markers are red and green banded buoys at junctions indicating the preferred route.' },
        { question: 'What light rhythm does a normal lateral mark use when fitted?', options: ['Any rhythm other than composite group flashing (2+1)', 'Composite group flashing (2+1) only', 'Uninterrupted (quick) flashes', 'Morse code A'], correct: 0, explanation: 'Normal lateral marks may use any rhythm except (2+1), which is reserved for preferred channel.' },
        { question: 'What light characteristic indicates a preferred channel marker?', options: ['Composite group flashing (2+1)', 'Single long flash', 'Group of two flashes', 'Uninterrupted quick flashes'], correct: 0, explanation: 'Composite group flashing (2+1) indicates a preferred channel marker.' },
        { question: 'How do Region A and Region B differ for lateral marks?', options: ['Colour swap: red/green for port/starboard are reversed', 'Shape differences', 'Light rhythm differences', 'No difference'], correct: 0, explanation: 'Region A: red port, green starboard. Region B: green port, red starboard when entering from seaward.' },
        { question: 'In Region A, what colour marks the port side when entering from seaward?', options: ['Red', 'Green', 'White', 'Yellow'], correct: 0, explanation: 'In Region A, red marks port side and green marks starboard.' },
        { question: 'In Region A, what colour marks the starboard side when entering from seaward?', options: ['Green', 'Red', 'White', 'Yellow'], correct: 0, explanation: 'In Region A, green marks starboard side.' },
        { question: 'In Region B, what colour marks the port side when entering from seaward?', options: ['Green', 'Red', 'White', 'Yellow'], correct: 0, explanation: 'In Region B, green marks port side and red marks starboard.' },
        { question: 'In Region B, what colour marks the starboard side when entering from seaward?', options: ['Red', 'Green', 'White', 'Yellow'], correct: 0, explanation: 'In Region B, red marks starboard side.' },
        { question: 'In Region A, what light colour and rhythm indicates a port preferred channel marker?', options: ['Red (2+1)', 'Green (2+1)', 'White occulting', 'Yellow flashing'], correct: 0, explanation: 'In Region A, red composite (2+1) indicates port preferred.' },
        { question: 'In Region A, what light colour and rhythm indicates a starboard preferred channel marker?', options: ['Green (2+1)', 'Red (2+1)', 'White occulting', 'Yellow flashing'], correct: 0, explanation: 'In Region A, green composite (2+1) indicates starboard preferred.' },
        { question: 'In Region B, what light colour and rhythm indicates a port preferred channel marker?', options: ['Green (2+1)', 'Red (2+1)', 'White occulting', 'Yellow flashing'], correct: 0, explanation: 'In Region B, green composite (2+1) indicates port preferred.' },
        { question: 'In Region B, what light colour and rhythm indicates a starboard preferred channel marker?', options: ['Red (2+1)', 'Green (2+1)', 'White occulting', 'Yellow flashing'], correct: 0, explanation: 'In Region B, red composite (2+1) indicates starboard preferred.' },
        { question: 'What does the top band colour indicate on a preferred channel marker?', options: ['The preferred channel side (red or green band shows which side is preferred)', 'The direction of buoyage', 'The water depth', 'Danger ahead'], correct: 0, explanation: 'The top band colour indicates the preferred channel side — red top = preferred to port, green top = preferred to starboard (in Region A; reversed in B).' },
        { question: 'What are preferred channel markers used for?', options: ['Channel junctions to indicate the main, deeper, or preferred route', 'Marking the port and starboard sides of a single channel', 'Marking isolated dangers', 'Indicating safe water all round'], correct: 0, explanation: 'Preferred channel markers are red and green banded buoys at channel junctions indicating the preferred route.' },
        { question: 'Lateral markers are used in conjunction with what?', options: ['A conventional direction of buoyage', 'The compass direction', 'The depth of water', 'Traffic separation schemes only'], correct: 0, explanation: 'Lateral markers indicate port and starboard relative to a conventional direction of buoyage (usually entering from seaward).' }
    ];

    const TYPE2_IMAGE_QUESTIONS = [
        { file: 'Lateral-Marker-Port-Region-A.png', question: 'Which side does this lateral mark indicate?', options: ['Port side', 'Starboard side', 'Preferred channel', 'Safe water'], correct: 0, explanation: 'A red can-shaped buoy in Region A marks the port side.' },
        { file: 'Lateral-Marker-Starboard-Region-A.png', question: 'Which side does this lateral mark indicate?', options: ['Starboard side', 'Port side', 'Preferred channel', 'Safe water'], correct: 0, explanation: 'A green conical buoy in Region A marks the starboard side.' },
        { file: 'Lateral-Marker-Port-Region-B.png', question: 'Which IALA region is this lateral mark from?', options: ['Region B', 'Region A', 'Both regions', 'Neither'], correct: 0, explanation: 'Green marks port in Region B; in Region A, red marks port.' },
        { file: 'Lateral-Marker-Starboard-Region-B.png', question: 'Which IALA region is this lateral mark from?', options: ['Region B', 'Region A', 'Both regions', 'Neither'], correct: 0, explanation: 'Red marks starboard in Region B; in Region A, green marks starboard.' },
        { file: 'Lateral-Marker-Port-Perferred-Region-A.png', question: 'What type of marker is this?', options: ['Preferred channel (port preferred, Region A)', 'Lateral port mark', 'Safe water mark', 'Cardinal mark'], correct: 0, explanation: 'Red and green horizontal bands with red on top indicates port preferred in Region A.' }
    ];

    function loadBuoysData() {
        if (typeof BUOY_TYPES !== 'undefined') {
            return {
                buoys: BUOY_TYPES,
                buoysById: BUOY_TYPES_BY_ID ?? Object.fromEntries(BUOY_TYPES.map((b) => [b.id, b]))
            };
        }
        if (typeof require === 'function') {
            const data = require('../data/iala-buoys-data.js');
            return {
                buoys: data.BUOY_TYPES || [],
                buoysById: data.BUOY_TYPES_BY_ID || Object.fromEntries((data.BUOY_TYPES || []).map((b) => [b.id, b]))
            };
        }
        return { buoys: [], buoysById: {} };
    }

    function loadChartConfig() {
        const basePath = typeof CHART_IMAGE_BASE_PATH !== 'undefined' ? CHART_IMAGE_BASE_PATH : 'reference/Photos/IALA';
        const images = typeof CHART_IMAGES !== 'undefined' ? CHART_IMAGES : [
            { file: 'A region.jpeg', region: 'a' },
            { file: 'B region.jpeg', region: 'b' }
        ];
        return { basePath, images };
    }

    function loadBuoyPhotos() {
        const basePath = typeof BUOY_PHOTO_BASE_PATH !== 'undefined' ? BUOY_PHOTO_BASE_PATH : 'reference/Photos/Bouys';
        const photos = typeof BUOY_PHOTOS !== 'undefined' ? BUOY_PHOTOS : [];
        return { basePath, photos };
    }

    function pickWrong(arr, exclude, count) {
        return shuffle(arr.filter((x) => x !== exclude)).slice(0, count);
    }

    function orderOptions(options) {
        const order = shuffle(options.map((_, i) => i));
        return {
            options: order.map((i) => options[i]),
            correct: order.indexOf(0)
        };
    }

    function buildType1Questions() {
        const acronym = typeof IALA_ACRONYM !== 'undefined' ? IALA_ACRONYM : null;
        const countries = typeof IALA_COUNTRIES !== 'undefined' ? IALA_COUNTRIES : null;
        const out = [];

        if (acronym) {
            const opts = [acronym.correct, ...pickWrong(acronym.wrongOptions, acronym.correct, 3)];
            const ordered = orderOptions(opts);
            out.push({
                type: 'buoys',
                subType: 'acronym',
                optionsFormat: 'text',
                question: acronym.question,
                options: ordered.options,
                correct: ordered.correct,
                explanation: acronym.explanation
            });
        }

        if (countries) {
            countries.regionA.forEach((country) => {
                out.push({
                    type: 'buoys',
                    subType: 'country',
                    optionsFormat: 'text',
                    question: `Which IALA region is ${country} in?`,
                    options: ['Region A', 'Region B'],
                    correct: 0,
                    explanation: `${country} is in IALA Region A.`
                });
            });
            countries.regionB.forEach((country) => {
                out.push({
                    type: 'buoys',
                    subType: 'country',
                    optionsFormat: 'text',
                    question: `Which IALA region is ${country} in?`,
                    options: ['Region A', 'Region B'],
                    correct: 1,
                    explanation: `${country} is in IALA Region B.`
                });
            });
        }

        return out;
    }

    function buildType2Questions() {
        const { basePath: chartBase, images: chartImages } = loadChartConfig();
        const { basePath: buoyBase } = loadBuoyPhotos();
        const out = [];

        chartImages.forEach((img) => {
            const imgBase = img.basePath || chartBase;
            out.push({
                type: 'buoys',
                subType: 'chart-region',
                optionsFormat: 'text',
                question: 'Which IALA region is this chart from?',
                image: `${imgBase}/${img.file}`,
                options: ['Region A', 'Region B'],
                correct: img.region === 'a' ? 0 : 1,
                explanation: img.region === 'a' ? 'Red port / green starboard indicates Region A.' : 'Green port / red starboard indicates Region B.'
            });
        });

        TYPE2_TEXT_QUESTIONS.forEach((q) => {
            out.push({
                type: 'buoys',
                subType: 'lateral',
                optionsFormat: 'text',
                question: q.question,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation
            });
        });

        TYPE2_IMAGE_QUESTIONS.forEach((q) => {
            out.push({
                type: 'buoys',
                subType: 'lateral-image',
                optionsFormat: 'text',
                question: q.question,
                image: `${buoyBase}/${q.file}`,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation
            });
        });

        return out;
    }

    function buildType3Questions() {
        const { buoys } = loadBuoysData();
        if (!buoys.length) return [];

        const purposes = [...new Set(buoys.map((b) => b.purpose))];
        const lightsList = [...new Set(buoys.map((b) => b.lights))];
        const wrongPurposes = ['Indicate starboard side of channel', 'Mark isolated dangers', 'Indicate traffic separation'];
        const wrongMeanings = ['Keep to starboard when entering', 'Danger — do not pass', 'Anchorage permitted'];
        const wrongLights = ['Yellow, any rhythm', 'White, morse A', 'Red, (2+1)'];
        const out = [];

        buoys.forEach((buoy) => {
            const purposeOpts = [buoy.purpose, ...pickWrong([...wrongPurposes, ...purposes.filter((p) => p !== buoy.purpose)], buoy.purpose, 3)];
            const purposeOrdered = orderOptions(purposeOpts);
            out.push({
                type: 'buoys',
                subType: 'purpose',
                optionsFormat: 'text',
                buoyId: buoy.id,
                question: `What is the purpose of ${buoy.name}?`,
                options: purposeOrdered.options,
                correct: purposeOrdered.correct,
                explanation: buoy.purpose
            });

            const meaningOpts = [buoy.purpose, ...pickWrong([...wrongMeanings, ...purposes.filter((p) => p !== buoy.purpose)], buoy.purpose, 3)];
            const meaningOrdered = orderOptions(meaningOpts);
            out.push({
                type: 'buoys',
                subType: 'meaning',
                optionsFormat: 'text',
                buoyId: buoy.id,
                question: `What does a ${buoy.name} indicate to a mariner?`,
                options: meaningOrdered.options,
                correct: meaningOrdered.correct,
                explanation: buoy.purpose
            });

            const lightsOpts = [buoy.lights, ...pickWrong([...wrongLights, ...lightsList.filter((l) => l !== buoy.lights)], buoy.lights, 3)];
            const lightsOrdered = orderOptions(lightsOpts);
            out.push({
                type: 'buoys',
                subType: 'lights',
                optionsFormat: 'text',
                buoyId: buoy.id,
                question: `What light colour/rhythm does ${buoy.name} show?`,
                options: lightsOrdered.options,
                correct: lightsOrdered.correct,
                explanation: buoy.lights
            });
        });

        return out;
    }

    function buildType4Questions() {
        const { buoysById } = loadBuoysData();
        const { basePath, photos } = loadBuoyPhotos();
        const pairs = [];

        photos.forEach((photo) => {
            const buoy = photo.answerBuoyId ? buoysById[photo.answerBuoyId] : null;
            const image = `${basePath}/${photo.file}`;
            const purpose = buoy?.purpose || buoy?.name || 'Indicate where best navigable water lies';

            let identifyQ;
            if (photo.cardinalDirection) {
                const cardinals = ['North', 'East', 'South', 'West'];
                const opts = [photo.cardinalDirection, ...pickWrong(cardinals, photo.cardinalDirection, 3)];
                const ordered = orderOptions(opts);
                identifyQ = {
                    type: 'buoys',
                    subType: 'identify-cardinal',
                    optionsFormat: 'text',
                    buoyId: photo.answerBuoyId,
                    question: 'Which cardinal mark is this?',
                    image,
                    options: ordered.options,
                    correct: ordered.correct,
                    explanation: `This is a ${buoy?.name || photo.cardinalDirection + ' cardinal'} buoy.`
                };
            } else {
                const names = Object.values(buoysById || {}).map((b) => b.name);
                const wrongNames = ['Lateral mark (port)', 'Cardinal North', 'Safe water mark'];
                const nameOpts = [buoy?.name || 'Unknown', ...pickWrong([...wrongNames, ...names.filter((n) => n !== buoy?.name)], buoy?.name, 3)];
                const nameOrdered = orderOptions(nameOpts);
                identifyQ = {
                    type: 'buoys',
                    subType: 'identify',
                    optionsFormat: 'text',
                    buoyId: photo.answerBuoyId,
                    question: 'What type of buoy is this?',
                    image,
                    options: nameOrdered.options,
                    correct: nameOrdered.correct,
                    explanation: `This is ${buoy?.name || 'this buoy type'}.`
                };
            }

            const wrongPurposes = ['Port side of channel', 'Preferred route', 'Isolated danger'];
            const meaningOpts = [purpose, ...pickWrong(wrongPurposes, purpose, 3)];
            const meaningOrdered = orderOptions(meaningOpts);
            const meaningQ = {
                type: 'buoys',
                subType: 'buoy-meaning',
                optionsFormat: 'text',
                buoyId: photo.answerBuoyId,
                question: 'What does this buoy indicate?',
                image,
                options: meaningOrdered.options,
                correct: meaningOrdered.correct,
                explanation: purpose
            };

            pairs.push([identifyQ, meaningQ]);
        });

        return shuffle(pairs).flat();
    }

    function generateBuoysQuestions() {
        const t1 = buildType1Questions();
        const t2 = buildType2Questions();
        const t3 = shuffle(buildType3Questions());
        const t4 = buildType4Questions();

        return [...shuffle(t1), ...shuffle(t2), ...t3, ...t4].filter((q) => q.options?.length);
    }

    function getBuoysQuizQuestions() {
        return generateBuoysQuestions();
    }

    if (typeof window !== 'undefined') {
        window.getBuoysQuizQuestions = getBuoysQuizQuestions;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { getBuoysQuizQuestions };
    }
})();
