/**
 * Reads the Understand-quiz Word file and replaces only the GENERATED block in understanding-quiz-data.js.
 * Supports Fleet-style HTML: <p><strong>1. …</strong></p><ol><li>…</li></ol> with bold marking the correct option.
 *
 * Usage: npm run import-understanding
 *        node content-tools/tools/import-understanding-docx.js [path/to/file.docx]
 */
'use strict';

const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const DEFAULT_DOCX = path.join(
    __dirname,
    '../Rules of the Road Exams/Understand Quiz Questions/ROR Understand quiz question.docx'
);
const DATA_FILE = path.join(__dirname, '../../scripts/data/understanding-quiz-data.js');

function stripHtml(html) {
    return html
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function hasBold(html) {
    return /<strong\b/i.test(html) || /<b\b/i.test(html);
}

/**
 * Fleet / Word: question in <p> before <ol>, four <li> options, bold = correct.
 */
function parseOlBlocks(html) {
    const questions = [];
    const re = /([\s\S]*?)<ol[^>]*>([\s\S]*?)<\/ol>/gi;
    let m;
    while ((m = re.exec(html)) !== null) {
        const beforeOl = m[1];
        const listInner = m[2];
        const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
        const options = [];
        let correct = -1;
        let idx = 0;
        let lm;
        while ((lm = liRe.exec(listInner)) !== null) {
            const inner = lm[1];
            const text = stripHtml(inner);
            if (!text) continue;
            options.push(text);
            if (hasBold(inner)) correct = idx;
            idx++;
        }
        if (options.length !== 4) continue;
        if (correct < 0) correct = 0;

        let stem = stripHtml(beforeOl);
        stem = stem.replace(/^\d+[a-z]?\.\s*/i, '').trim();

        questions.push({
            id: `understand-doc-${String(questions.length + 1).padStart(3, '0')}`,
            question: stem,
            options,
            correct,
            explanation: '',
            source: 'ROR Understand quiz question.docx'
        });
    }
    return questions;
}

/**
 * Simple mode: paragraphs — stem, 4 option lines, optional explanation (bold correct in one option line).
 */
function parseParagraphMode(html) {
    const paras = [];
    const re = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = re.exec(html)) !== null) {
        const inner = m[1].trim();
        if (!inner || inner === '&nbsp;') continue;
        paras.push({ html: inner, text: stripHtml(inner), bold: hasBold(inner) });
    }

    const out = [];
    let i = 0;
    while (i < paras.length) {
        const stemPara = paras[i++];
        if (!stemPara) break;
        const stem = stemPara.text.replace(/^\d+[\).\s]+/, '').trim();
        const options = [];
        let correct = -1;
        let optCount = 0;
        while (i < paras.length && optCount < 4) {
            const p = paras[i];
            const optText = p.text.replace(/^[A-Da-d][\).\s]+/, '').trim();
            options.push(optText);
            if (p.bold) correct = options.length - 1;
            i++;
            optCount++;
        }
        if (options.length !== 4) break;
        if (correct < 0) break;

        let explanation = '';
        if (i < paras.length) {
            explanation = paras[i].text;
            i++;
        }
        out.push({
            id: `understand-doc-${String(out.length + 1).padStart(3, '0')}`,
            question: stem,
            options,
            correct,
            explanation,
            source: 'ROR Understand quiz question.docx'
        });
    }
    return out;
}

function replaceGeneratedBlock(dataFileContent, questionsJson) {
    const startMarker = '// BEGIN GENERATED DOC QUESTIONS';
    const endMarker = '// END GENERATED DOC QUESTIONS';
    const startIdx = dataFileContent.indexOf(startMarker);
    const endIdx = dataFileContent.indexOf(endMarker);
    if (startIdx === -1 || endIdx === -1) {
        throw new Error(`Missing markers: ${startMarker} / ${endMarker}`);
    }
    const before = dataFileContent.slice(0, startIdx);
    const after = dataFileContent.slice(endIdx);
    const middle = `${startMarker}\nconst understandingQuizFromDoc = ${questionsJson};\n`;
    return before + middle + after;
}

async function main() {
    const docxPath = path.resolve(process.argv[2] || DEFAULT_DOCX);
    if (!fs.existsSync(docxPath)) {
        console.error('Docx not found:', docxPath);
        process.exit(1);
    }
    if (!fs.existsSync(DATA_FILE)) {
        console.error('Data file not found:', DATA_FILE);
        process.exit(1);
    }

    const { value: html } = await mammoth.convertToHtml({ path: docxPath });
    let questions = parseOlBlocks(html);
    if (questions.length === 0) {
        questions = parseParagraphMode(html);
    }
    if (questions.length === 0) {
        console.error('No questions parsed. Check Word export / HTML structure.');
        console.error('HTML excerpt (first 3000 chars):\n', html.slice(0, 3000));
        process.exit(1);
    }

    const questionsJson = JSON.stringify(questions, null, 4);
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const next = replaceGeneratedBlock(data, questionsJson);
    fs.writeFileSync(DATA_FILE, next, 'utf8');
    console.log('Updated', DATA_FILE, 'with', questions.length, 'doc-sourced questions.');
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
