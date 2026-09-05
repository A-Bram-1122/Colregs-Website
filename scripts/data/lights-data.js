(function () {
    'use strict';

    const LIGHTS_DATA = [
        { id: 'power-driven-underway', name: 'Power-Driven Vessel Underway', meaning: 'Power-driven vessel underway at night or in restricted visibility', ruleRef: 'Rule 23', lightConfig: 'Masthead light (white, 225° arc), sidelights (red port/green starboard, 112.5° each), stern light (white, 135° arc)', diagramKeys: { front: 'power-driven-vessel-underway-front', port: 'power-driven-vessel-underway-starboard', aft: 'power-driven-vessel-underway-aft' } },
        { id: 'power-driven-over-50m', name: 'Power-Driven Vessel Over 50m', meaning: 'Power-driven vessel ≥50m in length underway', ruleRef: 'Rule 23(a)(i)', lightConfig: 'Two white masthead lights in vertical line (aft higher), red port/green starboard sidelights, white stern light', diagramKeys: { front: 'power-driven-vessel-over-50m-front', port: 'power-driven-vessel-over-50m-starboard', aft: 'power-driven-vessel-over-50m-aft' } },
        { id: 'sailing-underway', name: 'Sailing Vessel Underway', meaning: 'Sailing vessel underway (not using propelling machinery)', ruleRef: 'Rule 25', lightConfig: 'Red port and green starboard sidelights, white stern light. NO masthead light.', diagramKeys: { front: 'sailing-vessel-underway-front', port: 'sailing-vessel-underway-starboard', aft: 'sailing-vessel-underway-aft' } },
        { id: 'vessel-trawling', name: 'Vessel Engaged in Trawling', meaning: 'Vessel engaged in trawling (dragging net through water)', ruleRef: 'Rule 26(b)', lightConfig: 'GREEN all-round light OVER white all-round light (both 360°), plus sidelights and stern light when making way', diagramKeys: { front: 'vessel-engaged-in-trawling-front', port: 'vessel-engaged-in-trawling-starboard', aft: 'vessel-engaged-in-trawling-aft' } },
        { id: 'vessel-towing-200m', name: 'Vessel Towing (Tow Exceeds 200m)', meaning: 'Vessel towing when length of tow exceeds 200 metres', ruleRef: 'Rule 24(a)(i)', lightConfig: 'Three white masthead lights in vertical line, sidelights, yellow towing light above white stern light', diagramKeys: { front: 'vessel-towing-200m-front', port: 'vessel-towing-200m-starboard', aft: 'vessel-towing-200m-aft' } },
        { id: 'vessel-not-under-command', name: 'Vessel Not Under Command', meaning: 'Vessel unable to maneuver due to exceptional circumstance', ruleRef: 'Rule 27(a)', lightConfig: 'Two red all-round lights in vertical line (360°). No masthead, sidelights, or stern lights unless making way.', diagramKeys: { front: 'vessel-not-under-command-front', port: 'vessel-not-under-command-starboard', aft: 'vessel-not-under-command-aft' } },
        { id: 'vessel-restricted-maneuver', name: 'Vessel Restricted in Ability to Maneuver', meaning: 'Vessel restricted in ability to maneuver due to nature of her work', ruleRef: 'Rule 27(b)', lightConfig: 'Red-white-red all-round lights in vertical line, plus masthead light(s), sidelights, stern light when making way', diagramKeys: { front: 'vessel-restricted-in-ability-to-maneuver-front', port: 'vessel-restricted-in-ability-to-maneuver-starboard', aft: 'vessel-restricted-in-ability-to-maneuver-aft' } },
        { id: 'vessel-constrained-draught', name: 'Vessel Constrained by Draught', meaning: 'Power-driven vessel severely restricted in ability to deviate by her draught', ruleRef: 'Rule 28', lightConfig: 'Full power-driven vessel lights (Rule 23) plus three all-round red lights in vertical line', diagramKeys: { front: 'vessel-constrained-by-draught-front', port: 'vessel-constrained-by-draught-starboard', aft: 'vessel-constrained-by-draught-aft' } },
        { id: 'vessel-aground', name: 'Vessel Aground', meaning: 'Vessel aground (unable to move, touching bottom)', ruleRef: 'Rule 30(d)', lightConfig: 'Anchor lights (fore and stern white all-round) plus two red all-round lights in vertical line', diagramKeys: { front: 'vessel-aground-front', port: 'vessel-aground-starboard', aft: 'vessel-aground-aft' } }
    ];

    const LIGHTS_BY_ID = Object.fromEntries(LIGHTS_DATA.map((v) => [v.id, v]));

    if (typeof window !== 'undefined') {
        window.LIGHTS_DATA = LIGHTS_DATA;
        window.LIGHTS_BY_ID = LIGHTS_BY_ID;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { LIGHTS_DATA, LIGHTS_BY_ID };
    }
})();
