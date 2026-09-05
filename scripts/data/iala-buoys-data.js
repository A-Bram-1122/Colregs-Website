(function () {
    'use strict';

    const IALA_ACRONYM = Object.freeze({
        question: 'What does IALA stand for?',
        correct: 'International Association of Marine Aids to Navigation and Lighthouse Authorities',
        wrongOptions: [
            'International Association of Lighthouse Authorities',
            'International Maritime Aids and Lighthouse Association',
            'International Association for Maritime Navigation'
        ],
        explanation: 'IALA is the International Association of Marine Aids to Navigation and Lighthouse Authorities.'
    });

    const IALA_COUNTRIES = Object.freeze({
        regionA: [
            'United Kingdom', 'France', 'Germany', 'Australia', 'New Zealand', 'South Africa',
            'India', 'UAE', 'Saudi Arabia', 'Egypt', 'Oman', 'Singapore', 'Thailand', 'Greece', 'Norway'
        ],
        regionB: [
            'United States', 'Canada', 'Brazil', 'Mexico', 'Japan', 'South Korea', 'Philippines',
            'Chile', 'Argentina', 'Colombia', 'Jamaica', 'Venezuela', 'Panama', 'Ecuador', 'Peru'
        ]
    });

    const BUOY_TYPES = Object.freeze([
        { id: 'lateral_port_a', name: 'Lateral mark (port, Region A)', purpose: 'Indicate port side of channel', lights: 'Red, any rhythm except (2+1)' },
        { id: 'lateral_starboard_a', name: 'Lateral mark (starboard, Region A)', purpose: 'Indicate starboard side of channel', lights: 'Green, any rhythm except (2+1)' },
        { id: 'lateral_port_b', name: 'Lateral mark (port, Region B)', purpose: 'Indicate port side of channel', lights: 'Green, any rhythm except (2+1)' },
        { id: 'lateral_starboard_b', name: 'Lateral mark (starboard, Region B)', purpose: 'Indicate starboard side of channel', lights: 'Red, any rhythm except (2+1)' },
        { id: 'preferred_port_a', name: 'Preferred channel (port, Region A)', purpose: 'Indicate preferred route at junction', lights: 'Red, composite (2+1)' },
        { id: 'preferred_starboard_a', name: 'Preferred channel (starboard, Region A)', purpose: 'Indicate preferred route at junction', lights: 'Green, composite (2+1)' },
        { id: 'preferred_port_b', name: 'Preferred channel (port, Region B)', purpose: 'Indicate preferred route at junction', lights: 'Green, composite (2+1)' },
        { id: 'preferred_starboard_b', name: 'Preferred channel (starboard, Region B)', purpose: 'Indicate preferred route at junction', lights: 'Red, composite (2+1)' },
        { id: 'cardinal_north', name: 'Cardinal North', purpose: 'Best navigable water is north of the mark', lights: 'White, uninterrupted (Q or VQ)' },
        { id: 'cardinal_east', name: 'Cardinal East', purpose: 'Best navigable water is east of the mark', lights: 'White, 3 flashes in a group' },
        { id: 'cardinal_south', name: 'Cardinal South', purpose: 'Best navigable water is south of the mark', lights: 'White, 6 flashes + 1 long' },
        { id: 'cardinal_west', name: 'Cardinal West', purpose: 'Best navigable water is west of the mark', lights: 'White, 9 flashes in a group' },
        { id: 'isolated_danger', name: 'Isolated danger mark', purpose: 'Mark isolated dangers with navigable water all round', lights: 'White, group of two flashes' },
        { id: 'safe_water', name: 'Safe water mark', purpose: 'Indicate navigable water all round (centreline, landfall, etc.)', lights: 'White, occulting/isophase/long/morse A' },
        { id: 'special', name: 'Special mark', purpose: 'Indicate areas/features (traffic schemes, spoil grounds, military zones)', lights: 'Yellow' },
        { id: 'emergency_wreck', name: 'Emergency wreck marking buoy', purpose: 'Temporary mark for newly sunken vessels, 24–72 hours', lights: 'Blue/yellow alternating, occulting' }
    ]);

    const BUOY_TYPES_BY_ID = Object.freeze(Object.fromEntries(
        BUOY_TYPES.map((b) => [b.id, b])
    ));

    if (typeof window !== 'undefined') {
        window.IALA_ACRONYM = IALA_ACRONYM;
        window.IALA_COUNTRIES = IALA_COUNTRIES;
        window.BUOY_TYPES = BUOY_TYPES;
        window.BUOY_TYPES_BY_ID = BUOY_TYPES_BY_ID;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            IALA_ACRONYM,
            IALA_COUNTRIES,
            BUOY_TYPES,
            BUOY_TYPES_BY_ID
        };
    }
})();
