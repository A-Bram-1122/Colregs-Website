/**
 * Exam scenarios for Fleet ROR exam mode.
 * Each block: { id, source, scenario, questions: [10 items] }
 * Each question: originalNumber = exam paper question number (for review); display uses sequential 1,2,3...
 * Light questions (navigation lights, shapes, light diagrams) excluded per plan.
 *
 * Non-rule questions (publications, conventions) removed from here are recorded in
 * verbatimRemovedForUnderstandingQuiz.js for inclusion in the Understanding Quiz.
 */
const examScenarios = [
    // Fleet ROR Apr 14 - Faslane to Portsmouth
    {
        id: "fleet-apr14-1",
        source: "Fleet ROR Apr 14",
        scenario: "You are OOW1 on a Type 45 Destroyer, sailing from Faslane to Portsmouth; you have the Forenoon and have just taken the ship from the NO on passing Cloch Point. The NO has confidently forecast light winds and good visibility for the entire passage.",
        questions: [
            { originalNumber: 2, text: "The Sea Training Officer has prepared a pilotage run which takes the ship through Hunterston Channel. Whilst proceeding down this narrow channel the Quartermaster spots a small vessel engaged in fishing within the channel, at Green 15 range 5 cables. Which rule states the responsibilities of the fishing vessels within this narrow channel?", ruleRef: "R9c" },
            { originalNumber: 3, text: "You pass through Hunterston Channel and encounter a yacht race. Traffic is exceptionally heavy and it is becoming difficult to assess the situation and likelihood of risk of collision. Which rule states what action you shall take?", ruleRef: "R8e" },
            { originalNumber: 4, text: "You take back the conning and clear the yacht race. Contrary to the Navigating Officer's brief you sight a thick fog bank approximately 1 nautical mile away. In this situation, within the fog you hear one prolonged blast ahead of the ship but are unsure as to the exact direction it came from. What action shall you take?", ruleRef: "R19e" },
            { originalNumber: 7, text: "You are just about to go off watch when the Ship Control Centre informs you that it has detected excessive vibration on the port shaft and as you are well ahead of the Speed of Advance the Commanding Officer decides to go to anchor. Which rule specifies the sound signals at anchor in restricted visibility?", ruleRef: "R35g" },
            { originalNumber: 8, text: "Whilst off watch the defect is fixed and you return for your next watch to find the ship back underway although visibility remains reduced. The Commanding Officer asks for your assessment of safe speed. All radars appear to be working. Which rule lists the radar-related factors to consider?", ruleRef: "R6b" },
            { originalNumber: 9, text: "Your next watch starts just as you round Land's End and with the visibility also improving the Flight become increasingly keen to disembark before the ship commences a busy period in Portsmouth so you take the ship to flying stations. As you give a green light you spot a minehunter engaged in clearance operations on a steady bearing, range 2 nautical miles. Which rule states that we must keep clear from impeding the safe passage of a vessel restricted in her ability to manoeuvre?", ruleRef: "R18a" },
            { originalNumber: 10, text: "With the helicopter feet dry you fall out from flying stations and refocus on your Speed of Advance to Portsmouth. You sight a small vessel engaged in fishing at Green 30, range 3 miles. The bearing is steady and the range is closing. Which vessels must the fishing vessel keep clear from impeding the safe passage of?", ruleRef: "R18c" },
            { originalNumber: 11, text: "The busy watch continues and you sight a coaster at Red 40, range 6 miles (60 degrees on her starboard bow). The range is closing and the bearing is moving very slowly right. In this situation, which rules apply?", ruleRef: "R17a" },
            { originalNumber: 12, text: "Which rule states what should be avoided if the stand-on vessel manoeuvres by altering course?", ruleRef: "R17c" },
            { originalNumber: 16, text: "Which rule states the requirements for maintaining a proper lookout by all available means appropriate in the prevailing circumstances?", ruleRef: "R5" }
        ]
    },
    // Fleet ROR Jun 14 - HMS SOMERSET Gulf of Oman
    {
        id: "fleet-jun14-1",
        source: "Fleet ROR Jun 14",
        scenario: "You are the Officer of the Watch in HMS SOMERSET deployed on Operation Kipion in the Gulf of Oman. You have just sailed from Fujairah, it is the morning watch with clear skies and good visibility but the Meteorological Office did forecast haze later in the day. As you pass through the breakwaters you slow down to disembark the pilot and a fishing vessel which departed shortly after you begins to close.",
        questions: [
            { originalNumber: 1, text: "The port lookout reports the fishing vessel is dragging a net through the water each side of her. Which rule defines how to classify this fishing vessel?", ruleRef: "R3d" },
            { originalNumber: 3, text: "The fishing vessel is closing on a steady bearing from Red 150. Which rule defines who is the give-way vessel?", ruleRef: "R13a" },
            { originalNumber: 4, text: "The fishing vessel passes clear just as the pilot boat pulls up alongside. As you make your departure from the port you are actually navigating on the left side of the channel because of local routing rules. Which rule states who can make such rules", ruleRef: "R1b" },
            { originalNumber: 5, text: "You pass the extremity of port limits and the Navigating Officer hands the ship over to you. He shows you where the rendezvous for your replenishment this afternoon is on the Warship Electronic Chart Display and Information System and tells you he wants you to get there quickly. Which rule lists the factors all vessels shall take into account when deciding on a safe speed?", ruleRef: "R6a" },
            { originalNumber: 6, text: "The lookout reports to you that there is a vessel at Red 5 on the horizon heading towards you. How would we determine if risk of collision exists?", ruleRef: "R7d" },
            { originalNumber: 7, text: "You look at the vessel through binoculars and can see his foremast and mainmast almost in a line. What situation is developing?", ruleRef: "R14a" },
            { originalNumber: 10, text: "Following your action in response to the head-on situation. Which rule states how to assess if your action in the head-on situation is sufficient?", ruleRef: "R8d" },
            { originalNumber: 11, text: "You pass the other vessel at a safe distance just as the haze the Meteorological Office forecast earlier makes an unwelcome appearance reducing visibility to around 1 nautical mile. Which rule defines restricted visibility?", ruleRef: "R3l" },
            { originalNumber: 12, text: "Which rule states what speed and machinery configuration you should adopt in restricted visibility?", ruleRef: "R19b" },
            { originalNumber: 13, text: "Whilst in restricted visibility you hear a fog signal ahead. Which rule states what you shall do when a vessel is detected by radar alone?", ruleRef: "R19d" }
        ]
    },
    // Fleet ROR Feb 15 - T23 Solent to Needles
    {
        id: "fleet-feb15-1",
        source: "Fleet ROR Feb 15",
        scenario: "You are the Officer of the Watch of a T23 frigate (length 133 meters), having just passed Outer Spit Buoy and entered the Solent to make a transit to the Needles Channel. It is the forenoon watch, the weather is fine with good visibility, however a cold front is forecast. Shipping is moderate.",
        questions: [
            { originalNumber: 1, text: "As you alter course to the west the hovercraft from Southsea is on a converging course just ahead of your starboard beam. You are 25 degrees on her port bow. What action is required by the Rules if a risk of collision develops?", ruleRef: "R15" },
            { originalNumber: 2, text: "As you pass south of Ryde Middle you sight a small, slow moving tug and partially submerged tow in the channel ahead, length of tow greater than 200m. You wish to overtake on the port side. (He will need to manoeuvre to allow you to pass.) You are unable to raise him on VHF, what sound signal can be made to signal your intention?", ruleRef: "R34c" },
            { originalNumber: 3, text: "As you pass Cowes you see the Tall Ships' race further down the Solent inbound to Southampton, including both square-rigged and fore and aft rigged vessels. Your Captain asks you how you would determine the windward side of either type of vessel?", ruleRef: "R12b" },
            { originalNumber: 5, text: "Continuing on your passage you sight a large merchant vessel at R10, you are fine on his port bow and he appears to be transiting along the centreline of the fairway. How should a vessel navigate within a narrow channel or fairway?", ruleRef: "R9a" },
            { originalNumber: 5, text: "Continuing on your passage you sight a large merchant vessel at R10, you are fine on his port bow and he appears to be transiting along the centreline of the fairway. What do the rules state concerning the actions of the small pleasure craft approaching the buoyed channel?", ruleRef: "R9b" },
            { originalNumber: 7, text: "You continue down past the Needles without further incident. On falling out from SSD you take the remainder of the watch just as the rain starts and visibility begins to reduce. You call the CO to inform her and commence your check-offs for entering restricted visibility. What do the rules state about safe speed in restricted visibility?", ruleRef: "R19b" },
            { originalNumber: 8, text: "After discussion with the Navigation Officer you inform the CO that you intend to continue down the nav track at 12 knots. Shortly afterwards you detect a contact on radar at G10 range 5 miles. The vessel's course is parallel to your own but the CPA is on your starboard beam at 9 cables. What do the rules state about this situation and the actions you should take?", ruleRef: "R19d" },
            { originalNumber: 8, text: "You take the appropriate action and continue with your watch. Soon afterwards you hear a fog signal consisting of one prolonged followed by two short blasts. What types of vessel could this be?", ruleRef: "R35c" },
            { originalNumber: 9, text: "The vessel alters course again and you pass clear, proceeding along the nav track. The cold front passes through and visibility increases to 12nm so you revert back to cruising watches. Shortly you spot a small merchant vessel at red 25, range 5 nm, you assess that you are 60 degrees on her starboard bow and her bearing is steady. In accordance with the Rules what do you expect the vessel to do and how shall she act?", ruleRef: "R16" },
            { originalNumber: 10, text: "At 1.5 nm vessel alters course and passes clear. The end of your watch is rapidly approaching but you note that the Ship is due to enter a TSS shortly. While preparing for the handover you discuss Rule 10 with the 2OOW. How shall a vessel navigate near the terminations of a TSS?", ruleRef: "R10f" }
        ]
    },
    // Fleet ROR Sep 14 - Sea Plane / Toulon TSS (Q&A format reconstructed)
    {
        id: "fleet-sep14-1",
        source: "Fleet ROR Sep 14",
        scenario: "You are the Officer of the Watch on passage. A seaplane has landed on the water ahead of you. You continue on passage towards Toulon to meet with the rest of the exercise group. Your navigation plan has you using a Traffic Separation Scheme, but utilising the Inshore Traffic Zone, even though you are through traffic.",
        questions: [
            { originalNumber: 1, text: "Which rule states whether the Rules apply to the seaplane?", ruleRef: "R3a" },
            { originalNumber: 2, text: "The XO asks you what is the definition of a sea plane.", ruleRef: "R3e" },
            { originalNumber: 3, text: "While watching the sea plane you assess that there is a risk of collision, which rule states whether this changes any obligations between you and the seaplane?", ruleRef: "R18e" },
            { originalNumber: 4, text: "Which rule defines when you may use the Inshore Traffic Zone?", ruleRef: "R10di" },
            { originalNumber: 5, text: "Which rule states when you can use the Inshore Traffic Zone?", ruleRef: "R10dii" },
            { originalNumber: 6, text: "Which rule states the requirements for crossing traffic lanes within a Traffic Separation Scheme?", ruleRef: "R10c" },
            { originalNumber: 7, text: "Which rule states how you would know if the Traffic Separation Scheme had been adopted by the International Maritime Organization?", ruleRef: "R10a" },
            {
                originalNumber: 8,
                text: "As you transit down the scheme, your lookout notices a vessel not complying with the rules and not following the traffic lane. Which rule defines which vessels are exempt from complying with the rules regarding Traffic Separation Schemes and to what extent?",
                subParts: [
                    { letter: "i", text: "Which rule exempts a vessel restricted in her ability to manoeuvre when engaged in an operation for the maintenance of safety of navigation in a traffic separation scheme, and to what extent?", ruleRef: "R10k" },
                    { letter: "ii", text: "Which rule exempts a vessel restricted in her ability to manoeuvre when engaged in an operation for the laying, servicing or picking up of a submarine cable within a traffic separation scheme, and to what extent?", ruleRef: "R10l" }
                ]
            },
            { originalNumber: 9, text: "As you round the headland, you notice a Replenishment at Sea group and a unit conducting flying operations all heading for the rendezvous. State rule 18a in full.", ruleRef: "R18a" },
            { originalNumber: 10, text: "Which rule states the requirements for keeping a good lookout?", ruleRef: "R5" }
        ]
    },
    // Fleet ROR Oct 14 - T45 Portsmouth
    {
        id: "fleet-oct14-1",
        source: "Fleet ROR Oct 14",
        scenario: "You are the Senior Watchkeeper Officer of the Watch of a Type 45 destroyer (length 152 metres). You are departing Portsmouth Harbour and have just passed Spit Sand Fort abeam to starboard on the 181 leg towards the Outer Spit Buoy. It is the forenoon watch and rain showers have reduced visibility to 4 nautical miles. The shipping is moderate.",
        questions: [
            { originalNumber: 1, text: "You sight a small power-driven vessel at Red 20, range 1 nautical mile. You take an initial bearing and notice that you are 10 degrees on the starboard bow of the vessel. The Deputy Marine Engineering Officer asks if the Rules apply to this vessel. Which rule states to whom they apply?", ruleRef: "R1a" },
            { originalNumber: 2, text: "You report the vessel to the Captain who observes that the contact has made a bold alteration of course to starboard. The bearing of the vessel is now drawing safely left and passes 5 cables to port. As you are navigating in a narrow channel, which rule lists the vessels that should not impede your safe passage?", ruleRef: "R9b" },
            { originalNumber: 3, text: "Which rule states how you should proceed along the course of a narrow channel or fairway?", ruleRef: "R9a" },
            { originalNumber: 5, text: "You make an alteration of course to port and continue towards Nab Channel. Operating close to Saint Helen's Road Anchorage, you notice a small group of vessels engaged in fishing. Which rule defines these vessels?", ruleRef: "R3d" },
            { originalNumber: 7, text: "You continue your passage along the channel and sight the Motor Tanker Hanne Knutsen inbound to Fawley. You are on her Ship's head and her bearing is steady. In this situation, which rules apply? Which rule states when such a situation shall be deemed to exist?", ruleRef: "R14b" },
            { originalNumber: 8, text: "As you pass the Hanne Knutsen safely, you notice a black cylinder is displayed at the masthead. Which rules apply to this day shape? Which rule defines such a vessel?", ruleRef: "R3h" },
            { originalNumber: 9, text: "You continue past Nab Tower and the traffic density begins to reduce. On falling out from SSD you are concerned by the deteriorating weather in the vicinity. A heavy rainstorm passes through and visibility reduces significantly. You have determined that in the prevailing situation, safe speed is 10 knots. In this situation, which rules apply? Which rule lists the factors for determining safe speed that shall be among those taken into account by all vessels?", ruleRef: "R6a" },
            { originalNumber: 10, text: "You receive a call from the Ship Plot Supervisor who reports a contact on radar at Green 30 range 4 miles. The Closest Point of Approach is reported as 3 cables on your starboard beam. In this situation, which rules apply? You check the radar and hold no steady contacts on the port side other than a faint echo at Red 20, range 5 cables. You cannot track the echo effectively or generate an accurate Closest Point of Approach using the radar. Which rule states the action you should take?", ruleRef: "R19e" },
            { originalNumber: 11, text: "The vessel passes clear down your port side and you notice that visibility is rapidly improving. You sight a small cargo vessel at Green 30, range 3 nautical miles. You assess that you are 40 degrees on her port bow and her bearing is steady. In this situation, which rules apply? Which rule states how action should be taken to avoid collision?", ruleRef: "R8a" },
            { originalNumber: 12, text: "You pass the cargo vessel safely. Which rule states the requirements for maintaining a proper lookout by all available means appropriate in the prevailing circumstances?", ruleRef: "R5" }
        ]
    },
    // Fleet ROR Dec 14 - HMS ST ALBANS Dover Straits
    {
        id: "fleet-dec14-1",
        source: "Fleet ROR Dec 14",
        scenario: "You are the Officer of the Watch in HMS ST ALBANS. You have just sailed from Brest, France on passage to Newcastle. It is the morning watch with fair weather although heavy rain is expected later in the day. Shipping is beginning to increase in volume as you line up for the north-east bound traffic lane of the Dover Straits Traffic Separation Scheme.",
        questions: [
            { originalNumber: 1, text: "Which rule states what you are not relieved of with regard to Traffic Separation Schemes adopted by the Organisation?", ruleRef: "R10a" },
            { originalNumber: 2, text: "Which rule states how you shall use a traffic lane?", ruleRef: "R10b" },
            { originalNumber: 3, text: "As you approach the MPC lightbuoy, you sight the busy port of Calais to starboard. A ferry has just departed from there and is currently at Green 30, range 4 nautical miles. You are approximately 40 degrees on her port bow. Which rule lists the considerations for determining if risk of collision exists?", ruleRef: "R7d" },
            { originalNumber: 4, text: "From taking the action in your answer to question 3 you ascertain that a risk of collision does exist. Which rule defines who is the give-way vessel?", ruleRef: "R15" },
            { originalNumber: 5, text: "Which rule states the action required of the give-way vessel?", ruleRef: "R16" },
            { originalNumber: 8, text: "You hear a very high frequency transmission from Gris-Nez Traffic that a heavily laden Very Large Crude Carrier, constrained by her draught, is following the same north-east bound lane as you are, a few miles behind. Which rule states how a vessel of this type should navigate?", ruleRef: "R18d" },
            { originalNumber: 9, text: "Which rule specifies what sound signal this vessel would sound while underway in restricted visibility and at what interval?", ruleRef: "R35a" },
            { originalNumber: 10, text: "The Very Large Crude Carrier's Speed of Advance is greater than yours and soon catches up. She is now at Green 175, on a steady bearing and a reducing range. Risk of collision exists. Which rule defines who is the give-way vessel?", ruleRef: "R13a" },
            { originalNumber: 11, text: "The situation is resolved. Which rule lists the factors all vessels should consider when determining a safe speed in any state of visibility?", ruleRef: "R6a" },
            { originalNumber: 12, text: "When operating within a Traffic Separation Scheme, which rule states what a vessel restricted in her ability to manoeuvre, engaged in an operation for the maintenance of safety of navigation, is exempted from and to what extent?", ruleRef: "R10k" }
        ]
    },
    // Fleet ROR Jan 15 - HMS DEFENDER Busan
    {
        id: "fleet-jan15-1",
        source: "Fleet ROR Jan 15",
        scenario: "You are the Navigating Officer in HMS DEFENDER (length 152.4 metres) alongside in Busan, South Korea. You are due to sail tomorrow to act as Plane Guard for the China Sea United States Aircraft Carrier, for a short air defence exercise and are conducting a session of Officer of the Watch briefings prior to sailing.",
        questions: [
            { originalNumber: 1, text: "Does this change how the rules are applied?", ruleRef: "R1a" },
            { originalNumber: 2, text: "There are several local rules outlined for Busan. Which rule states how Special Rules operate?", ruleRef: "R1b" },
            { originalNumber: 3, text: "One local rule specific to the inland waters of Busan is that a vessel must sound one prolonged blast when getting underway. When un-berthing tomorrow, which rule defines at what point you will be underway?", ruleRef: "R3i" },
            { originalNumber: 4, text: "The navigation track has been drawn down the centre of the main channel. There are several blind bends along the navigation track. Which rule states what actions you should take when nearing a bend or an area of a narrow channel or fairway where other vessels may be obscured by an intervening obstruction?", ruleRef: "R9f" },
            { originalNumber: 6, text: "On taking the ship you sight a small power-driven vessel at Green 45 at 6 cables crossing the channel. Her bearing is steady. Which rule defines who is the give-way vessel in this crossing situation?", ruleRef: "R15" },
            { originalNumber: 8, text: "When two sailing vessels are approaching each other so as to involve risk of collision, with the wind on different sides, which rule defines who keeps out of the way of whom and how the windward side is defined?", ruleRef: "R12b" },
            {
                originalNumber: 9,
                text: "The Officer of the Watch reports an outbound merchant vessel closing slowly at Red 170 at 2 nautical miles. In this situation, which rules apply?",
                subParts: [
                    { letter: "i", text: "Which rule defines what situation this is?", ruleRef: "R13b" },
                    { letter: "ii", text: "If you alter course 70 degrees to port in accordance with your navigation track, which rule states how this would change the situation?", ruleRef: "R13d" }
                ]
            },
            { originalNumber: 11, text: "You detect a vessel by radar alone at Red 20 at 1.5 nautical miles. Visibility has reduced to 1 nautical mile. Which rule defines restricted visibility?", ruleRef: "R3l" },
            { originalNumber: 12, text: "In accordance with Rule 18 you make a bold alteration of course to starboard to keep clear of the fishing vessels. Which rule states whether you should use sound signals prior to this manoeuvre?", ruleRef: "R34a" },
            { originalNumber: 13, text: "When two sailing vessels are approaching each other with the wind on the same side, which rule defines who keeps out of the way?", ruleRef: "R12a" }
        ]
    },
    // Fleet ROR Apr 15 - HMS DARING Portsmouth to Cherbourg
    {
        id: "fleet-apr15-1",
        source: "Fleet ROR Apr 15",
        scenario: "You are the Officer of the Watch in HMS DARING (length 152.4 metres) about to sail from Portsmouth for Cherbourg. It is daylight with fair winds and good visibility, but a cold front is forecast to pass through the area later that day.",
        questions: [
            { originalNumber: 3, text: "As you proceed outbound you note that the navigation track does not proceed along the centre of the buoyed channel. Which rule states how a vessel should proceed along the course of a narrow channel or fairway?", ruleRef: "R9a" },
            { originalNumber: 4, text: "On approaching Round Tower the Commanding Officer is concerned about obscured craft and asks the Navigator to sound an appropriate sound signal. Which rule states what actions you should take when nearing a bend or area of a narrow channel where other vessels may be obscured?", ruleRef: "R9f" },
            { originalNumber: 5, text: "The lookout reports numerous small pleasure craft and at least one fishing boat to the east of Spit Sand Fort. Which rule lists the vessels that shall not impede the passage of a vessel which can safely navigate only within a narrow channel?", ruleRef: "R9b" },
            { originalNumber: 6, text: "Which rule specifies what sound signal to sound when nearing a bend in a narrow channel where other vessels may be obscured?", ruleRef: "R34e" },
            { originalNumber: 7, text: "You proceed outbound to the east towards Nab Tower and you note right ahead of you a container ship on a reciprocal course. Which rule defines who should give way?", ruleRef: "R14a" },
            { originalNumber: 8, text: "When you alter course to starboard in the head-on situation, which rule specifies what sound signal you should make?", ruleRef: "R34a" },
            { originalNumber: 9, text: "Which rule states how large an alteration should be made to avoid collision?", ruleRef: "R8b" },
            { originalNumber: 10, text: "Which rule states what the result of your avoiding action should be and that you must check its effectiveness until the other vessel is past and clear?", ruleRef: "R8d" },
            { originalNumber: 11, text: "Which rule states when you should slacken your speed or take all way off by stopping or reversing your means of propulsion to avoid collision?", ruleRef: "R8e" },
            { originalNumber: 13, text: "You pass the Nab Tower and take the watch, following the navigation track to the south east passing clear of the Dover Traffic Separation Scheme. You are not using the Traffic Separation Scheme. Which rule states that you cannot pass closer to it?", ruleRef: "R10h" }
        ]
    },
    // FOST ROR Oct 16 - HMS KENT
    {
        id: "fost-oct16-1",
        source: "FOST ROR Oct 16",
        scenario: "You are the Officer of the Watch of HMS KENT (T23 frigate, length 133 meters). The ship has just sailed from Portsmouth. It is the forenoon watch, the weather is fine with good visibility. The shipping is moderate.",
        questions: [
            { originalNumber: 5, text: "How would you determine safe speed?", ruleRef: "R6" },
            { originalNumber: 14, text: "You sight a small vessel engaged in fishing at Green 30, range 3 miles. The bearing is steady and the range is closing. State rule 18a in full.", ruleRef: "R18a" },
            { originalNumber: 15, text: "You become concerned with the developing situation. Which rule specifies when a sound signal is appropriate and what should be sounded?", ruleRef: "R34d" },
            { originalNumber: 16, text: "Define the term \"vessel engaged in fishing\".", ruleRef: "R3d" },
            { originalNumber: 17, text: "As you alter to pass No man's Land, you sight a small vessel restricted in her ability to manoeuvre. State rule 18a in full.", ruleRef: "R18a" },
            { originalNumber: 20, text: "Despite the fine start, you encounter a bank of fog ahead. Which rule specifies when you should commence making fog signals and at what interval?", ruleRef: "R35a" },
            { originalNumber: 21, text: "Your lookout reports hearing a sound signal consisting of one short, one prolonged and one short sounded in succession. Which rule defines what this signifies?", ruleRef: "R35g" },
            { originalNumber: 22, text: "You detect a vessel on radar at Green 30, range 6 miles. Careful plotting shows that a risk of collision exists. Which rule states how you should manoeuvre if there are no immediate navigational constraints?", ruleRef: "R19d" },
            { originalNumber: 23, text: "You hear a sound signal consisting of three blasts (one prolonged blast followed by two short blasts). Assuming that the pitch indicates a fairly large vessel, which rule lists the types of vessel this would indicate?", ruleRef: "R35c" },
            { originalNumber: 24, text: "Which rule states when you shall reduce your speed to the minimum at which you can be kept on course when in restricted visibility?", ruleRef: "R19b" },
            { originalNumber: 25, text: "Which rule states that every vessel shall use all available means appropriate to the prevailing circumstances to determine if risk of collision exists?", ruleRef: "R7a" }
        ]
    },
    // FOST ROR Jan 17 - HMS MONMOUTH (non-light questions only)
    {
        id: "fost-jan17-1",
        source: "FOST ROR Jan 17",
        scenario: "You are the Navigating Officer on HMS MONMOUTH and your team is ready and prepared for a Maritime Advanced Ship Handling Course day with the Flag Officer Sea Training. You sail at 0730 in accordance with movements. Now the ship is heading south passing Penlee Point towards the Sea Exercise Areas.",
        questions: [
            { originalNumber: 1, text: "Which rule defines at what point you are considered to be underway?", ruleRef: "R3i" },
            { originalNumber: 2, text: "You sight ahead a sailing vessel close to your navigation track. Which rule defines what the sailing vessel shall keep clear of?", ruleRef: "R18b" },
            { originalNumber: 3, text: "The sailing vessel is now on your Red 45. She is on a steady bearing. Which rule defines whether this is a crossing situation?", ruleRef: "R15" },
            { originalNumber: 4, text: "If required by the Rules, which rule states what action you should take to avoid collision?", ruleRef: "R16" },
            { originalNumber: 6, text: "The next serial during the Maritime Advanced Ship Handling Course programme is to Conduct Another Replenishment at sea Exercise, visibility is currently 6 nautical miles however snow has been forecast. If it does start to snow which rule defines whether this constitutes restricted visibility?", ruleRef: "R3l" },
            { originalNumber: 7, text: "Visibility starts to decrease. Which rule states the requirements for use of radar?", ruleRef: "R7b" },
            { originalNumber: 8, text: "With visibility improving. Which rule states that you must a keep lookout?", ruleRef: "R5" },
            { originalNumber: 9, text: "Your lookout reports the German Tanker and 4 other foreign ships conducting Replenishment at Sea and flying operations. Which rule defines a vessel restricted in her ability to manoeuvre and lists operations such as replenishment or flying that restrict her?", ruleRef: "R3g" },
            { originalNumber: 17, text: "The XO is on the bridge and he reports a small group of sailing vessels near the breakwater. Which rule describes the windward side of a sailing vessel?", ruleRef: "R12b" },
            { originalNumber: 18, text: "You request a sound situation report from Longroom in preparation for your Boat Transfer Exercise when the Ship Control Centre requests an Emergency Stop on both shafts. Which rule defines the condition you can now claim?", ruleRef: "R3f" },
            { originalNumber: 19, text: "If a Risk of collision existed between you and the sailing vessel, how would this change the current situation? Which rule states this?", ruleRef: "R18b" }
        ]
    },
    // Fleet ROR Jan 18 - HMS MONTROSE Part 2 (non-light)
    {
        id: "fleet-jan18-1",
        source: "Fleet ROR Jan 18",
        scenario: "You are the Officer of the Watch in HMS MONTROSE (length 133 metres) preparing to sail to start the first Sea Week of Basic Operational Sea Training. Your first serial is Hamoaze Out, 15 minutes before sunrise. You also turn on your masthead obstruction lights in accordance with local regulations.",
        questions: [
            { originalNumber: 20, text: "Which rule permits turning on additional lights in accordance with local regulations?", ruleRef: "R1c" },
            {
                originalNumber: 21,
                text: "You can safely navigate only within the Hamoaze channel. Which rules list the types of vessels required not to impede your safe passage?",
                subParts: [
                    { letter: "i", text: "State Rule 9(b).", ruleRef: "R9b" },
                    { letter: "ii", text: "State Rule 9(c).", ruleRef: "R9c" },
                    { letter: "iii", text: "State Rule 9(d).", ruleRef: "R9d" }
                ]
            },
            { originalNumber: 22, text: "At Red 15 range 5 cables, you detect the Torpoint ferry. Your lookout reports a blue flashing light which leads you to report to the Commanding Officer that she has right of way due to local regulations by the Queen's Harbour Master. Which rule states how such rules relate to the International Regulations for Preventing Collisions at Sea?", ruleRef: "R1b" },
            { originalNumber: 23, text: "After disembarking the pilot in the sound, the Senior Warfare Officer Navigation informs you that visibility is poor south of the breakwater. Which rule states when the Rules regarding restricted visibility apply?", ruleRef: "R19a" },
            { originalNumber: 24, text: "Your Speed of Advance for the Rame Head Channel Outbound Pilot Exercise is 12 knots. Which rule applies to whether it would be appropriate for the Engineers to stand down the fourth engine for routine maintenance noting the prevailing poor visibility?", ruleRef: "R19b" },
            { originalNumber: 25, text: "Which rule lists six radar-related factors you take into account to determine your safe speed?", ruleRef: "R6b" },
            { originalNumber: 26, text: "Which rule states the actions required if you detect by radar alone the presence of another vessel, including actions to be avoided?", ruleRef: "R19d" },
            { originalNumber: 27, text: "Your lookout reports a sound signal consisting of 1 prolonged blast followed by 2 short blasts at intervals of no more than 2 minutes. Which rule defines the types of vessels that could make such a signal?", ruleRef: "R35c" },
            { originalNumber: 28, text: "Which rule states your required actions if this signal was heard apparently forward of the beam for the first time and is not held on radar?", ruleRef: "R19e" },
            { originalNumber: 29, text: "During your transit to the rendezvous, you sight a vessel at Red 45 at a range of 5 nautical miles with a steady Closest Point of Approach. You are 45 degrees on her starboard bow. Which rule defines who is the give-way vessel?", ruleRef: "R15" }
        ]
    },
    // Fleet ROR May 15 - HMS ST ALBANS South Coast Exercise Areas
    {
        id: "fleet-may15-1",
        source: "Fleet ROR May 15",
        scenario: "You are the OOW on HMS ST ALBANS (length 133 metres), underway in the South Coast Exercise Areas conducting preparations for OST. Weather is fair and visibility is good, wind SW 12-15 kts and is forecast to increase. There are several serials planned throughout the day.",
        questions: [
            { originalNumber: 1, text: "There is a large amount of adjacent area activity as well as numerous fishing vessels within your own areas. How should you maintain a proper look-out?", ruleRef: "R5" },
            { originalNumber: 2, text: "Your radar is picking up multiple vessels some of which your look out can see others they cannot. Which rule states that assumptions shall not be made on the basis of scanty information, especially scanty radar information?", ruleRef: "R7c" },
            { originalNumber: 3, text: "Your SOA to the next RV is 21 kts. You start a gas turbine and increase speed. In determining a safe speed, what factors shall be among those taken into account by all vessels that have radar fitted and functioning?", ruleRef: "R6b" },
            { originalNumber: 4, text: "You report the above contact to the CO and recommend an alteration of course. Your look-out reports that there is sufficient sea room. Why would this matter.", ruleRef: "R8c" },
            { originalNumber: 5, text: "On transit, you sight a power-driven vessel at green 60 at a range of 4 nm. You are 20 degrees on her port bow and are the give-way vessel in a crossing situation. When may the stand-on vessel take action?", ruleRef: "R17C" },
            { originalNumber: 6, text: "Continuing on transit to your RV, you sight units conducting replenishment at sea. The units are indicating they are restricted in ability to manoeuvre. What is the definition of a vessel restricted in her ability to manoeuvre?", ruleRef: "R3g" },
            { originalNumber: 7, text: "You sight a large sailing vessel at green 40 at a range of 3 nm. It is clear that she has not maintained a proper look out and a risk of collision exists. If the sailing vessel crashes who can be held responsible?", ruleRef: "R2a" },
            { originalNumber: 8, text: "The vessel conducting RAS have just finished and are now Power Driven Vessels underway. What is the definition of being underway?", ruleRef: "R3i" },
            { originalNumber: 11, text: "Visibility begins to decrease from 10NM down to 2.5NM. Which vessels must have Due regard during times of poor visibility?", ruleRef: "R19c" },
            { originalNumber: 12, text: "You assess visibility to be 2.5 nm. When does Rule 19 apply?", ruleRef: "R19a" },
            { originalNumber: 13, text: "You pass through the exercise areas and encounter heavy traffic. It is becoming difficult to assess the situation and likelihood of risk of collision. Which rule states what action you shall take?", ruleRef: "R8e" },
            { originalNumber: 26, text: "Just visible ahead at 4 nm is a merchant vessel. You assess you are 170 degrees on her starboard bow. What situation is this and why? What is your obligation with respect to the merchant vessel?", ruleRef: "R13b" },
            { originalNumber: 29, text: "What is the definition of a vessel engaged in fishing?", ruleRef: "R3d" }
        ]
    },
    // Fleet ROR Jul 15 - HMS KENT Solent to Needles
    {
        id: "fleet-jul15-1",
        source: "Fleet ROR Jul 15",
        scenario: "You are the SSD Officer of the Watch on HMS KENT (length 133 metres), having just passed Outer Spit Buoy and entered the Solent to make a transit to the Needles Channel. It is the forenoon watch, the weather is fine with good visibility, however a cold front is forecast. The shipping is moderate.",
        questions: [
            { originalNumber: 1, text: "As you alter course to the west, the hovercraft from Southsea appears on a converging course just ahead of your starboard beam. What action is required by the Rules if a risk of collision develops?", ruleRef: "R15" },
            { originalNumber: 2, text: "As you pass south of Ryde Middle you sight a small, slow moving tug and partially submerged tow in the channel ahead, length of tow greater than 200m. You wish to overtake on the port side. As you are unable to raise him on VHF, what sound signal can be made to signal your intention?", ruleRef: "R34c" },
            { originalNumber: 3, text: "As you pass Cowes you see the Tall Ships' race further down the Solent inbound to Southampton, including both square-rigged and fore and aft rigged vessels. Your Captain asks who has right of way in the narrow channel", ruleRef: "R9b" },
            { originalNumber: 5, text: "Continuing on your passage you sight a medium sized merchant vessel at Red 10, you are fine on his port bow and he appears to be transiting along the centreline of the fairway. How should a vessel navigate within a narrow channel or fairway who wish to cross the main channel in such a situation", ruleRef: "R9d" },
            { originalNumber: 7, text: "You continue down past the Needles without further incident. On falling out from SSD you take the remainder of the watch just as the rain starts and visibility begins to reduce. You call the CO to inform him and commence your check-offs for entering restricted visibility. What sound signals will you commence??", ruleRef: "R34a" },
            { originalNumber: "8a", text: "Shortly afterwards you detect a contact on radar at G15 range 5 miles. The vessel's course is parallel to your own but the CPA is on your starboard beam at 4 cables. Which rule lists the radar-related factors you take into account to determine your safe speed in this situation?", ruleRef: "R6b" },
            { originalNumber: "8b", text: "You take avoiding action for the radar contact. Which rule states how large an alteration should be made to avoid collision?", ruleRef: "R8b" },
            { originalNumber: "8c", text: "The Ship Plot Supervisor reports a faint echo at Red 20, range 5 cables that cannot be tracked effectively or generate an accurate CPA. Which rule states the action you should take?", ruleRef: "R19e" },
            { originalNumber: 9, text: "The vessel alters course again and you pass clear, proceeding along the nav track. The cold front passes through and visibility increases to 12nm so you revert to normal steaming watches. Shortly you spot a small merchant vessel at red 25, range 5 nm, you assess that you are 60 degrees on her starboard bow and her bearing is steady. In accordance with the Rules what do you expect the vessel to do and how shall she act? What should you do?", ruleRef: "R17a" },
            { originalNumber: "9b", text: "The vessel is now at 2 nm and has not altered course. You are unsure of his intentions, what should you do?", ruleRef: "R34d" },
            { originalNumber: 10, text: "At 1.5 nm vessel alters course and passes clear. The end of your watch is rapidly approaching but you note that the Ship is due to enter a TSS shortly. How shall a vessel navigate near the terminations of a TSS?", ruleRef: "R10f" }
        ]
    },
    // Fleet ROR Oct 15 - RFA WAVE KNIGHT Caribbean
    {
        id: "fleet-oct15-1",
        source: "Fleet ROR Oct 15",
        scenario: "You are the OOW on RFA WAVE KNIGHT. You are deployed to the Caribbean on APT(N) duties and are scheduled for a port visit to Antigua. It is the morning watch, the weather is fine but heavy rain is forecast for later in the day.",
        questions: [
            { originalNumber: 1, text: "Given the good visibility, which section of rules apply?", ruleRef: "R4" },
            { originalNumber: 2, text: "The lookout reports a vessel at Red 45 displaying a black cylinder in her rigging. Several bearings show she is on a steady bearing.What is the definition of the type ofvessel", ruleRef: "R3h" },
            { originalNumber: 4, text: "You determine that you are overtaking the vessel. According to the Rules, what is your responsibility as the overtaking vessel?", ruleRef: "R17" },
            { originalNumber: 5, text: "During the overtaking, What action (if any) should you take?", ruleRef: "R8f" },
            { originalNumber: 6, text: "During overtaking situations how do you know when you are finally past and clear?", ruleRef: "R13c" },
            { originalNumber: 11, text: "Later you are back on the Bridge as OOW2 to support the OOW during a replenishment with HMS LANCASTER. As LANCASTER commences her fast backdown, the Yeoman pulls the RAM shapes up the mast. Other than vessels engaged in the transfer of persons, provisions or cargo whilst underway, what other vessel can claim to be restricted in their ability to manoeuvre?", ruleRef: "R3g" },
            { originalNumber: 14, text: "Now fully dark and still pumping fuel, you sight a towing vessel at Green 30 range 6 miles. The bearing is steady and the range is decreasing. Who has to keep clear of whom?", ruleRef: "R18a" },
            { originalNumber: 16, text: "The other vessel is now just 2 miles away. What should you do next according to the rules?", ruleRef: "R17" },
            { originalNumber: 18, text: "Once RAS is complete HMSLANCASTER begins to disappear over the horizon to port when a heavy rainstorm engulfs her and moving towards you. How do the Rules define restricted visibility?", ruleRef: "R3l" },
            { originalNumber: 19, text: "Having lost sight of HMS LANCASTER, you see on the radar a contact at Green 30, range 6 miles. Careful plotting shows that a risk of collision exists. Which rule states how you should manoeuvre if there are no immediate navigational constraints?", ruleRef: "R19d" },
            { originalNumber: 20, text: "You begin to contemplate what constitutes a safe speed in restricted visibility. What are the factors all ships should take into account when determining a safe speed?", ruleRef: "R6a" },
            { originalNumber: 21, text: "You hear a VHF transmission that a heavily laden vessel constrained by her draught is in the area. Which rule specifies what sound signal this vessel would sound while underway in restricted visibility and at what interval?", ruleRef: "R35a" },
            { originalNumber: 22, text: "You hear one prolonged blast ahead of the ship but are unsure as to the exact direction it came from. Which rule states what actions you shall take?", ruleRef: "R19e" },
            { originalNumber: 23, text: "The rain passes and the visibility improves to over 5 nm. You sight a vessel at Green 40. What considerations will you take into account to determine if a risk of collision exists?", ruleRef: "R7d" },
            { originalNumber: 24, text: "If risk of collision exists, what action (if any) would you take? Which rule states what the give-way vessel shall do?", ruleRef: "R16" }
        ]
    },
    // Fleet ROR Nov 15 - HMS DEFENDER San Diego
    {
        id: "fleet-nov15-1",
        source: "Fleet ROR Nov 15",
        scenario: "You are the NO in HMS DEFENDER (length 152.4m) alongside in San Diego, USA. You are due to sail tomorrow to act as Plane Guard during a short air defence exercise and are conducting a session of OOW briefings prior to sailing.",
        questions: [
            { originalNumber: 2, text: "The embarked US Officer has some local knowledge to impart, and informs the team that the direction of buoyage is reversed in the US in relation to the UK. According to Rule 9a, how should a vessel navigate down the course of a narrow channel or fairway?", ruleRef: "R9a" },
            { originalNumber: 3, text: "There are several local rules outlined for San Diego. What do the rules state about the operation of special rules?", ruleRef: "R1b" },
            { originalNumber: 4, text: "One local rule specific to inland waters of the US is that a vessel must sound one prolonged blast when getting underway. When un-berthing tomorrow, specifically at what point will you be underway?", ruleRef: "R3i" },
            { originalNumber: 5, text: "How should a vessel navigate down the course of a narrow channel or fairway?", ruleRef: "R9a" },
            { originalNumber: 6, text: "What vessels shall not impede the passage of a vessel which can safely navigate only within a narrow channel or fairway?", ruleRef: "R9b" },
            { originalNumber: 7, text: "There are several bends along the navigation track. What actions should you take when nearing a bend or an area of a narrow channel or fairway where other vessels may be obscured by an intervening obstruction?", ruleRef: "R9f" },
            { originalNumber: 10, text: "On taking the ship you sight a small power-driven vessel at green 45 at 5 cables crossing the channel. Her bearing is steady and it soon becomes clear that she will impede your passage and involve risk of collision. What is your obligation given she has already impeded your passage?", ruleRef: "R8f" },
            { originalNumber: 11, text: "The OOW reports an outbound merchant vessel closing slowly from red 170 at 2 nm. What situation is this?", ruleRef: "R13b" },
            { originalNumber: 12, text: "If you alter course 70 degrees to port in accordance with your navigation track how would this change the situation?", ruleRef: "R13d" },
            { originalNumber: 13, text: "Your CO keen to avoid being overtaken by a merchant vessel suggests an increase in speed to 20 knots. What do the rules state about every vessel proceeding at a safe speed and detail the factors which should be among those taken into account by all vessels?", ruleRef: "R6a" },
            { originalNumber: 14, text: "At red 20 at 5 nm you sight two small power driven vessels. As the range reduces to 3 nm you sight two cones apexes together on both vessels. they are both in your navigation track. who has right of way?", ruleRef: "R9c" },
            { originalNumber: 15, text: "How is a vessel engaged in fishing defined?", ruleRef: "R3d" },
            { originalNumber: 18, text: "In accordance with Rule 18 you make a bold alteration of course to starboard to keep clear of the fishing vessels. Should you use sound signals prior to this manoeuvre?.", ruleRef: "R34a" },
            { originalNumber: 19, text: "You detect by radar alone the presence of another vessel at red 20 range 5 nm. What must you determine, and if action to avoid collision is required, what should be avoided?", ruleRef: "R19d" },
            { originalNumber: 20, text: "You now hold a small power driven vessel visually at green 40 at 1 nm and are 60 degrees on her port bow with the bearing drawing very slowly left. Does Rule 19 apply to this situation?", ruleRef: "R19a" }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examScenarios };
} else if (typeof window !== 'undefined') {
    window.examScenarios = examScenarios;
}
