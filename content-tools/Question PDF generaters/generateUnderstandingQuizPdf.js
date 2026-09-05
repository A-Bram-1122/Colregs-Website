/**
 * Answer-key PDF for the Rules Understanding Quiz (same bank as the site).
 * Output: content-tools/PDF reference Documents/Understanding_Quiz_Bank.pdf
 * Run: npm run build:understanding-pdf
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { once } = require('events');
const PDFDocument = require('pdfkit');
const {
    understandingQuestions,
    expandUnderstandingQuizExplanation,
    COLREGS_EXPLANATION_RULE_BLURBS
} = require('../../scripts/data/understanding-quiz-data.js');

function stripHtmlTags(html) {
    return String(html)
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function extractRuleRefsFromText(text) {
    const s = String(text || '');
    const found = [];
    const seen = new Set();
    let m;
    const reParen = /\(\s*R\.?\s*(\d+)\s*([a-z])?\s*(?:,\s*[^)]+)?\s*\)/gi;
    while ((m = reParen.exec(s)) !== null) {
        const label = m[2] ? `Rule ${m[1]}(${m[2].toLowerCase()})` : `Rule ${m[1]}`;
        if (!seen.has(label)) {
            seen.add(label);
            found.push(label);
        }
    }
    const reRule = /\bRule\s+(\d+)(?:\(([a-z])\))?/gi;
    while ((m = reRule.exec(s)) !== null) {
        const label = m[2] ? `Rule ${m[1]}(${m[2].toLowerCase()})` : `Rule ${m[1]}`;
        if (!seen.has(label)) {
            seen.add(label);
            found.push(label);
        }
    }
    const annex = s.match(/\bAnnex\s+[IVXLC]+/gi);
    if (annex) {
        for (const a of annex) {
            const ax = a.replace(/\s+/g, ' ');
            if (!seen.has(ax)) {
                seen.add(ax);
                found.push(ax);
            }
        }
    }
    const rePer = /\b(?:per|under)\s+R\.?\s*(\d+)/gi;
    while ((m = rePer.exec(s)) !== null) {
        const label = `Rule ${m[1]}`;
        if (!seen.has(label)) {
            seen.add(label);
            found.push(label);
        }
    }
    return found;
}

function listRuleRefsForPdfQuestion(q) {
    let refs = extractRuleRefsFromText(q.question);
    if (!refs.length) refs = extractRuleRefsFromText([q.question, ...(q.options || [])].join(' '));
    if (!refs.length) refs = inferRulesFromKeywordsPdf(q);
    return refs;
}

function inferRulesFromKeywordsPdf(q) {
    const t = [q.question, ...(q.options || [])].join(' ').toLowerCase();
    const hits = [];
    const add = (rule) => {
        if (!hits.includes(rule)) hits.push(rule);
    };
    if (/fishing|trawling|nets|long line|two cones|apexes together/i.test(t)) add('Rule 26');
    if (/under sail|sailing vessel|propelled by machinery|black cone|apex down|vessel under sail/i.test(t)) add('Rule 25');
    if (/constrained by draught|\bcbd\b|cylinder day|three\s+all-?round\s+red/i.test(t)) add('Rule 28');
    if (/not under command|\bnuc\b|two\s+all-?round\s+red(?!.*three)/i.test(t)) add('Rule 27');
    if (/restricted in ability|\bram\b|mine clearance|diving operations|underwater operations/i.test(t)) add('Rule 27');
    if (/restricted visibility|thick fog|in fog|radar.*vessel\s+forward/i.test(t)) add('Rule 19');
    if (/narrow channel|fairway|impede|cannot navigate only within/i.test(t)) add('Rule 9');
    if (/overtaking|22\.5|abaft the beam|astern/i.test(t)) add('Rule 13');
    if (/head-?on|meeting.*power/i.test(t)) add('Rule 14');
    if (/crossing(?!.*channel)|on your starboard side.*give way/i.test(t)) add('Rule 15');
    if (/stand-?on|give-?way|appropriate action|rule\s*17/i.test(t)) add('Rule 17');
    if (/early and substantial|keep well clear/i.test(t)) add('Rule 16');
    if (/traffic separation|TSS|traffic lane/i.test(t)) add('Rule 10');
    if (/look-?out|lookout/i.test(t)) add('Rule 5');
    if (/safe speed/i.test(t)) add('Rule 6');
    if (/risk of collision|compass bearing|scanty radar/i.test(t)) add('Rule 7');
    if (/positive.*action|avoid.*succession.*small alterations/i.test(t)) add('Rule 8');
    if (/one short blast|five short|prolonged blast|manoeuvring and warning|rule\s*34/i.test(t)) add('Rule 34');
    if (/fog signal|sound signal.*restricted visibility|rule\s*35/i.test(t)) add('Rule 35');
    if (/navigation lights|sunset|sunrise|carry.*lights|rule\s*20/i.test(t)) add('Rule 20');
    if (/tow|towing|towline|pushing/i.test(t)) add('Rule 24');
    if (/pilot vessel|pilotage duty/i.test(t)) add('Rule 29');
    if (/local rules|harbour master|special rules|rule\s*1\b/i.test(t)) add('Rule 1');
    if (/hierarchy|keep out of the way.*(sailing|fishing|ram)|rule\s*18/i.test(t)) add('Rule 18');
    if (/escape clause|good seamanship|rule\s*2/i.test(t)) add('Rule 2');
    return hits.slice(0, 4);
}

function blurbLookupKeyPdf(label) {
    if (!label) return null;
    if (/^Annex\s+/i.test(String(label))) return label.replace(/\s+/g, ' ');
    const m = String(label).match(/^Rule\s+(\d+)/i);
    return m ? `Rule ${m[1]}` : null;
}

function firstBlurbForRefsPdf(refs, blurbs) {
    const tryRefs = refs.length ? refs : ['Rule 2'];
    for (const lb of tryRefs) {
        const k = blurbLookupKeyPdf(lb);
        if (k && blurbs[k]) return { sectionKey: lb, blurbKey: k, text: blurbs[k] };
    }
    if (blurbs['Rule 2']) return { sectionKey: 'Rule 2', blurbKey: 'Rule 2', text: blurbs['Rule 2'] };
    return { sectionKey: '', blurbKey: '', text: '' };
}

function stripLeadingRuleLabelPdf(blurb) {
    return String(blurb || '').replace(/^Rule\s+\d+(?:\([^)]*\))?\s*:\s*/i, '').trim();
}

function shortenTextPdf(s, max) {
    if (!s) return '';
    const t = s.trim();
    if (t.length <= max) return t;
    return `${t.slice(0, max - 1).trim()}…`;
}

function formatRuleSectionLinePdf(refs) {
    if (!refs.length) return 'COLREGs (general)';
    if (refs.length === 1) return refs[0];
    if (refs.length === 2) return `${refs[0]}; ${refs[1]}`;
    return `${refs[0]}; ${refs[1]}; …`;
}

function buildPdfOptionRationales(q) {
    const blurbs = COLREGS_EXPLANATION_RULE_BLURBS || {};
    const refs = listRuleRefsForPdfQuestion(q);
    const sectionLine = formatRuleSectionLinePdf(refs);
    const { sectionKey, blurbKey, text } = firstBlurbForRefsPdf(refs, blurbs);
    const why = shortenTextPdf(stripLeadingRuleLabelPdf(text), 280);
    const cite = sectionKey || blurbKey || 'the cited Rule';
    const c = q.correct;
    const opts = q.options || [];
    return opts.map((_, i) => {
        if (i === c) {
            if (why) {
                return `${sectionLine} — Correct. ${why} (See COLREGs ${blurbKey || cite} for the full rule text.)`;
            }
            return `${sectionLine} — Correct: this matches the requirement in ${cite}.`;
        }
        if (why) {
            return `${sectionLine} — Not correct. ${why} This option does not match that part of the Rule.`;
        }
        return `${sectionLine} — Not correct: does not match the requirement in ${cite}.`;
    });
}

async function generatePdf() {
    const outDir = path.join(__dirname, '..', 'PDF reference Documents');
    const outPath = path.join(outDir, 'Understanding_Quiz_Bank.pdf');

    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const margin = 40;
    const pageWidth = 595;
    const pageHeight = 842;
    const contentWidth = pageWidth - 2 * margin;

    const doc = new PDFDocument({ margin, size: 'A4' });
    const write = fs.createWriteStream(outPath);
    doc.pipe(write);

    doc.fontSize(20).font('Helvetica-Bold').text('Understanding Quiz — Answer Key', { align: 'center', width: contentWidth });
    doc.moveDown(0.5);
    doc.fontSize(10).font('Helvetica').fillColor('#555555').text(
        'Question, four options (correct marked), rationales cite COLREGs rule numbers and summarise the rule text.',
        { align: 'center', width: contentWidth }
    );
    doc.fillColor('black').moveDown(1);

    const list = Array.isArray(understandingQuestions) ? understandingQuestions : [];

    list.forEach((q, qIdx) => {
        if (doc.y > pageHeight - 120) doc.addPage();

        const label = q.id ? `${q.id}` : `Q${qIdx + 1}`;
        doc.fontSize(9).fillColor('#888888').text(label, { width: contentWidth });
        doc.moveDown(0.2);

        doc.font('Helvetica-Bold').fontSize(11).text(q.question || '', { width: contentWidth, lineGap: 2 });
        doc.moveDown(0.4);

        const opts = q.options || [];
        const rats = buildPdfOptionRationales(q);
        opts.forEach((opt, j) => {
            const isCorrect = q.correct === j;
            const prefix = isCorrect ? '[✓] ' : '[ ] ';
            doc.font('Helvetica').fontSize(10);
            if (isCorrect) doc.fillColor('#0a6b0a');
            doc.text(prefix + String(opt), { width: contentWidth, indent: 10, lineGap: 2 });
            doc.fillColor('black');
            if (rats[j] != null && String(rats[j]).trim() !== '') {
                doc.font('Helvetica-Oblique').fontSize(8).fillColor('#555555').text(
                    '    → ' + stripHtmlTags(String(rats[j])),
                    { width: contentWidth, indent: 14, lineGap: 1.5 }
                );
                doc.fillColor('black');
            }
        });

        doc.moveDown(0.3);
        const explRaw = String(q.explanation || '').trim();
        const explGeneric =
            /^See the cited COLREGs/i.test(explRaw) || /^Summary Total/i.test(explRaw);
        if (explRaw && !explGeneric) {
            doc.font('Helvetica-Bold').fontSize(9).text('Note:', { continued: false });
            const explHtml = expandUnderstandingQuizExplanation(q.explanation, q);
            const explText = stripHtmlTags(explHtml);
            doc.font('Helvetica').fontSize(9).fillColor('#333333').text(' ' + explText, {
                width: contentWidth,
                lineGap: 1.5
            });
            doc.fillColor('black');
        }
        doc.moveDown(0.8);
        if (qIdx < list.length - 1) {
            doc.moveTo(margin, doc.y).lineTo(margin + contentWidth, doc.y).strokeColor('#e5e5e5').lineWidth(0.5).stroke();
            doc.strokeColor('black').lineWidth(1);
            doc.moveDown(0.5);
        }
    });

    doc.addPage();
    doc.fontSize(11).font('Helvetica-Bold').text('Summary', { width: contentWidth });
    doc.font('Helvetica').fontSize(10).fillColor('#555555').text(`Total questions: ${list.length}`, { width: contentWidth });
    doc.fillColor('black');

    doc.end();
    await once(write, 'finish');
    console.log(`Created: ${outPath} (${list.length} questions)`);
}

generatePdf().catch((err) => {
    console.error(err);
    process.exit(1);
});
