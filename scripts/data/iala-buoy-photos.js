(function () {
    'use strict';

    const BUOY_PHOTO_BASE_PATH = 'reference/Photos/Bouys';

    const BUOY_PHOTOS = Object.freeze([
        { file: 'Lateral-Marker-Port-Region-A.png', answerBuoyId: 'lateral_port_a' },
        { file: 'Lateral-Marker-Starboard-Region-A.png', answerBuoyId: 'lateral_starboard_a' },
        { file: 'Lateral-Marker-Port-Region-B.png', answerBuoyId: 'lateral_port_b' },
        { file: 'Lateral-Marker-Starboard-Region-B.png', answerBuoyId: 'lateral_starboard_b' },
        { file: 'Lateral-Marker-Port-Perferred-Region-A.png', answerBuoyId: 'preferred_port_a' },
        { file: 'Lateral-Marker-Starboard-Perferred-Region-A.png', answerBuoyId: 'preferred_starboard_a' },
        { file: 'Lateral-Marker-Port-Perferred-Region-B.png', answerBuoyId: 'preferred_port_b' },
        { file: 'Lateral-Marker-Starboard-Perferred-Region-B.png', answerBuoyId: 'preferred_starboard_b' },
        { file: 'cardinal-north-01.jpg', answerBuoyId: 'cardinal_north', cardinalDirection: 'North' },
        { file: 'cardinal-east-01.jpg', answerBuoyId: 'cardinal_east', cardinalDirection: 'East' },
        { file: 'cardinal-south-01.jpg', answerBuoyId: 'cardinal_south', cardinalDirection: 'South' },
        { file: 'cardinal-west-01.jpg', answerBuoyId: 'cardinal_west', cardinalDirection: 'West' },
        { file: 'Isolated-Danger-Marks.png', answerBuoyId: 'isolated_danger' },
        { file: 'Safe-Water-Marks.png', answerBuoyId: 'safe_water' },
        { file: 'Special-Marks.png', answerBuoyId: 'special' },
        { file: 'Emergancy-Bouy-Marks.jpg', answerBuoyId: 'emergency_wreck' }
    ]);

    if (typeof window !== 'undefined') {
        window.BUOY_PHOTO_BASE_PATH = BUOY_PHOTO_BASE_PATH;
        window.BUOY_PHOTOS = BUOY_PHOTOS;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            BUOY_PHOTO_BASE_PATH,
            BUOY_PHOTOS
        };
    }
})();
