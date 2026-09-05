(function () {
    'use strict';

    const FALLBACK_IMAGE_BASE_PATH = 'reference/Photos/Day%20shapes%20reference%20sheet';
    const imagePaths = typeof IMAGE_PATHS !== 'undefined'
        ? IMAGE_PATHS
        : (typeof require === 'function'
            ? require('./review-and-lights-data.js').IMAGE_PATHS
            : { SHAPES: FALLBACK_IMAGE_BASE_PATH });

    const DAY_SHAPE_IMAGE_BASE_PATH = imagePaths.SHAPES || FALLBACK_IMAGE_BASE_PATH;

    const RAW_DAY_SHAPES_DATA = [
        {
            id: 'ball',
            name: 'Ball',
            meaning: 'Vessel at anchor',
            ruleRef: 'Rule 30',
            imageFilename: '01_ball_anchor.jpg'
        },
        {
            id: 'cone',
            name: 'Cone',
            meaning: 'Sailing vessel proceeding under sail and also being propelled by machinery',
            ruleRef: 'Rule 25',
            imageFilename: '02_cone_apex_down.jpg'
        },
        {
            id: 'diamond',
            name: 'Diamond',
            meaning: 'Vessel towing where length of tow exceeds 200 metres',
            ruleRef: 'Rule 24',
            imageFilename: '03_diamond.jpg'
        },
        {
            id: 'two_cones_apex_together',
            name: 'Two Cones Apex Together',
            meaning: 'Vessel engaged in fishing with restricted ability to maneuver',
            ruleRef: 'Rule 26',
            imageFilename: '04_two_cones_apex_together.jpg'
        },
        {
            id: 'cylinder',
            name: 'Cylinder',
            meaning: 'Vessel constrained by her draught',
            ruleRef: 'Rule 28',
            imageFilename: '08_cylinder.jpg'
        },
        {
            id: 'two_balls',
            name: 'Two Balls (Vertical)',
            meaning: 'Vessel not under command',
            ruleRef: 'Rule 27',
            imageFilename: '05_two_balls.jpg'
        },
        {
            id: 'three_balls_triangle',
            name: 'Three Balls (Triangle)',
            meaning: 'Vessel engaged in mine clearance operations',
            ruleRef: 'Rule 27(f)',
            imageFilename: '06_mine_clearance_triangle.jpg'
        },
        {
            id: 'ball_diamond_ball',
            name: 'Ball-Diamond-Ball',
            meaning: 'Vessel restricted in her ability to maneuver',
            ruleRef: 'Rule 27',
            imageFilename: '07_ball_diamond_ball.jpg'
        },
        {
            id: 'three_balls_vertical',
            name: 'Three Balls (Vertical)',
            meaning: 'Vessel aground',
            ruleRef: 'Rule 30(d)',
            imageFilename: '09_three_balls_vertical.jpg'
        },
        {
            id: 'dredging_underwater_ops',
            name: 'Dredging/Underwater Ops',
            meaning: 'Vessel engaged in dredging or underwater operations',
            ruleRef: 'Rule 27(d)',
            imageFilename: '10_dredging_underwater_ops.png',
            mainStatusShapeId: 'ball_diamond_ball'
        },
        {
            id: 'fishing_outlying_gear',
            name: 'Fishing with Outlying Gear',
            meaning: 'Vessel engaged in fishing with gear extending more than 150m',
            ruleRef: 'Rule 26(c)',
            imageFilename: '11_fishing_outlying_gear.jpg',
            mainStatusShapeId: 'two_cones_apex_together'
        },
        {
            id: 'two_diamonds',
            name: 'Two Diamonds',
            meaning: 'Safe side to pass a vessel restricted in ability to maneuver',
            ruleRef: 'Rule 27(d)(ii)',
            imageFilename: '12_two_diamonds.jpg'
        }
    ];

    const DAY_SHAPES_DATA = RAW_DAY_SHAPES_DATA.map((shape) => Object.freeze({
        ...shape,
        image: `${DAY_SHAPE_IMAGE_BASE_PATH}/${shape.imageFilename}`
    }));

    const DAY_SHAPES_BY_ID = Object.freeze(Object.fromEntries(
        DAY_SHAPES_DATA.map((shape) => [shape.id, shape])
    ));

    if (typeof window !== 'undefined') {
        window.DAY_SHAPES_DATA = DAY_SHAPES_DATA;
        window.DAY_SHAPES_BY_ID = DAY_SHAPES_BY_ID;
        window.DAY_SHAPE_IMAGE_BASE_PATH = DAY_SHAPE_IMAGE_BASE_PATH;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            DAY_SHAPES_DATA,
            DAY_SHAPES_BY_ID,
            DAY_SHAPE_IMAGE_BASE_PATH
        };
    }
})();
