(function () {
    'use strict';

    const FALLBACK_SHIP_PHOTO_BASE_PATH = 'reference/Photos/Quiz%20day%20shapes';
    const DEFAULT_SHIP_PHOTO_QUESTION = 'What type of vessel (status) is indicated by this day shape?';

    const SHIP_PHOTO_PROMPTS = Object.freeze({
        two_balls: 'What type of vessel (status) is indicated by this day shape?',
        three_balls_triangle: 'What type of vessel is displaying this day shape?',
        three_balls_vertical: 'What type of vessel (status) is indicated by this day shape?',
        two_diamonds: 'What does this day shape indicate when the length of tow exceeds 200m?'
    });

    const shuffle = (arr) => (typeof shuffleArray === 'function' ? shuffleArray([...arr]) : [...arr]);

    function loadDayShapesData() {
        if (typeof DAY_SHAPES_DATA !== 'undefined') {
            return {
                shapes: DAY_SHAPES_DATA,
                shapesById: typeof DAY_SHAPES_BY_ID !== 'undefined'
                    ? DAY_SHAPES_BY_ID
                    : Object.fromEntries(DAY_SHAPES_DATA.map((shape) => [shape.id, shape]))
            };
        }
        if (typeof require === 'function') {
            const data = require('../data/day-shapes-data.js');
            return {
                shapes: data.DAY_SHAPES_DATA || [],
                shapesById: data.DAY_SHAPES_BY_ID || Object.fromEntries((data.DAY_SHAPES_DATA || []).map((shape) => [shape.id, shape]))
            };
        }
        return { shapes: [], shapesById: {} };
    }

    function loadShipPhotoConfig() {
        if (typeof DAY_SHAPE_SHIP_PHOTOS !== 'undefined' || typeof DAY_SHAPE_SHIP_PHOTO_BASE_PATH !== 'undefined') {
            return {
                photos: typeof DAY_SHAPE_SHIP_PHOTOS !== 'undefined' ? DAY_SHAPE_SHIP_PHOTOS : [],
                basePath: typeof DAY_SHAPE_SHIP_PHOTO_BASE_PATH !== 'undefined'
                    ? DAY_SHAPE_SHIP_PHOTO_BASE_PATH
                    : FALLBACK_SHIP_PHOTO_BASE_PATH
            };
        }
        if (typeof require === 'function') {
            const config = require('../data/day-shapes-ship-photos.js');
            return {
                photos: config.DAY_SHAPE_SHIP_PHOTOS || [],
                basePath: config.DAY_SHAPE_SHIP_PHOTO_BASE_PATH || FALLBACK_SHIP_PHOTO_BASE_PATH
            };
        }
        return {
            photos: [],
            basePath: FALLBACK_SHIP_PHOTO_BASE_PATH
        };
    }

    function pickWrongShapes(shapes, excludeId, count) {
        return shuffle(shapes.filter((shape) => shape.id !== excludeId)).slice(0, count);
    }

    function pickWrongMeanings(meanings, correctMeaning, count) {
        return shuffle(meanings.filter((meaning) => meaning !== correctMeaning)).slice(0, count);
    }

    function orderOptions(options) {
        const order = shuffle(options.map((_, index) => index));
        return {
            options: order.map((index) => options[index]),
            correct: order.indexOf(0)
        };
    }

    function buildMeaningExplanation(shape) {
        return `${shape.name} indicates ${shape.meaning.toLowerCase()} (${shape.ruleRef}).`;
    }

    function buildIdentifyQuestion(shape, shapes) {
        const optionCount = Math.min(3, Math.max(0, shapes.length - 1));
        const options = [shape.name, ...pickWrongShapes(shapes, shape.id, optionCount).map((item) => item.name)];
        const ordered = orderOptions(options);

        return {
            type: 'shapes',
            subType: 'identify-shape',
            optionsFormat: 'text',
            shapeId: shape.id,
            question: 'What day shape is this?',
            image: shape.image,
            options: ordered.options,
            correct: ordered.correct,
            explanation: `This day shape is ${shape.name}.`
        };
    }

    function buildMeaningQuestion(shape, meanings) {
        const optionCount = Math.min(3, Math.max(0, meanings.length - 1));
        const options = [shape.meaning, ...pickWrongMeanings(meanings, shape.meaning, optionCount)];
        const ordered = orderOptions(options);

        return {
            type: 'shapes',
            subType: 'meaning',
            optionsFormat: 'text',
            shapeId: shape.id,
            question: 'What does this day shape indicate?',
            image: shape.image,
            options: ordered.options,
            correct: ordered.correct,
            explanation: buildMeaningExplanation(shape)
        };
    }

    function normaliseShipPhotos(photos, shapesById, basePath) {
        if (!Array.isArray(photos) || photos.length === 0) {
            return [];
        }

        return photos.map((photo) => {
            if (!photo || !photo.file) {
                return null;
            }

            const sourceShape = shapesById[photo.sourceShapeId || photo.shapeId] || null;
            const sourceDerivedAnswerId = sourceShape?.mainStatusShapeId || sourceShape?.id || null;
            const answerShapeId = photo.answerShapeId || sourceDerivedAnswerId || photo.shapeId;
            const answerShape = answerShapeId ? shapesById[answerShapeId] : null;
            if (!answerShape) {
                return null;
            }

            return {
                ...photo,
                sourceShape,
                answerShape,
                image: `${basePath}/${photo.file}`
            };
        }).filter(Boolean);
    }

    function buildShipPhotoExplanation(photo) {
        const { answerShape, sourceShape } = photo;
        if (sourceShape && sourceShape.id !== answerShape.id) {
            return `The vessel's main day-shape status is ${answerShape.name}, which indicates ${answerShape.meaning.toLowerCase()} (${answerShape.ruleRef}). The full composite arrangement shown is ${sourceShape.name}.`;
        }
        return buildMeaningExplanation(answerShape);
    }

    function buildShipPhotoQuestion(photo, answerableShapes) {
        const answerShape = photo.answerShape;
        const optionCount = Math.min(3, Math.max(0, answerableShapes.length - 1));
        const options = [answerShape.meaning, ...pickWrongShapes(answerableShapes, answerShape.id, optionCount).map((item) => item.meaning)];
        const ordered = orderOptions(options);

        return {
            type: 'shapes',
            subType: 'identify-ship',
            optionsFormat: 'text',
            shapeId: answerShape.id,
            sourceShapeId: photo.sourceShape?.id || null,
            question: photo.prompt || SHIP_PHOTO_PROMPTS[answerShape.id] || DEFAULT_SHIP_PHOTO_QUESTION,
            image: photo.image,
            options: ordered.options,
            correct: ordered.correct,
            explanation: buildShipPhotoExplanation(photo)
        };
    }

    function generateDayShapesQuestions() {
        const { shapes, shapesById } = loadDayShapesData();
        if (!Array.isArray(shapes) || shapes.length === 0) {
            return [];
        }

        const meanings = [...new Set(shapes.map((shape) => shape.meaning))];
        const shipPhotoAnswerShapes = shapes.filter((shape) => !shape.mainStatusShapeId);
        const typeOneQuestions = shuffle(
            shapes.map((shape) => [
                buildIdentifyQuestion(shape, shapes),
                buildMeaningQuestion(shape, meanings)
            ])
        ).flat();

        const { photos, basePath } = loadShipPhotoConfig();
        const typeTwoQuestions = shuffle(
            normaliseShipPhotos(photos, shapesById, basePath).map((photo) => buildShipPhotoQuestion(photo, shipPhotoAnswerShapes))
        );

        return [...typeOneQuestions, ...typeTwoQuestions].filter((question) => question.options?.length);
    }

    function getDayShapesQuizQuestions() {
        return generateDayShapesQuestions();
    }

    if (typeof window !== 'undefined') {
        window.getDayShapesQuizQuestions = getDayShapesQuizQuestions;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { getDayShapesQuizQuestions };
    }
})();
