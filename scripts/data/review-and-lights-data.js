/**
 * Review and lights/flags data: colregs rules, maritime flags, image paths.
 * Replaces colregs-data.js and flags-data.js.
 */

const colregsRules = [
    {
        number: 1,
        name: "Application",
        verbatim: [
            "(a) These Rules shall apply to all vessels upon the high seas and in all waters connected therewith navigable by seagoing vessels.",
            "(b) Nothing in these Rules shall interfere with the operation of special rules made by an appropriate authority for roadsteads, harbours, rivers, lakes or inland waterways connected with the high seas and navigable by seagoing vessels. Such special rules shall conform as closely as possible to these Rules.",
            "(c) Nothing in these Rules shall interfere with the operation of any special rules made by the Government of any State with respect to additional station or signal lights, shapes or whistle signals for ships of war and vessels proceeding under convoy, or with respect to additional station or signal lights or shapes for fishing vessels engaged in fishing as a fleet. These additional station or signal lights, shapes or whistle signals shall, so far as possible, be such that they cannot be mistaken for any light, shape or signal authorized elsewhere under these Rules.",
            "(d) Traffic separation schemes may be adopted by the Organization for the purpose of these Rules.",
            "(e) Whenever the Government concerned shall have determined that a vessel of special construction or purpose cannot comply fully with the provisions of any of these Rules with respect to the number, position, range or arc of visibility of lights or shapes, as well as to the disposition and characteristics of sound-signalling appliances, such vessel shall comply with such other provisions in regard to the number, position, range or arc of visibility of lights or shapes, as well as to the disposition and characteristics of sound-signalling appliances, as her Government shall have determined to be the closest possible compliance with these Rules in respect of that vessel."
        ],
        summary: "These rules apply to all vessels on the high seas and connected waters. Special rules may exist for harbours and inland waterways, but they must conform as closely as possible to COLREGS. Additional signals may be used by warships and fishing fleets. Traffic separation schemes may be established, and vessels of special construction may be granted exemptions."
    },
    {
        number: 2,
        name: "Responsibility",
        verbatim: [
            "(a) Nothing in these Rules shall exonerate any vessel, or the owner, master or crew thereof, from the consequences of any neglect to comply with these Rules or of the neglect of any precaution which may be required by the ordinary practice of seamen, or by the special circumstances of the case.",
            "(b) In construing and complying with these Rules due regard shall be had to all dangers of navigation and collision and to any special circumstances, including the limitations of the vessels involved, which may make a departure from these Rules necessary to avoid immediate danger."
        ],
        summary: "Vessels and their crews are responsible for following these rules and taking all necessary precautions expected of good seamanship. In special circumstances involving immediate danger, departures from the rules may be necessary, but vessels must always consider navigation hazards and their own limitations."
    },
    {
        number: 3,
        name: "General definitions",
        verbatim: [
            "(a) The word 'vessel' includes every description of water craft, including non-displacement craft, WIG craft and seaplanes, used or capable of being used as a means of transportation on water.",
            "(b) The term 'power-driven vessel' means any vessel propelled by machinery.",
            "(c) The term 'sailing vessel' means any vessel under sail provided that propelling machinery, if fitted, is not being used.",
            "(d) The term 'vessel engaged in fishing' means any vessel fishing with nets, lines, trawls or other fishing apparatus which restrict manoeuvrability, but does not include a vessel fishing with trolling lines or other fishing apparatus which do not restrict manoeuvrability.",
            "(e) The word 'seaplane' includes any aircraft designed to manoeuvre on the water.",
            "(f) The term 'vessel not under command' means a vessel which through some exceptional circumstance is unable to manoeuvre as required by these Rules and is therefore unable to keep out of the way of another vessel.",
            "(g) The term 'vessel restricted in her ability to manoeuvre' means a vessel which from the nature of her work is restricted in her ability to manoeuvre as required by these Rules and is therefore unable to keep out of the way of another vessel. The term 'vessels restricted in their ability to manoeuvre' shall include but not be limited to:\n(i) a vessel engaged in laying, servicing or picking up a navigation mark, submarine cable or pipeline;\n(ii) a vessel engaged in dredging, surveying or underwater operations;\n(iii) a vessel engaged in replenishment or transferring persons, provisions or cargo while underway;\n(iv) a vessel engaged in the launching or recovery of aircraft;\n(v) a vessel engaged in mineclearance operations;\n(vi) a vessel engaged in a towing operation such as severely restricts the towing vessel and her tow in their ability to deviate from their course.",
            "(h) The term 'vessel constrained by her draught' means a power-driven vessel which, because of her draught in relation to the available depth and width of navigable water, is severely restricted in her ability to deviate from the course she is following.",
            "(i) The word 'underway' means that a vessel is not at anchor, or made fast to the shore, or aground.",
            "(j) The words 'length' and 'breadth' of a vessel mean her length overall and greatest breadth.",
            "(k) Vessels shall be deemed to be in sight of one another only when one can be observed visually from the other.",
            "(l) The term 'restricted visibility' means any condition in which visibility is restricted by fog, mist, falling snow, heavy rainstorms, sandstorms or any other similar causes.",
            "(m) The term 'Wing-In-Ground (WIG) craft' means a multimodal craft which, in its main operational mode, flies in close proximity to the surface by utilizing surface-effect action."
        ],
        summary: "Defines key terms: vessel (any watercraft including seaplanes), power-driven vessel (using machinery), sailing vessel (under sail only), fishing vessel (with gear restricting maneuverability), vessel not under command (cannot maneuver), vessel restricted in ability to maneuver (work restricts movement - includes laying cables, dredging, replenishment, aircraft operations, mine clearance, restricted towing), vessel constrained by draught (limited by water depth), underway (not anchored or aground), restricted visibility (fog, rain, etc.), and Wing-In-Ground (WIG) craft (multimodal craft using surface-effect)."
    },
    {
        number: 4,
        name: "Application",
        verbatim: [
            "Rules in this Section apply in any condition of visibility."
        ],
        summary: "The rules in Part B, Section I apply in all visibility conditions, whether clear or restricted."
    },
    {
        number: 5,
        name: "Look-out",
        verbatim: [
            "Every vessel shall at all times maintain a proper look-out by sight and hearing as well as by all available means appropriate in the prevailing circumstances and conditions so as to make a full appraisal of the situation and of the risk of collision."
        ],
        summary: "All vessels must maintain a proper lookout using sight, hearing, and all available means (including radar) to assess the situation and collision risk at all times."
    },
    {
        number: 6,
        name: "Safe Speed",
        verbatim: [
            "Every vessel shall at all times proceed at a safe speed so that she can take proper and effective action to avoid collision and be stopped within a distance appropriate to the prevailing circumstances and conditions. In determining a safe speed the following factors shall be among those taken into account:",
            "(a) By all vessels:\n(i) the state of visibility;\n(ii) the traffic density including concentrations of fishing vessels or any other vessels;\n(iii) the manoeuvrability of the vessel with special reference to stopping distance and turning ability in the prevailing conditions;\n(iv) at night the presence of background light such as from shore lights or from back scatter of her own lights;\n(v) the state of wind, sea and current, and the proximity of navigational hazards;\n(vi) the draught in relation to the available depth of water.",
            "(b) Additionally, by vessels with operational radar:\n(i) the characteristics, efficiency and limitations of the radar equipment;\n(ii) any constraints imposed by the radar range scale in use;\n(iii) the effect on radar detection of the sea state, weather and other sources of interference;\n(iv) the possibility that small vessels, ice and other floating objects may not be detected by radar at an adequate range;\n(v) the number, location and movement of vessels detected by radar;\n(vi) the more exact assessment of the visibility that may be possible when radar is used to determine the range of vessels or other objects in the vicinity."
        ],
        summary: "Vessels must travel at a safe speed to avoid collision and stop in time. Factors include visibility, traffic density, maneuverability, lighting conditions, weather, water depth, and for radar-equipped vessels, the characteristics and limitations of radar equipment."
    },
    {
        number: 7,
        name: "Risk of collision",
        verbatim: [
            "(a) Every vessel shall use all available means appropriate to the prevailing circumstances and conditions to determine if risk of collision exists. If there is any doubt such risk shall be deemed to exist.",
            "(b) Proper use shall be made of radar equipment if fitted and operational, including long-range scanning to obtain early warning of risk of collision and radar plotting or equivalent systematic observation of detected objects.",
            "(c) Assumptions shall not be made on the basis of scanty information, especially scanty radar information.",
            "(d) In determining if risk of collision exists the following considerations shall be among those taken into account:\n(i) such risk shall be deemed to exist if the compass bearing of an approaching vessel does not appreciably change;\n(ii) such risk may sometimes exist even when an appreciable bearing change is evident, particularly when approaching a very large vessel or a tow or when approaching a vessel at close range."
        ],
        summary: "Use all available means to determine collision risk—if in doubt, assume risk exists. Use radar properly for early warning and systematic observation. Don't rely on incomplete information. Risk exists if the bearing of an approaching vessel doesn't change, and may exist even with bearing changes when approaching large vessels or at close range."
    },
    {
        number: 8,
        name: "Action to avoid collision",
        verbatim: [
            "(a) Any action taken to avoid collision shall be taken in accordance with the Rules of this Part and shall, if the circumstances of the case admit, be positive, made in ample time and with due regard to the observance of good seamanship.",
            "(b) Any alteration of course and/or speed to avoid collision shall, if the circumstances of the case admit, be large enough to be readily apparent to another vessel observing visually or by radar; a succession of small alterations of course and/or speed should be avoided.",
            "(c) If there is sufficient sea-room, alteration of course alone may be the most effective action to avoid a close-quarters situation provided that it is made in good time, is substantial and does not result in another close-quarters situation.",
            "(d) Action taken to avoid collision with another vessel shall be such as to result in passing at a safe distance. The effectiveness of the action shall be carefully checked until the other vessel is finally past and clear.",
            "(e) If necessary to avoid collision or allow more time to assess the situation, a vessel shall slacken her speed or take all way off by stopping or reversing her means of propulsion.",
            "(f) (i) A vessel which, by any of these Rules, is required not to impede the passage or safe passage of another vessel shall, when required by the circumstances of the case, take early action to allow sufficient sea-room for the safe passage of the other vessel.\n(ii) A vessel required not to impede the passage or safe passage of another vessel is not relieved of this obligation if approaching the other vessel so as to involve risk of collision and shall, when taking action, have full regard to the action which may be required by the Rules of this part.\n(iii) A vessel the passage of which is not to be impeded remains fully obliged to comply with the Rules of this part when the two vessels are approaching one another so as to involve risk of collision."
        ],
        summary: "Collision avoidance actions must be positive, timely, and follow good seamanship. Course or speed changes should be large enough to be readily apparent; avoid small successive alterations. With sea room, a substantial course change made early is most effective. Actions must result in safe passing distance, and effectiveness must be monitored. Slow down or stop if necessary. Vessels required not to impede another must take early action to allow sufficient sea room; this obligation is not relieved by risk of collision; the vessel whose passage is not to be impeded remains obliged to comply with the Rules when risk of collision exists."
    },
    {
        number: 9,
        name: "Narrow channels",
        verbatim: [
            "(a) A vessel proceeding along the course of a narrow channel or fairway shall keep as near to the outer limit of the channel or fairway which lies on her starboard side as is safe and practicable.",
            "(b) A vessel of less than 20 metres in length or a sailing vessel shall not impede the passage of a vessel which can safely navigate only within a narrow channel or fairway.",
            "(c) A vessel engaged in fishing shall not impede the passage of any other vessel navigating within a narrow channel or fairway.",
            "(d) A vessel shall not cross a narrow channel or fairway if such crossing impedes the passage of a vessel which can safely navigate only within such channel or fairway. The latter vessel may use the sound signal prescribed in Rule 34(d) if in doubt as to the intention of the crossing vessel.",
            "(e) (i) In a narrow channel or fairway when overtaking can take place only if the vessel to be overtaken has to take action to permit safe passing, the vessel intending to overtake shall indicate her intention by sounding the appropriate signal prescribed in Rule 34(c)(i). The vessel to be overtaken shall, if in agreement, sound the appropriate signal prescribed in Rule 34(c)(ii) and take steps to permit safe passing. If in doubt she may sound the signals prescribed in Rule 34(d).\n(ii) This Rule does not relieve the overtaking vessel of her obligation under Rule 13.",
            "(f) A vessel nearing a bend or an area of a narrow channel or fairway where other vessels may be obscured by an intervening obstruction shall navigate with particular alertness and caution and shall sound the appropriate signal prescribed in Rule 34(e).",
            "(g) Any vessel shall, if the circumstances of the case admit, avoid anchoring in a narrow channel."
        ],
        summary: "In narrow channels, keep to starboard side. Small vessels and sailing vessels must not impede larger vessels that can only navigate within the channel. Fishing vessels must not impede passage. Don't cross if it will impede traffic. Special signals are required for overtaking. Navigate carefully near bends and sound appropriate signals. Avoid anchoring in channels."
    },
    {
        number: 10,
        name: "Traffic separation schemes",
        verbatim: [
            "(a) This Rule applies to traffic separation schemes adopted by the Organization and does not relieve any vessel of her obligation under any other rule.",
            "(b) A vessel using a traffic separation scheme shall:\n(i) proceed in the appropriate traffic lane in the general direction of traffic flow for that lane;\n(ii) so far as practicable keep clear of a traffic separation line or separation zone;\n(iii) normally join or leave a traffic lane at the termination of the lane, but when joining or leaving from either side shall do so at as small an angle to the general direction of traffic flow as practicable.",
            "(c) A vessel shall, so far as practicable, avoid crossing traffic lanes but if obliged to do so shall cross on a heading as nearly as practicable at right angles to the general direction of traffic flow.",
            "(d) (i) A vessel shall not use an inshore traffic zone when she can safely use the appropriate traffic lane within the adjacent traffic separation scheme. However, vessels of less than 20 metres in length, sailing vessels and vessels engaged in fishing may use the inshore traffic zone.\n(ii) Notwithstanding subparagraph (d)(i), a vessel may use an inshore traffic zone when en route to or from a port, offshore installation or structure, pilot station or any other place situated within the inshore traffic zone, or to avoid immediate danger.",
            "(e) A vessel other than a crossing vessel or a vessel joining or leaving a lane shall not normally enter a separation zone or cross a separation line except:\n(i) in cases of emergency to avoid immediate danger;\n(ii) to engage in fishing within a separation zone.",
            "(f) A vessel navigating in areas near the terminations of traffic separation schemes shall do so with particular caution.",
            "(g) A vessel shall so far as practicable avoid anchoring in a traffic separation scheme or in areas near its terminations.",
            "(h) A vessel not using a traffic separation scheme shall avoid it by as wide a margin as is practicable.",
            "(i) A vessel engaged in fishing shall not impede the passage of any vessel following a traffic lane.",
            "(j) A vessel of less than 20 metres in length or a sailing vessel shall not impede the safe passage of a power-driven vessel following a traffic lane.",
            "(k) A vessel restricted in her ability to manoeuvre when engaged in an operation for the maintenance of safety of navigation in a traffic separation scheme is exempted from complying with this Rule to the extent necessary to carry out the operation.",
            "(l) A vessel restricted in her ability to manoeuvre when engaged in an operation for the laying, servicing or picking up of a submarine cable, within a traffic separation scheme, is exempted from complying with this Rule to the extent necessary to carry out the operation."
        ],
        summary: "In traffic separation schemes, proceed in the correct lane in the direction of traffic flow, stay clear of separation lines/zones, and join/leave at lane terminations at shallow angles. Avoid crossing lanes, but if necessary, cross at right angles. Don't use inshore zones unless appropriate. Don't enter separation zones except in emergencies or when fishing. Small vessels, sailing vessels, and fishing vessels must not impede traffic. Avoid anchoring in schemes."
    },
    {
        number: 11,
        name: "Application",
        verbatim: [
            "Rules in this Section apply to vessels in sight of one another."
        ],
        summary: "The rules in Part B, Section II apply only when vessels can see each other visually."
    },
    {
        number: 12,
        name: "Sailing vessels",
        verbatim: [
            "(a) When two sailing vessels are approaching one another, so as to involve risk of collision, one of them shall keep out of the way of the other as follows:\n(i) when each has the wind on a different side, the vessel which has the wind on the port side shall keep out of the way of the other;\n(ii) when both have the wind on the same side, the vessel which is to windward shall keep out of the way of the vessel which is to leeward;\n(iii) if a vessel with the wind on the port side sees a vessel to windward and cannot determine with certainty whether the other vessel has the wind on the port or on the starboard side, she shall keep out of the way of the other.",
            "(b) For the purposes of this Rule the windward side shall be deemed to be the side opposite to that on which the mainsail is carried or, in the case of a square-rigged vessel, the side opposite to that on which the largest fore-and-aft sail is carried."
        ],
        summary: "When two sailing vessels risk collision: if on different tacks, port-tack vessel keeps clear; if on same tack, windward vessel keeps clear; if uncertain about the other vessel's tack, keep clear. Windward side is opposite to where the mainsail is carried."
    },
    {
        number: 13,
        name: "Overtaking",
        verbatim: [
            "(a) Notwithstanding anything contained in the Rules of Part B, Sections I and II, any vessel overtaking any other shall keep out of the way of the vessel being overtaken.",
            "(b) A vessel shall be deemed to be overtaking when coming up with another vessel from a direction more than 22.5 degrees abaft her beam, that is, in such a position with reference to the vessel she is overtaking, that at night she would be able to see only the sternlight of that vessel but neither of her sidelights.",
            "(c) When a vessel is in any doubt as to whether she is overtaking another, she shall assume that this is the case and act accordingly.",
            "(d) Any subsequent alteration of the bearing between the two vessels shall not make the overtaking vessel a crossing vessel within the meaning of these Rules or relieve her of the duty of keeping clear of the overtaken vessel until she is finally past and clear."
        ],
        summary: "An overtaking vessel must keep clear of the vessel being overtaken. A vessel is overtaking when approaching from more than 22.5 degrees abaft the beam (where only the stern light would be visible at night). If in doubt, assume you are overtaking. Once overtaking, the vessel remains the give-way vessel until finally past and clear."
    },
    {
        number: 14,
        name: "Head-on situation",
        verbatim: [
            "(a) When two power-driven vessels are meeting on reciprocal or nearly reciprocal courses so as to involve risk of collision each shall alter her course to starboard so that each shall pass on the port side of the other.",
            "(b) Such a situation shall be deemed to exist when a vessel sees the other ahead or nearly ahead and by night she could see the masthead lights of the other in a line or nearly in a line and/or both sidelights and by day she observes the corresponding aspect of the other vessel.",
            "(c) When a vessel is in any doubt as to whether such a situation exists she shall assume that it does exist and act accordingly."
        ],
        summary: "When two power-driven vessels meet head-on or nearly head-on with risk of collision, both must alter course to starboard to pass port-to-port. This situation exists when vessels are ahead or nearly ahead (at night, masthead lights in line and/or both sidelights visible). If in doubt, assume head-on and act accordingly."
    },
    {
        number: 15,
        name: "Crossing situation",
        verbatim: [
            "When two power-driven vessels are crossing so as to involve risk of collision, the vessel which has the other on her own starboard side shall keep out of the way and shall, if the circumstances of the case admit, avoid crossing ahead of the other vessel."
        ],
        summary: "When two power-driven vessels are crossing with collision risk, the vessel with the other on her starboard side must keep clear and should avoid crossing ahead of the other vessel."
    },
    {
        number: 16,
        name: "Action by give-way vessel",
        verbatim: [
            "Every vessel which is directed to keep out of the way of another vessel shall, so far as possible, take early and substantial action to keep well clear."
        ],
        summary: "The give-way vessel must take early and substantial action to keep well clear of the stand-on vessel."
    },
    {
        number: 17,
        name: "Action by stand-on vessel",
        verbatim: [
            "(a) (i) Where one of two vessels is to keep out of the way the other shall keep her course and speed.\n(ii) The latter vessel may however take action to avoid collision by her manoeuvre alone, as soon as it becomes apparent to her that the vessel required to keep out of the way is not taking appropriate action in compliance with these Rules.",
            "(b) When, from any cause, the vessel required to keep her course and speed finds herself so close that collision cannot be avoided by the action of the give-way vessel alone, she shall take such action as will best aid to avoid collision.",
            "(c) A power-driven vessel which takes action in a crossing situation in accordance with subparagraph (a)(ii) of this Rule to avoid collision with another power-driven vessel shall, if the circumstances of the case admit, not alter course to port for a vessel on her own port side.",
            "(d) This Rule does not relieve the give-way vessel of her obligation to keep out of the way."
        ],
        summary: "The stand-on vessel must maintain course and speed, but may take action if the give-way vessel doesn't act appropriately. If collision cannot be avoided by the give-way vessel alone, the stand-on vessel must act to avoid collision. In crossing situations, a power-driven stand-on vessel should not alter course to port for a vessel on her port side. This doesn't relieve the give-way vessel's duty to keep clear."
    },
    {
        number: 18,
        name: "Responsibilities between vessels",
        verbatim: [
            "(a) A power-driven vessel underway shall keep out of the way of:\n(i) a vessel not under command;\n(ii) a vessel restricted in her ability to manoeuvre;\n(iii) a vessel engaged in fishing;\n(iv) a sailing vessel.",
            "(b) A sailing vessel underway shall keep out of the way of:\n(i) a vessel not under command;\n(ii) a vessel restricted in her ability to manoeuvre;\n(iii) a vessel engaged in fishing.",
            "(c) A vessel engaged in fishing when underway shall, so far as possible, keep out of the way of:\n(i) a vessel not under command;\n(ii) a vessel restricted in her ability to manoeuvre.",
            "(d) (i) Any vessel other than a vessel not under command or a vessel restricted in her ability to manoeuvre shall, if the circumstances of the case admit, avoid impeding the safe passage of a vessel constrained by her draught, exhibiting the signals in Rule 28.\n(ii) A vessel constrained by her draught shall navigate with particular caution having full regard to her special condition.",
            "(e) A seaplane on the water shall, in general, keep well clear of all vessels and avoid impeding their navigation. In circumstances, however, where risk of collision exists, she shall comply with the Rules of this Part."
        ],
        summary: "Hierarchy of vessel priorities (except in narrow channels, traffic schemes, and overtaking): Power-driven vessels give way to vessels not under command, restricted in maneuverability, fishing, and sailing vessels. Sailing vessels give way to vessels not under command, restricted in maneuverability, and fishing vessels. Fishing vessels give way to vessels not under command and restricted in maneuverability. All vessels should avoid impeding vessels constrained by draught. Seaplanes keep clear of all vessels."
    },
    {
        number: 19,
        name: "Conduct of vessels in restricted visibility",
        verbatim: [
            "(a) This Rule applies to vessels not in sight of one another when navigating in or near an area of restricted visibility.",
            "(b) Every vessel shall proceed at a safe speed adapted to the prevailing circumstances and conditions of restricted visibility. A power-driven vessel shall have her engines ready for immediate manoeuvre.",
            "(c) Every vessel shall have due regard to the prevailing circumstances and conditions of restricted visibility when complying with the Rules of Section I of this Part.",
            "(d) A vessel which detects by radar alone the presence of another vessel shall determine if a close-quarters situation is developing and/or risk of collision exists. If so, she shall take avoiding action in ample time, provided that when such action consists of an alteration of course, so far as possible the following shall be avoided:\n(i) an alteration of course to port for a vessel forward of the beam, other than for a vessel being overtaken;\n(ii) an alteration of course towards a vessel abeam or abaft the beam.",
            "(e) Except where it has been determined that a risk of collision does not exist, every vessel which hears apparently forward of her beam the fog signal of another vessel, or which cannot avoid a close-quarters situation with another vessel forward of her beam, shall reduce her speed to the minimum at which she can be kept on her course. She shall if necessary take all her way off and in any event navigate with extreme caution until danger of collision is over."
        ],
        summary: "In restricted visibility when vessels are not in sight of one another: proceed at safe speed with engines ready for immediate maneuver. Use radar to detect close-quarters situations. When taking avoiding action, avoid altering course to port for vessels forward of the beam (except overtaking) and avoid altering course toward vessels abeam or abaft. If you hear a fog signal forward of the beam or cannot avoid close quarters, reduce speed to minimum or stop, and navigate with extreme caution."
    },
    {
        number: 20,
        name: "Application",
        verbatim: [
            "(a) Rules in this Part shall be complied with in all weathers.",
            "(b) The Rules concerning lights shall be complied with from sunset to sunrise, and during such times no other lights shall be exhibited, except such lights as cannot be mistaken for the lights specified in these Rules or do not impair their visibility or distinctive character, or interfere with the keeping of a proper look-out.",
            "(c) The lights prescribed by these Rules shall, if carried, also be exhibited from sunrise to sunset in restricted visibility and may be exhibited in all other circumstances when it is deemed necessary.",
            "(d) The Rules concerning shapes shall be complied with by day.",
            "(e) The lights and shapes specified in these Rules shall comply with the provisions of Annex I to these Regulations."
        ],
        summary: "Part C rules (lights and shapes) apply in all weathers. Lights from sunset to sunrise; no conflicting lights. Lights may be shown in restricted visibility by day. Shapes by day. All must comply with Annex I."
    },
    {
        number: 21,
        name: "Definitions",
        verbatim: [
            "(a) 'Masthead light' means a white light placed over the fore and aft centreline of the vessel showing an unbroken light over an arc of the horizon of 225 degrees and so fixed as to show the light from right ahead to 22.5 degrees abaft the beam on either side of the vessel.",
            "(b) 'Sidelights' means a green light on the starboard side and a red light on the port side each showing an unbroken light over an arc of the horizon of 112.5 degrees and so fixed as to show the light from right ahead to 22.5 degrees abaft the beam on its respective side. In a vessel of less than 20 metres in length the sidelights may be combined in one lantern carried on the fore and aft centreline of the vessel.",
            "(c) 'Sternlight' means a white light placed as nearly as practicable at the stern showing an unbroken light over an arc of the horizon of 135 degrees and so fixed as to show the light 67.5 degrees from right aft on each side of the vessel.",
            "(d) 'Towing light' means a yellow light having the same characteristics as the 'sternlight' defined in paragraph (c) of this Rule.",
            "(e) 'All-round light' means a light showing an unbroken light over an arc of the horizon of 360 degrees.",
            "(f) 'Flashing light' means a light flashing at regular intervals at a frequency of 120 flashes or more per minute."
        ],
        summary: "Defines masthead light (225 deg), sidelights (112.5 deg each), sternlight (135 deg), towing light (yellow, sternlight characteristics), all-round light (360 deg), and flashing light (120+ flashes/min)."
    },
    {
        number: 22,
        name: "Visibility of lights",
        verbatim: [
            "The lights prescribed in these Rules shall have an intensity as specified in Section 8 of Annex I to these Regulations so as to be visible at the following minimum ranges:",
            "(a) In vessels of 50 metres or more in length: a masthead light, 6 miles; a sidelight, 3 miles; a sternlight, 3 miles; a towing light, 3 miles; a white, red, green or yellow all-round light, 3 miles.",
            "(b) In vessels of 12 metres or more in length but less than 50 metres in length: a masthead light, 5 miles (except where length is less than 20 metres, 3 miles); a sidelight, 2 miles; a sternlight, 2 miles; a towing light, 2 miles; a white, red, green or yellow all-round light, 2 miles.",
            "(c) In vessels of less than 12 metres in length: a masthead light, 2 miles; a sidelight, 1 mile; a sternlight, 2 miles; a towing light, 2 miles; a white, red, green or yellow all-round light, 2 miles.",
            "(d) In inconspicuous, partly submerged vessels or objects being towed: a white all-round light, 3 miles."
        ],
        summary: "Minimum visibility ranges for lights by vessel length: 50m+ (masthead 6nm, others 3nm); 12-50m (masthead 5nm or 3nm if <20m, others 2nm); <12m (masthead 2nm, sidelight 1nm, others 2nm); towed objects (white all-round 3nm)."
    },
    {
        number: 23,
        name: "Power-driven vessels underway",
        verbatim: [
            "(a) A power-driven vessel underway shall exhibit:\n(i) a masthead light forward;\n(ii) a second masthead light abaft of and higher than the forward one; except that a vessel of less than 50 metres in length shall not be obliged to exhibit such light but may do so;\n(iii) sidelights;\n(iv) a sternlight.",
            "(b) An air-cushion vessel when operating in the non-displacement mode shall, in addition to the lights prescribed in paragraph (a) of this Rule, exhibit an all-round flashing yellow light.",
            "(c) A WIG craft only when taking off, landing and in flight near the surface shall, in addition to the lights prescribed in paragraph (a) of this Rule, exhibit a high intensity all-round flashing red light.",
            "(d) (i) A power-driven vessel of less than 12 metres in length may in lieu of the lights prescribed in paragraph (a) of this Rule exhibit an all-round white light and sidelights;\n(ii) a power-driven vessel of less than 7 metres in length whose maximum speed does not exceed 7 knots may in lieu of the lights prescribed in paragraph (a) of this Rule exhibit an all-round white light and shall, if practicable, also exhibit sidelights;\n(iii) the masthead light or all-round white light on a power-driven vessel of less than 12 metres in length may be displaced from the fore and aft centreline of the vessel if centreline fitting is not practicable, provided that the sidelights are combined in one lantern which shall be carried on the fore and aft centreline of the vessel or located as nearly as practicable in the same fore and aft line as the masthead light or the all-round white light."
        ],
        summary: "Power-driven vessels exhibit masthead light(s), sidelights, sternlight. Optional second masthead for vessels under 50m. Air-cushion vessels add flashing yellow. WIG craft add flashing red. Small vessels may use simplified lighting."
    },
    {
        number: 24,
        name: "Towing and pushing",
        verbatim: [
            "(a) A power-driven vessel when towing shall exhibit:\n(i) two masthead lights in a vertical line (three when tow exceeds 200m);\n(ii) sidelights;\n(iii) a sternlight;\n(iv) a towing light in a vertical line above the sternlight;\n(v) when tow exceeds 200m, a diamond shape where it can best be seen.",
            "(b) When a pushing vessel and a vessel being pushed ahead are rigidly connected in a composite unit they shall be regarded as a power-driven vessel and exhibit the lights prescribed in Rule 23.",
            "(c) A power-driven vessel when pushing ahead or towing alongside, except in the case of a composite unit, shall exhibit:\n(i) two masthead lights in a vertical line;\n(ii) sidelights;\n(iii) a sternlight.",
            "(d) A power-driven vessel to which paragraph (a) or (c) of this Rule applies shall also comply with Rule 23(a)(ii).",
            "(e) A vessel or object being towed shall exhibit:\n(i) sidelights;\n(ii) a sternlight;\n(iii) when length of tow exceeds 200m, a diamond shape.",
            "(f) A vessel being pushed ahead shall exhibit sidelights at the forward end; a vessel being towed alongside shall exhibit a sternlight and sidelights at the forward end.",
            "(g) An inconspicuous, partly submerged vessel or object being towed shall exhibit specified all-round white lights and diamond shapes according to breadth and length.",
            "(h) Where impracticable to exhibit prescribed lights on towed vessel/object, all possible measures shall be taken to light or indicate its presence.",
            "(i) A vessel not normally engaged in towing need not exhibit towing lights when towing a vessel in distress; all possible measures shall be taken to indicate the relationship (e.g. illuminating the towline) as authorized by Rule 36."
        ],
        summary: "Towing vessels exhibit two or three masthead lights, sidelights, sternlight, towing light; diamond when tow exceeds 200m. Composite units follow Rule 23. Towed objects exhibit sidelights and sternlight. Inconspicuous tows have special lighting. Exemptions when impracticable."
    },
    {
        number: 25,
        name: "Sailing vessels underway and vessels under oars",
        verbatim: [
            "(a) A sailing vessel underway shall exhibit:\n(i) sidelights;\n(ii) a sternlight.",
            "(b) In a sailing vessel of less than 20 metres in length the lights may be combined in one lantern at or near the top of the mast.",
            "(c) A sailing vessel underway may additionally exhibit two all-round lights in a vertical line (red over green) at or near the top of the mast; these shall not be exhibited with the combined lantern.",
            "(d) (i) A sailing vessel of less than 7 metres shall, if practicable, exhibit the prescribed lights, or have ready an electric torch or lighted lantern showing white to exhibit in time to prevent collision;\n(ii) A vessel under oars may exhibit sailing vessel lights, or have ready a torch/lantern.",
            "(e) A vessel proceeding under sail when also being propelled by machinery shall exhibit forward a conical shape, apex downwards."
        ],
        summary: "Sailing vessels exhibit sidelights and sternlight. May combine in one lantern if under 20m. Optional red-over-green all-round lights. Small craft may use torch. Vessel under sail and machinery exhibits cone apex down."
    },
    {
        number: 26,
        name: "Fishing vessels",
        verbatim: [
            "(a) A vessel engaged in fishing, whether underway or at anchor, shall exhibit only the lights and shapes prescribed in this Rule.",
            "(b) A vessel when engaged in trawling shall exhibit:\n(i) two all-round lights in a vertical line, upper green lower white, or two cones apexes together;\n(ii) a masthead light abaft and higher than the green light (optional if under 50m);\n(iii) when making way, sidelights and sternlight.",
            "(c) A vessel engaged in fishing other than trawling shall exhibit:\n(i) two all-round lights, upper red lower white, or two cones apexes together;\n(ii) when gear extends over 150m, an all-round white light or cone apex upwards;\n(iii) when making way, sidelights and sternlight.",
            "(d) Annex II applies to vessels fishing in close proximity.",
            "(e) A vessel when not engaged in fishing shall not exhibit these lights or shapes."
        ],
        summary: "Trawlers: green over white all-round, optional masthead. Other fishing: red over white all-round. Gear over 150m: white light or cone. Annex II for close-proximity fishing. Only exhibit when engaged in fishing."
    },
    {
        number: 27,
        name: "Vessels not under command or restricted in their ability to manoeuvre",
        verbatim: [
            "(a) A vessel not under command shall exhibit:\n(i) two all-round red lights in a vertical line;\n(ii) two balls in a vertical line;\n(iii) when making way, sidelights and sternlight.",
            "(b) A vessel restricted in her ability to manoeuvre (except mineclearance) shall exhibit:\n(i) three all-round lights, red-white-red;\n(ii) three shapes, ball-diamond-ball;\n(iii) when making way, masthead light(s), sidelights, sternlight;\n(iv) when at anchor, Rule 30 lights in addition.",
            "(c) A towing vessel severely restricted shall exhibit Rule 24(a) lights plus (b)(i) and (ii) of this Rule.",
            "(d) A vessel dredging or in underwater operations shall exhibit (b) lights plus: two red lights or balls for obstructed side; two green lights or diamonds for clear side.",
            "(e) A small vessel engaged in diving may exhibit red-white-red and rigid replica of flag 'A'.",
            "(f) A vessel engaged in mineclearance shall exhibit three all-round green lights or three balls; one near foremast head, one at each end of fore yard. Dangerous to approach within 1000m.",
            "(g) Vessels under 12m (except diving) need not exhibit these lights and shapes.",
            "(h) These signals are not distress signals; distress signals are in Annex IV."
        ],
        summary: "NUC: two red lights, two balls. RAM: red-white-red lights, ball-diamond-ball shapes. Dredging adds red/green for obstructed/clear sides. Diving: optional smaller signals. Mineclearance: three green lights/balls, keep 1000m clear."
    },
    {
        number: 28,
        name: "Vessels constrained by their draught",
        verbatim: [
            "A vessel constrained by her draught may, in addition to the lights prescribed for power-driven vessels in Rule 23, exhibit where they can best be seen three all-round red lights in a vertical line, or a cylinder."
        ],
        summary: "Vessels constrained by draught may exhibit three all-round red lights in a vertical line or a cylinder, in addition to Rule 23 lights."
    },
    {
        number: 29,
        name: "Pilot vessels",
        verbatim: [
            "(a) A vessel engaged on pilotage duty shall exhibit:\n(i) at or near the masthead, two all-round lights in a vertical line, upper white lower red;\n(ii) when underway, sidelights and a sternlight;\n(iii) when at anchor, Rule 30 lights in addition.",
            "(b) A pilot vessel when not engaged on pilotage duty shall exhibit the lights or shapes prescribed for a similar vessel of her length."
        ],
        summary: "Pilot vessels on duty: white over red all-round lights, plus sidelights and sternlight when underway. When not on duty, exhibit normal lights for her length."
    },
    {
        number: 30,
        name: "Anchored vessels and vessels aground",
        verbatim: [
            "(a) A vessel at anchor shall exhibit:\n(i) in the fore part, an all-round white light or one ball;\n(ii) at or near the stern, at a lower level, an all-round white light.",
            "(b) A vessel of less than 50 metres in length may exhibit one all-round white light where it can best be seen instead.",
            "(c) A vessel at anchor may, and a vessel of 100 metres and more in length shall, use available working lights to illuminate her decks.",
            "(d) A vessel aground shall exhibit anchor lights plus:\n(i) two all-round red lights in a vertical line;\n(ii) three balls in a vertical line.",
            "(e) A vessel of less than 7 metres at anchor, not in/near narrow channel, fairway, anchorage, need not exhibit anchor lights.",
            "(f) A vessel of less than 12 metres aground need not exhibit the red lights and three balls."
        ],
        summary: "Anchored: fore and stern white lights (or one if under 50m). Vessels 100m+ shall illuminate decks. Aground: add two red lights and three balls. Exemptions for small vessels."
    },
    {
        number: 31,
        name: "Seaplanes",
        verbatim: [
            "Where it is impracticable for a seaplane or a WIG craft to exhibit lights and shapes of the characteristics or in the positions prescribed in the Rules of this Part she shall exhibit lights and shapes as closely similar in characteristics and position as is possible."
        ],
        summary: "Seaplanes and WIG craft that cannot comply with prescribed lights and shapes shall exhibit the closest possible equivalent."
    },
    {
        number: 32,
        name: "Definitions",
        verbatim: [
            "(a) The word 'whistle' means any sound signalling appliance capable of producing the prescribed blasts and which complies with the specifications in Annex III to these Regulations.",
            "(b) The term 'short blast' means a blast of about one second's duration.",
            "(c) The term 'prolonged blast' means a blast of from four to six seconds' duration."
        ],
        summary: "Whistle: compliant sound signalling appliance. Short blast: about 1 second. Prolonged blast: 4-6 seconds."
    },
    {
        number: 33,
        name: "Equipment for sound signals",
        verbatim: [
            "(a) A vessel of 12 metres or more in length shall be provided with a whistle, a vessel of 20 metres or more in length shall be provided with a bell in addition to a whistle, and a vessel of 100 metres or more in length shall, in addition, be provided with a gong, the tone and sound of which cannot be confused with that of the bell. The whistle, bell and gong shall comply with Annex III. The bell or gong or both may be replaced by other equipment having the same sound characteristics, provided that manual sounding shall always be possible.",
            "(b) A vessel of less than 12 metres in length shall not be obliged to carry these appliances but if she does not, she shall be provided with some other means of making an efficient sound signal."
        ],
        summary: "12m+ whistle; 20m+ add bell; 100m+ add gong. Must comply with Annex III. Manual sounding always required. Vessels under 12m may use alternative efficient means."
    },
    {
        number: 34,
        name: "Manoeuvring and warning signals",
        verbatim: [
            "(a) When vessels are in sight of one another, a power-driven vessel underway when manoeuvring shall indicate by whistle: one short blast = altering course to starboard; two short blasts = altering course to port; three short blasts = operating astern propulsion.",
            "(b) Any vessel may supplement whistle signals with light signals (one/two/three flashes) whilst manoeuvring.",
            "(c) In narrow channel, overtaking: two prolonged + one short = overtake on your starboard; two prolonged + two short = overtake on your port. Vessel being overtaken agrees: one prolonged, one short, one prolonged, one short.",
            "(d) When in doubt as to the other vessel's intentions or actions, give at least five short and rapid blasts.",
            "(e) When nearing a bend or obstruction, sound one prolonged blast; approaching vessel answers with prolonged blast.",
            "(f) If whistles fitted more than 100m apart, use one whistle only for manoeuvring signals."
        ],
        summary: "Manoeuvring: 1 short = starboard; 2 short = port; 3 short = astern. Overtaking in narrow channel: 2 prolonged + 1/2 short. Doubt: 5 short rapid. Bend: 1 prolonged."
    },
    {
        number: 35,
        name: "Sound signals in restricted visibility",
        verbatim: [
            "In or near an area of restricted visibility, whether by day or night:",
            "(a) Power-driven vessel making way: one prolonged blast at intervals of not more than 2 minutes.",
            "(b) Power-driven vessel underway but stopped: two prolonged blasts in succession (interval ~2 sec) at not more than 2 minutes.",
            "(c) NUC, RAM, constrained by draught, sailing, fishing, towing: one prolonged + two short at not more than 2 minutes.",
            "(d) Fishing at anchor, RAM at anchor: signal (c) instead of (g).",
            "(e) Vessel towed (if manned): one prolonged + three short at not more than 2 minutes.",
            "(f) Composite unit: power-driven vessel signals.",
            "(g) Vessel at anchor: ring bell rapidly ~5 sec at not more than 1 minute; 100m+ also sound gong in after part. May add one short, one prolonged, one short.",
            "(h) Vessel aground: bell signal as (g) plus three distinct strokes before and after rapid ringing; may add whistle signal.",
            "(i) Vessel 12-20m: may use alternative to bell signals if making other efficient sound at not more than 2 minutes.",
            "(j) Vessel under 12m: not obliged but if not, make other efficient sound at not more than 2 minutes.",
            "(k) Pilot vessel on duty may add identity signal: four short blasts."
        ],
        summary: "Fog signals: power-driven making way (1 prolonged); stopped (2 prolonged); NUC/RAM/fishing/towing (1 prolonged + 2 short); towed (1 prolonged + 3 short); at anchor (bell); aground (bell + 3 strokes)."
    },
    {
        number: 36,
        name: "Signals to attract attention",
        verbatim: [
            "If necessary to attract the attention of another vessel any vessel may make light or sound signals that cannot be mistaken for any signal authorised elsewhere in these Rules, or may direct the beam of her searchlight in the direction of the danger, in such a way as not to embarrass any vessel. Any light to attract attention shall be such that it cannot be mistaken for any aid to navigation. For the purpose of this Rule the use of high intensity intermittent or revolving lights, such as strobe lights, shall be avoided."
        ],
        summary: "Vessels may use light or sound signals to attract attention, or searchlight, provided they cannot be mistaken for other signals or aids to navigation. Avoid strobe lights."
    },
    {
        number: 37,
        name: "Distress signals",
        verbatim: [
            "When a vessel is in distress and requires assistance she shall use or exhibit the signals described in Annex IV to these Regulations."
        ],
        summary: "Distress signals are described in Annex IV."
    },
    {
        number: 38,
        name: "Exemptions",
        verbatim: [
            "Any vessel (or class of vessels) provided that she complies with the requirements of the International Regulations for Preventing Collisions at Sea, 1960, the keel of which is laid or which is at a corresponding stage of construction before the entry into force of these Regulations may be exempted from compliance therewith as follows:",
            "(a) The installation of lights with ranges prescribed in Rule 22, until four years after the date of entry into force of these Regulations.",
            "(b) The installation of lights with colour specifications as prescribed in Section 7 of Annex I, until four years after the date of entry into force of these Regulations.",
            "(c) The repositioning of lights as a result of conversion from Imperial to metric units and rounding off measurement figures, permanent exemption.",
            "(d) (i) The repositioning of masthead lights on vessels of less than 150 metres in length per Section 3(a) of Annex I, permanent exemption;\n(ii) On vessels 150 metres or more, until nine years after entry into force.",
            "(e) The repositioning of masthead lights per Section 2(b) of Annex I, until nine years after entry into force.",
            "(f) The repositioning of sidelights per Sections 2(g) and 3(b) of Annex I, until nine years after entry into force.",
            "(g) The requirements for sound signal appliances in Annex III, until nine years after entry into force.",
            "(h) The repositioning of all-round lights per Section 9(b) of Annex I, permanent exemption."
        ],
        summary: "Vessels built before these Regulations entered into force may be exempted from certain requirements (lights, sound signals) for specified periods or permanently, as listed."
    }
];

/**
 * COLREGS Annexes I-IV verbatim text for Practice, Exam, and Rules Review.
 * Structure matches colregsRules for compatibility with getVerbatimTextForRuleRef.
 */
const colregsAnnexes = [
    {
        id: 'annex-1',
        name: 'Annex I - Positioning and technical details of lights and shapes',
        verbatim: [
            '1. Definition: The term "height above the hull" means height above the uppermost continuous deck. This height shall be measured from the position vertically beneath the location of the light.',
            '2. Vertical positioning and spacing of lights: (a) On a power-driven vessel of 20 metres or more in length the masthead lights shall be placed as follows: (i) the forward masthead light, or if only one masthead light is carried, then that light, at a height above the hull of not less than 6 metres, and, if the breadth of the vessel exceeds 6 metres, then at a height above the hull not less than such breadth, so however that the light need not be placed at a greater height above the hull than 12 metres; (ii) when two masthead lights are carried the after one shall be at least 4.5 metres vertically higher than the forward one. (b) The vertical separation of masthead lights of power-driven vessels shall be such that in all normal conditions of trim the after light will be seen over and separate from the forward light at a distance of 1,000 metres from the stem when viewed from sea-level. (c) The masthead light of a power-driven vessel of 12 metres but less than 20 metres in length shall be placed at a height above the gunwale of not less than 2.5 metres. (d) A power-driven vessel of less than 12 metres in length may carry the uppermost light at a height of less than 2.5 metres above the gunwale. When however a masthead light is carried in addition to sidelights and a sternlight or the all-round light prescribed in Rule 23(c)(i) is carried in addition to sidelights, then such masthead light or all-round light shall be carried at least 1 metre higher than the sidelights. (g) The sidelights of a power-driven vessel shall be placed at a height above the hull not greater than three-quarters of that of the forward masthead light. They shall not be so low as to be interfered with by deck lights. (h) The sidelights, if in a combined lantern and carried on a power-driven vessel of less than 20 metres in length, shall be placed not less than 1 metre below the masthead light.',
            '3. Horizontal positioning and spacing of lights: (a) When two masthead lights are prescribed for a power-driven vessel, the horizontal distance between them shall not be less than one-half of the length of the vessel but need not be more than 100 metres. The forward light shall be placed not more than one-quarter of the length of the vessel from the stem. (b) On a power-driven vessel of 20 metres or more in length the sidelights shall not be placed in front of the forward masthead lights. They shall be placed at or near the side of the vessel. (d) When only one masthead light is prescribed for a power-driven vessel, this light shall be exhibited forward of amidships; except that a vessel of less than 20 metres in length need not exhibit this light forward of amidships but shall exhibit it as far forward as is practicable.',
            '6. Shapes: (a) Shapes shall be black and of the following sizes: (i) a ball shall have a diameter of not less than 0.6 metre; (ii) a cone shall have a base diameter of not less than 0.6 metre and a height equal to its diameter; (iii) a cylinder shall have a diameter of at least 0.6 metre and a height of twice its diameter; (iv) a diamond shape shall consist of two cones as defined in (ii) above having a common base. (b) The vertical distance between shapes shall be at least 1.5 metres. (c) In a vessel of less than 20 metres in length shapes of lesser dimensions but commensurate with the size of the vessel may be used and the distance apart may be correspondingly reduced.',
            '7. Colour specification of lights: The chromaticity of all navigation lights shall conform to the standards specified for each colour by the International Commission on Illumination (CIE).',
            '8. Intensity of lights: The minimum luminous intensity of lights shall be calculated by formula. For prescribed lights the value of K shall be 0.8, corresponding to a meteorological visibility of approximately 13 nautical miles.',
            '14. Approval: The construction of lights and shapes and the installation of lights on board the vessel shall be to the satisfaction of the appropriate authority of the State whose flag the vessel is entitled to fly.'
        ],
        summary: 'Annex I specifies positioning, spacing, and technical details for navigation lights and shapes, including vertical and horizontal placement, shape dimensions, colour, and intensity.'
    },
    {
        id: 'annex-2',
        name: 'Annex II - Additional signals for fishing vessels in close proximity',
        verbatim: [
            '1. General: The lights mentioned herein shall, if exhibited in pursuance of Rule 26(d), be placed where they can best be seen. They shall be at least 0.9 metre apart but at a lower level than lights prescribed in Rule 26(b)(i) and (c)(i). The lights shall be visible all round the horizon at a distance of at least 1 mile but at a lesser distance than the lights prescribed by these Rules for fishing vessels.',
            '2. Signals for trawlers: (a) Vessels of 20 metres or more in length when engaged in trawling, whether using demersal or pelagic gear, shall exhibit: (i) when shooting their nets, two white lights in a vertical line; (ii) when hauling their nets, one white light over one red light in a vertical line; (iii) when the net has come fast upon an obstruction, two red lights in a vertical line. (b) Each vessel of 20 metres or more in length engaged in pair trawling shall exhibit: (i) by night, a searchlight directed forward and in the direction of the other vessel of the pair; (ii) when shooting or hauling their nets or when the nets have come fast upon an obstruction, the lights prescribed in 2(a) above. (c) A vessel of less than 20 metres in length engaged in trawling, whether using demersal or pelagic gear or engaged in pair trawling, may exhibit the lights prescribed in paragraphs (a) or (b) of this Section, as appropriate.',
            '3. Signals for purse seiners: Vessels engaged in fishing with purse seine gear may exhibit two yellow lights in a vertical line. These lights shall flash alternately every second and with equal light and occultation duration. These lights may be exhibited only when the vessel is hampered by its fishing gear.'
        ],
        summary: 'Annex II defines additional light signals for fishing vessels operating in close proximity: trawlers (shooting, hauling, fast), pair trawlers, and purse seiners.'
    },
    {
        id: 'annex-3',
        name: 'Annex III - Technical details of sound signal appliances',
        verbatim: [
            '1. Whistles: (a) The fundamental frequency of the signal shall lie within the range 70 - 700 Hz. The range of audibility of the signal from a whistle shall be determined by those frequencies which lie within the range 180 - 700 Hz for a vessel of 20 metres or more in length, or 180-2100 Hz for a vessel of less than 20 metres in length. (c) Sound signal intensity and range of audibility: A whistle fitted in a vessel shall provide, in the direction of maximum intensity of the whistle and at a distance of 1 metre from it, a sound pressure level in at least one 1/3rd-octave band within the range of frequencies 180 - 700 Hz for a vessel of 20 metres or more in length, or 180-2100 Hz for a vessel of less than 20 metres in length, of not less than the appropriate figure. The range of audibility in the table is approximately the range at which a whistle may be heard on its forward axis: vessels 200 m or more - 2 nautical miles; 75-200 m - 1.5 nautical miles; 20-75 m - 1 nautical mile; less than 20 m - 0.5 nautical mile. (f) If whistles are fitted at a distance apart of more than 100 metres, it shall be so arranged that they are not sounded simultaneously.',
            '2. Bell or gong: (a) A bell or gong, or other device having similar sound characteristics shall produce a sound pressure level of not less than 110 dB at a distance of 1 metre from it. (b) The diameter of the mouth of the bell shall be not less than 300 mm for vessels of 20 metres or more in length.',
            '3. Approval: The construction of sound signal appliances, their performance and their installation on board the vessel shall be to the satisfaction of the appropriate authority of the State whose flag the vessel is entitled to fly.'
        ],
        summary: 'Annex III specifies technical requirements for whistles (frequency, intensity, audibility range by vessel length) and bells/gongs. Vessels 20-75 m: whistle audible at 1 nm; 75-200 m: 1.5 nm; 200 m+: 2 nm.'
    },
    {
        id: 'annex-4',
        name: 'Annex IV - Distress signals',
        verbatim: [
            '1. The following signals, used or exhibited either together or separately, indicate distress and need of assistance: (a) a gun or other explosive signal fired at intervals of about a minute; (b) a continuous sounding with any fog-signalling apparatus; (c) rockets or shells, throwing red stars fired one at a time at short intervals; (d) a signal made by radiotelegraphy or by any other signalling method consisting of the group SOS in the Morse Code; (e) a signal sent by radiotelephony consisting of the spoken word "Mayday"; (f) the International Code Signal of distress indicated by N.C.; (g) a signal consisting of a square flag having above or below it a ball or anything resembling a ball; (h) flames on the vessel (as from a burning tar barrel, oil barrel, etc.); (i) a rocket parachute flare or a hand flare showing a red light; (j) a smoke signal giving off orange-coloured smoke; (k) slowly and repeatedly raising and lowering arms outstretched to each side; (l) the radiotelegraph alarm signal; (m) the radiotelephone alarm signal; (n) signals transmitted by emergency position-indicating radio beacons; (o) approved signals transmitted by radio-communication systems, including survival craft radar transponders.',
            '2. The use or exhibition of any of the foregoing signals except for the purpose of indicating distress and need of assistance and the use of other signals which may be confused with any of the above signals is prohibited.',
            '3. Attention is drawn to the relevant sections of the International Code of Signals, the Merchant Ship Search and Rescue Manual and the following signals: (a) a piece of orange-coloured canvas with either a black square and circle or other appropriate symbol (for identification from the air); (b) a dye marker.'
        ],
        summary: 'Annex IV lists international distress signals: gun/explosive, continuous fog signal, red stars, SOS, Mayday, NC, square flag with ball, flames, flares, orange smoke, arms raised and lowered, EPIRB, etc.'
    }
];

const maritimeFlags = [
    { letter: 'A', phonetic: 'Alfa', international: 'I have a diver down; keep well clear at slow speed', nato: 'I have a diver down; keep well clear at slow speed' },
    { letter: 'B', phonetic: 'Bravo', international: 'I am taking in, discharging, or carrying dangerous cargo', nato: 'I am taking in, discharging, or carrying dangerous cargo' },
    { letter: 'C', phonetic: 'Charlie', international: 'Yes (affirmative)', nato: 'Yes (affirmative)' },
    { letter: 'D', phonetic: 'Delta', international: 'I am maneuvering with difficulty; keep clear', nato: 'I am maneuvering with difficulty; keep clear' },
    { letter: 'E', phonetic: 'Echo', international: 'I am directing my course to starboard', nato: 'I am directing my course to starboard' },
    { letter: 'F', phonetic: 'Foxtrot', international: 'I am disabled; communicate with me', nato: 'Flight operations underway' },
    { letter: 'G', phonetic: 'Golf', international: 'I require a pilot', nato: 'I require a pilot' },
    { letter: 'H', phonetic: 'Hotel', international: 'I have a pilot on board', nato: 'I have a pilot on board' },
    { letter: 'I', phonetic: 'India', international: 'I am altering my course to port', nato: 'Coming alongside' },
    { letter: 'J', phonetic: 'Juliett', international: 'I am on fire and have dangerous cargo on board; keep well clear of me', nato: 'I am on fire and have dangerous cargo on board; keep well clear of me' },
    { letter: 'K', phonetic: 'Kilo', international: 'I wish to communicate with you', nato: 'I wish to communicate with you' },
    { letter: 'L', phonetic: 'Lima', international: 'You should stop your vessel immediately', nato: 'You should stop your vessel immediately' },
    { letter: 'M', phonetic: 'Mike', international: 'My vessel is stopped; making no way', nato: 'My vessel is stopped; making no way' },
    { letter: 'N', phonetic: 'November', international: 'No (negative)', nato: 'No (negative)' },
    { letter: 'O', phonetic: 'Oscar', international: 'Man overboard', nato: 'Man overboard' },
    { letter: 'P', phonetic: 'Papa', international: 'The vessel is about to set sail', nato: 'All personnel return to ship; proceeding to sea (in port)' },
    { letter: 'Q', phonetic: 'Quebec', international: 'My vessel is healthy and I request free pratique', nato: 'Boat recall; all boats return to ship' },
    { letter: 'R', phonetic: 'Romeo', international: 'Reverse course', nato: 'Preparing to replenish (at sea); Ready duty ship (in port)' },
    { letter: 'S', phonetic: 'Sierra', international: 'I am operating astern propulsion', nato: 'Conducting flag hoist drill' },
    { letter: 'T', phonetic: 'Tango', international: 'Keep clear of me; I am engaged in pair trawling', nato: 'Do not pass ahead of me' },
    { letter: 'U', phonetic: 'Uniform', international: 'You are running into danger', nato: 'You are running into danger' },
    { letter: 'V', phonetic: 'Victor', international: 'I require assistance', nato: 'I require assistance' },
    { letter: 'W', phonetic: 'Whiskey', international: 'I require medical assistance', nato: 'I require medical assistance' },
    { letter: 'X', phonetic: 'X-ray', international: 'Stop carrying out your intentions', nato: 'Stop carrying out your intentions and watch for my signals' },
    { letter: 'Y', phonetic: 'Yankee', international: 'I am dragging my anchor', nato: 'Ship has visual communications duty' },
    { letter: 'Z', phonetic: 'Zulu', international: 'I require a tug', nato: 'I require a tug' }
];

const REVIEW_IMAGE_PATHS = {
    FLAGS: 'reference/Photos/Flag%20Photo/COLREGS_Flags_AZ_Corrected_ThinBlackBorder_v2',
    DIAGRAMS: 'reference/Photos/Light%20Photo',
    SHAPES: 'reference/Photos/Day%20shapes%20reference%20sheet'
};

const REVIEW_LIGHT_DIAGRAM_MAP = {
    'power-driven-vessel-underway-front': 'power-driven-vessel-underway-front.png',
    'power-driven-vessel-underway-starboard': 'power-driven-vessel-underway-starboard.png',
    'power-driven-vessel-underway-aft': 'power-driven-vessel-underway-aft.png',
    'power-driven-vessel-over-50m-front': 'power-driven-vessel-over-50m-front.jpg',
    'power-driven-vessel-over-50m-starboard': 'power-driven-vessel-over-50m-starboard.png',
    'power-driven-vessel-over-50m-aft': 'power-driven-vessel-over-50m-aft.jpg',
    'sailing-vessel-underway-front': 'sailing-vessel-underway-front.jpg',
    'sailing-vessel-underway-starboard': 'sailing-vessel-underway-starboard.png',
    'sailing-vessel-underway-aft': 'sailing-vessel-underway-aft.png',
    'vessel-engaged-in-trawling-front': 'vessel-engaged-in-trawling-front.png',
    'vessel-engaged-in-trawling-starboard': 'vessel-engaged-in-trawling-Port.png',
    'vessel-engaged-in-trawling-aft': 'vessel-engaged-in-trawling-aft.png',
    'vessel-towing-200m-front': 'vessel-towing-200m-front.png',
    'vessel-towing-200m-starboard': 'vessel-towing-200m-Starboard.png',
    'vessel-towing-200m-aft': 'vessel-towing-200m-aft.png',
    'vessel-not-under-command-front': 'vessel-no-command-ahead-new.png',
    'vessel-not-under-command-starboard': 'vessel-no-command-abeam-new.png',
    'vessel-not-under-command-aft': 'vessel-no-command-astern-new.png',
    'vessel-restricted-in-ability-to-maneuver-front': 'restricted-manoeuvre-way-ahead-new.png',
    'vessel-restricted-in-ability-to-maneuver-starboard': 'restricted-manoeuvre-way-abeam-new.png',
    'vessel-restricted-in-ability-to-maneuver-aft': 'restricted-manoeuvre-way-astern-new.png',
    'vessel-constrained-by-draught-front': 'power-driven-vessel-constrained-ahead-new.png',
    'vessel-constrained-by-draught-starboard': 'Constain by draught port.png',
    'vessel-constrained-by-draught-aft': 'power-driven-vessel-constrained-astern-new.png',
    'vessel-aground-front': 'Around_ahead.png',
    'vessel-aground-starboard': 'Aground_Port.png',
    'vessel-aground-aft': 'Aground_Astern.png'
};

function getLightDiagramPath(id) {
    const filename = REVIEW_LIGHT_DIAGRAM_MAP[id] || (id + '.jpg');
    return REVIEW_IMAGE_PATHS.DIAGRAMS + '/' + filename;
}

if (typeof window !== 'undefined') {
    window.colregsRules = colregsRules;
    window.colregsAnnexes = colregsAnnexes;
    window.maritimeFlags = maritimeFlags;
    if (typeof window.IMAGE_PATHS === 'undefined') {
        window.IMAGE_PATHS = REVIEW_IMAGE_PATHS;
    }
    if (typeof window.LIGHT_DIAGRAM_MAP === 'undefined') {
        window.LIGHT_DIAGRAM_MAP = REVIEW_LIGHT_DIAGRAM_MAP;
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        colregsRules,
        colregsAnnexes,
        maritimeFlags,
        IMAGE_PATHS: REVIEW_IMAGE_PATHS,
        LIGHT_DIAGRAM_MAP: REVIEW_LIGHT_DIAGRAM_MAP,
        getLightDiagramPath
    };
}
