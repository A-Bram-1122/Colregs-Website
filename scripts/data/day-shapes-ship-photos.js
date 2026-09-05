(function () {
    'use strict';

    const DAY_SHAPE_SHIP_PHOTO_BASE_PATH = 'reference/Photos/Quiz%20day%20shapes';

    const DAY_SHAPE_SHIP_PHOTO_MAP = Object.freeze({
        ball: [
            {
                file: 'ball-anchor-vessel-01.jpg',
                label: 'Vessel at anchor displaying a single ball'
            }
        ],
        cone: [
            {
                file: 'motor-sailing-vessel-01.jpg',
                label: 'Sailing vessel under power displaying a cone, apex down'
            }
        ],
        diamond: [
            {
                file: 'towing-vessel-long-tow-01.jpg',
                label: 'Towing vessel with tow over 200m displaying a diamond'
            }
        ],
        two_cones_apex_together: [
            {
                file: 'fishing-outlying-gear-01.jpg',
                label: 'Fishing vessel with outlying gear',
                sourceShapeId: 'fishing_outlying_gear'
            }
        ],
        cylinder: [
            {
                file: 'constrained-by-draught-01.jpg',
                label: 'Vessel constrained by draught displaying a cylinder'
            }
        ],
        ball_diamond_ball: [
            {
                file: 'restricted-ability-to-maneuver-01.jpg',
                label: 'Vessel restricted in her ability to maneuver displaying ball-diamond-ball'
            }
        ],
        dredging_underwater_ops: [
            {
                file: 'dredging-underwater-ops-01.jpg',
                label: 'Vessel engaged in dredging or underwater operations',
                sourceShapeId: 'dredging_underwater_ops'
            }
        ],
        two_balls: [
            {
                file: 'not-under-command-01.jpg',
                label: 'Vessel not under command displaying two black balls in a vertical line'
            }
        ],
        three_balls_triangle: [
            {
                file: 'mineclearance-01.jpg',
                label: 'Vessel engaged in mine clearance operations displaying three black balls in a triangular shape'
            }
        ],
        three_balls_vertical: [
            {
                file: 'aground-01.jpg',
                label: 'Vessel aground displaying three black balls in a vertical line'
            }
        ]
    });

    const DAY_SHAPE_SHIP_PHOTOS = Object.freeze(
        Object.entries(DAY_SHAPE_SHIP_PHOTO_MAP).flatMap(([answerShapeId, entries]) =>
            entries.map((entry) => Object.freeze({
                ...entry,
                answerShapeId
            }))
        )
    );

    if (typeof window !== 'undefined') {
        window.DAY_SHAPE_SHIP_PHOTO_MAP = DAY_SHAPE_SHIP_PHOTO_MAP;
        window.DAY_SHAPE_SHIP_PHOTOS = DAY_SHAPE_SHIP_PHOTOS;
        window.DAY_SHAPE_SHIP_PHOTO_BASE_PATH = DAY_SHAPE_SHIP_PHOTO_BASE_PATH;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            DAY_SHAPE_SHIP_PHOTO_MAP,
            DAY_SHAPE_SHIP_PHOTOS,
            DAY_SHAPE_SHIP_PHOTO_BASE_PATH
        };
    }
})();
