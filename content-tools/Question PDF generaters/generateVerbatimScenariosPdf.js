/**
 * Generates a PDF of all verbatim quiz exam scenarios for review.
 * Uses examScenarios (Fleet ROR / FOST style: scenario block + numbered questions).
 * Output: content-tools/PDF reference Documents/Verbatim_Exam_Scenarios.pdf
 * Run: node "content-tools/Question PDF generaters/generateVerbatimScenariosPdf.js"
 */
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const { examScenarios } = require('../../scripts/verbatimScenarioData.js');

function formatRuleRef(ref) {
    return ref ? ref.replace(/,/g, ', ') : '';
}

function generatePdf() {
    const outDir = path.join(__dirname, '..', 'PDF reference Documents');
    const outPath = path.join(outDir, 'Verbatim_Exam_Scenarios.pdf');

    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const margin = 40;
    const pageWidth = 595;
    const pageHeight = 842;
    const contentWidth = pageWidth - 2 * margin;

    const doc = new PDFDocument({ margin, size: 'A4' });
    const write = fs.createWriteStream(outPath);
    doc.pipe(write);

    doc.fontSize(22).font('Helvetica-Bold').text('Verbatim Quiz - Exam Mode Scenarios', { align: 'center', width: contentWidth });
    doc.moveDown(0.4);
    doc.fontSize(11).font('Helvetica').fillColor('#555555').text('Fleet ROR / FOST exam format', { align: 'center', width: contentWidth });
    doc.moveDown(0.6);
    doc.fontSize(9).fillColor('#666666').text(
        'Scenario paragraph with numbered questions. Rule refs shown in brackets.',
        { align: 'center', width: contentWidth }
    );
    doc.fillColor('black').moveDown(1.2);

    let totalQuestions = 0;

    examScenarios.forEach((block, blockIdx) => {
        const needNewPage = blockIdx > 0 || doc.y > pageHeight - 200;
        if (needNewPage) doc.addPage();

        const blockLabel = `Scenario ${blockIdx + 1} of ${examScenarios.length}`;
        doc.fontSize(8).fillColor('#888888').text(blockLabel, { width: contentWidth });
        doc.moveDown(0.3);

        doc.fontSize(14).font('Helvetica-Bold').fillColor('#1a1a1a').text(block.source, { width: contentWidth });
        doc.moveDown(0.5);

        const scenarioY = doc.y;
        doc.rect(margin, scenarioY, contentWidth, 1).fill('#e8e8e8');
        doc.moveDown(0.4);
        doc.font('Helvetica').fontSize(10).fillColor('#333333').text(block.scenario, {
            width: contentWidth,
            lineGap: 2,
            paragraphGap: 4
        });
        doc.fillColor('black').moveDown(0.8);

        (block.questions || []).forEach((q) => {
            totalQuestions++;
            const needPage = doc.y > pageHeight - 100;
            if (totalQuestions > 1 && needPage) doc.addPage();

            const displayNum = totalQuestions;
            const origNum = q.originalNumber != null ? ` (exam Q${q.originalNumber})` : '';
            const ruleSuffix = q.ruleRef ? ` [${formatRuleRef(q.ruleRef)}]` : '';

            doc.fontSize(10).font('Helvetica-Bold').fillColor('#1a1a1a').text(`Q${displayNum}${origNum}.`, { continued: true });
            doc.font('Helvetica').fontSize(10).text(` ${(q.text || '')}${ruleSuffix}`, { width: contentWidth });
            doc.fillColor('black');

            if (q.subParts && q.subParts.length) {
                doc.moveDown(0.3);
                q.subParts.forEach((sp) => {
                    const spRule = sp.ruleRef ? ` [${formatRuleRef(sp.ruleRef)}]` : '';
                    doc.font('Helvetica').fontSize(9).fillColor('#444444').text(`  (${sp.letter}) ${sp.text}${spRule}`, {
                        width: contentWidth - 20,
                        indent: 15,
                        lineGap: 1.5
                    });
                });
                doc.fillColor('black');
            }
            doc.moveDown(0.6);
        });

        doc.moveDown(0.4);
        doc.rect(margin, doc.y, contentWidth, 1).fill('#e0e0e0');
        doc.moveDown(0.6);
    });

    doc.addPage();
    doc.fontSize(12).font('Helvetica-Bold').text('Summary', { width: contentWidth });
    doc.moveDown(0.5);
    doc.font('Helvetica').fontSize(10).fillColor('#555555').text(
        `Total scenarios: ${examScenarios.length}  |  Total questions: ${totalQuestions}`,
        { width: contentWidth }
    );
    doc.fillColor('black');

    doc.end();
    write.on('finish', () => console.log(`Created: ${outPath} (${examScenarios.length} blocks, ${totalQuestions} questions)`));
}

generatePdf();
