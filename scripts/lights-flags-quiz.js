
const lightsFlagsQuestions = [
    // Ship lights questions (mapped to Light Photo diagrams)
    {
        type: 'lights',
        question: 'A vessel displays a white masthead light forward, red and green sidelights, and a white stern light. What type of vessel is this?',
        image: getLightDiagramPath('power-driven-vessel-underway-front'),
        options: [
            'Power-driven vessel underway',
            'Sailing vessel underway',
            'Vessel engaged in fishing',
            'Vessel not under command'
        ],
        correct: 0,
        explanation: 'This is the standard light configuration for a power-driven vessel underway: masthead light, sidelights, and stern light.'
    },
    {
        type: 'lights',
        question: 'You see two white masthead lights (one higher than the other), sidelights, and a stern light. What does this indicate?',
        image: getLightDiagramPath('power-driven-vessel-over-50m-front'),
        options: [
            'Power-driven vessel less than 50m',
            'Power-driven vessel over 50m',
            'Vessel towing',
            'Vessel engaged in dredging'
        ],
        correct: 1,
        explanation: 'Two masthead lights with the aft light higher than the forward light indicates a power-driven vessel over 50 meters in length.'
    },
    {
        type: 'lights',
        question: 'A vessel shows only red and green sidelights and a white stern light, with no masthead light. What type of vessel is this?',
        image: getLightDiagramPath('sailing-vessel-underway-front'),
        options: [
            'Power-driven vessel',
            'Sailing vessel underway',
            'Vessel at anchor',
            'Fishing vessel'
        ],
        correct: 1,
        explanation: 'A sailing vessel underway shows sidelights and stern light but NO masthead light. This distinguishes it from power-driven vessels.'
    },
    {
        type: 'lights',
        question: 'Three white masthead lights in a vertical line indicate what?',
        image: getLightDiagramPath('vessel-towing-200m-front'),
        options: [
            'Vessel over 100m in length',
            'Vessel towing with tow exceeding 200m',
            'Vessel engaged in underwater operations',
            'Vessel not under command'
        ],
        correct: 1,
        explanation: 'Three white masthead lights in a vertical line indicate a vessel towing when the length of the tow exceeds 200 meters.'
    },
    {
        type: 'lights',
        question: 'A vessel displays green over white lights. What is this vessel doing?',
        image: getLightDiagramPath('vessel-engaged-in-trawling-front'),
        options: [
            'Engaged in fishing',
            'Engaged in trawling',
            'Not under command',
            'Restricted in ability to maneuver'
        ],
        correct: 1,
        explanation: 'A green light over a white light indicates a vessel engaged in trawling (dragging a net or fishing apparatus).'
    },
    {
        type: 'lights',
        question: 'Two red lights in a vertical line indicate what?',
        image: getLightDiagramPath('vessel-not-under-command-front'),
        options: [
            'Vessel on fire',
            'Vessel not under command',
            'Vessel engaged in fishing',
            'Vessel aground'
        ],
        correct: 1,
        explanation: 'Two red lights in a vertical line indicate a vessel not under command - unable to maneuver as required by the rules.'
    },
    {
        type: 'lights',
        question: 'Red-White-Red vertical lights indicate what?',
        image: getLightDiagramPath('vessel-restricted-in-ability-to-maneuver-front'),
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel engaged in fishing',
            'Vessel constrained by draught'
        ],
        correct: 1,
        explanation: 'Red-White-Red vertical lights indicate a vessel restricted in her ability to maneuver due to the nature of her work.'
    },
    {
        type: 'lights',
        question: 'What color is the towing light displayed by a vessel towing?',
        image: getLightDiagramPath('vessel-towing-200m-aft'),
        options: [
            'White',
            'Red',
            'Yellow',
            'Green'
        ],
        correct: 2,
        explanation: 'A vessel towing displays a yellow towing light above the stern light.'
    },
    {
        type: 'lights',
        question: 'At night, you see only a white stern light. What does this tell you?',
        image: getLightDiagramPath('power-driven-vessel-underway-aft'),
        options: [
            'The vessel is approaching you',
            'The vessel is moving away from you',
            'The vessel is crossing your bow',
            'The vessel is at anchor'
        ],
        correct: 1,
        explanation: 'Seeing only a white stern light indicates you are looking at the stern of a vessel moving away from you.'
    },
    {
        type: 'lights',
        question: 'You see both red and green sidelights ahead. What does this indicate?',
        image: getLightDiagramPath('power-driven-vessel-underway-front'),
        options: [
            'Vessel moving away',
            'Vessel crossing right to left',
            'Vessel approaching head-on',
            'Vessel at anchor'
        ],
        correct: 2,
        explanation: 'Seeing both red and green sidelights indicates a vessel is approaching you head-on or nearly head-on.'
    },
    {
        type: 'lights',
        question: 'From a side view, a vessel displays one white masthead light forward, red and green sidelights, and a white stern light. What type of vessel?',
        image: getLightDiagramPath('power-driven-vessel-underway-starboard'),
        options: [
            'Power-driven vessel underway',
            'Sailing vessel underway',
            'Vessel towing',
            'Vessel not under command'
        ],
        correct: 0,
        explanation: 'Masthead light, sidelights, and stern light indicate a power-driven vessel underway.'
    },
    {
        type: 'lights',
        question: 'From a side view, a vessel displays two white masthead lights (aft higher than forward), sidelights, and stern light. What type of vessel?',
        image: null,
        options: [
            'Power-driven vessel under 50m',
            'Power-driven vessel over 50m',
            'Vessel towing',
            'Sailing vessel'
        ],
        correct: 1,
        explanation: 'Two masthead lights with the aft higher than the forward indicates a vessel over 50m.'
    },
    {
        type: 'lights',
        question: 'From a side view, a vessel displays only sidelights and stern light with no masthead light. What type of vessel?',
        image: getLightDiagramPath('sailing-vessel-underway-starboard'),
        options: [
            'Power-driven vessel',
            'Sailing vessel underway',
            'Vessel at anchor',
            'Vessel towing'
        ],
        correct: 1,
        explanation: 'Sidelights and stern light with NO masthead light indicate a sailing vessel underway.'
    },
    {
        type: 'lights',
        question: 'From a side view, a vessel displays three white masthead lights in a vertical line plus a yellow towing light above the stern light. What does this indicate?',
        image: null,
        options: [
            'Vessel over 50m',
            'Vessel towing with tow exceeding 200m',
            'Vessel not under command',
            'Vessel engaged in trawling'
        ],
        correct: 1,
        explanation: 'Three white masthead lights in a vertical line plus yellow towing light indicate tow exceeding 200m.'
    },
    {
        type: 'lights',
        question: 'From a side view, a vessel displays green over white all-round lights plus sidelights and stern light. What type of vessel?',
        image: getLightDiagramPath('vessel-engaged-in-trawling-starboard'),
        options: [
            'Vessel not under command',
            'Vessel engaged in trawling',
            'Vessel towing',
            'Sailing vessel'
        ],
        correct: 1,
        explanation: 'Green over white lights indicate a vessel engaged in trawling.'
    },
    {
        type: 'lights',
        question: 'From a side view, a vessel displays red-white-red vertical all-round lights. What does this indicate?',
        image: null,
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel engaged in trawling',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Red-White-Red vertical lights indicate a vessel restricted in her ability to maneuver.'
    },
    {
        type: 'lights',
        question: 'From a side view, a vessel displays two red lights in a vertical line. What type of vessel?',
        image: getLightDiagramPath('vessel-not-under-command-starboard'),
        options: [
            'Vessel restricted in ability to maneuver',
            'Vessel not under command',
            'Vessel engaged in trawling',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Two red lights in a vertical line indicate a vessel not under command.'
    },
    // Head-on view questions
    {
        type: 'lights',
        question: 'Head-on: you see a green starboard sidelight. What type of vessel is approaching?',
        image: null,
        options: [
            'Power-driven vessel underway',
            'Sailing vessel underway',
            'Vessel towing',
            'Vessel not under command'
        ],
        correct: 0,
        explanation: 'Green starboard sidelight visible in head-on view indicates a power-driven vessel underway.'
    },
    {
        type: 'lights',
        question: 'Head-on: you see two masthead lights in a vertical line. What type of vessel?',
        image: getLightDiagramPath('power-driven-vessel-over-50m-front'),
        options: [
            'Power-driven vessel under 50m',
            'Power-driven vessel over 50m',
            'Vessel towing',
            'Sailing vessel'
        ],
        correct: 1,
        explanation: 'Two masthead lights visible head-on indicate a vessel over 50m.'
    },
    {
        type: 'lights',
        question: 'Head-on: you see sidelights with no masthead light. What type of vessel?',
        image: getLightDiagramPath('sailing-vessel-underway-front'),
        options: [
            'Power-driven vessel',
            'Sailing vessel underway',
            'Vessel at anchor',
            'Vessel towing'
        ],
        correct: 1,
        explanation: 'Sidelights with no masthead light in head-on view indicate a sailing vessel underway.'
    },
    {
        type: 'lights',
        question: 'Head-on: you see three masthead lights in a vertical line. What does this indicate?',
        image: null,
        options: [
            'Vessel over 50m',
            'Vessel towing with tow exceeding 200m',
            'Vessel not under command',
            'Vessel engaged in trawling'
        ],
        correct: 1,
        explanation: 'Three masthead lights in vertical line indicate a vessel towing with tow exceeding 200m.'
    },
    {
        type: 'lights',
        question: 'Head-on: you see green over white all-round lights. What type of vessel?',
        image: getLightDiagramPath('vessel-engaged-in-trawling-front'),
        options: [
            'Vessel not under command',
            'Vessel engaged in trawling',
            'Vessel towing',
            'Sailing vessel'
        ],
        correct: 1,
        explanation: 'Green over white lights indicate a vessel engaged in trawling.'
    },
    {
        type: 'lights',
        question: 'Head-on: you see red-white-red vertical lights. What does this indicate?',
        image: getLightDiagramPath('vessel-restricted-in-ability-to-maneuver-front'),
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel engaged in trawling',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Red-White-Red vertical lights indicate a vessel restricted in her ability to maneuver.'
    },
    {
        type: 'lights',
        question: 'Head-on: you see two red lights in a vertical line. What type of vessel?',
        image: getLightDiagramPath('vessel-not-under-command-front'),
        options: [
            'Vessel restricted in ability to maneuver',
            'Vessel not under command',
            'Vessel engaged in trawling',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Two red lights in a vertical line indicate a vessel not under command.'
    },
    // Stern view questions
    {
        type: 'lights',
        question: 'Stern view: you see only a white stern light. What type of vessel?',
        image: getLightDiagramPath('power-driven-vessel-underway-aft'),
        options: [
            'Power-driven vessel underway',
            'Sailing vessel underway',
            'Vessel towing',
            'Vessel not under command'
        ],
        correct: 0,
        explanation: 'White stern light indicates a power-driven vessel underway (stern view).'
    },
    {
        type: 'lights',
        question: 'Stern view: you see a white stern light only (no masthead). What type of vessel?',
        image: getLightDiagramPath('sailing-vessel-underway-aft'),
        options: [
            'Power-driven vessel',
            'Sailing vessel underway',
            'Vessel at anchor',
            'Vessel towing'
        ],
        correct: 1,
        explanation: 'White stern light only (no masthead) indicates a sailing vessel underway.'
    },
    {
        type: 'lights',
        question: 'Stern view: you see three masthead lights plus yellow towing light above stern light. What does this indicate?',
        image: getLightDiagramPath('vessel-towing-200m-aft'),
        options: [
            'Vessel over 50m',
            'Vessel towing with tow exceeding 200m',
            'Vessel not under command',
            'Vessel engaged in trawling'
        ],
        correct: 1,
        explanation: 'Three masthead lights plus yellow towing light above stern light indicate tow exceeding 200m.'
    },
    {
        type: 'lights',
        question: 'A vessel displays red over white all-round lights. What type of fishing vessel is this?',
        options: [
            'Vessel engaged in trawling',
            'Vessel engaged in fishing other than trawling',
            'Vessel not under command',
            'Vessel restricted in ability to maneuver'
        ],
        correct: 1,
        explanation: 'Red over white indicates a vessel engaged in fishing other than trawling. Green over white indicates trawling.'
    },
    {
        type: 'lights',
        question: 'Two white masthead lights in a vertical line indicate a vessel towing when the tow length is under how many meters?',
        options: [
            '50 meters',
            '100 meters',
            '200 meters',
            '500 meters'
        ],
        correct: 2,
        explanation: 'Two masthead lights indicate towing when the tow is 200m or less. Three masthead lights indicate tow exceeding 200m.'
    },
    {
        type: 'lights',
        question: 'Stern view: you see red-white-red vertical lights. What does this indicate?',
        image: getLightDiagramPath('vessel-restricted-in-ability-to-maneuver-aft'),
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel engaged in trawling',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Red-White-Red vertical lights in stern view indicate a vessel restricted in her ability to maneuver.'
    },

    // Vessel Aground questions
    {
        type: 'lights',
        question: 'A vessel displays anchor lights (fore and stern white) plus two red all-round lights in a vertical line. What does this indicate?',
        image: getLightDiagramPath('vessel-aground-front'),
        options: [
            'Vessel not under command',
            'Vessel aground',
            'Vessel restricted in ability to maneuver',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Anchor lights plus two red lights indicate a vessel aground (Rule 30(d)). A NUC vessel does not display anchor lights.'
    },
    {
        type: 'lights',
        question: 'From a side view, you see white anchor lights plus two red all-round lights in a vertical line. What type of vessel?',
        image: getLightDiagramPath('vessel-aground-starboard'),
        options: [
            'Vessel not under command',
            'Vessel aground',
            'Vessel restricted in ability to maneuver',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Anchor lights plus two red lights indicate a vessel aground. The key distinction from NUC is the presence of anchor lights.'
    },
    {
        type: 'lights',
        question: 'Stern view: you see white stern light plus two red all-round lights. What does this indicate?',
        image: getLightDiagramPath('vessel-aground-aft'),
        options: [
            'Vessel not under command',
            'Vessel aground',
            'Vessel restricted in ability to maneuver',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Anchor lights (including stern light) plus two red lights indicate a vessel aground (Rule 30(d)).'
    },
    {
        type: 'lights',
        question: 'How do you distinguish a vessel aground from a vessel not under command when both display two red lights?',
        options: [
            'Aground displays three red lights',
            'Aground displays anchor lights (white) in addition to the two red lights',
            'NUC displays green over white',
            'There is no way to distinguish them'
        ],
        correct: 1,
        explanation: 'A vessel aground displays anchor lights (fore and stern white) PLUS two red lights. A NUC vessel displays only the two red lights (unless making way, when it shows sidelights and stern light).'
    },

    // Vessel Constrained by Draught questions
    {
        type: 'lights',
        question: 'A vessel displays full navigation lights (masthead, sidelights, stern) plus three red all-round lights in a vertical line. What does this indicate?',
        image: getLightDiagramPath('vessel-constrained-by-draught-front'),
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by her draught',
            'Vessel aground'
        ],
        correct: 2,
        explanation: 'Three red lights in a vertical line (in addition to Rule 23 lights) indicate a vessel constrained by her draught (Rule 28).'
    },
    {
        type: 'lights',
        question: 'From a side view, you see masthead light(s), sidelights, stern light, and three red all-round lights in a vertical line. What type of vessel?',
        image: getLightDiagramPath('vessel-constrained-by-draught-starboard'),
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by her draught',
            'Vessel aground'
        ],
        correct: 2,
        explanation: 'Three red lights (vs two for NUC or aground) plus full navigation lights indicate a vessel constrained by her draught.'
    },
    {
        type: 'lights',
        question: 'Stern view: you see stern light plus three red all-round lights in a vertical line. What does this indicate?',
        image: getLightDiagramPath('vessel-constrained-by-draught-aft'),
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by her draught',
            'Vessel aground'
        ],
        correct: 2,
        explanation: 'Three red lights in a vertical line indicate a vessel constrained by her draught. Two red lights would indicate NUC or aground.'
    },
    {
        type: 'lights',
        question: 'You see three red all-round lights in a vertical line on an underway vessel. What does this signal mean?',
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by her draught',
            'Vessel aground'
        ],
        correct: 2,
        explanation: 'Three red lights in a vertical line indicate a vessel constrained by her draught. NUC and aground use two red lights; RAM uses red-white-red.'
    },
    {
        type: 'lights',
        question: 'What day shape does a vessel constrained by her draught display?',
        options: [
            'Two black balls',
            'Ball-diamond-ball',
            'A black cylinder',
            'Three black balls'
        ],
        correct: 2,
        explanation: 'A vessel constrained by her draught may exhibit a black cylinder by day (Rule 28).'
    },

    // Signal flags questions
    {
        type: 'flags',
        question: 'What does this flag indicate?',
        image: `${IMAGE_PATHS.FLAGS}/A.jpg`,
        options: [
            'I require a pilot',
            'I have a diver down; keep well clear at slow speed',
            'I am disabled; communicate with me',
            'Man overboard'
        ],
        correct: 1,
        explanation: 'The Alpha flag indicates "I have a diver down; keep well clear at slow speed."'
    },
    {
        type: 'flags',
        question: 'What does this flag indicate?',
        image: `${IMAGE_PATHS.FLAGS}/B.jpg`,
        options: [
            'I am on fire',
            'Stop your vessel',
            'I am taking in, discharging, or carrying dangerous goods',
            'I require medical assistance'
        ],
        correct: 2,
        explanation: 'The Bravo flag indicates the vessel is taking in, discharging, or carrying dangerous goods.'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/O.jpg`,
        options: [
            'I have a diver down',
            'Man overboard',
            'I require assistance',
            'You are running into danger'
        ],
        correct: 1,
        explanation: 'The Oscar flag (yellow and red diagonal) means "Man overboard."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/C.jpg`,
        options: [
            'No (negative)',
            'Yes (affirmative)',
            'I require assistance',
            'Keep clear of me'
        ],
        correct: 1,
        explanation: 'The Charlie flag means "Yes" (affirmative).'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/N.jpg`,
        options: [
            'Yes (affirmative)',
            'No (negative)',
            'I am altering course',
            'Stop your vessel'
        ],
        correct: 1,
        explanation: 'The November flag (blue and white checkered) means "No" (negative).'
    },
    {
        type: 'flags',
        question: 'What does this flag indicate?',
        image: `${IMAGE_PATHS.FLAGS}/P.jpg`,
        options: [
            'I require a pilot',
            'I have a pilot on board',
            'All persons should report on board; vessel about to sail',
            'I am disabled'
        ],
        correct: 2,
        explanation: 'The Papa flag indicates "All persons should report on board as the vessel is about to proceed to sea."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/Q.jpg`,
        options: [
            'I am carrying dangerous goods',
            'My vessel is healthy and I request free pratique',
            'I require a tug',
            'I am dragging my anchor'
        ],
        correct: 1,
        explanation: 'The Quebec flag means "My vessel is healthy and I request free pratique" (permission to enter port).'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/V.jpg`,
        options: [
            'I require assistance',
            'I require medical assistance',
            'I am disabled',
            'You are running into danger'
        ],
        correct: 0,
        explanation: 'The Victor flag (red and white cross) means "I require assistance."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/W.jpg`,
        options: [
            'I require assistance',
            'I require medical assistance',
            'I require a pilot',
            'I wish to communicate'
        ],
        correct: 1,
        explanation: 'The Whiskey flag means "I require medical assistance."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/U.jpg`,
        options: [
            'You are running into danger',
            'I am running into danger',
            'Keep clear of me',
            'I am disabled'
        ],
        correct: 0,
        explanation: 'The Uniform flag (red and white quarters) means "You are running into danger."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/D.jpg`,
        options: [
            'I am disabled',
            'Keep clear of me; I am maneuvering with difficulty',
            'I am not under command',
            'I am restricted in my ability to maneuver'
        ],
        correct: 1,
        explanation: 'The Delta flag (yellow-blue-yellow horizontal) means "Keep clear of me; I am maneuvering with difficulty."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/G.jpg`,
        options: [
            'I have a pilot on board',
            'I require a pilot',
            'I am disabled',
            'I wish to communicate'
        ],
        correct: 1,
        explanation: 'The Golf flag (yellow and blue vertical stripes) means "I require a pilot."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/H.jpg`,
        options: [
            'I require a pilot',
            'I have a pilot on board',
            'I require assistance',
            'All persons report on board'
        ],
        correct: 1,
        explanation: 'The Hotel flag (white and red vertical) means "I have a pilot on board."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/F.jpg`,
        options: [
            'I am on fire',
            'I am disabled; communicate with me',
            'I require assistance',
            'Man overboard'
        ],
        correct: 1,
        explanation: 'The Foxtrot flag means "I am disabled; communicate with me."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/J.jpg`,
        options: [
            'I am on fire and have dangerous cargo; keep clear',
            'I am carrying dangerous cargo',
            'I am disabled',
            'I am not under command'
        ],
        correct: 0,
        explanation: 'The Juliet flag means "I am on fire and have dangerous cargo on board; keep well clear of me."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/K.jpg`,
        options: [
            'Keep clear of me',
            'I wish to communicate with you',
            'I require assistance',
            'Stop your vessel'
        ],
        correct: 1,
        explanation: 'The Kilo flag means "I wish to communicate with you."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/L.jpg`,
        options: [
            'Slow down',
            'You should stop your vessel instantly',
            'Keep clear of me',
            'I am stopped'
        ],
        correct: 1,
        explanation: 'The Lima flag (yellow and black quarters) means "You should stop your vessel instantly."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/M.jpg`,
        options: [
            'I am making way',
            'My vessel is stopped and making no way',
            'I require a tug',
            'I am at anchor'
        ],
        correct: 1,
        explanation: 'The Mike flag means "My vessel is stopped and making no way through the water."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/Z.jpg`,
        options: [
            'I require a pilot',
            'I require a tug',
            'I am dragging anchor',
            'I am aground'
        ],
        correct: 1,
        explanation: 'The Zulu flag means "I require a tug."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/Y.jpg`,
        options: [
            'I am at anchor',
            'I am dragging my anchor',
            'I require a tug',
            'I am aground'
        ],
        correct: 1,
        explanation: 'The Yankee flag (yellow and red diagonal stripes) means "I am dragging my anchor."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/E.jpg`,
        options: [
            'I am altering my course to port',
            'I am altering my course to starboard',
            'I require a pilot',
            'Keep clear'
        ],
        correct: 1,
        explanation: 'The Echo flag means "I am altering my course to starboard."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/I.jpg`,
        options: [
            'I am altering my course to starboard',
            'I am altering my course to port',
            'I require assistance',
            'Man overboard'
        ],
        correct: 1,
        explanation: 'The India flag means "I am altering my course to port."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/R.jpg`,
        options: [
            'I require a tug',
            'Reverse course',
            'I am stopped',
            'Keep clear'
        ],
        correct: 1,
        explanation: 'The Romeo flag means "reverse course."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/S.jpg`,
        options: [
            'I am making way',
            'Engines are astern propulsion',
            'I am at anchor',
            'I require assistance'
        ],
        correct: 1,
        explanation: 'The Sierra flag means "engines are astern propulsion" (engines going astern).'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/T.jpg`,
        options: [
            'I require a tug',
            'I am stopped',
            'Keep clear',
            'You are heading into danger'
        ],
        correct: 2,
        explanation: 'The Tango flag means "Keep clear."'
    },
    {
        type: 'flags',
        question: 'What does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/X.jpg`,
        options: [
            'Stop carrying out your intentions',
            'I require assistance',
            'Yes (affirmative)',
            'No (negative)'
        ],
        correct: 0,
        explanation: 'The X-ray flag means "Stop carrying out your intentions."'
    },

    // NATO-specific flag questions (differ from International)
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/F.jpg`,
        options: [
            'I am disabled; communicate with me',
            'Flight operations underway',
            'I require assistance',
            'Man overboard'
        ],
        correct: 1,
        explanation: 'In NATO usage, the Foxtrot flag means "Flight operations underway" (aircraft operations on deck).'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/I.jpg`,
        options: [
            'I am altering my course to port',
            'Coming alongside',
            'I require assistance',
            'I am disabled'
        ],
        correct: 1,
        explanation: 'In NATO usage, the India flag means "Coming alongside" (vessel approaching to come alongside).'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/P.jpg`,
        options: [
            'All persons should report on board; vessel about to sail',
            'All personnel return to ship; proceeding to sea (in port)',
            'I require a pilot',
            'I have a pilot on board'
        ],
        correct: 1,
        explanation: 'In NATO usage, the Papa flag means "All personnel return to ship; proceeding to sea (in port)."'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/Q.jpg`,
        options: [
            'My vessel is healthy and I request free pratique',
            'Boat recall; all boats return to ship',
            'I require a tug',
            'I am dragging my anchor'
        ],
        correct: 1,
        explanation: 'In NATO usage, the Quebec flag means "Boat recall; all boats return to ship."'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/R.jpg`,
        options: [
            'Reverse course',
            'Preparing to replenish (at sea); Ready duty ship (in port)',
            'I am stopped',
            'Keep clear'
        ],
        correct: 1,
        explanation: 'In NATO usage, the Romeo flag means "Preparing to replenish" at sea or "Ready duty ship" in port.'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/S.jpg`,
        options: [
            'Engines are astern propulsion',
            'Conducting flag hoist drill',
            'I am at anchor',
            'I require assistance'
        ],
        correct: 1,
        explanation: 'In NATO usage, the Sierra flag means "Conducting flag hoist drill."'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/T.jpg`,
        options: [
            'Keep clear of me; I am engaged in pair trawling',
            'Do not pass ahead of me',
            'I require a tug',
            'You are heading into danger'
        ],
        correct: 1,
        explanation: 'In NATO usage, the Tango flag means "Do not pass ahead of me."'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/X.jpg`,
        options: [
            'Stop carrying out your intentions',
            'Stop carrying out your intentions and watch for my signals',
            'I require assistance',
            'No (negative)'
        ],
        correct: 1,
        explanation: 'In NATO usage, the X-ray flag means "Stop carrying out your intentions and watch for my signals."'
    },
    {
        type: 'flags',
        question: 'In NATO (naval) usage, what does this flag mean?',
        image: `${IMAGE_PATHS.FLAGS}/Y.jpg`,
        options: [
            'I am dragging my anchor',
            'Ship has visual communications duty',
            'I require a tug',
            'I am aground'
        ],
        correct: 1,
        explanation: 'In NATO usage, the Yankee flag means "Ship has visual communications duty."'
    },

    // Ship shapes questions
    {
        type: 'shapes',
        question: 'What does this shape indicate when displayed by day?',
        image: `${IMAGE_PATHS.SHAPES}/01_ball_anchor.jpg`,
        options: [
            'Vessel at anchor',
            'Vessel aground',
            'Vessel not under command',
            'Vessel fishing'
        ],
        correct: 0,
        explanation: 'A single black ball shape indicates a vessel at anchor (Rule 30). Vessels less than 50m may display one ball in the forepart, while vessels 50m or more must display one ball in the forepart where it can best be seen.'
    },
    {
        type: 'shapes',
        question: 'What does this shape indicate when displayed by day?',
        image: `${IMAGE_PATHS.SHAPES}/02_cone_apex_down.jpg`,
        options: [
            'Vessel engaged in fishing',
            'Sailing vessel under power',
            'Vessel constrained by draught',
            'Vessel towing'
        ],
        correct: 1,
        explanation: 'A black cone with apex pointing downward indicates a sailing vessel that is also using propelling machinery (Rule 25(e)). This distinguishes it from a pure sailing vessel.'
    },
    {
        type: 'shapes',
        question: 'What does this shape indicate when displayed by a vessel?',
        image: `${IMAGE_PATHS.SHAPES}/03_diamond.jpg`,
        options: [
            'Vessel engaged in fishing',
            'Vessel towing with length of tow exceeding 200 meters',
            'Vessel not under command',
            'Vessel constrained by draught'
        ],
        correct: 1,
        explanation: 'A black diamond shape indicates a vessel towing when the length of the tow exceeds 200 meters (Rule 24(a)(i)). This shape must be displayed where it can best be seen.'
    },
    {
        type: 'shapes',
        question: 'What does this shape indicate when displayed by day?',
        image: `${IMAGE_PATHS.SHAPES}/08_cylinder.jpg`,
        options: [
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel constrained by her draught',
            'Vessel engaged in underwater operations'
        ],
        correct: 2,
        explanation: 'A black cylinder indicates a vessel constrained by her draught (Rule 28). This means the vessel\'s draught in relation to available depth and width of water severely restricts her ability to deviate from course.'
    },
    {
        type: 'shapes',
        question: 'What does this shape configuration indicate when displayed by day?',
        image: `${IMAGE_PATHS.SHAPES}/05_two_balls.jpg`,
        options: [
            'Vessel at anchor',
            'Vessel not under command',
            'Vessel engaged in fishing',
            'Vessel aground'
        ],
        correct: 1,
        explanation: 'Two black balls in a vertical line indicate a vessel not under command (Rule 27(a)). This means the vessel is unable to maneuver as required by the rules due to some exceptional circumstance.'
    },
    {
        type: 'shapes',
        question: 'What does this shape configuration indicate when displayed by day?',
        image: `${IMAGE_PATHS.SHAPES}/07_ball_diamond_ball.jpg`,
        options: [
            'Vessel not under command',
            'Vessel restricted in her ability to maneuver',
            'Vessel engaged in towing over 200m',
            'Vessel aground'
        ],
        correct: 1,
        explanation: 'Ball-diamond-ball in a vertical line indicates a vessel restricted in her ability to maneuver (Rule 27(b)). This means the vessel is restricted by the nature of her work and cannot keep out of the way of other vessels.'
    },
    {
        type: 'shapes',
        question: 'What does this shape indicate when displayed by day?',
        image: `${IMAGE_PATHS.SHAPES}/04_two_cones_apex_together.jpg`,
        options: [
            'Vessel towing over 200m',
            'Vessel engaged in fishing with restricted ability to maneuver',
            'Vessel not under command',
            'Vessel constrained by draught'
        ],
        correct: 1,
        explanation: 'Two black cones with apexes together indicate a vessel engaged in fishing with restricted ability to maneuver (Rule 26).'
    },
    {
        type: 'shapes',
        question: 'What does this shape configuration indicate?',
        image: `${IMAGE_PATHS.SHAPES}/06_mine_clearance_triangle.jpg`,
        options: [
            'Vessel aground',
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel engaged in mine clearance operations'
        ],
        correct: 3,
        explanation: 'Three black balls in a triangle (one at masthead, one at each yardarm) indicate a vessel engaged in mine clearance (Rule 27(f)).'
    },
    {
        type: 'shapes',
        question: 'What does this shape indicate when displayed by day?',
        image: `${IMAGE_PATHS.SHAPES}/09_three_balls_vertical.jpg`,
        options: [
            'Vessel at anchor',
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel aground'
        ],
        correct: 3,
        explanation: 'Three black balls in a vertical line indicate a vessel aground (Rule 30(d)), in addition to anchor balls.'
    },
    {
        type: 'shapes',
        question: 'What does this shape configuration indicate?',
        image: `${IMAGE_PATHS.SHAPES}/10_dredging_underwater_ops.png`,
        options: [
            'Vessel at anchor',
            'Vessel engaged in dredging or underwater operations',
            'Vessel towing',
            'Vessel engaged in fishing'
        ],
        correct: 1,
        explanation: 'Ball-diamond-ball with two diamonds on one side and two balls on the other indicates dredging or underwater operations (Rule 27(d)).'
    },
    {
        type: 'shapes',
        question: 'What does this shape indicate when displayed by a fishing vessel?',
        image: `${IMAGE_PATHS.SHAPES}/11_fishing_outlying_gear.jpg`,
        options: [
            'Vessel engaged in trawling',
            'Vessel engaged in fishing with gear extending more than 150m',
            'Vessel not under command',
            'Vessel restricted in ability to maneuver'
        ],
        correct: 1,
        explanation: 'Two cones apex together plus one cone apex toward the gear indicates fishing with outlying gear exceeding 150m (Rule 26(c)).'
    },
    {
        type: 'shapes',
        question: 'What does this shape configuration indicate when displayed by a dredging vessel?',
        image: `${IMAGE_PATHS.SHAPES}/12_two_diamonds.jpg`,
        options: [
            'Obstructed side; do not pass',
            'Safe side to pass',
            'Vessel not under command',
            'Vessel aground'
        ],
        correct: 1,
        explanation: 'Two black diamonds in a vertical line indicate the side on which it is safe for other vessels to pass (Rule 27(d)(ii)).'
    },
    {
        type: 'shapes',
        question: 'What do three black balls in a vertical line indicate?',
        options: [
            'Vessel aground',
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel engaged in minesweeping'
        ],
        correct: 0,
        explanation: 'Three black balls in a vertical line indicate a vessel aground (Rule 30(d)). This is in addition to the anchor ball(s) that would normally be displayed.'
    },
    {
        type: 'shapes',
        question: 'What shape must a vessel engaged in dredging or underwater operations display to indicate the obstructed side?',
        options: [
            'Two black balls in vertical line on obstructed side',
            'One black ball on obstructed side',
            'A black cylinder on obstructed side',
            'Two black diamonds on obstructed side'
        ],
        correct: 0,
        explanation: 'A vessel engaged in dredging or underwater operations displays two black balls in a vertical line on the side where obstruction exists (Rule 27(d)(i)), and two black diamonds in a vertical line on the side on which it is safe to pass (Rule 27(d)(ii)).'
    },
    {
        type: 'shapes',
        question: 'What shapes does a vessel engaged in minesweeping display?',
        options: [
            'Two black balls',
            'Three black balls in a triangle',
            'A black diamond',
            'Three black balls, one at the masthead and one at each yardarm'
        ],
        correct: 3,
        explanation: 'A vessel engaged in minesweeping displays three black balls, one at or near the foremast head and one at each end of the fore yard (Rule 27(f)). This warns other vessels to keep clear.'
    },
    {
        type: 'shapes',
        question: 'When must day shapes be displayed?',
        options: [
            'Only during daytime in good visibility',
            'During daylight hours regardless of visibility',
            'Only when visibility is restricted',
            'At all times, day and night'
        ],
        correct: 1,
        explanation: 'Day shapes must be displayed during daylight hours regardless of visibility conditions. They serve as visual indicators of a vessel\'s status that can be seen from a distance.'
    },
    {
        type: 'shapes',
        question: 'What is the minimum diameter specification for most day shapes (balls, cones, diamonds, cylinders)?',
        options: [
            '0.3 meters',
            '0.6 meters',
            '1.0 meter',
            '1.5 meters'
        ],
        correct: 1,
        explanation: 'Most day shapes must have a diameter of at least 0.6 meters (Rule 30(a)). For vessels less than 20 meters in length, shapes of smaller size but commensurate with the size of the vessel may be used.'
    },
    {
        type: 'shapes',
        question: 'A vessel constrained by her draught displays what day shape?',
        options: [
            'Two black balls',
            'A black diamond',
            'A black cylinder',
            'Ball-diamond-ball'
        ],
        correct: 2,
        explanation: 'A black cylinder indicates a vessel constrained by her draught (Rule 28).'
    },
    {
        type: 'shapes',
        question: 'What day shape does a vessel aground display?',
        options: [
            'One black ball',
            'Two black balls',
            'Ball-diamond-ball',
            'Three black balls in a vertical line'
        ],
        correct: 3,
        explanation: 'Three black balls in a vertical line indicate a vessel aground (Rule 30(d)), in addition to anchor balls.'
    },
    {
        type: 'shapes',
        question: 'What shape indicates the safe side to pass a vessel engaged in dredging?',
        options: [
            'Two black balls in vertical line',
            'Two black diamonds in vertical line',
            'One black ball',
            'Three black balls'
        ],
        correct: 1,
        explanation: 'Two black diamonds in a vertical line indicate the side on which it is safe to pass (Rule 27(d)(ii)).'
    },
    {
        type: 'shapes',
        question: 'A vessel engaged in fishing with gear extending more than 150m displays what shapes?',
        options: [
            'One ball only',
            'Two cones apex together only',
            'Two cones apex together plus one cone apex toward the gear',
            'Two diamonds'
        ],
        correct: 2,
        explanation: 'Two cones apex together plus one cone apex toward the outlying gear indicates fishing with gear exceeding 150m (Rule 26(c)).'
    },
    {
        type: 'shapes',
        question: 'On the obstructed side of a dredging vessel, what shapes are displayed?',
        options: [
            'Two black diamonds',
            'Two black balls in a vertical line',
            'One black ball',
            'Three black balls'
        ],
        correct: 1,
        explanation: 'Two black balls in a vertical line on the obstructed side indicate where obstruction exists (Rule 27(d)(i)).'
    },
    {
        type: 'shapes',
        question: 'What shape must a sailing vessel using machinery display by day?',
        options: [
            'A black ball',
            'A black cone apex down',
            'A black diamond',
            'Two cones apex together'
        ],
        correct: 1,
        explanation: 'A black cone with apex downward indicates a sailing vessel also using propelling machinery (Rule 25(e)).'
    },
    {
        type: 'shapes',
        question: 'A vessel towing with length of tow exceeding 200m displays what day shape?',
        options: [
            'One ball',
            'Two balls',
            'A black diamond',
            'Ball-diamond-ball'
        ],
        correct: 2,
        explanation: 'A black diamond indicates a vessel towing when the length of tow exceeds 200 meters (Rule 24(a)(i)).'
    },
    {
        type: 'shapes',
        question: 'For vessels less than 20m, what applies to day shape size?',
        options: [
            'Shapes must still be at least 0.6m diameter',
            'Shapes of smaller size commensurate with vessel may be used',
            'Day shapes are not required',
            'Shapes must be 0.3m minimum'
        ],
        correct: 1,
        explanation: 'For vessels less than 20 meters, shapes of smaller size but commensurate with the size of the vessel may be used (Rule 30(a)).'
    },
    {
        type: 'shapes',
        question: 'Where should day shapes be displayed?',
        options: [
            'Only at the stern',
            'Where they can best be seen',
            'Only at the masthead',
            'On the port side only'
        ],
        correct: 1,
        explanation: 'Day shapes must be displayed where they can best be seen (Rule 30 and Annex I).'
    },
    {
        type: 'shapes',
        question: 'A vessel at anchor displays what shape?',
        options: [
            'A black diamond',
            'A black cone apex down',
            'One black ball in the forepart',
            'Two black balls'
        ],
        correct: 2,
        explanation: 'A single black ball in the forepart indicates a vessel at anchor (Rule 30).'
    },
    {
        type: 'shapes',
        question: 'What does ball-diamond-ball in a vertical line indicate?',
        options: [
            'Vessel not under command',
            'Vessel restricted in her ability to maneuver',
            'Vessel aground',
            'Vessel at anchor'
        ],
        correct: 1,
        explanation: 'Ball-diamond-ball indicates a vessel restricted in her ability to maneuver (Rule 27(b)).'
    },
    {
        type: 'shapes',
        question: 'Two black balls in a vertical line indicate what?',
        options: [
            'Vessel at anchor',
            'Vessel not under command',
            'Vessel restricted in ability to maneuver',
            'Vessel aground'
        ],
        correct: 1,
        explanation: 'Two black balls in a vertical line indicate a vessel not under command (Rule 27(a)).'
    },
    {
        type: 'shapes',
        question: 'A vessel not under command displays what day shape?',
        options: [
            'One black ball',
            'Two black balls in a vertical line',
            'A black diamond',
            'Three black balls'
        ],
        correct: 1,
        explanation: 'Two black balls in a vertical line indicate a vessel not under command (Rule 27(a)).'
    }
];

function getLightsFlagsQuestionPool() {
    const out = [];
    if (Array.isArray(lightsFlagsQuestions) && lightsFlagsQuestions.length) {
        out.push(...lightsFlagsQuestions);
    }
    if (typeof getBuoysQuizQuestions === 'function') {
        try {
            const bq = getBuoysQuizQuestions();
            if (Array.isArray(bq) && bq.length) out.push(...bq);
        } catch (err) {
            console.error(err);
        }
    }
    return out;
}

let currentQuestion = 0;
let userAnswers = [];
let quizQuestions = [];

const quizState = {
    get currentQuestion() { return currentQuestion; },
    set currentQuestion(val) { currentQuestion = val; },
    get userAnswers() { return userAnswers; },
    get quizQuestions() { return quizQuestions; }
};

function normaliseTopicToken(token) {
    const value = String(token || '').trim().toLowerCase();
    if (value === 'flag') return 'flags';
    if (value === 'light') return 'lights';
    if (value === 'shape' || value === 'day shape') return 'shapes';
    if (value === 'buoy' || value === 'iala buoy') return 'buoys';
    return value;
}

if (typeof document !== 'undefined') {
    function initLightsQuiz() {
        if (typeof QuizUtils !== 'undefined') {
            QuizUtils.setupQuizHandlers({
                startQuiz,
                submitAnswer,
                nextQuestion,
                prevQuestion
            });
        }
        document.addEventListener('change', (e) => {
            const input = e.target;
            if (input.name !== 'quizTopic' || input.type !== 'checkbox') return;
            if (document.querySelectorAll('input[name="quizTopic"]:checked').length === 0) {
                input.checked = true;
            }
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightsQuiz);
    } else {
        initLightsQuiz();
    }
}

function startQuiz() {
    try {
        const fullPool = getLightsFlagsQuestionPool();
        if (!fullPool.length) {
            console.error('Error: no quiz questions loaded');
            alert('Error: Quiz questions not loaded. Please refresh the page.');
            return;
        }
        if (typeof shuffleArray !== 'function') {
            console.error('Error: shuffleArray not loaded');
            alert('Error: Quiz dependencies not loaded. Please refresh the page.');
            return;
        }
        const selectedTopics = Array.from(document.querySelectorAll('input[name="quizTopic"]:checked'), (el) => normaliseTopicToken(el.dataset.topic || el.value || el.id || '')).filter(Boolean);
        const pool = selectedTopics.length === 0
            ? fullPool
            : fullPool.filter((q) => selectedTopics.includes(normaliseTopicToken(q.type || q.topic || q.category || '')));
        if (pool.length === 0) {
            alert('No questions available for the selected types. Please choose at least one question type that has questions.');
            return;
        }
        const countInput = document.querySelector('input[name="questionCount"]:checked');
        const parsed = parseInt(countInput?.value || '30', 10);
        const safeParsed = Number.isNaN(parsed) ? 30 : parsed;
        const count = Math.max(1, Math.min(safeParsed, pool.length));
        const shuffled = shuffleArray(pool);
        const seenKeys = new Set();
        const deduped = shuffled.filter((q) => {
            const key = q.type === 'flags' && q.image
                ? `${q.image}_${q.correct}`
                : `${q.question}_${q.image || ''}_${q.correct}`;
            if (seenKeys.has(key)) return false;
            seenKeys.add(key);
            return true;
        });
        quizQuestions = deduped.slice(0, count);
        currentQuestion = 0;
        userAnswers = new Array(quizQuestions.length).fill(null);
        document.getElementById('quizIntro').classList.add('hidden');
        document.getElementById('quizContainer').classList.remove('hidden');
        document.getElementById('totalQuestions').textContent = quizQuestions.length;
        loadQuestion();
    } catch (e) {
        console.error('Error starting quiz:', e);
        alert('Error starting quiz: ' + (e.message || 'Unknown error'));
    }
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    if (!question) return;
    const container = document.getElementById('questionContainer');
    if (!container) return;
    QuizUtils.updateProgressText(quizState);
    QuizUtils.updateProgressBar(quizState);
    if (!question._optionOrder) {
        question._optionOrder = shuffleArray(question.options.map((_, i) => i));
    }
    const order = question._optionOrder;
    const optionsHtml = order.map((origIndex) => `
        <div class="option" data-index="${origIndex}">
            <input type="radio" name="answer" id="option${origIndex}" value="${origIndex}"
                ${userAnswers[currentQuestion] === origIndex ? 'checked' : ''}>
            <label for="option${origIndex}" class="option-label">${escapeHtml(question.options[origIndex])}</label>
        </div>
    `).join('');
    container.innerHTML = QuizUtils.renderQuestionHTML(question, optionsHtml, currentQuestion, quizQuestions.length);
    QuizUtils.setupOptionHandlers();
    document.getElementById('prevQuestion').disabled = currentQuestion === 0;
    document.getElementById('questionFeedback').classList.add('hidden');
    document.getElementById('submitAnswer').classList.remove('hidden');
    document.getElementById('nextQuestion').classList.add('hidden');
    if (userAnswers[currentQuestion] !== null) {
        showFeedback();
    }
}

function submitAnswer() {
    QuizUtils.submitAnswer(quizState, showFeedback);
}

function showFeedback() {
    QuizUtils.showFeedback(quizState);
}

function nextQuestion() {
    QuizUtils.nextQuestion(quizState, loadQuestion, showResults);
}

function prevQuestion() {
    QuizUtils.prevQuestion(quizState, loadQuestion);
}

function showResults() {
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');
    
    const totalCount = quizQuestions.length;
    const passingCount = Math.ceil(totalCount * 0.7);
    const { correctCount } = QuizUtils.displayResultsSummary(quizState, 70, {
        passingCount,
        totalCount
    });
    
    const breakdown = document.getElementById('resultsBreakdown');
    breakdown.innerHTML = '<h3>Question Review</h3>';
    
    const structuredQuestions = quizQuestions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const div = document.createElement('div');
        div.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        div.innerHTML = QuizUtils.createResultItemHTML(question, index, userAnswer, isCorrect, true);
        breakdown.appendChild(div);
        
        return {
            question: question.question,
            correct: isCorrect,
            userAnswer: userAnswer,
            correctAnswer: question.correct,
            options: question.options,
            type: question.type
        };
    });
    
    saveExamResult('lights-flags', correctCount, quizQuestions.length, structuredQuestions);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lightsFlagsQuestions };
}
