/**
 * Generates a PDF of all Lights quiz questions for manual review.
 * No quiz implementation—reference document only.
 * Run: node "content-tools/Question PDF generaters/Lights-Quiz-Questions-Review.js"
 */
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

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

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickFourOptions(correctVal, pool) {
  const others = pool.filter((x) => x !== correctVal);
  const opts = shuffle([correctVal, others[0], others[1], others[2]].slice(0, 4));
  return { options: opts, correct: opts.indexOf(correctVal) };
}

function buildAllQuestions() {
  const questions = [];
  const vesselNames = LIGHTS_DATA.map((v) => v.name);
  const meanings = LIGHTS_DATA.map((v) => v.meaning);
  const views = ['Front', 'Port', 'Aft'];

  // 1. Identify: "What type of vessel is this?" — 9 vessels × 3 views = 27
  LIGHTS_DATA.forEach((vessel) => {
    Object.entries(vessel.diagramKeys).forEach(([viewKey, diagramKey]) => {
      const viewLabel = viewKey === 'front' ? 'Front' : viewKey === 'port' ? 'Port' : 'Aft';
      const { options, correct } = pickFourOptions(vessel.name, vesselNames);
      questions.push({
        type: 'identify-lights',
        question: `What type of vessel is this? [Diagram: ${vessel.name} — ${viewLabel} view]`,
        options,
        correct,
        explanation: `This is a ${vessel.name} (${vessel.ruleRef}).`,
        diagramKey
      });
    });
  });

  // 2. Meaning: "What does this vessel indicate?" — 9 × 3 = 27
  LIGHTS_DATA.forEach((vessel) => {
    Object.keys(vessel.diagramKeys).forEach((viewKey) => {
      const viewLabel = viewKey === 'front' ? 'Front' : viewKey === 'port' ? 'Port' : 'Aft';
      const { options, correct } = pickFourOptions(vessel.meaning, meanings);
      questions.push({
        type: 'meaning',
        question: `What does this vessel indicate? [Diagram: ${vessel.name} — ${viewLabel} view]`,
        options,
        correct,
        explanation: vessel.meaning,
        diagramKey: vessel.diagramKeys[viewKey]
      });
    });
  });

  // 3. View: "From which direction is this viewed?" — 9 × 3 = 27
  LIGHTS_DATA.forEach((vessel) => {
    Object.entries(vessel.diagramKeys).forEach(([viewKey, diagramKey]) => {
      const correctView = viewKey === 'front' ? 'Front' : viewKey === 'port' ? 'Port' : 'Aft';
      const viewOpts = shuffle(['Front', 'Port', 'Aft']);
      questions.push({
        type: 'view',
        question: `From which direction is this light configuration viewed? [Diagram: ${vessel.name}]`,
        options: viewOpts,
        correct: viewOpts.indexOf(correctView),
        explanation: `This diagram shows the ${vessel.name} from the ${correctView}.`,
        diagramKey
      });
    });
  });

  // 4. Config: "What lights does a [vessel] display?" — 9
  const allConfigs = LIGHTS_DATA.map((v) => v.lightConfig);
  LIGHTS_DATA.forEach((vessel) => {
    const others = allConfigs.filter((c) => c !== vessel.lightConfig);
    const opts = shuffle([vessel.lightConfig, ...others.slice(0, 3)]);
    questions.push({
      type: 'config',
      question: `What lights does a ${vessel.name} display?`,
      options: opts,
      correct: opts.indexOf(vessel.lightConfig),
      explanation: vessel.lightConfig,
      diagramKey: null
    });
  });

  return questions;
}

function generatePdf() {
  const questions = buildAllQuestions();
  const byType = {
    'identify-lights': questions.filter((q) => q.type === 'identify-lights'),
    meaning: questions.filter((q) => q.type === 'meaning'),
    view: questions.filter((q) => q.type === 'view'),
    config: questions.filter((q) => q.type === 'config')
  };

  const outDir = path.join(__dirname, '..', 'PDF reference Documents');
  const outPath = path.join(outDir, 'Lights_Quiz_Questions_For_Review.pdf');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const margin = 50;
  const pageWidth = 595;
  const contentWidth = pageWidth - 2 * margin;
  const doc = new PDFDocument({ margin, size: 'A4' });
  const write = fs.createWriteStream(outPath);
  doc.pipe(write);

  const opts = ['A', 'B', 'C', 'D'];

  doc.fontSize(20).font('Helvetica-Bold').text('Lights Quiz — All Questions for Manual Review', { align: 'center', width: contentWidth });
  doc.moveDown(0.5);
  doc.fontSize(12).font('Helvetica').text(`Total: ${questions.length} questions`, { align: 'center', width: contentWidth });
  doc.fontSize(9).fillColor('#555').text(
    `Identify: ${byType['identify-lights'].length} | Meaning: ${byType.meaning.length} | View: ${byType.view.length} | Config: ${byType.config.length}`,
    { align: 'center', width: contentWidth }
  );
  doc.fillColor('black').moveDown(1.5);

  const sectionOrder = [
    { key: 'identify-lights', title: 'Identify (What type of vessel is this?)' },
    { key: 'meaning', title: 'Meaning (What does this vessel indicate?)' },
    { key: 'view', title: 'View (From which direction is this viewed?)' },
    { key: 'config', title: 'Config (What lights does this vessel display?)' }
  ];

  let qNum = 0;
  sectionOrder.forEach((section, sIdx) => {
    const qs = byType[section.key];
    if (!qs.length) return;

    if (sIdx > 0) doc.addPage();
    doc.fontSize(14).font('Helvetica-Bold').text(section.title, { width: contentWidth });
    doc.fontSize(9).fillColor('#555').text(`${qs.length} questions`, { width: contentWidth });
    doc.fillColor('black').moveDown(0.8);

    qs.forEach((q) => {
      qNum++;
      if (doc.y > 750) {
        doc.addPage();
        doc.fontSize(10).text(section.title, { width: contentWidth });
        doc.moveDown(0.4);
      }
      doc.fontSize(10).font('Helvetica-Bold').text(`${qNum}. ${q.question}`, { width: contentWidth, lineGap: 1 });
      doc.font('Helvetica').fontSize(9);
      (q.options || []).forEach((opt, j) => {
        const marker = q.correct === j ? '[*]' : '[ ]';
        doc.text(`    ${opts[j] || j + 1}. ${marker}  ${opt}`, { width: contentWidth - 20, indent: 0, lineGap: 1 });
      });
      doc.moveDown(0.2);
      doc.fontSize(8).fillColor('#0a5f0a').text(`Answer: ${opts[q.correct] || q.correct + 1}. ${q.options[q.correct]}`, { width: contentWidth });
      doc.fillColor('black');
      if (q.explanation) doc.fontSize(8).fillColor('#333').text(q.explanation, { width: contentWidth, lineGap: 1 });
      doc.fillColor('black').moveDown(0.6);
    });
  });

  doc.end();
  write.on('finish', () => console.log(`Created: ${outPath}\nTotal questions: ${questions.length}`));
}

generatePdf();
