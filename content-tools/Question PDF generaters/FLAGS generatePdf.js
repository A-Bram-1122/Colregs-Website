/**
 * Generates a PDF of all Signals, Flags & Buoys quiz questions (lights, flags, shapes) with answers for manual review.
 * Output: content-tools/PDF reference Documents/PDF reference Documents/Flag_Quiz_Questions_With_Answers.pdf
 * Run: node "content-tools/Question PDF generaters/FLAGS generatePdf.js"
 */
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

global.shuffleArray = shuffleArray;

function extractAllQuestions() {
  const quizDir = path.join(__dirname, '..', '..', 'scripts', 'quiz');
  // In the browser these functions/data are globals; the PDF generator runs in Node, so we mirror that.
  const reviewData = require(path.join(__dirname, '..', '..', 'scripts', 'data', 'review-and-lights-data.js'));
  global.maritimeFlags = reviewData.maritimeFlags;
  global.IMAGE_PATHS = reviewData.IMAGE_PATHS;
  global.LIGHT_DIAGRAM_MAP = reviewData.LIGHT_DIAGRAM_MAP;
  global.getLightDiagramPath = reviewData.getLightDiagramPath;

  global.getLightsQuizQuestions = require(path.join(quizDir, 'lights-quiz-questions.js')).getLightsQuizQuestions;
  global.getFlagsQuizQuestions = require(path.join(quizDir, 'flags-quiz-questions.js')).getFlagsQuizQuestions;
  global.getDayShapesQuizQuestions = require(path.join(quizDir, 'day-shapes-quiz-questions.js')).getDayShapesQuizQuestions;
  global.getBuoysQuizQuestions = require(path.join(quizDir, 'buoys-quiz-questions.js')).getBuoysQuizQuestions;
  const { getQuizQuestions } = require(path.join(quizDir, 'lights-flags-quiz.js'));

  return getQuizQuestions().map((q) => ({
    type: q.type,
    question: q.question,
    options: q.options || [],
    correct: q.correct,
    explanation: q.explanation || '',
    image: q.image || ''
  }));
}

function generatePdf() {
  const questions = extractAllQuestions();
  const outDir = path.join(__dirname, '..', 'PDF reference Documents', 'PDF reference Documents');
  const outPath = path.join(outDir, 'Flag_Quiz_Questions_With_Answers.pdf');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const margin = 50;
  const pageWidth = 595;
  const pageHeight = 842;
  const contentWidth = pageWidth - 2 * margin;

  const doc = new PDFDocument({ margin, size: 'A4' });
  const write = fs.createWriteStream(outPath);
  doc.pipe(write);

  const lightsCount = questions.filter((q) => q.type === 'lights').length;
  const flagsCount = questions.filter((q) => q.type === 'flags').length;
  const shapesCount = questions.filter((q) => q.type === 'shapes').length;
  const buoysCount = questions.filter((q) => q.type === 'buoys').length;
  doc.fontSize(20).font('Helvetica-Bold').text('Signals, Flags, Shapes & Buoys Quiz', { align: 'center', width: contentWidth });
  doc.moveDown(0.3);
  doc.fontSize(14).font('Helvetica').text('All Questions with Answers', { align: 'center', width: contentWidth });
  doc.moveDown(0.5);
  doc.fontSize(10).fillColor('#444444').text(
    `Total: ${questions.length} | Ship Lights: ${lightsCount} | Signal Flags: ${flagsCount} | Day Shapes: ${shapesCount} | Buoys: ${buoysCount}`,
    { align: 'center', width: contentWidth }
  );
  doc.fillColor('black').moveDown(1.5);

  const opts = ['A', 'B', 'C', 'D'];
  const questionGap = 1.2;
  const sections = [
    { type: 'lights', title: 'Ship Lights', desc: 'Navigation light configurations' },
    { type: 'flags', title: 'Signal Flags', desc: 'International and NATO maritime signal flags' },
    { type: 'shapes', title: 'Day Shapes', desc: 'Daytime signals (Rule 24-30)' },
    { type: 'buoys', title: 'IALA Buoys & Marks', desc: 'IALA marks, chart symbology, and photo ID' }
  ];
  let globalIndex = 0;

  sections.forEach((section, sIdx) => {
    const sectionQuestions = questions.filter((q) => q.type === section.type);
    if (sectionQuestions.length === 0) return;

    if (sIdx > 0) doc.addPage();
    doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a1a').text(section.title, { width: contentWidth });
    doc.fontSize(10).font('Helvetica').fillColor('#555555').text(`${section.desc} (${sectionQuestions.length} questions)`, { width: contentWidth });
    doc.fillColor('black').moveDown(1);

    sectionQuestions.forEach((q, i) => {
      globalIndex++;
      const needNewPage = doc.y > pageHeight - 180;
      if (i > 0 && needNewPage) doc.addPage();

      doc.fontSize(11).font('Helvetica-Bold').text(`${globalIndex}. ${q.question}`, { width: contentWidth, lineGap: 2 });
      if (q.image) {
        doc.moveDown(0.2);
        doc.font('Helvetica').fontSize(8).fillColor('#666666').text(`Image: ${q.image}`, { width: contentWidth, lineGap: 1 });
        doc.fillColor('black');
      }
      doc.moveDown(0.4);

      doc.font('Helvetica').fontSize(10);
      (q.options || []).forEach((opt, j) => {
        const marker = q.correct === j ? '[*]' : '[ ]';
        doc.text(`    ${opts[j] || j + 1}. ${marker}  ${opt}`, { width: contentWidth - 20, indent: 0, lineGap: 1 });
      });
      doc.moveDown(0.3);

      const answerText = (q.options || [])[q.correct] != null ? q.options[q.correct] : '';
      doc.font('Helvetica-Bold').fontSize(9).fillColor('#0a5f0a').text(`Answer: ${opts[q.correct] || q.correct + 1}. ${answerText}`, { width: contentWidth });
      doc.fillColor('black');
      doc.font('Helvetica').fontSize(8).fillColor('#333333').text(q.explanation || '', { width: contentWidth, lineGap: 1 });
      doc.fillColor('black');

      doc.moveDown(questionGap);
      if (i < sectionQuestions.length - 1) {
        doc.fontSize(8).fillColor('#cccccc').text('-'.repeat(70), { width: contentWidth });
        doc.fillColor('black').moveDown(0.4);
      }
    });
  });

  doc.end();
  write.on('finish', () => console.log(`Created: ${outPath}`));
}

generatePdf();
