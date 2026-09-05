/**
 * Generates a PDF of all planned IALA/Buoys quiz questions for manual review.
 * Run BEFORE implementation. Output: content-tools/PDF reference Documents/IALA_Buoys_Quiz_Questions_For_Review.pdf
 * Run: node "content-tools/Question PDF generaters/IALA-Buoys-Questions-Review.js"
 */

const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestion(q) {
  const opts = q.options || [];
  if (opts.length < 2) return q;
  const shuffled = shuffle(opts);
  const newCorrect = shuffled.indexOf(opts[q.correct]);
  return { ...q, options: shuffled, correct: newCorrect >= 0 ? newCorrect : 0 };
}

// Static question content for review — matches plan spec
const IALA_ACRONYM = {
  question: 'What does IALA stand for?',
  correct: 'International Association of Marine Aids to Navigation and Lighthouse Authorities',
  wrongOptions: [
    'International Association of Lighthouse Authorities',
    'International Maritime Aids and Lighthouse Association',
    'International Association for Maritime Navigation'
  ],
  explanation: 'IALA is the International Association of Marine Aids to Navigation and Lighthouse Authorities.'
};

const IALA_COUNTRIES = {
  regionA: [
    'United Kingdom', 'France', 'Germany', 'Australia', 'New Zealand', 'South Africa',
    'India', 'UAE', 'Saudi Arabia', 'Egypt', 'Oman', 'Singapore', 'Thailand', 'Greece', 'Norway'
  ],
  regionB: [
    'United States', 'Canada', 'Brazil', 'Mexico', 'Japan', 'South Korea', 'Philippines',
    'Chile', 'Argentina', 'Colombia', 'Jamaica', 'Venezuela', 'Panama', 'Ecuador', 'Peru'
  ]
};

const TYPE2_QUESTIONS = [
  {
    question: 'Which IALA region is this chart from?',
    image: 'A region.jpeg (chart showing Region A buoyage)',
    options: ['Region A', 'Region B'],
    correct: 0,
    explanation: 'Red port / green starboard indicates Region A.'
  },
  {
    question: 'Which IALA region is this chart from?',
    image: 'B region.jpeg (chart showing Region B buoyage)',
    options: ['Region A', 'Region B'],
    correct: 1,
    explanation: 'Green port / red starboard indicates Region B.'
  },
  {
    question: 'What is the purpose of lateral marks (port and starboard)?',
    options: [
      'Indicate the port and starboard sides of the route to be followed',
      'Indicate the main or preferred channel at junctions',
      'Indicate isolated dangers',
      'Indicate safe water all round'
    ],
    correct: 0,
    explanation: 'Lateral markers indicate the port and starboard sides of the channel.'
  },
  {
    question: 'What do preferred channel markers indicate?',
    options: [
      'The main, deeper, or preferred route at channel junctions',
      'Port and starboard sides of the channel',
      'Isolated dangers of limited extent',
      'Traffic separation schemes'
    ],
    correct: 0,
    explanation: 'Preferred channel markers are red and green banded buoys at junctions indicating the preferred route.'
  },
  {
    question: 'What light rhythm does a normal lateral mark use when fitted?',
    options: [
      'Any rhythm other than composite group flashing (2+1)',
      'Composite group flashing (2+1) only',
      'Uninterrupted (quick) flashes',
      'Morse code A'
    ],
    correct: 0,
    explanation: 'Normal lateral marks may use any rhythm except (2+1), which is reserved for preferred channel.'
  },
  {
    question: 'What light characteristic indicates a preferred channel marker?',
    options: [
      'Composite group flashing (2+1)',
      'Single long flash',
      'Group of two flashes',
      'Uninterrupted quick flashes'
    ],
    correct: 0,
    explanation: 'Composite group flashing (2+1) indicates a preferred channel marker.'
  },
  {
    question: 'How do Region A and Region B differ for lateral marks?',
    options: [
      'Colour swap: red/green for port/starboard are reversed',
      'Shape differences',
      'Light rhythm differences',
      'No difference'
    ],
    correct: 0,
    explanation: 'Region A: red port, green starboard. Region B: green port, red starboard when entering from seaward.'
  },
  {
    question: 'In Region A, what colour marks the port side when entering from seaward?',
    options: ['Red', 'Green', 'White', 'Yellow'],
    correct: 0,
    explanation: 'In Region A, red marks port side and green marks starboard.'
  },
  {
    question: 'In Region A, what colour marks the starboard side when entering from seaward?',
    options: ['Green', 'Red', 'White', 'Yellow'],
    correct: 0,
    explanation: 'In Region A, green marks starboard side.'
  },
  {
    question: 'In Region B, what colour marks the port side when entering from seaward?',
    options: ['Green', 'Red', 'White', 'Yellow'],
    correct: 0,
    explanation: 'In Region B, green marks port side and red marks starboard.'
  },
  {
    question: 'In Region B, what colour marks the starboard side when entering from seaward?',
    options: ['Red', 'Green', 'White', 'Yellow'],
    correct: 0,
    explanation: 'In Region B, red marks starboard side.'
  },
  {
    question: 'In Region A, what light colour and rhythm indicates a port preferred channel marker?',
    options: ['Red (2+1)', 'Green (2+1)', 'White occulting', 'Yellow flashing'],
    correct: 0,
    explanation: 'In Region A, red composite (2+1) indicates port preferred.'
  },
  {
    question: 'In Region A, what light colour and rhythm indicates a starboard preferred channel marker?',
    options: ['Green (2+1)', 'Red (2+1)', 'White occulting', 'Yellow flashing'],
    correct: 0,
    explanation: 'In Region A, green composite (2+1) indicates starboard preferred.'
  },
  {
    question: 'In Region B, what light colour and rhythm indicates a port preferred channel marker?',
    options: ['Green (2+1)', 'Red (2+1)', 'White occulting', 'Yellow flashing'],
    correct: 0,
    explanation: 'In Region B, green composite (2+1) indicates port preferred.'
  },
  {
    question: 'In Region B, what light colour and rhythm indicates a starboard preferred channel marker?',
    options: ['Red (2+1)', 'Green (2+1)', 'White occulting', 'Yellow flashing'],
    correct: 0,
    explanation: 'In Region B, red composite (2+1) indicates starboard preferred.'
  },
  {
    question: 'What does the top band colour indicate on a preferred channel marker?',
    options: [
      'The preferred channel side (red or green band shows which side is preferred)',
      'The direction of buoyage',
      'The water depth',
      'Danger ahead'
    ],
    correct: 0,
    explanation: 'The top band colour indicates the preferred channel side — red top = preferred to port, green top = preferred to starboard (in Region A; reversed in B).'
  },
  {
    question: 'What are preferred channel markers used for?',
    options: [
      'Channel junctions to indicate the main, deeper, or preferred route',
      'Marking the port and starboard sides of a single channel',
      'Marking isolated dangers',
      'Indicating safe water all round'
    ],
    correct: 0,
    explanation: 'Preferred channel markers are red and green banded buoys at channel junctions indicating the preferred route.'
  },
  {
    question: 'Which side does this lateral mark indicate?',
    image: 'Lateral-Marker-Port-Region-A.png',
    options: ['Port side', 'Starboard side', 'Preferred channel', 'Safe water'],
    correct: 0,
    explanation: 'A red can-shaped buoy in Region A marks the port side.'
  },
  {
    question: 'Which side does this lateral mark indicate?',
    image: 'Lateral-Marker-Starboard-Region-A.png',
    options: ['Starboard side', 'Port side', 'Preferred channel', 'Safe water'],
    correct: 0,
    explanation: 'A green conical buoy in Region A marks the starboard side.'
  },
  {
    question: 'Which IALA region is this lateral mark from?',
    image: 'Lateral-Marker-Port-Region-B.png (green port)',
    options: ['Region B', 'Region A', 'Both regions', 'Neither'],
    correct: 0,
    explanation: 'Green marks port in Region B; in Region A, red marks port.'
  },
  {
    question: 'Which IALA region is this lateral mark from?',
    image: 'Lateral-Marker-Starboard-Region-B.png (red starboard)',
    options: ['Region B', 'Region A', 'Both regions', 'Neither'],
    correct: 0,
    explanation: 'Red marks starboard in Region B; in Region A, green marks starboard.'
  },
  {
    question: 'What type of marker is this?',
    image: 'Lateral-Marker-Port-Perferred-Region-A.png',
    options: ['Preferred channel (port preferred, Region A)', 'Lateral port mark', 'Safe water mark', 'Cardinal mark'],
    correct: 0,
    explanation: 'Red and green horizontal bands with red on top indicates port preferred in Region A.'
  },
  {
    question: 'Lateral markers are used in conjunction with what?',
    options: [
      'A conventional direction of buoyage',
      'The compass direction',
      'The depth of water',
      'Traffic separation schemes only'
    ],
    correct: 0,
    explanation: 'Lateral markers indicate port and starboard relative to a conventional direction of buoyage (usually entering from seaward).'
  }
];

const BUOY_TYPES = [
  {
    id: 'lateral_port_a', name: 'Lateral mark (port, Region A)', purpose: 'Indicate port side of channel', lights: 'Red, any rhythm except (2+1)'
  },
  {
    id: 'lateral_starboard_a', name: 'Lateral mark (starboard, Region A)', purpose: 'Indicate starboard side of channel', lights: 'Green, any rhythm except (2+1)'
  },
  {
    id: 'lateral_port_b', name: 'Lateral mark (port, Region B)', purpose: 'Indicate port side of channel', lights: 'Green, any rhythm except (2+1)'
  },
  {
    id: 'lateral_starboard_b', name: 'Lateral mark (starboard, Region B)', purpose: 'Indicate starboard side of channel', lights: 'Red, any rhythm except (2+1)'
  },
  {
    id: 'preferred_port_a', name: 'Preferred channel (port, Region A)', purpose: 'Indicate preferred route at junction', lights: 'Red, composite (2+1)'
  },
  {
    id: 'preferred_starboard_a', name: 'Preferred channel (starboard, Region A)', purpose: 'Indicate preferred route at junction', lights: 'Green, composite (2+1)'
  },
  {
    id: 'preferred_port_b', name: 'Preferred channel (port, Region B)', purpose: 'Indicate preferred route at junction', lights: 'Green, composite (2+1)'
  },
  {
    id: 'preferred_starboard_b', name: 'Preferred channel (starboard, Region B)', purpose: 'Indicate preferred route at junction', lights: 'Red, composite (2+1)'
  },
  {
    id: 'cardinal_north', name: 'Cardinal North', purpose: 'Best navigable water is north of the mark', lights: 'White, uninterrupted (Q or VQ)'
  },
  {
    id: 'cardinal_east', name: 'Cardinal East', purpose: 'Best navigable water is east of the mark', lights: 'White, 3 flashes in a group'
  },
  {
    id: 'cardinal_south', name: 'Cardinal South', purpose: 'Best navigable water is south of the mark', lights: 'White, 6 flashes + 1 long'
  },
  {
    id: 'cardinal_west', name: 'Cardinal West', purpose: 'Best navigable water is west of the mark', lights: 'White, 9 flashes in a group'
  },
  {
    id: 'isolated_danger', name: 'Isolated danger mark', purpose: 'Mark isolated dangers with navigable water all round', lights: 'White, group of two flashes'
  },
  {
    id: 'safe_water', name: 'Safe water mark', purpose: 'Indicate navigable water all round (centreline, landfall, etc.)', lights: 'White, occulting/isophase/long/morse A'
  },
  {
    id: 'special', name: 'Special mark', purpose: 'Indicate areas/features (traffic schemes, spoil grounds, military zones)', lights: 'Yellow'
  },
  {
    id: 'emergency_wreck', name: 'Emergency wreck marking buoy', purpose: 'Temporary mark for newly sunken vessels, 24–72 hours', lights: 'Blue/yellow alternating, occulting'
  }
];

const TYPE4_BUOY_PHOTOS = [
  { file: 'Lateral-Marker-Port-Region-A.png', buoyType: 'Lateral mark (port, Region A)' },
  { file: 'Lateral-Marker-Starboard-Region-A.png', buoyType: 'Lateral mark (starboard, Region A)' },
  { file: 'Lateral-Marker-Port-Region-B.png', buoyType: 'Lateral mark (port, Region B)' },
  { file: 'Lateral-Marker-Starboard-Region-B.png', buoyType: 'Lateral mark (starboard, Region B)' },
  { file: 'Lateral-Marker-Port-Perferred-Region-A.png', buoyType: 'Preferred channel (port, Region A)' },
  { file: 'Lateral-Marker-Starboard-Perferred-Region-A.png', buoyType: 'Preferred channel (starboard, Region A)' },
  { file: 'Lateral-Marker-Port-Perferred-Region-B.png', buoyType: 'Preferred channel (port, Region B)' },
  { file: 'Lateral-Marker-Starboard-Perferred-Region-B.png', buoyType: 'Preferred channel (starboard, Region B)' },
  { file: 'cardinal-north-01.jpg', buoyType: 'Cardinal North', cardinalDirection: 'North' },
  { file: 'cardinal-east-01.jpg', buoyType: 'Cardinal East', cardinalDirection: 'East' },
  { file: 'cardinal-south-01.jpg', buoyType: 'Cardinal South', cardinalDirection: 'South' },
  { file: 'cardinal-west-01.jpg', buoyType: 'Cardinal West', cardinalDirection: 'West' },
  { file: 'Isolated-Danger-Marks.png', buoyType: 'Isolated danger mark' },
  { file: 'Safe-Water-Marks.png', buoyType: 'Safe water mark' },
  { file: 'Special-Marks.png', buoyType: 'Special mark' },
  { file: 'Emergancy-Bouy-Marks.jpg', buoyType: 'Emergency wreck marking buoy' }
];

function buildAllQuestions() {
  const questions = [];

  // Type 1a: IALA acronym
  const acronymOpts = [IALA_ACRONYM.correct, ...IALA_ACRONYM.wrongOptions];
  questions.push({
    type: 'Type 1 – IALA',
    subType: 'acronym',
    question: IALA_ACRONYM.question,
    options: acronymOpts,
    correct: 0,
    explanation: IALA_ACRONYM.explanation
  });

  // Type 1b: Country-region (30 questions)
  IALA_COUNTRIES.regionA.forEach((country) => {
    questions.push({
      type: 'Type 1 – IALA',
      subType: 'country',
      question: `Which IALA region is ${country} in?`,
      options: ['Region A', 'Region B'],
      correct: 0,
      explanation: `${country} is in IALA Region A.`
    });
  });
  IALA_COUNTRIES.regionB.forEach((country) => {
    questions.push({
      type: 'Type 1 – IALA',
      subType: 'country',
      question: `Which IALA region is ${country} in?`,
      options: ['Region A', 'Region B'],
      correct: 1,
      explanation: `${country} is in IALA Region B.`
    });
  });

  // Type 2 — Charts and lateral
  TYPE2_QUESTIONS.forEach((q) => {
    questions.push({
      type: 'Type 2 – Charts/Lateral',
      question: q.question,
      image: q.image,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation
    });
  });

  // Type 3: Buoy purpose + meaning + lights (3 per buoy type)
  BUOY_TYPES.forEach((buoy) => {
    questions.push({
      type: 'Type 3 – Buoy Types',
      subType: 'purpose',
      question: `What is the purpose of ${buoy.name}?`,
      options: [buoy.purpose, 'Indicate starboard side of channel', 'Mark isolated dangers', 'Indicate traffic separation'],
      correct: 0,
      explanation: buoy.purpose
    });
    questions.push({
      type: 'Type 3 – Buoy Types',
      subType: 'meaning',
      question: `What does a ${buoy.name} indicate to a mariner?`,
      options: [buoy.purpose, 'Keep to starboard when entering', 'Danger — do not pass', 'Anchorage permitted'],
      correct: 0,
      explanation: buoy.purpose
    });
    questions.push({
      type: 'Type 3 – Buoy Types',
      subType: 'lights',
      question: `What light colour/rhythm does ${buoy.name} show?`,
      options: [buoy.lights, 'Yellow, any rhythm', 'White, morse A', 'Red, (2+1)'],
      correct: 0,
      explanation: buoy.lights
    });
  });

  // Type 4: Identify + meaning (paired)
  TYPE4_BUOY_PHOTOS.forEach((photo) => {
    const buoy = BUOY_TYPES.find((b) => b.name === photo.buoyType) ||
      { purpose: 'Indicate where best navigable water lies relative to the mark', name: photo.buoyType };
    if (photo.cardinalDirection) {
      questions.push({
        type: 'Type 4 – Identify Buoy',
        subType: 'identify-cardinal',
        question: 'Which cardinal mark is this?',
        image: `[Image: ${photo.file} — add to reference/Photos/Bouys/]`,
        options: ['North', 'East', 'South', 'West'],
        correct: ['North', 'East', 'South', 'West'].indexOf(photo.cardinalDirection),
        explanation: `This is a ${photo.buoyType} buoy.`
      });
    } else {
      questions.push({
        type: 'Type 4 – Identify Buoy',
        subType: 'identify',
        question: 'What type of buoy is this?',
        image: `[Image: ${photo.file}]`,
        options: [photo.buoyType, 'Lateral mark (port)', 'Cardinal North', 'Safe water mark'],
        correct: 0,
        explanation: `This is ${photo.buoyType}.`
      });
    }
    questions.push({
      type: 'Type 4 – Identify Buoy',
      subType: 'meaning',
      question: 'What does this buoy indicate?',
      image: `[Image: ${photo.file}]`,
      options: [buoy.purpose || buoy.name, 'Port side of channel', 'Preferred route', 'Isolated danger'],
      correct: 0,
      explanation: buoy.purpose || buoy.name
    });
  });

  return questions.map(shuffleQuestion);
}

function groupQuestionsByType(questions) {
  const sectionOrder = [
    { type: 'Type 1 – IALA', title: 'Type 1 – IALA Basics', subtitle: 'Acronym and country-to-region' },
    { type: 'Type 2 – Charts/Lateral', title: 'Type 2 – Charts & Lateral Marks', subtitle: 'Chart region, purpose, lights, A vs B' },
    { type: 'Type 3 – Buoy Types', title: 'Type 3 – Buoy Types & Lights', subtitle: 'Purpose and light colour/rhythm per buoy' },
    { type: 'Type 4 – Identify Buoy', title: 'Type 4 – Identify Buoy from Image', subtitle: 'Identify type + meaning (paired)' }
  ];

  return sectionOrder.map((section) => ({
    ...section,
    questions: questions.filter((q) => q.type === section.type)
  })).filter((section) => section.questions.length > 0);
}

function renderSectionHeader(doc, section, contentWidth) {
  doc.fontSize(16).font('Helvetica-Bold').fillColor('#0f172a').text(section.title, {
    width: contentWidth
  });
  doc.moveDown(0.2);
  doc.fontSize(10).font('Helvetica').fillColor('#475569').text(
    `${section.subtitle} • ${section.questions.length} question${section.questions.length === 1 ? '' : 's'}`,
    { width: contentWidth }
  );
  doc.fillColor('black').moveDown(0.9);
}

function generatePdf() {
  const questions = buildAllQuestions();
  const sections = groupQuestionsByType(questions);
  const outDir = path.join(__dirname, '..', 'PDF reference Documents');
  const outPath = path.join(outDir, 'IALA_Buoys_Quiz_Questions_For_Review.pdf');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const margin = 50;
  const pageWidth = 595;
  const pageHeight = 842;
  const contentWidth = pageWidth - 2 * margin;
  const opts = ['A', 'B', 'C', 'D'];
  const questionGap = 1.0;

  const doc = new PDFDocument({ margin, size: 'A4' });
  const write = fs.createWriteStream(outPath);
  doc.pipe(write);

  doc.fontSize(20).font('Helvetica-Bold').text('IALA/Buoys Quiz — Questions for Manual Review', { align: 'center', width: contentWidth });
  doc.moveDown(0.3);
  doc.fontSize(14).font('Helvetica').text('All planned questions before implementation', { align: 'center', width: contentWidth });
  doc.moveDown(0.5);
  doc.fontSize(10).fillColor('#444444').text(`Total: ${questions.length} questions`, { align: 'center', width: contentWidth });
  sections.forEach((section) => {
    doc.text(`${section.title}: ${section.questions.length}`, { align: 'center', width: contentWidth });
  });
  doc.fillColor('black').moveDown(1.5);

  sections.forEach((section, sectionIndex) => {
    if (sectionIndex > 0) doc.addPage();
    renderSectionHeader(doc, section, contentWidth);

    section.questions.forEach((q, questionIndex) => {
      const needNewPage = doc.y > pageHeight - 160;
      if (questionIndex > 0 && needNewPage) {
        doc.addPage();
        renderSectionHeader(doc, section, contentWidth);
      }

      doc.fontSize(11).font('Helvetica-Bold').text(`${questionIndex + 1}. ${q.question}`, { width: contentWidth, lineGap: 2 });
      if (q.image) {
        doc.font('Helvetica').fontSize(9).fillColor('#555').text(`    [Image: ${q.image}]`, { width: contentWidth });
      }
      doc.moveDown(0.4);

      doc.font('Helvetica').fontSize(10);
      (q.options || []).forEach((opt, j) => {
        const marker = q.correct === j ? '[*]' : '[ ]';
        doc.text(`    ${opts[j] || j + 1}. ${marker}  ${opt}`, { width: contentWidth - 20, indent: 0, lineGap: 1 });
      });
      doc.moveDown(0.3);

      doc.font('Helvetica-Bold').fontSize(9).fillColor('#0a5f0a').text(
        `Answer: ${opts[q.correct] || q.correct + 1}. ${q.options[q.correct]}`,
        { width: contentWidth }
      );
      doc.fillColor('black');
      doc.font('Helvetica').fontSize(8).fillColor('#333333').text(q.explanation || '', { width: contentWidth, lineGap: 1 });
      doc.fillColor('black');

      doc.moveDown(questionGap);
      if (questionIndex < section.questions.length - 1) {
        doc.fontSize(8).fillColor('#cccccc').text('-'.repeat(70), { width: contentWidth });
        doc.fillColor('black').moveDown(0.4);
      }
    });
  });

  doc.end();
  write.on('finish', () => console.log(`Created: ${outPath}`));
}

generatePdf();
