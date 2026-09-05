/**
 * Understanding quiz: legacy + doc-generated block + Fleet papers.
 * Exports window/module: understandingQuestions, quiz arrays, expandUnderstandingQuizExplanation (feedback + PDF).
 *
 * Feedback rationales are built in the browser in understanding-quiz.js (short lines citing Rules found in the stem/options).
 */

const understandingQuizLegacy = [
    {
        "id": "understand-legacy-01",
        "question": "You are the stand-on vessel in a crossing situation. The give-way vessel is not taking action to avoid collision. What should you do?",
        "options": [
            "Reduce to bare steerage way and allow the give-way vessel additional time and sea room to fulfil her obligation under Rule 16",
            "Take action to avoid collision as soon as it becomes apparent that the give-way vessel is not taking appropriate action",
            "Sound five short and rapid blasts on the whistle and then alter course to port to pass astern of the other vessel",
            "Continue to hold your course and speed as required under Rule 17(a)(i), since the give-way vessel retains sole responsibility to manoeuvre clear"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-02",
        "question": "In restricted visibility, your radar shows a vessel forward of your beam. What course alteration should you avoid?",
        "options": [
            "Alteration to port",
            "Alteration to starboard",
            "Either direction is acceptable",
            "No alteration should be made"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-03",
        "question": "You are overtaking another vessel in a narrow channel. What signals must you sound?",
        "options": [
            "One short blast followed by two prolonged blasts, requesting the other vessel to take action to permit safe passing",
            "One prolonged blast followed by one short blast, indicating an intention to overtake on the starboard side of the channel",
            "Five short and rapid blasts, indicating doubt about the other vessel’s intentions or whether sufficient action is being taken",
            "Two prolonged blasts followed by one short blast, indicating an intention to overtake on the starboard side in the narrow channel"
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-04",
        "question": "Two sailing vessels on different tacks are approaching each other. Which vessel must give way?",
        "options": [
            "The vessel to windward, since the windward vessel has better visibility and is expected to give way on any tack",
            "The vessel on the leeward side, as the vessel in the lee position can observe the other’s sails more clearly and manoeuvre first",
            "The vessel with the wind on the port side shall keep out of the way of the other",
            "The vessel with wind on the starboard side, because the starboard-tack vessel is expected to give way to the port-tack vessel"
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-05",
        "question": "The master asks you to justify your speed. What is the primary factor in determining safe speed?",
        "options": [
            "The speed recommended by the port authority or local navigational directive",
            "A speed at which you can take proper avoiding action and stop within a distance suited to the conditions",
            "The speed that allows you to stop within half the distance of visibility",
            "The prevailing traffic density and concentration of vessels in the area"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-06",
        "question": "You hear one prolonged blast ahead in fog. What does this signal mean?",
        "options": [
            "Vessel aground",
            "Power-driven vessel underway but stopped",
            "Power-driven vessel making way",
            "Vessel at anchor"
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-07",
        "question": "In a head-on situation between two power-driven vessels, what action should both vessels take?",
        "options": [
            "Both vessels alter course to starboard so that each passes on the port side of the other",
            "Both vessels alter course to port so that each passes on the starboard side of the other",
            "The vessel that has the other on her starboard side must give way, applying the crossing rule of Rule 15",
            "The vessel proceeding against the tidal stream must give way, as she has greater ability to reduce speed over the ground"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-08",
        "question": "A vessel constrained by her draught is approaching. What is your responsibility?",
        "options": [
            "Both vessels share equal collision-avoidance responsibility because Rule 18(d) uses advisory language that does not create a binding obligation",
            "The CBD vessel must keep out of your way, because a power-driven vessel making way retains priority over a CBD vessel outside narrow channels",
            "You must keep out of the way under Rule 18(a), as the CBD vessel occupies the highest category in the hierarchy of vessel types",
            "You should avoid impeding her safe passage if the circumstances of the case admit"
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-09",
        "question": "When is a vessel considered to be overtaking another?",
        "options": [
            "When approaching from any direction abaft the beam of the other vessel and making a higher speed through the water",
            "When coming up from a direction more than 22.5 degrees abaft the beam of the other vessel",
            "When closing from a position where both sidelights and the stern light of the other vessel would be visible at night",
            "When approaching from within 22.5 degrees of the other vessel’s stern, that is, from a position where only her stern light would be visible at night"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-10",
        "question": "What lights does a vessel engaged in trawling display?",
        "options": [
            "Green over white",
            "Red over white",
            "White over red",
            "Two red lights"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-11",
        "question": "In a traffic separation scheme, when may you cross a separation zone?",
        "options": [
            "When the vessel has received advance clearance from the coastal State’s traffic-monitoring authority for the area",
            "When the vessel needs to proceed to a port on the other side of the scheme and the separation zone offers the most direct route",
            "When visibility exceeds five nautical miles and the crossing can be completed without impeding traffic in the adjacent lanes",
            "Only in an emergency to avoid immediate danger, or to engage in fishing within the separation zone"
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-12",
        "question": "What is your primary duty when you detect another vessel by radar in restricted visibility?",
        "options": [
            "Alter course to port to pass astern of the radar contact, as this is the standard avoidance manoeuvre for vessels detected forward of the beam",
            "Sound five short and rapid blasts to alert the other vessel to your presence and indicate concern about her closing approach",
            "Determine whether a close-quarters situation or risk of collision is developing and, if so, take avoiding action in ample time",
            "Maintain your present course and speed until the other vessel comes within visual range, then apply the normal steering and sailing rules"
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-13",
        "question": "A power-driven vessel and a sailing vessel are approaching. Who has right of way?",
        "options": [
            "The power-driven vessel, because her engine and propeller give her superior manoeuvrability and a faster response to helm orders",
            "The sailing vessel, as Rule 18 requires a power-driven vessel underway to keep out of the way of a sailing vessel",
            "The vessel that has the other on her own starboard side, following the crossing rule of Rule 15 which applies to all encounters",
            "The vessel on the port tack, applying the sailing-vessel right-of-way rules from Rule 12 regardless of the type of propulsion"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-14",
        "question": "What does the compass bearing of an approaching vessel tell you about collision risk?",
        "options": [
            "If the compass bearing changes appreciably, risk of collision exists because the other vessel is altering course toward you",
            "Compass bearings are reliable for assessing collision risk only when range is less than six nautical miles; beyond that, radar CPA is the sole authoritative measure",
            "If the compass bearing of the approaching vessel does not appreciably change, risk of collision shall be deemed to exist",
            "If the compass bearing remains steady, risk exists only when the other vessel is also power-driven; for sailing and fishing vessels the bearing criterion does not apply"
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-15",
        "question": "In a narrow channel, where should a vessel keep?",
        "options": [
            "As near as is safe and practicable to the outer limit of the channel on her starboard side",
            "As near as is safe and practicable to the outer limit on her port side, keeping the deeper water to starboard for safety",
            "In the centre of the channel, maintaining equal clearance from both banks and from any vessel approaching from the opposite direction",
            "On whichever side of the channel offers the deepest water, as the primary obligation under Rule 9 is to maintain adequate under-keel clearance"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-16",
        "question": "Two power-driven vessels are crossing. Which vessel is the give-way vessel?",
        "options": [
            "The vessel making the higher speed gives way, as she has greater ability to manoeuvre and more time to take avoiding action",
            "Vessel B must give way, because the vessel positioned on the port side of the other is designated the give-way vessel in a crossing",
            "Both vessels must alter course to starboard as though in a head-on situation, since their crossing courses converge from opposite sides",
            "Vessel A, which has Vessel B on her starboard side, must keep out of the way"
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-17",
        "question": "The other vessel is clearly the give-way ship. What action should the give-way vessel take, in principle?",
        "options": [
            "Take early and substantial action to keep well clear",
            "Make a succession of small course adjustments while monitoring the other vessel’s response on radar before committing to a larger alteration",
            "Sound one short blast and alter course to starboard by at least 10 degrees, the minimum change typically detectable on another vessel’s radar",
            "Reduce speed gradually while holding your present heading, allowing the stand-on vessel to pass safely ahead"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-18",
        "question": "A vessel displays two red lights in vertical line. What does this indicate?",
        "options": [
            "A vessel engaged in fishing with gear extending more than 150 metres",
            "A vessel not under command",
            "A vessel restricted in her ability to manoeuvre",
            "A vessel constrained by her draught"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-19",
        "question": "What is the purpose of maintaining a proper lookout?",
        "options": [
            "To assist in navigating the ship along her planned track",
            "To monitor other vessels’ movements only in congested waters",
            "To make a full appraisal of the situation and of the risk of collision",
            "To record the position and identity of other vessels for the logbook"
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-20",
        "question": "In restricted visibility, you hear a fog signal forward of your beam. What should you do?",
        "options": [
            "Maintain your present course and speed while sounding the prescribed fog signals at two-minute intervals, relying on the other vessel to take avoiding action",
            "Alter course to starboard immediately to open the bearing and increase separation, then resume your base course once the signal fades",
            "Increase to full manoeuvring speed to clear the area before the other vessel closes, minimising the time you spend in a potential close-quarters situation",
            "Reduce speed to the minimum at which you can be kept on course, or take all way off if necessary, and navigate with extreme caution until the danger of collision is past"
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-21",
        "question": "You are closing past a vessel you have been overtaking. When does the overtaking situation end?",
        "options": [
            "As soon as you draw abeam of the other vessel",
            "As soon as the relative bearing changes past the beam",
            "Only when you are finally past and clear of the overtaken vessel",
            "When the overtaken vessel signals agreement that you are clear"
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-22",
        "question": "A cadet asks about the “escape clause” in the Rules. What does Rule 2 (Responsibility) emphasize?",
        "options": [
            "Strict compliance with every rule is mandatory regardless of the danger it may create in particular circumstances",
            "Compliance with the rules automatically relieves a vessel of liability for the consequences of any neglect of seamanship",
            "The rules apply only to encounters between vessels that are in sight of one another",
            "Due regard must be had to all dangers and special circumstances; departure from the rules may be necessary to avoid immediate danger"
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-23",
        "question": "A small sailing vessel is in a narrow channel where a large ship can only navigate. Who has priority?",
        "options": [
            "The sailing vessel retains priority under Rule 18, because the general hierarchy places sailing vessels above power-driven vessels in every encounter",
            "The vessel that can safely navigate only within the narrow channel has priority under Rule 9; the sailing vessel must not impede her passage",
            "The vessel to starboard has priority, applying the crossing rule of Rule 15 regardless of whether the encounter occurs inside a narrow channel",
            "Both vessels share equal responsibility, as Rule 9 applies only to vessels that are 20 metres or more in length"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-24",
        "question": "What alterations should be avoided when taking action to avoid collision?",
        "options": [
            "A succession of small alterations of course and/or speed",
            "A reduction in speed without any corresponding change in heading, since a speed change alone may be difficult for the other vessel to detect by sight or radar",
            "An alteration toward the other vessel when you have limited sea room astern and cannot safely turn away",
            "A single large alteration of course, because a conspicuous change makes it harder for the other vessel to predict your final heading"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-25",
        "question": "At what point should collision avoidance action be taken?",
        "options": [
            "Only after the other vessel has sounded a manoeuvring or warning signal confirming her intended action",
            "Positive action in ample time, with due regard to the observance of good seamanship",
            "After the CPA and TCPA have been confirmed by at least two successive ARPA plots at six-minute intervals",
            "When the range has closed to within two nautical miles, because at greater distances any manoeuvre may be premature if the other vessel also alters"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-26",
        "question": "What additional equipment considerations apply to vessels with radar when determining safe speed?",
        "options": [
            "Only the range scale currently selected on the radar display and the number of targets within the guard zone",
            "Radar provides a complete picture of all traffic, so no additional safe-speed considerations are needed beyond those for vessels without radar",
            "The characteristics, efficiency, and limitations of the radar equipment, including its ability to detect small vessels and the effect of sea state",
            "Radar allows the OOW to assess the situation remotely, so the vessel may proceed at her normal sea speed provided a continuous watch is maintained"
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-27",
        "question": "How should a vessel navigate when nearing a bend in a narrow channel?",
        "options": [
            "Come to bare steerage way and wait until radar or AIS confirms that no vessel is approaching from the other side of the bend before proceeding",
            "Reduce to dead slow ahead and post additional lookouts forward, but avoid sounding any whistle signal that might confuse an approaching vessel",
            "Sound five short and rapid blasts to alert any vessel that may be approaching from beyond the bend",
            "Navigate with particular alertness and caution, and sound one prolonged blast"
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-28",
        "question": "You are in a power-driven vessel in open water. What is the general hierarchy when you meet other types of vessel under Rule 18?",
        "options": [
            "A power-driven vessel must keep clear of vessels not under command, restricted in ability to manoeuvre, engaged in fishing, and sailing vessels",
            "All vessel types share equal collision-avoidance responsibility, and the vessel-type hierarchy applies only inside narrow channels",
            "A power-driven vessel has priority over vessels not under command whenever she is proceeding at safe speed in a traffic lane",
            "A power-driven vessel must give way only to vessels that are displaying special shapes or lights indicating a restricted condition"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-29",
        "question": "You need to cross a traffic lane to reach a berth. When crossing a traffic lane, at what angle should you cross relative to the general flow?",
        "options": [
            "Parallel to the traffic flow until a suitable gap appears, then turning sharply across the lane to complete the crossing in the shortest time",
            "As nearly as practicable at right angles to the general direction of traffic flow",
            "At approximately 45 degrees to the general direction of traffic flow, to minimise the time spent inside the lane while maintaining effective steerage",
            "At the discretion of the OOW, provided the crossing is completed in the shortest practicable time and does not impede vessels following the lane"
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text."
    },
    {
        "id": "understand-legacy-30",
        "question": "The ARPA plot looks ambiguous. What should you assume if there is any doubt about collision risk?",
        "options": [
            "Risk of collision shall be deemed to exist, and appropriate action must be taken accordingly",
            "Continue monitoring for at least 15 minutes to establish a reliable trend in the bearing and range before deciding whether action is warranted",
            "Take no action until a full radar plot confirms the other vessel’s course and speed, since premature manoeuvring may create a worse situation",
            "Contact the other vessel on VHF to ascertain her intentions before committing to any change of course or speed"
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text."
    }
];

// BEGIN GENERATED DOC QUESTIONS
const understandingQuizFromDoc = [
    {
        "id": "understand-doc-001",
        "question": "You are the officer of the watch on a Type 45 destroyer leaving Faslane for Portsmouth; the forenoon watch has just passed Cloch Point and the navigator promised good visibility and clear skies. The captain asks the senior training officer: must a visiting US Navy submarine comply with the Rules on navigation lights? What do the Rules say?",
        "options": [
            "Yes — but she may adopt alternative lighting arrangements without government approval if full compliance is impracticable.",
            "No — as a vessel of special construction, her government determines the closest practicable compliance, and she must comply as nearly as possible.",
            "Yes — all military vessels must comply fully with standard lighting rules regardless of their construction.",
            "No — military submarines are fully exempt from the International Regulations for Preventing Collisions at Sea."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-002",
        "question": "Whilst proceeding down Hunterston Channel, the QM spots a small vessel engaged in fishing within the channel. What are the responsibilities of the respective vessels within this Narrow Channel in terms of who should avoid impeding whom?",
        "options": [
            "Both vessels are required to alter course to starboard and pass port-to-port as in a head-on meeting situation.",
            "The Type 45 Destroyer must give way to the fishing vessel under Rule 18 because a power-driven vessel keeps clear of a vessel engaged in fishing.",
            "The fishing vessel retains the right of way under Rule 18 because she is actively engaged in fishing with gear restricting her manoeuvrability.",
            "The fishing vessel shall not impede the passage of any other vessel navigating within a narrow channel or fairway."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-003",
        "question": "Who is the Give Way Vessel between the fishing vessel and you if risk of collision exists and why? (R8f, iii)",
        "options": [
            "The fishing vessel, because a vessel under 20 metres must keep clear of any larger vessel in a narrow channel under Rule 9(b).",
            "The Type 45 Destroyer, because Rule 18 states a power-driven vessel making way must keep out of the way of a vessel engaged in fishing.",
            "The fishing vessel, because the Type 45 is constrained by its draught.",
            "The Type 45 Destroyer, because it is overtaking the fishing vessel from a direction more than 22.5 degrees abaft the beam."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-004",
        "question": "You pass through Hunterston Channel and encounter a yacht race. Traffic is exceptionally heavy and it is becoming difficult to assess the situation and likelihood of risk of collision. What action shall you take? (R8e)",
        "options": [
            "Slacken your speed or take all way off by stopping or reversing means of propulsion to allow more time to assess the situation.",
            "Alter course to port to go completely around the yacht race.",
            "Maintain course and speed to ensure your movements are predictable.",
            "Sound five short and rapid blasts and maintain speed."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-005",
        "question": "Contrary to the NO's brief you sight a thick fog bank approximately 1 NM away. At what point shall you turn on your navigation lights and why? (R20)",
        "options": [
            "From sunset to sunrise, and also from sunrise to sunset in restricted visibility.",
            "When the Commanding Officer assesses that the reduced visibility warrants illumination and orders the lights switched on.",
            "Only between sunset and sunrise; the fog alone does not trigger a requirement to show navigation lights by day.",
            "Only when the vessel physically enters the fog bank, as lights shown in clear air may be confused with shore lights."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-006",
        "question": "Just as you enter the fog bank the MEO enters the bridge and requests to take the stbd engine to one hours’ notice in order to carry out some maintenance. Is this appropriate? (R19b)",
        "options": [
            "No — machinery should not be taken offline while in restricted visibility unless there is a redundant system that preserves immediate manoeuvring capability.",
            "Yes, provided the remaining engine can deliver full manoeuvring power and the bridge is informed of any limitations.",
            "Yes, provided both the Commanding Officer and the Navigator give their formal approval to the maintenance request.",
            "No — in restricted visibility, engines must be ready for immediate manoeuvre."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-007",
        "question": "You hear one prolonged blast ahead of the ship but are unsure as to the exact direction it came from. What action shall you take? (R19e)",
        "options": [
            "Sound two prolonged blasts in reply to warn the other vessel of your presence and maintain your current course.",
            "Reduce speed to the minimum at which she can be kept on course, and if necessary, take all way off, navigating with extreme caution until danger of collision is over.",
            "Alter course boldly to starboard, as Rule 19(d) favours starboard alterations for any contact detected ahead in restricted visibility.",
            "Stop engines immediately and prepare to let go the anchor while sounding the prescribed anchor signal."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-008",
        "question": "Your foc'sle lookout reports a sound signal of one prolonged blast followed by two short blasts. What sort of vessel could this be? (R35c)",
        "options": [
            "A power-driven vessel making way through the water, signalling her presence in restricted visibility to other nearby traffic.",
            "A vessel at anchor in or near an area of restricted visibility, warning approaching traffic of her position and of her swinging circle.",
            "A vessel not under command, restricted in ability to manoeuvre, constrained by draught, sailing, engaged in fishing, or towing/pushing.",
            "A pilot vessel actively engaged on pilotage duty, signalling to an inbound vessel that a pilot is available and ready to board."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-009",
        "question": "As you pass the entrance to Brodick Bay, you hear a sound signal consisting of one short, one prolonged and one short sounded in succession. What precisely does this signify? (R35g)",
        "options": [
            "A vessel at anchor warning an approaching vessel of her position and of the possibility of collision.",
            "A vessel aground in a narrow channel, alerting nearby traffic to the hazard posed by her immovable position.",
            "A vessel signalling her intention to alter course to starboard when navigating in a narrow channel or fairway.",
            "A vessel restricted in her ability to manoeuvre, warning other traffic to keep well clear and pass at safe distance."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-010",
        "question": "This vessel passes clear and, still in restricted visibility, you next make out the following lights passing down your starboard side: [Vertical arrays of White and Red/Green lights]. What do they likely indicate? (R24a)",
        "options": [
            "A vessel engaged in fishing or trawling.",
            "A vessel restricted in her ability to manoeuvre.",
            "A power-driven vessel towing, with a length of tow over 200m.",
            "A minesweeper engaged in clearance operations."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-011",
        "question": "You are just about to go off watch when the SCC detects excessive vibration on the port shaft, so the CO decides to go to anchor. What sound signals would you make at anchor in restricted visibility and what additional measures can you take?",
        "options": [
            "Sound 1 prolonged blast every 2 minutes.",
            "Sound 2 prolonged blasts every 2 minutes.",
            "Ring the bell and gong simultaneously for 10 seconds every minute.",
            "Ring the bell rapidly for 5 seconds every minute; additionally, may sound 1 short, 1 prolonged, 1 short blast."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-012",
        "question": "The defect is fixed and you return for your next watch to find the ship back underway although visibility remains reduced. The CO asks for your assessment of safe speed. List considerations you should make regarding radar.",
        "options": [
            "Target speed and course, closest point of approach, time to CPA, bow crossing range and time, and bearing changes of detected contacts.",
            "Vessel's draught relative to available depth, traffic density, wind direction and sea state, tidal current, and prevailing visibility.",
            "Engine power and manoeuvring capability, fuel reserves, steering gear condition, proximity of navigational hazards, and shore lighting.",
            "Characteristics/efficiency of radar, range scale in use, effect of sea state/weather on detection, small vessel detection, number/location of targets, and visibility assessment by radar."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-013",
        "question": "Visibility improves and you take the ship to flying stations. As you give a green light, you spot a minehunter engaged in clearance operations on a steady bearing, range 2 NM. Under the IRPCS alone (ATP1(E) covers allied tactical priorities separately), which statement best describes who must keep clear?",
        "options": [
            "The unit launching the helicopter, because flight operations are given higher priority under ATP1(E) than mine clearance.",
            "The minehunter, because mine clearance operations classify her as RAM and a power-driven vessel must keep clear of RAM vessels.",
            "Neither vessel has right of way; both must alter course to starboard under the head-on rule to pass port-to-port.",
            "The vessel which has the other on her starboard side, applying the normal crossing rule for two power-driven vessels."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-014",
        "question": "You sight a small vessel engaged in fishing at GREEN 30, range 3 miles. The bearing is steady and the range is closing. What action is required by the Rules?",
        "options": [
            "Sound at least five short and rapid blasts to warn the fishing vessel that you consider her to be impeding your passage.",
            "Alter course to port to pass astern of the fishing vessel, as Rule 19(d) requires avoiding action to port for contacts on the starboard bow.",
            "Keep out of the way of the vessel engaged in fishing.",
            "Maintain course and speed as the stand-on vessel; the fishing vessel has you on her starboard side and must keep clear under Rule 15."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-015",
        "question": "The busy watch continues and you sight a coaster at RED 40, range 6 miles (60° on her stbd bow). The range is closing and the bearing is moving very slowly right. What action is required by the Rules?",
        "options": [
            "Stand on; the coaster has you on her starboard side and must keep out of the way.",
            "Reduce to bare steerage way and track the coaster until she alters course, then resume your original speed.",
            "Keep out of the way of the coaster, because you have her on your port side and she is the stand-on vessel.",
            "Alter course to port immediately to open the range and pass astern of the coaster before she reaches your track."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-016",
        "question": "You become concerned with the developing situation with the coaster. Would a sound signal be appropriate and what should be sounded?",
        "options": [
            "No — a sound signal is appropriate only after you have exhausted all course and speed alterations and the situation remains unresolved.",
            "Yes, one short blast to signal that you are altering course to starboard to keep clear of the coaster.",
            "Yes, two prolonged blasts followed by two short blasts to indicate you intend to overtake on her port side.",
            "Yes, at least five short and rapid blasts to indicate doubt that the other vessel is taking sufficient action to avoid collision."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-017",
        "question": "When do the Rules allow the stand-on vessel to manoeuvre?",
        "options": [
            "As soon as the other vessel is identified visually, regardless of whether she has begun to alter course or speed.",
            "As soon as it becomes apparent that the give-way vessel is not taking appropriate action.",
            "The stand-on vessel may not manoeuvre under any circumstances; doing so would confuse the give-way vessel.",
            "Only when collision is so close that it cannot be avoided by the action of the give-way vessel alone."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-018",
        "question": "What specifically should be avoided if the stand-on vessel manoeuvres by altering course?",
        "options": [
            "Altering course to starboard, because a starboard alteration may cross ahead of the vessel on her port side.",
            "Reducing speed below bare steerage way, because maintaining some headway is essential for rudder effectiveness.",
            "Increasing speed to cross ahead of the vessel on her port side before the range closes further.",
            "Altering course to port for a vessel on her own port side."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-019",
        "question": "You sight a vessel close in, apparently stopped off Fowey. How can you determine if the vessel is aground?",
        "options": [
            "She sounds a rapid ringing of the bell for about five seconds at intervals of not more than one minute, signalling her position.",
            "By day she displays three black balls in a vertical line; by night she shows two red lights in a vertical line plus anchor lights.",
            "She flies the international code flag Alpha by day and shows an all-round flashing yellow light at night to mark her position.",
            "She displays a single black cylinder by day with additional all-round red lights at night, signalling constrained by draught."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-020",
        "question": "As you alter to pass Dodman Point, you sight a small vessel displaying three shapes in a vertical line: ball, diamond, ball. How should you approach this vessel?",
        "options": [
            "Sound five short and rapid blasts to alert the vessel that she is obstructing the channel.",
            "Maintain course and speed; the vessel is the stand-on vessel in this crossing geometry.",
            "Keep out of its way as it is restricted in its ability to manoeuvre.",
            "Reduce speed and obtain the vessel’s name and port of registry before deciding on further action."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-021",
        "question": "List two operations which this small vessel (ball, diamond, ball) could be engaged in.",
        "options": [
            "Dredging or conducting underwater operations near an obstruction, where passage on one side may be unsafe for other vessels.",
            "Fishing with nets or lines extending more than 150 metres horizontally from the vessel into the surrounding waterway.",
            "Towing another vessel astern where the length of the tow measured from stern of tug to stern of tow exceeds 200 metres.",
            "Mine clearance operations in a designated area, indicating to other traffic that it is dangerous to approach within 1000 metres."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-022",
        "question": "The lookout reports an open boat showing a rigid replica of International Code flag “A”. What does this signify?",
        "options": [
            "The vessel is restricted in ability to manoeuvre due to towing.",
            "The vessel is engaged in diving operations; keep well clear at slow speed.",
            "The vessel is carrying dangerous explosive goods.",
            "The vessel is requesting a pilot."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-023",
        "question": "Light is starting to fade. Can you exhibit navigation lights before sunset? Explain your answer.",
        "options": [
            "Yes — they may be exhibited in restricted visibility or whenever other circumstances make it necessary.",
            "No — navigation lights may only be exhibited between sunset and sunrise; showing them in daylight could confuse other vessels.",
            "Only if the vessel is at anchor or aground at the time.",
            "Only when the vessel is operating within the limits of a traffic separation scheme during reduced daylight."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-024",
        "question": "List three visual methods by which a small yacht without VHF could indicate distress by day.",
        "options": [
            "Firing a red parachute rocket, transmitting a distress alert by VHF digital selective calling on channel 70, or displaying orange smoke.",
            "Showing an orange smoke signal by day, repeatedly dipping and raising the national ensign, or launching a green star signal.",
            "Firing a gun at about one-minute intervals, continuous sounding of a fog-signal apparatus, or slowly and repeatedly raising and lowering outstretched arms.",
            "Flying the international code flag Alpha from the masthead, directing a searchlight toward other vessels, or burning a red handheld flare."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-025",
        "question": "You are OOW in HMS Somerset on the morning watch in the Gulf of Oman. You have just sailed from Fujairah, skies are clear for now, but the METO forecast haze later. As you slow to disembark the pilot, a dhow that sailed shortly after you begins to close. The port lookout reports she is dragging nets through the water on each side. How would you classify her under the Rules?",
        "options": [
            "A vessel not under command, because the deployed gear has rendered her unable to manoeuvre as required by the Rules.",
            "A vessel engaged in fishing, because the nets restrict her manoeuvrability.",
            "A vessel restricted in her ability to manoeuvre, because her gear prevents her from keeping clear of other vessels.",
            "A power-driven vessel underway and making way, because the nets are being towed by engine power rather than wind."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-026",
        "question": "A dhow is dragging nets through the water on each side and is classified as a vessel engaged in fishing. By day, what shapes would you expect her to show?",
        "options": [
            "A single cone shape with the apex pointing downward, displayed where it can best be seen by other nearby vessels.",
            "A black cylinder shape displayed where it can best be seen, signalling that the vessel is constrained by her draught.",
            "Two black balls arranged in a vertical line where they can best be seen, signalling a vessel not under command.",
            "Two cones with their apexes together in a vertical line, displayed where it can best be seen by other vessels."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-027",
        "question": "The same fishing dhow is still closing on a steady bearing from relative 150° (on your starboard quarter). Who is the give-way vessel, and why?",
        "options": [
            "The dhow, because any vessel overtaking any other shall keep out of the way of the vessel being overtaken.",
            "The dhow, because she is under 20 metres and must not impede a vessel that can safely navigate only within the channel.",
            "HMS SOMERSET, because the dhow is on her starboard quarter and the crossing rule of Rule 15 applies to this geometry.",
            "HMS SOMERSET, because a power-driven vessel underway must keep out of the way of a vessel engaged in fishing under Rule 18."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-028",
        "question": "The chart briefing turns to local regulations. Who may promulgate special local rules, and what limitation does the COLREGs place on them?",
        "options": [
            "Any local port authority, and such rules override the international rules within the limits of the harbour approach.",
            "The International Maritime Organization (IMO), and they apply uniformly on the high seas and all connected waters.",
            "An appropriate authority, provided such rules conform as closely as possible to the International Rules.",
            "The Commanding Officer of a naval vessel, provided the rules are logged in the ship’s standing orders."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-029",
        "question": "The junior officer asks you to explain safe speed. What factors should you take into account when deciding on a safe speed?",
        "options": [
            "Distance to the next port of call, fuel consumption rate, and the strength of tidal streams along the route.",
            "Proximity of other warships, the threat assessment level, and the vessel’s current weapons posture.",
            "Engine power, maximum radar detection range, and the crew’s level of fatigue during the current watch.",
            "State of visibility, traffic density, manoeuvrability, background light, wind/sea/current, and draught."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-030",
        "question": "A target holds a steady compass bearing. What should you consider when deciding whether a risk of collision exists?",
        "options": [
            "Deem risk exists only if the ARPA-derived CPA is less than 500 yards; if in doubt, maintain course and speed until the situation clarifies.",
            "Deem risk exists if the compass bearing does not appreciably change; if in doubt, assume risk does exist.",
            "Deem risk exists if the other vessel is larger and deeper-draughted; if in doubt, alter course to port to pass under her stern.",
            "Deem risk exists only when both vessels are power-driven and within three nautical miles; if in doubt, reduce speed to half ahead."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-031",
        "question": "You watch a vessel approach directly ahead on the bow. What kind of situation is developing, and what action will you take?",
        "options": [
            "Crossing situation; the vessel on your starboard side must keep clear, so maintain course and speed as the stand-on vessel.",
            "Overtaking situation; you are being overtaken, so hold course and speed while the other vessel keeps out of the way.",
            "Head-on situation; alter course to starboard to pass port-to-port and sound one short blast.",
            "Special circumstances under Rule 2; sound five short and rapid blasts, then reverse propulsion to avoid immediate danger."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-032",
        "question": "After your avoiding action, you discuss good seamanship with the OOW. What should be the result of your action to avoid collision?",
        "options": [
            "Passing at a safe distance; assess by carefully checking the effectiveness of the action until the other vessel is finally past and clear.",
            "Crossing ahead of the other vessel while she is still at sufficient range to take independent avoiding action.",
            "Bringing the vessel to a complete stop in the water and waiting for the other vessel to pass clear on her own.",
            "Compelling the other vessel to alter her course or speed by the forcefulness of your own manoeuvre."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-033",
        "question": "Haze rolls in and visibility drops. What speed and machinery readiness should you adopt?",
        "options": [
            "Maximum speed; engines ready for normal use.",
            "Minimum steerage way; one engine offline for maintenance.",
            "A safe speed adapted to the restricted visibility; engines ready for immediate manoeuvre.",
            "Dead slow ahead; steering gear in manual."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-034",
        "question": "You detect a contact forward of the beam on radar only. What action do you take, and what specifically should be avoided?",
        "options": [
            "Alter course to port immediately to open the CPA to starboard; avoid altering to starboard because that may close the range.",
            "Take avoiding action in ample time; avoid altering course to port for a vessel forward of the beam and avoid altering course towards a vessel abeam or abaft the beam.",
            "Maintain course and speed while using radar plotting to refine the contact’s CPA and TCPA before committing to any manoeuvre.",
            "Stop engines and take all way off; avoid sounding any whistle signal that might be confused with a manoeuvring signal in clear visibility."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-035",
        "question": "You are working through Fleet ROR paper material on seaplanes and general rules. In the briefing room: do the International Regulations apply to a seaplane on the water?",
        "options": [
            "Yes — the definition of ‘vessel’ includes seaplanes used as a means of transportation on water.",
            "Only during the hours between sunset and sunrise, when the seaplane must carry the navigation lights prescribed for her length.",
            "Only when the seaplane is manoeuvring in the vicinity of other shipping and a risk of collision has been established.",
            "No — while on the water a seaplane is governed by aviation regulations until she is moored or secured to a berth."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-036",
        "question": "The instructor asks about seaplanes after landing. How should a seaplane operate once she is on the water?",
        "options": [
            "She must display an all-round flashing yellow light at all times while on the water to alert other vessels to her presence.",
            "She must operate exactly like a normal power-driven vessel of equivalent length, displaying the same lights and shapes.",
            "She has right of way over surface vessels because her higher speed and limited water manoeuvrability make her less able to keep clear.",
            "She shall, in general, keep well clear of all vessels and avoid impeding their navigation."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-037",
        "question": "You are studying traffic separation schemes. What do the IRPCS require when crossing a traffic lane within a TSS?",
        "options": [
            "Vessels shall cross on a heading as nearly as practicable at right angles to the general direction of traffic flow.",
            "Vessels may not cross traffic lanes except in emergency to avoid immediate danger or when engaged in fishing.",
            "Vessels may only cross a traffic lane if they are under 20 metres in length or are sailing vessels.",
            "Vessels may cross at any angle provided they do so at safe speed and sound five short blasts before entering the lane."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-038",
        "question": "What vessels are exempt from complying with the rules regarding TSS’s?",
        "options": [
            "Passenger ferries operating on a fixed schedule between ports on opposite sides of a traffic lane.",
            "Military vessels engaged in tactical operations, to the full extent required by their operational orders.",
            "Vessels restricted in their ability to manoeuvre engaged in an operation for the maintenance of safety of navigation or laying submarine cables, to the extent necessary to carry out the operation.",
            "Sailing vessels and vessels engaged in fishing, when their activity prevents them from following the general direction of traffic flow."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-039",
        "question": "How do the Rules describe the windward side of a sailing vessel?",
        "options": [
            "The side facing the true wind direction as measured by the wind instruments on board.",
            "The side opposite to that on which the mainsail is carried, or in the case of a square-rigged vessel, the side opposite to that on which the largest fore-and-aft sail is carried.",
            "The starboard side by convention, since the starboard tack is defined as the windward tack under the Rules.",
            "The side on which the vessel is heeling, since the heel direction indicates the side receiving the wind."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-040",
        "question": "The SCC requests an “Emergency Stop” on both shafts. What condition can you now claim and what shapes will you show?",
        "options": [
            "Restricted in Ability to Manoeuvre (RAM); ball, diamond, ball.",
            "Constrained by Draught (CBD); a black cylinder.",
            "Aground; three black balls in a vertical line.",
            "Not Under Command (NUC); two black balls in a vertical line."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-041",
        "question": "You are SSD officer of the watch on a 152 m Type 45 destroyer leaving Portsmouth. You have passed Spit Sand Fort abeam to starboard on the 181 leg toward the OSB; the forenoon watch is under way and rain has dropped visibility to about four miles with moderate traffic. You are in a narrow channel. Which classes of vessel must not impede your safe passage?",
        "options": [
            "Vessels restricted in their ability to manoeuvre, because their condition takes lower priority than a vessel following the channel.",
            "All power-driven vessels crossing from the port side of the channel, under the normal crossing rule of Rule 15.",
            "Ferries and passenger ships operating on a fixed route within the harbour approach.",
            "Vessels of less than 20 meters in length or sailing vessels."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-042",
        "question": "As you notice a hovercraft (&gt;50m length) making way at night, what lights would you expect it to display?",
        "options": [
            "Normal power-driven vessel lights plus an all-round flashing yellow light.",
            "Two masthead lights in a vertical line, sidelights, a stern light, and a flashing red light visible all round.",
            "Three all-round green lights arranged in a triangle at the masthead, plus normal sidelights and stern light.",
            "Sidelights, a stern light, and a single all-round white light at the masthead, with no additional special light."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-043",
        "question": "You sight a motor tanker head-on. What sound signal do you make when altering course to starboard?",
        "options": [
            "One short blast, indicating an alteration of course to starboard.",
            "Two short blasts, indicating an alteration of course to port.",
            "One prolonged blast, indicating the vessel is approaching a bend in the channel.",
            "Three short blasts, indicating that the vessel's engines are operating astern."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-044",
        "question": "You sight a large vessel displaying a black cylinder. Which vessels should avoid impeding her safe passage?",
        "options": [
            "All vessels in the vicinity, including those not under command and those restricted in their ability to manoeuvre.",
            "Only sailing vessels and vessels under 20 metres, as these are the categories listed in Rule 18(d).",
            "Any vessel other than a vessel not under command or a vessel restricted in her ability to manoeuvre.",
            "Only vessels engaged in fishing within the same waterway, because their gear may restrict their ability to manoeuvre."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-045",
        "question": "In restricted visibility, you hold a faint radar echo at R20, range 5 cables but cannot track it effectively. What action should you take?",
        "options": [
            "Maintain course and speed until the other vessel is sighted visually, then take appropriate avoiding action if required.",
            "Reduce speed to the minimum at which the ship can be kept on her course, or take all way off, and navigate with extreme caution.",
            "Increase speed to clear the area as quickly as possible while sounding the appropriate fog signal at regular intervals.",
            "Make a bold alteration of course to port to increase the range, while continuing to monitor the target closely on radar."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    },
    {
        "id": "understand-doc-046",
        "question": "If taking action to avoid collision by alteration of course alone, what should you consider regarding the alteration?",
        "options": [
            "It should consist of a series of small successive adjustments to course, allowing the other vessel time to observe and respond.",
            "It should be made to port where there is sufficient sea room, as this is the convention accepted under the collision regulations.",
            "It should be large enough to be readily apparent to another vessel observing visually or by radar; a succession of small alterations should be avoided.",
            "It should be accompanied by five or more short and rapid blasts on the whistle, along with the corresponding light signal."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "ROR Understand quiz question.docx"
    }
];
// END GENERATED DOC QUESTIONS

// BEGIN FLEET PAPERS (Fleet ROR exam PDFs; rule refs removed from stems)
const understandingQuizFleetPapers = [
    {
        "id": "fleet-201412-dec-q01",
        "question": "You are discussing a traffic separation scheme adopted by an IMO member state. The Rules are on the table. What obligation are you not relieved of merely because you are following the TSS?",
        "options": [
            "You are relieved of Part B steering and sailing rules while proceeding in the appropriate traffic lane.",
            "Only vessels under 20 m retain full obligations under all Rules inside a TSS.",
            "Obligations under the Rules apply only when visibility is restricted.",
            "The scheme does not relieve any vessel of her obligation under any of the Rules."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q02",
        "question": "Your ship is about to use a traffic lane. How does Rule 10 require you to use that lane?",
        "options": [
            "Enter the lane at right angles from either side and proceed along the centreline; cross separation zones freely provided you give way to vessels already in the lane.",
            "Keep to the centreline of the lane unless overtaking; join or leave only at designated entry points; vessels in the lane have right of way over all crossing traffic.",
            "Proceed in the general direction of flow; keep clear of separation zones; join or leave at the termination, or from either side at as small an angle to the flow as practicable.",
            "Proceed in the separation zone when it shortens the passage; cross traffic lanes at right angles; anchoring in the lane is permitted if you display RAM shapes."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q03",
        "question": "Contacts are closing on your radar. In determining whether a risk of collision exists, what should you take into account?",
        "options": [
            "Take compass bearings; risk shall be deemed to exist if the bearing does not appreciably change; risk may still exist even with bearing change, especially near large vessels, tows, or at close range.",
            "Risk of collision exists only when both vessels are power-driven and within 3 nautical miles; sailing vessels and vessels at anchor are exempt from collision risk assessment.",
            "Use radar ARPA CPA data as the primary means of assessment; visual compass bearings are supplementary and only required when radar is inoperative or degraded.",
            "Assume risk does not exist if AIS data shows CPA increasing; a vessel whose bearing is changing appreciably may be disregarded as not posing a collision threat."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q04",
        "question": "You are in HMS ST ALBANS and a ferry crosses your course in a TSS; risk of collision exists. Who is the give-way vessel and why?",
        "options": [
            "The ferry, because she is crossing your bow from port to starboard and R.15 assigns give-way to the vessel crossing another vessel's heading.",
            "You (ST ALBANS), because this is a crossing situation under R.15 and the ferry is on your starboard side; the TSS does not grant you special privileges.",
            "Neither vessel is give-way; Rule 10 TSS regulations override the crossing rules of R.15 when both vessels are within the traffic scheme.",
            "The ferry, because she is the larger vessel with deeper draught and R.18 hierarchy places constrained-by-draught obligations on her."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q05",
        "question": "You are in HMS ST ALBANS in a TSS; a ferry is on your starboard side and a crossing situation with risk of collision exists (R.15). What action should each vessel take?",
        "options": [
            "Both vessels sound five short rapid blasts and maintain course and speed; neither is required to manoeuvre until the other vessel acknowledges by VHF.",
            "Both vessels alter course to port simultaneously to increase the passing distance; the give-way vessel manoeuvres first and the stand-on follows.",
            "ST ALBANS keeps course and speed as the stand-on vessel; the ferry alone alters to starboard under R.17 and passes astern of ST ALBANS.",
            "Ferry keeps course and speed (R.17); ST ALBANS takes early, substantial action to keep well clear (R.16) and avoids crossing ahead if circumstances permit."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q06",
        "question": "Twilight is approaching and the crew ask about lighting. When do the Rules require you to show navigation lights?",
        "options": [
            "From sunset to sunrise; and from sunrise to sunset in restricted visibility; and they may be exhibited whenever deemed necessary in other circumstances.",
            "From nautical twilight to civil twilight only; during daylight hours lights are optional and left to the master's discretion under R.20.",
            "At all times when underway regardless of visibility; vessels at anchor or aground are exempt from navigation light requirements under R.20.",
            "Only when another vessel is detected within 6 nautical miles by radar or visual means; lights may be switched off to conserve power outside that range."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q07",
        "question": "You are overtaking a VLCC that is constrained by her draught. By day, what shape would you expect her to show, and where?",
        "options": [
            "Three black balls in a vertical line at the foremast.",
            "Two cones apex together only.",
            "A diamond shape at the stern.",
            "A cylinder where it can best be seen."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q08",
        "question": "You are discussing a CBD vessel in the lane. How should a vessel constrained by her draught navigate?",
        "options": [
            "She has right of way over crossing traffic and should signal her constrained status by sounding one prolonged blast every two minutes.",
            "With particular caution, having full regard to her special condition.",
            "She must keep to the starboard side of any narrow channel within the TSS and avoid impeding the passage of other deep-draught vessels.",
            "She may deviate from normal lane routing if the charted depth in the designated lane is insufficient for her safe navigation."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q09",
        "question": "A vessel constrained by her draught (CBD) in a traffic lane is making way through the water in restricted visibility. What fog signal should she sound, and how often?",
        "options": [
            "One prolonged blast at intervals of not more than 2 minutes, the same signal prescribed for a power-driven vessel making way through the water.",
            "Two prolonged blasts followed by one short at intervals of not more than 2 minutes, identifying the vessel's constrained manoeuvring status.",
            "At intervals of not more than 2 minutes, three blasts in succession: one prolonged followed by two short.",
            "Five short and rapid blasts at intervals of not more than 1 minute, warning other vessels of danger in restricted visibility."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q10",
        "question": "In the same setting as the VLCC constrained by her draught, you are on another vessel and that VLCC is overtaking you. Who is the give-way vessel and why?",
        "options": [
            "You are the give-way vessel because you are on the VLCC's port bow; R.15 crossing rules apply regardless of whether one vessel is abaft the other's beam.",
            "Neither vessel; R.13 overtaking rules do not apply inside a TSS because Rule 10 traffic-flow provisions take precedence over Part B steering rules.",
            "The give-way vessel is determined by relative tonnage; the smaller vessel keeps clear regardless of bearing or overtaking geometry under R.18.",
            "The VLCC, because she is overtaking you; R.13(a) requires the overtaking vessel to keep out of the way of the vessel being overtaken."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q11",
        "question": "The bridge team reviews your passage plan. What factors should all vessels consider when determining a safe speed in any visibility?",
        "options": [
            "Traffic density and the vessel’s overall length, as longer vessels require proportionally more sea room for safe manoeuvring.",
            "Visibility, traffic density, manoeuvrability, background light at night, wind/sea/current and proximity of hazards, and draught in relation to available depth.",
            "The vessel’s draught relative to charted depth and any speed restriction published by the port authority for the area.",
            "The radar range scale in use divided by two to provide a stopping margin, combined with the vessel’s turning circle at service speed."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q12",
        "question": "A RAM vessel is maintaining a lane in a TSS while working for safety of navigation. What is she exempted from under Rule 10, and to what extent?",
        "options": [
            "Exempted from keeping a lookout and maintaining safe speed while actively working within the traffic lane.",
            "Exempted from all steering and sailing rules in Parts B and C for the duration of the maintenance operation within the TSS.",
            "Exempted from complying with Rule 10 to the extent necessary to carry out the operation.",
            "Exempted from the requirement to carry or exhibit navigation lights and shapes while stationary within the traffic lane."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q13",
        "question": "You see several fishing vessels ahead with extra gear. What are they likely engaged in, and what does an extra cone apex upward indicate?",
        "options": [
            "Vessels engaged in dredging; the cone apex upwards indicates the side from which spoil is being discharged under R.27 shape requirements.",
            "Vessels engaged in fishing; when outlying gear extends more than 150 m horizontally, an all-round white light or a cone apex upwards in the direction of the gear.",
            "Vessels engaged in trawling; the cone apex upwards indicates the direction in which the trawl net is being towed, as prescribed under R.26(b).",
            "Vessels engaged in mine clearance; the cone apex upwards marks the limit of the operational minefield area that other vessels should avoid."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q14",
        "question": "Several vessels are engaged in fishing other than trawling, with outlying gear extending more than 150 m horizontally (cone apex upwards or all-round white light toward the gear). They are making way. What lights should they show at night?",
        "options": [
            "Two all-round lights in a vertical line, upper red lower white; when gear >150 m out, an all-round white toward the gear; sidelights and sternlight when making way.",
            "Green over white all-round lights in a vertical line; sidelights and sternlight when making way; no additional signal required for outlying gear direction.",
            "Same lights as a power-driven vessel — masthead light, sidelights, and sternlight — plus a single yellow flashing light visible all round.",
            "Red over red all-round lights in a vertical line indicating restricted manoeuvrability; sidelights when making way; sternlight is not required."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q15",
        "question": "You continue closing a fishing vessel. You are power-driven and making way. Who has the obligation to keep out of the way?",
        "options": [
            "The vessel on the port side of the other in a crossing situation must give way under R.15, regardless of whether either vessel is fishing.",
            "Whichever vessel first detects the other on radar must initiate the avoiding action and signal her intentions on VHF Channel 16.",
            "The fishing vessels must keep out of your way because they are in a traffic separation scheme and may not impede through traffic under R.10.",
            "You (power-driven vessel underway) must keep out of the way of a vessel engaged in fishing (R.18(a)(iii))."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q16",
        "question": "You are closing RFA Wave Knight for replenishment at sea. What status could you claim under the COLREGs during that operation?",
        "options": [
            "Not under command — unable to manoeuvre as required by the Rules due to exceptional circumstances.",
            "Restricted in the ability to manoeuvre (RAM) — the nature of the replenishment limits deviation.",
            "Constrained by draught — the vessel's deep draught restricts her to the available navigable water.",
            "Vessel engaged in fishing — gear deployed restricts the vessel's ability to keep clear of others."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q17",
        "question": "A question on Rule 3: which activities are given as examples of vessels restricted in their ability to manoeuvre?",
        "options": [
            "Overtaking in a TSS; crossing a separation zone at an angle; anchoring in a fairway — operational constraints that satisfy the RAM criteria in R.3(g).",
            "Fishing with nets extended more than 150 m; purse-seine operations; water-skiing support — activities that limit a vessel's ability to manoeuvre.",
            "Laying, servicing or picking up a navigation mark, submarine cable or pipeline; dredging, surveying or underwater operations; mine clearance — each named in R.3(g).",
            "Replenishment at sea; helicopter operations on deck; formation steaming — military activities listed alongside civilian operations in R.3(g)."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q18",
        "question": "You rendezvous with RFA Wave Knight and commence RAS. Name two types of vessel involved in military operations that may claim the same kind of RAM-related status as replenishment, but are not mentioned in the Rules.",
        "options": [
            "Ships engaged in launching or recovery of landing craft utilities; ships engaged in launching or recovery of arrays (ATP1(E) Ch 1 Art 2242).",
            "Hospital ships under the Geneva Convention and submarines during surfacing procedures — both claim RAM status outside the COLREGs framework.",
            "Frigates and destroyers steaming in close formation; patrol boats conducting boarding operations — common naval activities not listed in R.3(g).",
            "Vessels towing at short stay in harbour and vessels conducting crew transfers by jackstay — restricted operations not named in the Rules."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q19",
        "question": "You are alongside replenishing. What day shapes would you display?",
        "options": [
            "Two black balls in a vertical line where they can best be seen, the same shape signal displayed by a vessel at anchor in open waters.",
            "A single cylinder displayed where best seen, indicating the vessel is constrained by her draught and unable to deviate from her course.",
            "A cone apex upwards above a ball in a vertical line, signalling that the vessel is engaged in fishing operations with restricted manoeuvrability.",
            "Ball-diamond-ball: three shapes in a vertical line with highest and lowest being balls and the middle a diamond — the standard RAM day shape."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q20",
        "question": "You check the masthead light against the Rule 22 table. What is the arc of visibility and minimum range of your masthead light?",
        "options": [
            "112.5 deg arc from right ahead to the beam on each side; minimum range 3 miles for vessels over 50 m in length.",
            "225 deg (from right ahead to 22.5 deg abaft the beam on each side); minimum range 6 miles for a vessel of her length class.",
            "360 deg unbroken arc of visibility; minimum range 2 miles as prescribed for all-round lights on vessels over 12 m.",
            "180 deg arc from beam to beam across the bow; minimum range 5 miles for vessels engaged in commercial service."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q21",
        "question": "You hear a vessel not under command in fog. What sound signal should she make, and at what interval?",
        "options": [
            "Two prolonged blasts in succession at intervals of not more than 2 minutes, the signal used by a vessel restricted in ability to manoeuvre.",
            "Four short blasts in rapid succession at intervals of not more than 2 minutes, indicating inability to manoeuvre.",
            "At intervals of not more than 2 minutes, three blasts in succession: one prolonged followed by two short.",
            "One prolonged blast at intervals of not more than 2 minutes, the standard fog signal for a power-driven vessel making way."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q22",
        "question": "You are in restricted visibility and you have radar contact only. What should you do, and what should you avoid when altering course?",
        "options": [
            "Maintain course and speed until visual contact is established; radar-only contacts do not require manoeuvring unless CPA is less than one nautical mile.",
            "Alter course to port for any contact forward of the beam to pass safely astern; for contacts abaft the beam, increase speed to open the CPA.",
            "Sound one short blast to indicate alteration to starboard and turn toward the contact to establish visual identification before further action.",
            "Assess collision risk; if it exists, take avoiding action in ample time; avoid turning to port for vessels forward of the beam and toward vessels abeam or abaft."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q23",
        "question": "You cannot avoid a close-quarters situation with a vessel forward of the beam. What action must you take?",
        "options": [
            "Reduce speed to the minimum at which the vessel can be kept on course; if necessary take all way off; navigate with extreme caution until danger is over.",
            "Increase speed to clear ahead of the approaching vessel, creating separation before the close-quarters situation develops into collision risk.",
            "Sound five short and rapid blasts to warn the other vessel, then hold course and speed while she takes the required avoiding action.",
            "Alter course to port to pass astern of the approaching vessel, the same manoeuvre required of the give-way vessel in a crossing situation."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q24",
        "question": "Two power-driven vessels are approaching: you see both masthead lights in line and both sidelights. What situation is developing?",
        "options": [
            "A crossing situation under R.15 — one masthead light and the red sidelight are visible, indicating the other vessel is on your starboard side.",
            "Head-on or nearly head-on meeting between two power-driven vessels — both masthead lights in line and both sidelights visible.",
            "An overtaking situation under R.13 — the other vessel is abaft your beam showing her sternlight and one masthead light at higher speed.",
            "A restricted-visibility encounter under R.19 — contacts ahead at close range require both vessels to reduce speed before altering course."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201412-dec-q25",
        "question": "You are meeting a coaster head-on. Who is the give-way vessel, and why?",
        "options": [
            "The coaster is give-way as the smaller vessel; R.18 hierarchy places the obligation on the vessel of lower tonnage in a head-on situation.",
            "ST ALBANS alone as the naval vessel; warships are expected to manoeuvre first and the coaster maintains course and speed as stand-on.",
            "Both vessels are required to act: each shall alter course to starboard so that each passes on the port side of the other (R.14(a)).",
            "Neither vessel has priority; both must first establish agreement by VHF radio before either takes action, as required by good seamanship."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q01a",
        "question": "You are in Busan and notice the lateral buoyage is not the same as back home in the UK. You are used to IALA Region A. Why does the “red/right returning” idea differ here?",
        "options": [
            "UK waters have abandoned the IALA system entirely and instead rely on locally defined port-specific marker schemes.",
            "US-style cardinal marks replace the standard IALA lateral marks throughout South Korean port approach areas.",
            "Busan is IALA Region B (red right returning) whereas UK waters follow Region A lateral buoyage conventions.",
            "Buoyage in Busan mirrors UK Region A conventions; apparent colour differences are due to chart-datum projections."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q01b",
        "question": "The local buoyage differs from your home waters. Does that change your obligations under Rule 9 in a narrow channel?",
        "options": [
            "Rule 9 narrow-channel obligations apply identically regardless of which IALA region the buoyage follows.",
            "Port-hand lateral marks define give-way duties under Rule 9, so reversed buoyage reverses the obligation.",
            "Sailing vessels in a narrow channel are exempt from Rule 9 when operating in IALA Region B waters.",
            "Rule 9 applies differently during night transits in Region B because lateral marks are harder to identify."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q02",
        "question": "A harbour master publishes local rules. What do the COLREGs say about operation of special (local) rules?",
        "options": [
            "Special rules apply to warships and government vessels on non-commercial service but not to merchant shipping.",
            "Nothing in the COLREGs shall interfere with special rules for harbours, rivers, etc., but such rules shall conform as closely as possible to the COLREGs.",
            "Local rules issued by a port authority override the COLREGs in full within harbour limits and out to the 12-mile territorial boundary.",
            "VHF traffic-management agreements made between vessels and harbour control replace all steering and sailing rules within the port approach."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q03",
        "question": "You are about to get underway under a harbour rule requiring one prolonged blast. For the purpose of Rule 3(i), when are you considered “underway”?",
        "options": [
            "When the last mooring line is let go and the vessel is no longer made fast to the shore, at anchor, or aground.",
            "When the main engine is started and the bridge team confirms readiness to proceed from the berth.",
            "When the pilot boards and assumes the conduct of navigation through the port approach channel.",
            "When the anchor is aweigh and housed, provided the vessel has started making way through the water."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q04a",
        "question": "You are in a narrow channel. Which side of the channel or fairway should you keep to?",
        "options": [
            "On the port side of the channel when outbound, reversing to the starboard side when inbound.",
            "Following the vessel’s AIS recommended track regardless of the position of other traffic in the channel.",
            "As near as safe and practicable to the outer limit on her starboard side.",
            "On the centreline of the channel to maintain the greatest possible clearance from both sides."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q04b",
        "question": "A large ship can navigate only inside the narrow channel. Who may not impede her passage?",
        "options": [
            "Power-driven vessels whose beam is less than 10 metres, regardless of their draught or length.",
            "Vessels engaged in fishing, but only when their gear restricts their manoeuvrability inside the channel.",
            "Tugs, service craft, and vessels engaged in harbour operations within the channel boundaries.",
            "Vessels less than 20 m in length and sailing vessels."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q04c",
        "question": "You approach a blind bend in a narrow channel. What should you do, and what sound signal should you use?",
        "options": [
            "Sound five short and rapid blasts before entering the bend to warn any approaching vessel of your presence.",
            "Navigate with particular alertness and caution, and sound one prolonged blast.",
            "Reduce to dead slow and post an additional lookout on the fo’c’sle, but sound no signal so as not to distract the other vessel.",
            "No special action is required beyond maintaining normal lookout and keeping to the starboard side of the channel."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q05a",
        "question": "You sight a vessel at night showing white over red masthead lights plus sidelights and a stern light. What is she?",
        "options": [
            "A vessel restricted in her ability to manoeuvre, making way through the water.",
            "A vessel engaged in trawling, underway and making way through the water with gear deployed.",
            "A vessel constrained by her draught, showing the optional additional lights for her condition.",
            "A pilot vessel on pilotage duty, underway."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q05b",
        "question": "A pilot vessel on pilotage duty (white over red plus sidelights and stern light when underway) is in restricted visibility. What additional sound signal may she identify herself with?",
        "options": [
            "Four short blasts as an identity signal, in addition to the normal underway fog signal.",
            "One prolonged blast, sounded as an identity signal between the normal fog-signal intervals.",
            "Two prolonged blasts followed by one short blast, sounded at intervals of not more than two minutes.",
            "Six short blasts followed by one prolonged blast, sounded once each minute."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q06",
        "question": "A small craft is blocking your path in a narrow channel. What are your obligations under the impeding rules when a risk of collision exists?",
        "options": [
            "A vessel whose passage must not be impeded has no give-way duty when the other vessel is below 20 metres.",
            "She retains full Part B obligations when collision risk exists; reduce speed if needed; the other vessel must act with full regard.",
            "The vessel whose passage must not be impeded can disregard Rule 8 because the other is obliged to keep clear.",
            "TSS routing rules under Rule 10 override Part B give-way obligations whenever a vessel is identified as not to be impeded."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q08",
        "question": "Two sailing vessels are approaching with wind on different sides of their sails. Which vessel keeps clear, and how does the Rule define “windward”?",
        "options": [
            "The windward vessel keeps clear regardless of tack, determined by the vessel's heading relative to the prevailing sea.",
            "The leeward vessel gives way because she has better ability to manoeuvre away from the wind under Rule 12.",
            "Vessel with wind on her port side keeps clear; windward side is the side opposite the mainsail or largest fore-and-aft sail.",
            "The vessel on starboard tack gives way under Rule 12 unless she can show she is the smaller of the two sailing vessels."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q09b",
        "question": "You are overtaking a ship and then you alter 70° to port for your track. Does that change your overtaking status under Rule 13?",
        "options": [
            "Rule 13 obligation persists; bearing changes from your alteration do not relieve the overtaker until she is finally past and clear.",
            "Rule 15 crossing obligations replace Rule 13 once the relative bearing shifts forward of the beam due to the course change.",
            "She becomes a crossing vessel once your heading change places her forward of your beam, making you the stand-on vessel.",
            "Overtaking status under Rule 13 ceases when the give-way vessel alters more than 60 degrees, converting it to a crossing situation."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q10a",
        "question": "You see two cones with their apexes together on a fishing vessel. What does that mean?",
        "options": [
            "A vessel engaged in mine-clearance operations, displaying the shapes required under Rule 27(f) for that activity.",
            "A vessel engaged in fishing — two cones apexes together is the Rule 26 day-shape prescribed for fishing vessels.",
            "A vessel not under command as defined by Rule 3(f), showing two balls in a vertical line to indicate her condition.",
            "A vessel aground, displaying the three-ball day-shape required by Rule 30(d) in addition to anchor lights or shapes."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q10b",
        "question": "The cadet asks for the Rule definition. What is a vessel “engaged in fishing”?",
        "options": [
            "Any vessel carrying fishing rods or hand-held lines, regardless of whether the gear restricts her ability to manoeuvre.",
            "Only vessels registered as commercial trawlers under flag-state licensing requirements for deep-sea fishing operations.",
            "A vessel at anchor deploying fishing gear over the side, regardless of the effect on her ability to manoeuvre.",
            "Fishing with nets, lines, trawls, or apparatus restricting manoeuvrability; excludes trolling or gear not limiting movement."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q10d",
        "question": "A fishing vessel is making way in restricted visibility. What fog signal should she sound?",
        "options": [
            "One prolonged blast at intervals of not more than two minutes, the same signal as a power-driven vessel making way.",
            "Rapid ringing of a bell forward and a gong aft for five seconds, the signal prescribed for vessels at anchor over 100 m.",
            "One prolonged blast followed by two short blasts at intervals of not more than two minutes, per Rule 35(c).",
            "Four short blasts sounded at intervals of not more than two minutes, indicating restricted manoeuvrability while fishing."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q10e",
        "question": "You are in sight of another power-driven vessel and you make a bold alteration to starboard to keep clear under Rule 18. Should you sound manoeuvring signals before you turn?",
        "options": [
            "Five or more short and rapid blasts are the sole whistle signal permitted when manoeuvring under Rule 18 obligations.",
            "Whistle signals under Rule 34 are restricted to restricted visibility and do not apply when vessels are in sight.",
            "Sound signals are not required when manoeuvring under Rule 18 because the hierarchy of responsibility is self-evident.",
            "A power-driven vessel manoeuvring in sight of another under the Rules shall indicate the action on the whistle per Rule 34(a)."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q11a",
        "question": "The trainee asks what counts as restricted visibility. What is the definition in the Rules?",
        "options": [
            "Any condition in which visibility is restricted by fog, mist, falling snow, heavy rainstorms, sandstorms, or similar causes.",
            "Visibility reduced below a fixed threshold of five nautical miles as measured by the ship's radar or a visual estimate.",
            "Conditions occurring during the hours of darkness when natural light is insufficient for maintaining a visual lookout.",
            "Any condition in which the vessel's radar is actively being used for collision avoidance, regardless of actual visual range."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q11c",
        "question": "You are in one nautical mile of visibility. You can see another vessel’s lights ahead, and you are on a crossing bearing, but you are not in sight of one another in the ordinary sense. Do the Rules of Part B Section II (steering and sailing for vessels in sight) still apply, or does Rule 19 govern what you do?",
        "options": [
            "Rule 19 governs all encounters when visibility is below two nautical miles, even if the vessels are in visual contact.",
            "Rule 2 responsibility alone applies; other steering and sailing rules are suspended when visibility falls below one mile.",
            "Rule 19 applies when not in sight of one another; here the vessels are in sight, so Section II and Rule 15 govern the crossing.",
            "The stand-on vessel must hold course and speed under Rule 19 regardless of whether the other vessel is visually sighted."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q12",
        "question": "Your ship carries radar. What does the obligation on use of radar require?",
        "options": [
            "Radar use is at the master's discretion in clear weather and becomes mandatory only when visibility falls below a set threshold.",
            "Proper use including long-range scanning for early warning, and radar plotting or equivalent systematic observation of detected objects.",
            "Radar plotting is required only when the vessel is proceeding below ten knots in or near an area of restricted visibility.",
            "Only vessels fitted with ARPA are required to conduct systematic plotting; non-ARPA vessels may rely on visual bearings."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q13a",
        "question": "You are reading ATP1(E) (Allied Tactical Publication) during RN formation work. In general, how should ships that are not in station relate to ships that are in station?",
        "options": [
            "Ships in station and ships not in station share equal priority, so standard COLREGs give-way rules apply without distinction.",
            "The main body formation has no special rights; screening vessels may manoeuvre through the formation without restriction.",
            "Ships not in station shall keep clear of and not hamper the movements of ships that are in their assigned station.",
            "Screening vessels on the outer perimeter hold priority over ships in the main body under ATP1(E) convention guidance."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q13b",
        "question": "Ships in station are manoeuvring and you are worried about collision danger. How should they behave?",
        "options": [
            "Ships in station should not stubbornly maintain course and speed when doing so would create a danger of collision.",
            "Ships in station may disregard COLREGs collision-avoidance rules to preserve formation integrity during exercises.",
            "Ships in station should increase to full speed to clear the danger area and restore formation spacing rapidly.",
            "Ships in station should maintain assigned course and speed to preserve the tactical formation, even if collision risk develops."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q13c",
        "question": "The carrier is conducting fixed-wing flying operations. In Royal Navy Fleet examination answers, what is the usual priority order among allied naval task types (per ATP1(E) material)?",
        "options": [
            "The aircraft carrier conducting flight operations takes first priority over every other unit in the task group.",
            "Helicopters, MCM, RAS, LCU launch/recovery, fixed-wing launch/recovery, then towed arrays — per the ATP1(E) priority table.",
            "Destroyer and frigate screen vessels hold first priority to maintain the defensive perimeter around the carrier group.",
            "Submarines conducting diving operations hold first priority because of their limited ability to manoeuvre on the surface."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q13d",
        "question": "Another allied naval unit is in a situation described in ATP1(E). In RN Fleet training, do ATP1(E) priorities take precedence over the IRPCS in those circumstances?",
        "options": [
            "ATP1(E) provides guidance only; IRPCS cannot be overruled by any allied naval publication under international maritime law.",
            "ATP1(E) overrides IRPCS only when operating within a designated harbour or naval port approach channel during exercises.",
            "ATP1(E) priorities apply exclusively to aircraft carriers; other allied warships must follow standard IRPCS while at sea.",
            "ATP1(E) priorities apply to allied naval vessels and do override IRPCS in the circumstances described by that publication."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q14",
        "question": "You are on a warship with extra masthead clutter. What do the Rules allow governments to do for vessels of special construction and extra station lights?",
        "options": [
            "Warships are exempt from displaying the lights and shapes required by the Rules, relying on naval signal procedures.",
            "Only NATO-flagged vessels qualify for alternative compliance; all other special-construction vessels must follow exactly.",
            "Government may allow closest-possible compliance when full adherence to light, shape, or sound rules would interfere with special function.",
            "Any vessel may display additional lights or shapes beyond those prescribed, provided the master deems them operationally necessary."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q16",
        "question": "You need to join or leave a traffic lane. How should you normally join or leave, and at what angle?",
        "options": [
            "Vessels may not leave a traffic lane once entered and must continue to the lane termination point before altering course.",
            "Join or leave at lane termination; if joining or leaving from the side, do so at as small an angle to the traffic flow as practicable.",
            "Vessels should cross the lane at right angles from any position, then rejoin the appropriate lane on the far side of the scheme.",
            "Vessels from the inshore traffic zone may join a lane, provided they do so at a heading perpendicular to traffic flow."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q17",
        "question": "You are not en route to a port or an offshore installation. Who may use the inshore zone of a TSS?",
        "options": [
            "Any vessel over 20 metres in length may use the inshore traffic zone provided she is transiting to or from a nearby port.",
            "Only power-driven vessels on passage between adjacent ports are permitted to navigate within the inshore traffic zone.",
            "The inshore traffic zone is reserved as a buffer between the separation scheme and the coastline, closed to through traffic.",
            "Vessels under 20 m, sailing vessels, and vessels engaged in fishing may use the inshore traffic zone when not required to use the lane."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201501-jan-q18",
        "question": "You would like to enter a separation zone or cross a separation line. When may you do so?",
        "options": [
            "Shall not enter a separation zone or cross a separation line except in emergency to avoid immediate danger or to fish within the zone.",
            "Entry into a separation zone is barred; the rule does not provide recognised exceptions for emergency or fishing situations.",
            "Any vessel may cross a separation line at approximately right angles to the direction of traffic flow from any position.",
            "Warships operating under government orders are exempt from the Rule 10 restrictions on entering or crossing a separation zone."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q01",
        "question": "A hovercraft is converging ahead of your starboard beam; you are about 25° on her port bow. If a risk of collision develops, what does Rule 15 require?",
        "options": [
            "No action is required until CPA drops below one nautical mile; only then does Rule 15 impose any crossing obligation.",
            "The vessel which has the other on her own starboard side shall keep out of the way and, if circumstances admit, avoid crossing ahead.",
            "Both hovercraft shall alter course to port simultaneously, as the crossing rules require symmetric action by each vessel.",
            "The faster vessel gives way regardless of relative bearing, since speed determines priority under the crossing rule."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q02a",
        "question": "You are overtaking a tug with a submerged tow more than 200 m long on her port side, in a narrow channel, and VHF is silent. What whistle signal indicates your intention to overtake on your chosen side?",
        "options": [
            "Five short and rapid blasts on the whistle, indicating doubt about the other vessel's actions in the narrow channel.",
            "One prolonged blast repeated at two-minute intervals, as required for any vessel navigating within a narrow channel.",
            "Two prolonged blasts followed by two short blasts (intend to overtake on her port side).",
            "Three short blasts on the whistle, indicating that propulsion machinery is operating astern during the overtaking."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q02b",
        "question": "The tug master agrees to your overtaking. What agreement signal does she sound?",
        "options": [
            "One prolonged, one short, one prolonged, one short, in that order.",
            "One short blast only, acknowledging the overtaking vessel's stated intention to pass in the narrow channel.",
            "Two prolonged blasts indicating the tug's agreement to alter course and permit safe overtaking passage.",
            "Four short blasts in rapid succession, the standard narrow-channel agreement signal prescribed by Rule 34."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q02c",
        "question": "The tow is longer than 200 m. What shapes should the tug and tow show?",
        "options": [
            "Three balls in a vertical line on both tug and tow, indicating a vessel restricted in her ability to manoeuvre.",
            "Cone apex upward displayed on the tug only, with no shape required on the tow regardless of its overall length.",
            "Cylinder shape displayed on tug and tow at the highest point, as prescribed for vessels constrained by draught.",
            "Tug: diamond where best seen when tow >200 m; tow: diamond at aftermost extremity and, if >200 m, additional diamond forward."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q04",
        "question": "You see a sailing vessel with a cone apex down in the rigging. What does that mean?",
        "options": [
            "Vessel aground and unable to manoeuvre, displaying the cone as an alternative to the three-ball day shape.",
            "Vessel constrained by her draught, using a cone shape as a substitute for the required cylinder day signal.",
            "Under sail and also propelled by machinery (cone forward where best seen, apex down).",
            "Vessel engaged in dredging or underwater operations, displaying the cone to indicate her working side."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q05d",
        "question": "You are planning to cross a narrow channel. What must you avoid if you would impede a vessel that can safely navigate only inside the channel, and what if you are in doubt?",
        "options": [
            "Contact the restricted vessel on VHF Channel 16 to negotiate passage; whistle signals are not permitted in the channel.",
            "Crossing the channel is permitted provided the crossing vessel maintains a safe speed under Rule 6.",
            "Only the larger vessel determines right of way in the channel; the smaller vessel keeps clear on port authority direction.",
            "Must not cross if it impedes such a vessel; vessel in channel may sound 34(d); in doubt, at least five short rapid blasts."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q06a",
        "question": "A small craft flies a red and white vertical striped flag (Hotel). What does that mean?",
        "options": [
            "Fishing vessel deploying or retrieving nets, required to show the Hotel flag while gear is in the water.",
            "Vessel engaged on pilotage duties, identified by the Hotel flag as prescribed under Rule 29 of the COLREGs.",
            "Mine-clearance vessel conducting operations in a swept channel, displaying the Hotel flag as a warning signal.",
            "Vessel with a diver below the surface, flying the Hotel flag to warn nearby traffic of underwater operations."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q06b",
        "question": "A pilot vessel is underway at night. What lights should you expect?",
        "options": [
            "Two all-round lights in vertical line, upper white lower red at masthead; when underway also sidelights and sternlight.",
            "Same lights as a vessel engaged in trawling: green over white all-round plus masthead, sidelights, and sternlight.",
            "Green all-round over white all-round in a vertical line at the masthead, visible from all directions at three miles.",
            "Red over white all-round lights at the masthead only, with no requirement for sidelights or sternlight when underway."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q07a",
        "question": "You enter restricted visibility as a power-driven vessel making way. What fog signal should you sound?",
        "options": [
            "Two prolonged blasts at intervals of not more than two minutes, identifying a vessel underway but stopped in the water.",
            "One prolonged blast on the whistle at intervals of not more than two minutes, as prescribed for a PDV making way.",
            "One prolonged followed by two short blasts at two-minute intervals, the signal for a vessel restricted in ability to manoeuvre.",
            "Rapid ringing of the bell forward and sounding of the gong aft for five seconds, repeated at intervals of one minute."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q07b",
        "question": "Your vessel is 133 m long. What are the arcs and minimum ranges for masthead, sidelight, and sternlight?",
        "options": [
            "Masthead 225 deg (right ahead to 22.5 deg abaft beam each side), 6 nm; sidelights 112.5 deg each side, 3 nm; sternlight 135 deg, 3 nm.",
            "Masthead light arc of 112.5 deg on each bow at 3 nm range; sidelights and sternlight each visible at 2 nautical miles.",
            "All navigation lights showing 360 degrees with a uniform range of 2 nautical miles, regardless of vessel length.",
            "Same arcs and ranges as a vessel under 12 m: masthead 225 deg at 2 nm, sidelights and sternlight each at 1 nm."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q07c",
        "question": "You are in restricted visibility in a power-driven vessel. How should you think about speed and engine readiness?",
        "options": [
            "Half ahead on main engines is the standard restricted-visibility speed required under Rule 6 for power-driven vessels.",
            "Stop engines and lie dead in the water until visibility improves, as required by Rule 19 for power-driven vessels.",
            "Safe speed adapted to restricted visibility; power-driven vessel shall have engines ready for immediate manoeuvre.",
            "Maintain maximum sea speed provided an effective radar watch is kept and ARPA is plotting under Rule 7 requirements."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q08b",
        "question": "You hear one prolonged blast followed by two short blasts. Which categories of vessel may sound that?",
        "options": [
            "Power-driven vessel making way through the water only; no other vessel category uses this particular fog signal.",
            "Anchored vessels of 100 metres or more in length, required to sound bell forward and gong aft under Rule 35.",
            "Pilot vessels exclusively, as a unique identification signal when operating on station in restricted visibility.",
            "NUC, RAM, CBD, sailing vessel, fishing, or towing/pushing — among the categories listed under Rule 35(c)."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q08d",
        "question": "At about one mile you see a white masthead stack and a green all-round light with white above in a trawler pattern to starboard. What type of vessel is she and what is she likely doing?",
        "options": [
            "Vessel fishing other than trawling, showing white over red all-round lights with sidelights and sternlight.",
            "Vessel restricted in ability to manoeuvre, showing red-white-red vertical lights with masthead and side lights.",
            "Vessel not under command, displaying two red all-round lights in a vertical line with sidelights to starboard.",
            "Vessel engaged in trawling and making way, viewed from her starboard side; masthead stack indicates length over 50 m."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q09a",
        "question": "A small merchant is red 25° at five miles; you are about 60° on her starboard bow, steady bearing. What are the give-way vessel’s obligations?",
        "options": [
            "Both vessels maintain course and speed until range closes to one nautical mile, then the larger vessel takes action.",
            "Vessel with other on own starboard side keeps out of the way and avoids crossing ahead; give-way takes early substantial action.",
            "Stand-on vessel sounds five short blasts immediately and the give-way vessel is then required to alter course to starboard.",
            "You are the give-way vessel because you appear on her starboard bow; alter course to starboard and pass astern of her."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q09b",
        "question": "You are the stand-on vessel in a crossing situation. What should you do first?",
        "options": [
            "Alter course to starboard immediately to increase CPA, assisting the give-way vessel in keeping clear under Rule 17.",
            "Stop engines and reduce speed to bare steerage way, giving the give-way vessel maximum sea room to manoeuvre safely.",
            "Maintain your course and speed as required by Rule 17(a)(i), allowing the give-way vessel time and sea room to keep clear.",
            "Contact the other vessel on VHF Channel 16 and request she state her intentions before you take any avoiding action."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q09c",
        "question": "The give-way vessel has not acted by two miles and you are unsure of her intentions. What signal should you use?",
        "options": [
            "At least five short and rapid blasts on the whistle to indicate doubt; may be supplemented with a light signal of flashes.",
            "One prolonged blast only, warning the give-way vessel that you are maintaining your course and speed as stand-on.",
            "One short blast on the whistle, indicating that you intend to alter your own course to starboard under Rule 34(a).",
            "Two prolonged blasts on the whistle, signalling that you are no longer making way and your engines are operating astern."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q09d",
        "question": "When may the stand-on vessel take action on her own?",
        "options": [
            "Only after a collision has actually occurred; prior to contact the stand-on vessel must hold her course and speed.",
            "The stand-on vessel is prohibited from altering course or speed at any stage during a crossing encounter under R.17.",
            "Only when navigating inside a traffic separation scheme, where Rule 10 overrides the normal stand-on obligation.",
            "When it becomes apparent that the give-way vessel is not taking appropriate action as required by Rule 16."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q09e",
        "question": "When must the stand-on vessel take action if the give-way vessel will not clear in time?",
        "options": [
            "Only after sounding at least five short and rapid blasts on the whistle; no manoeuvre is permitted before the signal.",
            "The give-way vessel retains sole responsibility to resolve the situation under Rule 16 at all ranges in the encounter.",
            "When so close that collision cannot be avoided by the give-way vessel alone — take best action to avoid collision.",
            "At a range of six nautical miles the stand-on vessel must begin manoeuvring regardless of the give-way vessel's actions."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q10a",
        "question": "You are in a TSS approaching the end of a lane. What should you do?",
        "options": [
            "Navigate with particular caution in the vicinity of the terminations of traffic separation schemes under Rule 10.",
            "Increase to full sea speed in order to join the nearest traffic lane before converging traffic at the termination.",
            "Sound no whistle signals when approaching TSS terminations; Rule 10 prohibits signals within the separation zone.",
            "Ignore crossing traffic at TSS terminations because vessels already established in the lane have absolute right of way."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q10c",
        "question": "Who shall not impede a power-driven vessel following a traffic lane?",
        "options": [
            "Only sailing vessels are required not to impede; fishing vessels and small craft retain full right of way in traffic lanes.",
            "Vessels engaged in fishing, vessels under 20 m, or sailing vessels shall not impede safe passage of a PDV following a lane.",
            "Only VLCCs and deep-draught tankers are protected by Rule 10; all other power-driven vessels must give way in the lane.",
            "Only warships and government vessels on official duty are exempt from the requirement to follow a traffic lane direction."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201502-feb-q11",
        "question": "Name six distress or need-of-assistance signals. Which answer lists only valid examples from Annex IV?",
        "options": [
            "Three short blasts, one prolonged blast, and yellow smoke — each qualifies as a standard Annex IV distress signal.",
            "Flag Bravo displayed alone at the masthead is listed among the recognised distress signals in Annex IV of the COLREGs.",
            "A horn sounded continuously at thirty-second intervals is the sole audible distress signal recognised under the COLREGs.",
            "Any six from Annex IV (e.g. gun fired at one-minute intervals, SOS, Mayday, NC flags, flames, red rocket, orange smoke, EPIRB)."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q01",
        "question": "RFA Orange Leaf shows a red flag alongside. What does that mean?",
        "options": [
            "Man overboard — crew member has fallen into the sea and the vessel is conducting recovery.",
            "Diver below — the vessel has personnel in the water and nearby traffic should keep well clear.",
            "Taking in, discharging or carrying dangerous goods as indicated by the International Code flag.",
            "Medical emergency on board — the vessel requires immediate shore-side medical assistance."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q02",
        "question": "Define “constrained by her draught” in the Rules. Can a Queen’s Harbour Master direct you to show CBD shapes in harbour?",
        "options": [
            "CBD applies to any vessel in deep water regardless of draught; QHM has no authority over shape displays.",
            "CBD only applies to vessels navigating traffic separation schemes and does not extend to harbour areas.",
            "CBD: PDV severely restricted in deviating from course due to draught vs available depth/width; QHM may direct compliance with shapes.",
            "There is no formal definition of CBD in the Rules; the term is advisory only with no shape requirement."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q05",
        "question": "Pleasure craft and fishing boats are east of Spit Sand: why keep clear of your warship?",
        "options": [
            "Under 20 m or sailing shall not impede vessel restricted to channel; fishing vessel shall not impede any vessel in narrow channel.",
            "Pleasure craft and fishing vessels have full right of way near Spit Sand during daylight hours only.",
            "Only fishing vessels actively trawling are required to keep clear; pleasure craft may navigate freely.",
            "Pleasure craft and fishing vessels have priority over larger vessels when operating inside harbour limits."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q06",
        "question": "In a narrow channel, what shall any vessel avoid if circumstances permit?",
        "options": [
            "Using radar for navigation shall be avoided when transiting any narrow channel under the Rules.",
            "Anchoring in a narrow channel shall be avoided if the circumstances of navigation admit safe passage.",
            "Sounding prescribed fog signals should be avoided inside narrow channel limits to prevent confusion.",
            "Overtaking other vessels in a narrow channel is prohibited under all navigable circumstances."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q08",
        "question": "You are unsure whether a head-on situation exists. What should you assume?",
        "options": [
            "Assume no head-on exists unless confirmed by VHF communication with the other vessel first.",
            "Stop engines immediately and wait for the other vessel to clearly indicate her intended action.",
            "Contact the other vessel by VHF only and take no avoiding action until intentions are agreed.",
            "Assume a head-on situation does exist and alter course to act accordingly under the Rules."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q09",
        "question": "You are choosing how much to alter course to pass clear. How large should a course alteration be to avoid collision?",
        "options": [
            "Large enough to be readily apparent to the other vessel observed visually or by radar.",
            "At least 10 degrees of helm to ensure the vessel responds quickly to the course alteration.",
            "A full 180-degree turn away from the other vessel to maximise the separation distance.",
            "No specific alteration is needed if speed is being controlled by the engine telegraph."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q10",
        "question": "What should you avoid when you use helm and speed to avoid collision?",
        "options": [
            "Taking early action to avoid collision should be avoided as it may cause unnecessary confusion.",
            "Making a single substantial alteration of course should be avoided in favour of gradual changes.",
            "A succession of small alterations of course or speed shall be avoided when taking avoiding action.",
            "Any use of helm to alter course should be avoided when a risk of collision exists with another vessel."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q11",
        "question": "Rule 8(c) says an alteration of course alone may be most effective if sufficient sea room exists. What conditions must that alteration still satisfy?",
        "options": [
            "Made as small and late as possible so the other vessel can observe the change more clearly.",
            "Made in good time, substantial, and does not result in another close-quarters situation.",
            "Made only during hours of darkness when sidelights confirm the aspect of the other vessel.",
            "Made only with prior VTS or harbour authority permission to ensure traffic coordination."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q13",
        "question": "You are not using a traffic lane. How close may you pass the TSS?",
        "options": [
            "A vessel not using a TSS shall avoid it by as wide a margin as is practicable under the Rules.",
            "A vessel not using a TSS should save distance by passing as close to it as safely possible.",
            "Only fishing vessels may approach or cross the TSS boundary from the adjacent inshore waters.",
            "There is no Rule governing the distance a non-TSS vessel must keep from the scheme boundary."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q14",
        "question": "When is a vessel considered to be overtaking another?",
        "options": [
            "Any vessel travelling at a faster speed than the vessel ahead regardless of relative bearing.",
            "Any vessel positioned within three nautical miles directly astern of the vessel ahead of her.",
            "Any vessel on the same course and within visual range of the vessel ahead at any bearing angle.",
            "Coming up from more than 22.5 degrees abaft the beam; at night could see only the sternlight."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q15",
        "question": "Who keeps out of the way in an overtaking situation?",
        "options": [
            "Both vessels shall alter course to port simultaneously to create a safe passing distance.",
            "The smaller vessel shall keep clear regardless of the overtaking geometry involved.",
            "Any vessel overtaking shall keep out of the way of the vessel being overtaken at all times.",
            "The stand-on vessel must take the first avoiding action during any overtaking situation."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q16",
        "question": "What must the give-way vessel do?",
        "options": [
            "Take early and substantial action to keep well clear of the stand-on vessel so far as possible.",
            "Maintain present course and speed until the stand-on vessel takes her own avoiding action first.",
            "Wait until the other vessel is within one cable before initiating any avoiding manoeuvre at all.",
            "Sound two prolonged blasts and maintain course until the other vessel responds to the signal."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q19",
        "question": "A tug is towing a tow longer than 200 m. What lights and shapes should you expect?",
        "options": [
            "Towing vessel displays the same lights as a single power-driven vessel with no additional signals.",
            "No extra lights or shapes are required for a tug and tow regardless of the overall tow length.",
            "Towing vessel shows only a single cone shape by day and standard navigation lights at night.",
            "Three masthead lights if tow >200 m, sidelights, sternlight, towing light, diamond; tow shows sidelights/sternlight and diamond."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q20",
        "question": "You anchor off Cherbourg. What anchor lights and shapes apply?",
        "options": [
            "Sidelights only are displayed while at anchor to indicate the vessel heading to nearby traffic.",
            "All-round white in fore part or ball by day; all-round white at stern lower; vessel 100 m+ illuminates decks.",
            "Two red all-round lights in a vertical line are shown at anchor to indicate the vessel status.",
            "No lights are required during daylight hours; anchor ball is shown only by vessels over 50 metres."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q22",
        "question": "You are anchored in reduced visibility. What sound signals should you make?",
        "options": [
            "Bell rapid ringing 5 s forward then gong 5 s aft at intervals of not more than one minute.",
            "Two prolonged blasts on the whistle repeated at intervals of every two minutes while anchored.",
            "One prolonged blast on the whistle at intervals of not more than two minutes continuously.",
            "Three separate distinct strokes on the bell only without any gong signal from the vessel stern."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q23",
        "question": "You are aground. What do you add to the anchoring signals?",
        "options": [
            "No additional signals are required beyond the standard at-anchor bell and gong sequence.",
            "One prolonged blast on the whistle is the only supplement to the standard anchor signals.",
            "Three distinct strokes on bell before and after rapid ringing plus gong aft; may additionally sound whistle.",
            "Six short rapid blasts on the whistle replace the bell and gong sequence entirely when aground."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q24",
        "question": "Another power-driven vessel bears green 40° (on your starboard side), range three miles. You are on her port bow; the bearing is steady and risk of collision exists. What actions are required?",
        "options": [
            "You keep clear because you have the other vessel on your port side in this crossing geometry.",
            "You have him on starboard so you keep out of the way; may sound one short and alter to starboard.",
            "Both vessels should stop engines immediately and wait for the situation to resolve on its own.",
            "Only the stand-on vessel is permitted to take any action in a crossing situation under the Rules."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q25",
        "question": "You are red 50° to a vessel; the bearing is slowly moving right. You are about 40° on her starboard bow. What should you do?",
        "options": [
            "You are the give-way vessel and must alter course substantially to keep well clear of him.",
            "Both vessels should alter course to port simultaneously to increase the passing distance safely.",
            "Sound five short blasts only and take no further action until the other vessel clearly responds.",
            "Stand on but monitor the give-way vessel; you have him on port so he must give way to you."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q26",
        "question": "You see a stopped vessel with ball-diamond-ball. What status is she? How can you tell whether she is anchored or underway?",
        "options": [
            "Restricted in ability to manoeuvre; if anchored shows anchor lights/ball forward; keep clear of her.",
            "Not under command; vessel is disabled and unable to manoeuvre or comply with the steering Rules.",
            "Fishing vessel stopped and recovering gear; other vessels may pass freely on either side of her.",
            "Constrained by draught; vessel must remain in the deepest part of the navigable channel ahead."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q27",
        "question": "A large ship shows a black cylinder. What does that mean? What should you do?",
        "options": [
            "RAM signals are displayed by any vessel showing a cylinder regardless of draught restriction.",
            "No action is required by other vessels because the cylinder shape is an advisory signal only.",
            "CBD signals; power-driven vessels shall if circumstances admit avoid impeding safe passage of CBD vessel.",
            "Vessel displaying a cylinder is overtaking you and must keep clear as the give-way vessel here."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q28",
        "question": "You see two black balls vertically in a ship that is making way. What lights should she show at night?",
        "options": [
            "Single anchor light displayed forward only with no sidelights or sternlight shown at night.",
            "NUC making way: two all-round red lights in vertical line plus sidelights and sternlight shown.",
            "Normal power-driven vessel masthead lights only without additional status indication lights.",
            "Green over white all-round lights displayed to indicate a vessel making way through the water."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q29",
        "question": "You see two cones apexes together and a cone apex up. What does that mean? How should you pass?",
        "options": [
            "Fishing other than trawling; cone apex up shows outlying gear >150 m — pass clear on that side.",
            "Vessel engaged in trawling operations with nets deployed on both sides of the vessel equally.",
            "Vessel engaged in dredging with restricted ability to manoeuvre on the side of the obstruction.",
            "Mine clearance vessel with dangerous operations underway requiring a wide berth from traffic."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q30",
        "question": "MCMV shapes are in sight and a helicopter is “in the dip” in the same area. In Royal Navy Fleet examination keys referencing ATP1(E), what is stated about responsibility and helicopter status?",
        "options": [
            "Helicopter in dip is treated as a power-driven vessel and must comply with steering rules.",
            "Helicopter in dip is the give-way vessel and must keep clear of all surface traffic nearby.",
            "No navigational restriction applies to either the helicopter or surrounding surface vessels.",
            "Helicopter in dip is NUC; no vessel within 500 yards; MCMV action per ATP1(E) Fleet guidance."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q32",
        "question": "You hear two prolonged blasts followed by four short blasts. What does that combination mean?",
        "options": [
            "At-anchor signal followed by a general warning to approaching traffic in restricted visibility.",
            "PDV underway not making way (Rule 35(b)) plus pilot vessel identity signal of four short blasts.",
            "Fishing vessel engaged in trawling operations and making way through the water at slow speed.",
            "Not-under-command vessel stopped and drifting with no propulsive power or steering available."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q33",
        "question": "You hear one short, one prolonged, and one short in succession. What does that sound signal mean?",
        "options": [
            "Optional warning by anchored vessel of her position to approaching vessel indicating collision risk.",
            "Meeting signal between two power-driven vessels approaching head-on in a narrow channel area.",
            "International distress signal indicating the vessel requires immediate assistance from others.",
            "Overtaking agreement signal between vessels in a narrow channel requiring consent to pass."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q34",
        "question": "On radar you have a contact green 60° at five miles and you assess risk of collision. What manoeuvre should you consider, and what must you avoid?",
        "options": [
            "Increase to full speed ahead to pass quickly in front of the approaching vessel on the radar.",
            "Stop engines only and wait for the contact to pass without making any alteration of course.",
            "Ample time; avoid altering to port for vessel forward of beam and avoid turning toward vessel abeam or abaft.",
            "Alter course to port immediately regardless of the bearing of the approaching radar contact."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q35",
        "question": "When must you show navigation lights, and what other lights must not be confused with them?",
        "options": [
            "From civil twilight to civil twilight only; all other external lights must be extinguished.",
            "Only in restricted visibility conditions; normal lighting may be used at all other times.",
            "At the master's sole discretion regardless of conditions; no specific time is stated in Rules.",
            "Sunset to sunrise; other lights only if they cannot be mistaken, do not impair visibility, and do not hinder lookout."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q36",
        "question": "You sight red over white all-round lights plus sidelights and stern light while making way. What is she?",
        "options": [
            "Trawling vessel making way with nets deployed astern of the vessel in fishing grounds.",
            "Fishing vessel other than trawling making way through the water under the Rules.",
            "Vessel restricted in ability to manoeuvre conducting underwater operations at sea.",
            "Pilot vessel on duty and making way toward an inbound vessel for boarding purposes."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q37a",
        "question": "You see extra masthead lights on the foremast with normal navigation lights. What operation does that usually indicate?",
        "options": [
            "PDV towing with length of tow from stern of tug to after end of tow exceeding 200 metres.",
            "Vessel restricted in ability to manoeuvre conducting underwater operations near the surface.",
            "Vessel constrained by draught and unable to deviate from the navigable channel available.",
            "Sailing vessel under sail alone displaying additional identification lights at the masthead."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q37b",
        "question": "You approach a towing vessel from astern. What additional light do you look for above the stern light?",
        "options": [
            "Blue flashing light displayed at the stern to indicate a law-enforcement or government vessel.",
            "Two red all-round lights displayed vertically at the stern indicating restricted manoeuvring.",
            "Yellow towing light in vertical line above the sternlight; tow may show sidelights and sternlight.",
            "No additional stern light is shown; the tow is identified only by its own navigation lights."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q38",
        "question": "You see three all-round red-white-red plus a single white forward. What operations might she be engaged in? What if those are her only lights?",
        "options": [
            "Constrained by draught only; the three-light pattern indicates deep-draught restriction.",
            "Fishing vessel engaged in trawling with nets extending more than 150 metres from the vessel.",
            "Not under command — vessel has lost propulsion and steering and is drifting without control.",
            "RAM pattern — cable laying, pipeline, survey etc.; vessel shows anchor light if also at anchor."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-apr-q39",
        "question": "Two MCMVs are in mine clearance. What extra lights may they show, and how far off should you pass?",
        "options": [
            "Red over white all-round lights at the foremast with no additional green lights displayed.",
            "Three all-round green lights at foremast and foreyard ends plus normal lights; pass 1000 m minimum.",
            "No extra lights beyond standard navigation lights are required for mine clearance vessels.",
            "Pass at 500 yards minimum with standard navigation lights only and no extra shape or light."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q01",
        "question": "Traffic is heavy and fishing boats are nearby. What does the Rule require of your lookout?",
        "options": [
            "By sight, hearing, and all available means appropriate to circumstances for full appraisal of situation and collision risk.",
            "Visual lookout only using binoculars from the bridge wing during daylight transits in traffic.",
            "Radar monitoring only with no requirement for visual or auditory watch in heavy traffic areas.",
            "AIS tracking only as the primary lookout method in congested waters with modern bridge equipment."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q02b",
        "question": "The plotting officer is assessing risk of collision. What should assumptions not be based on?",
        "options": [
            "Visual compass bearings taken from the bridge wing during clear weather and good visibility.",
            "Published chart datum and corrections applied from the latest Notice to Mariners available.",
            "Scanty information, especially scanty radar information, shall not be used as basis for assumptions.",
            "Tide tables and tidal stream atlases used to calculate set and drift for passage planning."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q03a",
        "question": "At night you are OOW on a power-driven vessel. A large sailing vessel bears green 40° on your bow (about 40° on your starboard side). What are your obligations?",
        "options": [
            "The sailing vessel must keep clear of all power-driven vessels regardless of the situation.",
            "Neither vessel has specific obligations; both should negotiate by VHF to agree safe passing.",
            "This obligation applies only within traffic separation schemes and not in open sea conditions.",
            "Power-driven vessel underway shall keep out of the way of a sailing vessel under the Rules."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q03b",
        "question": "Same night encounter: instead of the large sailing vessel on your starboard bow, suppose a large sailing vessel is overtaking you from astern. Would your obligations as OOW on a power-driven vessel change?",
        "options": [
            "No change occurs; the sailing vessel retains right of way over a PDV regardless of approach.",
            "Rule 13: overtaking vessel keeps clear; sailing vessel overtaking must keep out of your way.",
            "You remain the stand-on vessel regardless of the other vessel's approach geometry from astern.",
            "Sailing vessel stands on over power-driven vessel even when approaching from more than 22.5 abaft beam."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q05abc",
        "question": "You are the give-way vessel in a crossing situation. What should you do? What must the stand-on vessel do first? When may the stand-on vessel act?",
        "options": [
            "Give-way takes early substantial action; stand-on keeps course/speed; stand-on may act if give-way fails to comply.",
            "Both vessels should make random turns to increase separation without any formal signal exchange.",
            "Both vessels alter course to port simultaneously in every crossing situation under the Rules.",
            "Only whistle signals are exchanged and no physical alteration of course or speed is needed."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q06ab",
        "question": "You are avoiding collision in general. What direction should action take? If you have sea room, when is a course alteration alone most effective?",
        "options": [
            "Delay action as long as possible so the other vessel has maximum time to take her own action.",
            "A succession of small course alterations is the most seamanlike method to avoid close-quarters.",
            "Positive, ample time, good seamanship; course alteration alone best if made in good time and substantial.",
            "VHF agreement between vessels replaces the requirement for physical manoeuvring under the Rules."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q07",
        "question": "What is the Rule definition of “constrained by her draught”?",
        "options": [
            "Any deep-draught tanker or bulk carrier navigating at sea regardless of available water depth.",
            "PDV severely restricted in ability to deviate from course due to draught in relation to available depth and width.",
            "Applies only to vessels navigating within a traffic separation scheme and not in open waters.",
            "Same definition and obligations as a vessel restricted in ability to manoeuvre under the Rules."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q08abc",
        "question": "What is the definition of a vessel restricted in her ability to manoeuvre (RAM)? What examples besides RAS exist? Is the Rule’s list exhaustive?",
        "options": [
            "Only tugs towing are classified as RAM; no other vessel type qualifies under the definition.",
            "The list of RAM activities is fixed permanently in the Rules and cannot be extended to new operations.",
            "Only warships conducting military operations at sea may display RAM signals under the Rules.",
            "Unable to keep out of way from nature of work; includes cable, dredging, mine clearance, aircraft ops; list inclusive."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q09",
        "question": "During formation work, who has right of way between a replenishment group and a unit launching or recovering aircraft?",
        "options": [
            "Ships engaged in replenishment have right of way over carriers and other ships in flight operations.",
            "Aircraft carrier has priority over all other vessels including those conducting RAS evolutions.",
            "Equal priority between replenishment group and aircraft operations with no standing order.",
            "Mine countermeasure vessels take first priority over both replenishment and air operations."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q10abc",
        "question": "A tug is towing a long tow. Does she always show RAM shapes? What shapes apply when the tow exceeds 200 m, and how is tow length measured?",
        "options": [
            "Tug displays RAM shapes when towing regardless of the degree of restriction on her course.",
            "No shapes are required for a towing vessel or her tow under the International Regulations.",
            "RAM shapes only if tow severely restricts deviation; >200 m shows diamonds on tug and tow; length stern to after end.",
            "Tow length is measured along the waterline of the tow only and does not include the towing hawser."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q12",
        "question": "When does Rule 19 apply?",
        "options": [
            "Rule 19 applies at all times when any vessel is underway at sea regardless of the visibility.",
            "Vessels not in sight of one another when navigating in or near an area of restricted visibility.",
            "Only power-driven vessels are subject to Rule 19; sailing vessels are exempt from its provisions.",
            "Only within traffic separation schemes during periods of reduced visibility at any time of day."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q17",
        "question": "You are stopped in the water. Are you still give-way in a crossing with a power-driven vessel approaching from your starboard sector?",
        "options": [
            "Only if making way through the water; a stopped vessel has no obligations under crossing rules.",
            "Only during hours of darkness when navigation lights indicate the vessels' relative headings.",
            "A stopped vessel has no steering or crossing duties and may remain stationary without action.",
            "Yes — a stopped PDV must keep out of way of vessel from ahead to 22.5 abaft starboard beam if ROC exists."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q18ab",
        "question": "During an ADEX exercise, how do screen ships and main body ships relate, and does Rule 15 apply between them?",
        "options": [
            "Screen keeps clear of main body; Rule 15 crossing does not apply between screen and main body ships.",
            "Full IRPCS crossing rules apply between every ship regardless of formation or task group assignment.",
            "Main body vessels keep clear of screening ships because screen vessels have operational priority.",
            "No written rule or standing order addresses the relationship between screen and main body ships."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q19",
        "question": "What does Rule 20 allow about other lights besides those required by these Rules?",
        "options": [
            "Any deck lighting may be used freely at night without restriction beyond normal safety practice.",
            "Searchlights are permitted without restriction for navigation and security purposes after sunset.",
            "Lights that cannot be mistaken for prescribed lights, do not impair visibility, and do not interfere with lookout.",
            "Decorative LED strips and courtesy lights may be displayed freely at all times while underway."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q20",
        "question": "What arc and placement does the masthead light have for a power-driven vessel?",
        "options": [
            "White light showing an arc of 112.5 degrees from right ahead to the beam on one side only.",
            "White over fore-and-aft centreline showing 225-degree arc from right ahead to 22.5 degrees abaft beam each side.",
            "White light showing a full 360-degree unbroken arc visible from all directions around the vessel.",
            "Same arc and placement as the sternlight covering 135 degrees across the after sector of vessel."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q21a",
        "question": "You are a small power-driven vessel crossing the Hamoaze. What are your obligations?",
        "options": [
            "A small PDV has no special duties when crossing and may navigate freely in the Hamoaze at all times.",
            "Small vessels are free to cross narrow channels at any time without restriction under the Rules.",
            "Only requirement is to sound a fog signal before crossing; no duty to keep clear of larger traffic.",
            "Shall not impede vessel restricted to channel; shall not cross if it impedes; larger vessel may sound 34(d) warning."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q21b",
        "question": "A crossing vessel is still closing and the CPA is 50 yards ahead. What do you recommend?",
        "options": [
            "Sound five short blasts; reduce or stop if needed; vessel not to be impeded still complies with Part B if ROC.",
            "Wait for the crossing vessel to pass ahead with no further action required on your part at all.",
            "Accelerate to pass ahead of the crossing vessel before she reaches your intended track line.",
            "Alter course to port toward the crossing vessel to pass closely under her stern at the CPA."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q22",
        "question": "The master asks about accountability under Rule 2. Nothing in these Rules shall exonerate whom from the consequences of what kind of neglect?",
        "options": [
            "Only the harbour master is exonerated from liability when vessels comply with local port orders.",
            "Only the pilot is exonerated from responsibility while conducting the vessel in pilotage waters.",
            "Owner, master, or crew from consequences of neglect of the Rules or neglect of ordinary practice of seamen.",
            "Only the officer of the watch bears responsibility; the master and owner are exonerated from consequences."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q24",
        "question": "You see all-round white lights fore and aft with the after light lower and decks lit. What is her status?",
        "options": [
            "Fishing vessel at anchor displaying working lights to indicate gear recovery operations underway.",
            "Vessel at anchor over 100 metres in length with deck illumination as required by the Rules.",
            "Power-driven vessel underway showing normal masthead, sidelights, and sternlight configuration.",
            "Not-under-command vessel stopped and drifting at night displaying two red all-round lights only."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q25ab",
        "question": "Bulwark is conducting LCU operations as RAM. What day shapes should she show? Who has priority over aircraft recovery?",
        "options": [
            "Cylinder shape only is displayed indicating the vessel is constrained by her draught in the area.",
            "Two cones apexes together indicating a vessel engaged in fishing operations with deployed gear.",
            "No shapes are required when conducting LCU operations because they fall inside the ship's envelope.",
            "Ball-diamond-ball day shape for RAM; Bulwark has priority over aircraft recovery per Fleet guidance."
        ],
        "correct": 3,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q26ab",
        "question": "A merchant is ahead of you. You are about 170° on her starboard bow. What situation is developing and what is your obligation?",
        "options": [
            "Overtaking situation from more than 22.5 degrees abaft her beam; overtaking vessel keeps clear.",
            "Crossing situation with you as the stand-on vessel required to maintain course and speed only.",
            "Head-on situation requiring both vessels to alter course to starboard to pass port to port safely.",
            "You are the stand-on vessel and the merchant is required to keep clear of your track at all times."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q27ab",
        "question": "A large merchant is on your port bow; you are on her starboard bow. Does size change the rule? Who is give-way?",
        "options": [
            "You give way to a vessel of larger tonnage regardless of the crossing situation geometry.",
            "Both vessels stand on because neither has a clear obligation when vessels are of different sizes.",
            "Vessel size creates no extra duty unless CBD is indicated; in crossing geometry the VLCC is give-way.",
            "Size determines priority; the larger vessel is automatically the stand-on vessel at sea."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201505-may-q28ab",
        "question": "After sunrise a trawler is still showing fishing lights. How does the Rule define trawling, and what lights if she is larger than 50 m and trawling while underway?",
        "options": [
            "Any fishing operation of any kind uses the same light configuration regardless of method or length.",
            "Trawling is dragging a dredge net or apparatus; >50 m: green/white, masthead aft higher, sidelights/sternlight.",
            "Red over white all-round lights only are displayed by trawling vessels regardless of vessel size.",
            "Same lights as a standard power-driven vessel with no additional fishing identification required."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q01",
        "question": "In good visibility, which Part B Section of the Rules normally applies to conduct?",
        "options": [
            "Section I — conduct in any condition of visibility, which includes good-visibility encounters.",
            "Section II — conduct of vessels in sight of one another, applicable only in clear weather.",
            "Section III — restricted-visibility rules, which govern encounters regardless of actual conditions.",
            "Annex IV provisions, which define the applicable steering and sailing rules for all visibility."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q03",
        "question": "What additional night lights may a vessel constrained by her draught show?",
        "options": [
            "Two all-round red lights in a vertical line, plus a white anchor light at the stern.",
            "Three all-round red lights in a vertical line, indicating constrained by draught.",
            "One all-round green over one all-round white light, visible from all directions.",
            "Two all-round red with a yellow flashing light exhibited below the lower red."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q04",
        "question": "What is the relationship between your ship and a CBD vessel such as Wave Knight, and who must act first?",
        "options": [
            "You shall not impede the safe passage of the CBD vessel under Rule 18 hierarchy.",
            "The CBD vessel must keep clear of you under the Rule 18 give-way responsibilities.",
            "Both vessels share an equal obligation to take avoiding action under Rule 16.",
            "TSS routing measures determine the right of way, overriding the Rule 18 hierarchy."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q05",
        "question": "How should you act so as not to impede a CBD vessel’s safe passage?",
        "options": [
            "Early action to allow sufficient sea room; slowing, stopping, or starboard alteration acceptable.",
            "Maintain course and speed so the CBD vessel can predict your movements and take her own action.",
            "Cross ahead of the CBD vessel at maximum speed to clear the area as quickly as possible.",
            "Sound five short blasts, then wait for CBD acknowledgement before altering course to port."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q06",
        "question": "At two miles on a steady bearing: who must keep clear of whom now?",
        "options": [
            "You are the stand-on vessel in all circumstances and must maintain course and speed regardless of collision risk.",
            "CBD must keep clear under R.15; not-to-be-impeded vessel still fully obliged under Part B when ROC; you must not impede.",
            "Neither vessel has priority; both must take simultaneous avoiding action under Rule 17 and good seamanship.",
            "Harbour master or VTS has overriding authority to direct traffic and determine which vessel must give way."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q07",
        "question": "What status lights and signals does a pilot vessel show by day and by night?",
        "options": [
            "Day: Flag Hotel; night: two all-round white over red at the masthead per Rule 29.",
            "Day: no special signals required; night: one all-round red light exhibited at the masthead.",
            "Day: cone apex downward at the foremast; night: two all-round red lights in vertical line.",
            "Day: black ball forward; night: all-round green over all-round white at the masthead."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q08",
        "question": "A pilot vessel is stopped in the water in restricted visibility. What should you hear?",
        "options": [
            "Three distinct strokes on the bell followed by rapid ringing, repeated every one minute.",
            "One prolonged blast at intervals of not more than two minutes, as for any PDV making way.",
            "Two prolonged blasts (not making way) plus identity signal of four short blasts per R.35(k).",
            "Rapid ringing of the bell forward for five seconds at intervals of not more than two minutes."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q10",
        "question": "You are at anchor in restricted visibility. What sound signals should you make, and at what interval?",
        "options": [
            "About 5 s rapid bell ringing forward then 5 s gong aft, at intervals of not more than one minute.",
            "One prolonged followed by two short blasts, repeated at intervals of not more than two minutes.",
            "Two prolonged blasts on the whistle every two minutes, with no bell or gong signal required.",
            "Four short blasts on the whistle at intervals of not more than one minute while at anchor."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q11",
        "question": "Besides RAS underway, which other restricted-in-ability-to-manoeuvre (RAM) examples are commonly cited in Royal Navy Fleet ROR examination answers (in addition to Rule 3(g))?",
        "options": [
            "Only tugs engaged in towing operations that severely restrict manoeuvrability qualify as RAM.",
            "Cable/pipeline laying, dredging, survey, underwater ops, mine clearance, aircraft launch/recovery, and tow restricting ability.",
            "Only warships conducting fleet exercises or replenishment are recognised as RAM under the COLREGs.",
            "No other operations are listed; RAM status applies exclusively to vessels conducting RAS evolutions."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q13",
        "question": "You sight lights green 30° at six miles. What kind of vessel might she be?",
        "options": [
            "Sailing vessel under sail alone, showing sidelights and a sternlight from this bearing.",
            "Large power-driven vessel towing with tow exceeding 200 m, displaying masthead array and towing light pattern.",
            "Vessel engaged in fishing with outlying gear extending more than 150 metres from the vessel.",
            "Vessel not under command, displaying two all-round red lights visible from all directions."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q14",
        "question": "Between your RAM RAS ship and a towing vessel, who keeps clear under Rule 18?",
        "options": [
            "RAM vessel must give way to any power-driven vessel that is engaged in towing operations.",
            "Both vessels stand on with equal status and rely on good seamanship to pass clear.",
            "Towing PDV keeps clear of a RAM vessel under the Rule 18(a)(ii) hierarchy.",
            "The tug has unconditional priority over all other vessel categories at all times."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q15",
        "question": "Range is four miles on a steady bearing. What is prudent?",
        "options": [
            "Take no action; maintain course and speed as the stand-on vessel at this range.",
            "Five short blasts if in doubt; or action per R.17 when give-way vessel is not acting appropriately.",
            "Immediately go full astern to stop the vessel without any whistle signal to the other.",
            "Abandon the RAS evolution immediately and proceed independently clear of all traffic."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q16",
        "question": "Range is two miles and the situation is still dangerous. What action must you take?",
        "options": [
            "Maintain the RAS formation and rely entirely on the other vessel to take avoiding action.",
            "Sound one short blast only and alter course slowly to starboard by no more than ten degrees.",
            "Best action to aid in avoiding collision — this may require an emergency breakaway from RAS.",
            "Wait and continue to observe; take no action until collision becomes imminent at close range."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q17",
        "question": "What is the minimum range for Lancaster’s stern light if she is 133 m long?",
        "options": [
            "3 miles.",
            "6 miles.",
            "2 miles.",
            "1 mile."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201510-oct-q25",
        "question": "You alter to starboard to give way. What sound signal is appropriate?",
        "options": [
            "One short blast, meaning I am altering my course to starboard under Rule 34(a).",
            "Two prolonged blasts followed by one short, indicating an overtaking manoeuvre.",
            "Five or more short and rapid blasts to express doubt about the other vessel's intentions.",
            "No sound signal is required when executing a give-way manoeuvre in open ocean waters."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201511-nov-q10",
        "question": "A small power-driven vessel in a narrow channel impeding your passage says a risk of collision exists. What are each side’s obligations?",
        "options": [
            "You are the stand-on vessel; the impeding craft must unconditionally keep clear regardless of collision risk.",
            "Not-to-be-impeded vessel still complies with Part B when ROC; you give way; the impeding vessel is not relieved.",
            "The impeding vessel must stop engines and hold position until the narrow channel is fully clear of traffic.",
            "Only Rule 9 narrow-channel provisions apply; Part B crossing and give-way rules are suspended within the channel."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201511-nov-q11",
        "question": "A merchant is red 170° at two miles. What situation is developing?",
        "options": [
            "Head-on encounter requiring both vessels to alter course to starboard under Rule 14.",
            "Overtaking situation — vessel coming up from more than 22.5 degrees abaft your beam per Rule 13.",
            "Crossing situation where the vessel on your port side is the give-way vessel under Rule 15.",
            "Meeting situation in which her restricted-manoeuvrability status determines right of way."
        ],
        "correct": 1,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201511-nov-q14",
        "question": "You see two cones with their apexes together. What does that mean?",
        "options": [
            "Vessel not under command, unable to manoeuvre as required by the COLREGs steering rules.",
            "Vessel constrained by her draught and restricted to navigating within a deep-water channel.",
            "Vessel engaged in fishing or trawling, using nets, lines, or apparatus restricting manoeuvrability.",
            "Vessel restricted in ability to manoeuvre while conducting underwater survey operations."
        ],
        "correct": 2,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    },
    {
        "id": "fleet-201511-nov-q25",
        "question": "In Royal Navy Fleet visual signalling practice, you see numeral pennant 5 hoisted together with six short blasts on the whistle. What does that combination mean per the Fleet key?",
        "options": [
            "Machinery breakdown — vessel is unable to proceed under her own power (Fleet key signal).",
            "Man overboard — a crew member has fallen into the sea and immediate assistance is needed.",
            "Submarine surfacing in the vicinity — all vessels keep clear and maintain safe distance.",
            "Flight operations are currently in progress — maintain safe distance from the carrier."
        ],
        "correct": 0,
        "explanation": "See the cited COLREGs rule for the full legal text.",
        "source": "Fleet ROR exam papers"
    }
];

const understandingQuestions = understandingQuizLegacy.concat(understandingQuizFromDoc).concat(understandingQuizFleetPapers);

const COLREGS_EXPLANATION_RULE_BLURBS = {
    "Rule 2": "Rule 2: nothing in the Rules excuses neglect of good seamanship, special circumstances, or the serious consequences of collision or stranding.",
    "Rule 3": "Rule 3 defines terms (e.g. power-driven vessel, sailing vessel, underway, restricted visibility) used throughout the COLREGs.",
    "Rule 5": "Rule 5: every vessel shall at all times maintain a proper look-out by sight and hearing as well as by all available means appropriate in the circumstances.",
    "Rule 6": "Rule 6: every vessel shall at all times proceed at a safe speed so that she can take proper and effective action to avoid collision and be stopped within a distance appropriate to the prevailing circumstances and conditions.",
    "Rule 7": "Rule 7: use all available means to determine if risk of collision exists; if in doubt, assume that it does. Do not rely on scanty information (especially scanty radar information).",
    "Rule 8": "Rule 8: any action to avoid collision shall be positive, made in ample time and with due regard to good seamanship; avoid a succession of small alterations and watch passing distances.",
    "Rule 9": "Rule 9: in a narrow channel or fairway, keep to the starboard side; do not hamper vessels that can safely navigate only inside the channel; crossing traffic lanes and impeding rules apply as stated in the Rule.",
    "Rule 10": "Rule 10: traffic separation schemes adopted by IMO do not relieve any vessel of her obligations under any other Rule; follow lane direction, crossing/joining/leaving, and inshore-zone rules as set out in the Rule.",
    "Rule 12": "Rule 12: when two sailing vessels are approaching one another so as to involve risk of collision, one with wind on the port side shall keep clear of the other; if both have wind on the same side, the windward vessel keeps clear.",
    "Rule 13": "Rule 13: notwithstanding anything in the Rules, any vessel overtaking another shall keep out of the way of the vessel being overtaken until finally past and clear.",
    "Rule 14": "Rule 14: when two power-driven vessels are meeting head-on, both shall alter course to starboard so that each passes on the port side of the other.",
    "Rule 15": "Rule 15: when two power-driven vessels are crossing so as to involve risk of collision, the vessel which has the other on her own starboard side shall keep out of the way.",
    "Rule 16": "Rule 16: every vessel which is directed to keep out of the way of another shall, so far as possible, take early and substantial action to keep well clear.",
    "Rule 17": "Rule 17: where one of two vessels is to keep out of the way, the other shall keep her course and speed; the stand-on vessel may take action when collision cannot be avoided by the give-way vessel alone, and shall act if the give-way vessel is not taking appropriate action.",
    "Rule 18": "Rule 18: except where Rules 9, 10, and 13 require otherwise, a power-driven vessel underway shall keep out of the way of (i) a vessel not under command; (ii) a vessel restricted in her ability to manoeuvre; (iii) a vessel engaged in fishing; (iv) a sailing vessel. Overtaking and other paragraphs further define responsibilities.",
    "Rule 19": "Rule 19: in restricted visibility every vessel shall proceed at a safe speed; detecting another vessel by radar or hearing a fog signal forward of the beam imposes specific manoeuvring and signal duties as in the Rule.",
    "Rule 20": "Rule 20: compliance periods for navigation lights; from sunset to sunrise, and in restricted visibility by day, the lights prescribed in these Rules shall be carried.",
    "Rule 24": "Rule 24: towing and pushing; inconspicuous partly submerged objects; additional lights and shapes for long tows.",
    "Rule 25": "Rule 25: sailing vessels underway and vessels under oars; small vessels may combine lanterns under stated conditions.",
    "Rule 26": "Rule 26: fishing vessels, vessels trawling, and vessels not fishing but with gear extending more than 150 m \u2014 lights and shapes by day and night.",
    "Rule 27": "Rule 27: vessels not under command, restricted in ability to manoeuvre, constrained by draught, aground, and mine clearance \u2014 lights and shapes.",
    "Rule 28": "Rule 28: vessels constrained by their draught may exhibit (where permitted) three all-round red lights or a cylinder in addition to other lights/shapes.",
    "Rule 29": "Rule 29: pilot vessels on pilotage duty exhibit special lights/shapes in addition to those for their size and activity.",
    "Rule 34": "Rule 34: manoeuvring and warning signals in sight of one another.",
    "Rule 35": "Rule 35: sound signals in restricted visibility for vessels underway, at anchor, aground, etc.",
    "Annex IV": "Annex IV: distress signals \u2014 rocket parachute flare, hand flare, orange smoke, gun at one-minute intervals, continuous sounding, etc.",
    "Rule 1": "Rule 1: the steering and sailing rules apply on the high seas and connected waters; special local rules may also apply where promulgated."
};

/**
 * Resolves (rawExplanation?, question?) or (question) from browser/PDF callers and returns HTML paragraphs + rule blurbs.
 * @param {*} arg1 - Full question object, or raw explanation string when arg2 is the question
 * @param {*} [arg2] - Question object when arg1 is a string
 * @returns {string}
 */
function expandUnderstandingQuizExplanation(arg1, arg2) {
    let explanationText = '';
    if (arg2 != null && typeof arg2 === 'object' && !Array.isArray(arg2)) {
        explanationText =
            typeof arg1 === 'string' && String(arg1).trim() !== ''
                ? String(arg1)
                : String(arg2.explanation || '');
    } else if (arg1 != null && typeof arg1 === 'object' && !Array.isArray(arg1)) {
        explanationText = String(arg1.explanation || '');
    } else {
        explanationText = String(arg1 || '');
    }
    if (!explanationText.trim()) return '';
    let html =
        '<p>' +
        explanationText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') +
        '</p>';
    const ruleRefs = explanationText.match(/Rule\s+\d+/g) || [];
    const seen = new Set();
    for (const ref of ruleRefs) {
        if (seen.has(ref)) continue;
        seen.add(ref);
        const blurb = COLREGS_EXPLANATION_RULE_BLURBS[ref];
        if (blurb) {
            html += '<p class="rule-blurb"><em>' + blurb.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</em></p>';
        }
    }
    return html;
}

if (typeof window !== 'undefined') {
    window.understandingQuestions = understandingQuestions;
    window.expandUnderstandingQuizExplanation = expandUnderstandingQuizExplanation;
    window.COLREGS_EXPLANATION_RULE_BLURBS = COLREGS_EXPLANATION_RULE_BLURBS;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        understandingQuestions,
        understandingQuizLegacy,
        understandingQuizFromDoc,
        understandingQuizFleetPapers,
        expandUnderstandingQuizExplanation,
        COLREGS_EXPLANATION_RULE_BLURBS
    };
}
