let currentMode = null;
let currentDifficulty = null;
let currentRule = null;
let currentSection = null;
let currentSectionIndex = 0;
let currentSegments = [];
let currentSegmentIndex = 0;
let completedSections = new Set();
let examQuestions = [];
let examBlock = null;
let currentExamQuestion = 0;
let examAnswers = [];
// Exam scenario: steps = flattened (item, segment) pairs; currentExamStepIndex = which step we're on
let examQuestionSteps = [];
let currentExamStepIndex = 0;
let attemptNumber = 1;
let examStartTime = null;
// Practice mode: store user-typed values per segment; key = "rule-section-segment"
let practiceSegmentAnswersBySection = {};
// Practice: if true, Next advances instead of checking (second click moves on)
let hasCheckedCurrentSegment = false;
// Indices of words that were blanks in current segment (for reconstruction)
let currentSegmentBlankIndices = [];

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Arrow key navigation and Escape when in input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        // Allow arrow keys for navigation between inputs
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const inputs = Array.from(document.querySelectorAll('#textDisplay input:not([disabled])'));
            const currentIndex = inputs.indexOf(e.target);
            
            if (e.key === 'ArrowRight' && currentIndex < inputs.length - 1) {
                e.preventDefault();
                inputs[currentIndex + 1].focus();
                inputs[currentIndex + 1].select();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                e.preventDefault();
                inputs[currentIndex - 1].focus();
                inputs[currentIndex - 1].select();
            }
        }
        // Escape key to clear current input
        if (e.key === 'Escape') {
            e.target.value = '';
            e.target.classList.remove('correct', 'incorrect');
        }
        // Space key: same as Tab - move to next input (or Next button if last)
        if (e.key === ' ') {
            e.preventDefault();
            const inputs = Array.from(document.querySelectorAll('#textDisplay input:not([disabled])'));
            const currentIndex = inputs.indexOf(e.target);
            if (currentIndex < inputs.length - 1) {
                inputs[currentIndex + 1].focus();
                inputs[currentIndex + 1].select();
            } else {
                document.getElementById('nextQuestion')?.focus();
            }
        }
        return;
    }
    
    // Ctrl+B or [ to toggle sidebar
    if ((e.ctrlKey && e.key === 'b') || e.key === '[') {
        e.preventDefault();
        const collapseBtn = document.getElementById('collapseSidebar');
        if (collapseBtn) {
            collapseBtn.click();
        }
        return;
    }
    
    const quizArea = document.getElementById('quizArea');
    if (quizArea && !quizArea.classList.contains('hidden')) {
        switch(e.key.toLowerCase()) {
            case ' ':
            case 'c':
                e.preventDefault();
                document.getElementById('nextQuestion')?.click();
                break;
            case 'n':
                e.preventDefault();
                document.getElementById('nextQuestion')?.click();
                break;
            case 'p':
                e.preventDefault();
                document.getElementById('prevQuestion')?.click();
                break;
            case 'r':
                e.preventDefault();
                document.getElementById('tryAgain')?.click();
                break;
            case 'a':
                e.preventDefault();
                document.getElementById('showAnswer')?.click();
                break;
        }
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadRulesSidebar();
    setupEventListeners();
});

// Progress bar: SVG rect width only (strict `style-src 'self'`).
function verbatimProgressSvgMarkup(percent, tone) {
    const w = Math.min(100, Math.max(0, Math.round(Number(percent) || 0)));
    const fillClass = tone === 'success' ? 'verbatim-progress-fill--success' : 'verbatim-progress-fill--error';
    return `<div class="verbatim-progress-wrap" role="presentation"><svg class="verbatim-progress-svg" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true"><rect class="verbatim-progress-fill ${fillClass}" x="0" y="0" width="${w}" height="8" rx="1"/></svg></div>`;
}

// Load rules into sidebar
function loadRulesSidebar() {
    const rulesList = document.getElementById('rulesList');
    
    if (!rulesList) {
        console.error('Error: rulesList element not found');
        return;
    }
    
    if (typeof colregsRules === 'undefined' || !Array.isArray(colregsRules)) {
        console.error('Error: colregsRules not loaded or invalid');
        rulesList.innerHTML = '<li class="error-message verbatim-sidebar-error">Failed to load COLREGS data. Please refresh the page.</li>';
        return;
    }
    
    const randomItem = document.createElement('li');
    randomItem.className = 'rule-item';
    randomItem.innerHTML = `
        <button class="rule-button random-rule-btn btn btn-primary" data-rule="random">
            <span class="rule-number" data-num="R"></span>
            <span class="rule-name">Random Section</span>
        </button>
    `;
    rulesList.appendChild(randomItem);
    
    const practiceRuleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 34, 35];
    for (const num of practiceRuleNumbers) {
        const rule = colregsRules.find(r => r.number === num);
        if (rule) {
            const li = document.createElement('li');
            li.className = 'rule-item';
            li.innerHTML = `
                <button class="rule-button" data-rule="${rule.number}">
                    <span class="rule-number" data-num="${rule.number}">Rule ${rule.number}</span>
                    <span class="rule-name">${rule.name}</span>
                </button>
            `;
            rulesList.appendChild(li);
        }
    }
    if (typeof colregsAnnexes !== 'undefined' && Array.isArray(colregsAnnexes)) {
        const annex4 = colregsAnnexes.find(a => a.id === 'annex-4');
        if (annex4) {
            const li = document.createElement('li');
            li.className = 'rule-item';
            li.innerHTML = `
                <button class="rule-button" data-rule="annex4">
                    <span class="rule-number" data-num="A IV">Annex IV</span>
                    <span class="rule-name">${annex4.name.replace('Annex IV - ', '')}</span>
                </button>
            `;
            rulesList.appendChild(li);
        }
    }

    document.querySelectorAll('.rule-button').forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentMode === 'practice') {
                const ruleNum = this.dataset.rule;
                selectRule(ruleNum);
            }
        });
    });
}

function setupEventListeners() {
    const collapseSidebar = document.getElementById('collapseSidebar');
    if (collapseSidebar) {
        collapseSidebar.addEventListener('click', function() {
            const sidebar = document.getElementById('rulesSidebar');
            const quizLayout = document.querySelector('.quiz-layout');
            const collapseBtn = this;
            if (!sidebar || !quizLayout) return;

            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                quizLayout.classList.remove('sidebar-collapsed');
                collapseBtn.setAttribute('aria-expanded', 'true');
                collapseBtn.setAttribute('aria-label', 'Collapse sidebar');
            } else {
                sidebar.classList.add('collapsed');
                quizLayout.classList.add('sidebar-collapsed');
                collapseBtn.setAttribute('aria-expanded', 'false');
                collapseBtn.setAttribute('aria-label', 'Expand sidebar');
            }
        });
    }

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentMode = this.dataset.mode;
            if (currentMode === 'practice') {
                showDifficultySelector();
            } else {
                startExamMode();
            }
        });
    });
    
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentDifficulty = this.dataset.level;
            // Auto-start on Rule 1 instead of showing rule selection
            selectRule('1');
        });
    });
    
    const backToMode = document.getElementById('backToMode');
    if (backToMode) backToMode.addEventListener('click', () => {
        document.getElementById('difficultySelector')?.classList.add('hidden');
        document.getElementById('modeSelector')?.classList.remove('hidden');
    });
    
    document.getElementById('checkAnswer')?.addEventListener('click', checkAnswer);
    document.getElementById('clearAnswer')?.addEventListener('click', clearAnswer);
    document.getElementById('prevQuestion')?.addEventListener('click', prevQuestion);
    document.getElementById('nextQuestion')?.addEventListener('click', nextQuestion);
    document.getElementById('tryAgain')?.addEventListener('click', tryAgain);
    document.getElementById('showAnswer')?.addEventListener('click', showAnswer);
    document.getElementById('exitQuiz')?.addEventListener('click', exitQuiz);
    document.getElementById('retakeExam')?.addEventListener('click', () => location.reload());
    document.getElementById('backToHome')?.addEventListener('click', () => location.reload());
}

function showDifficultySelector() {
    document.getElementById('modeSelector').classList.add('hidden');
    document.getElementById('difficultySelector').classList.remove('hidden');
}

const PRACTICE_SEQUENCE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 34, 35, 'annex4'];

function getNextPracticeRule(currentRule) {
    const currentKey = currentRule.isAnnex ? 'annex4' : currentRule.number;
    const idx = PRACTICE_SEQUENCE.indexOf(currentKey);
    if (idx < 0 || idx >= PRACTICE_SEQUENCE.length - 1) return null;
    return getPracticeRule(PRACTICE_SEQUENCE[idx + 1]);
}

function getPrevPracticeRule(currentRule) {
    const currentKey = currentRule.isAnnex ? 'annex4' : currentRule.number;
    const idx = PRACTICE_SEQUENCE.indexOf(currentKey);
    if (idx <= 0) return null;
    return getPracticeRule(PRACTICE_SEQUENCE[idx - 1]);
}

function isFirstPracticeRule(currentRule) {
    const currentKey = currentRule.isAnnex ? 'annex4' : currentRule.number;
    return PRACTICE_SEQUENCE.indexOf(currentKey) === 0;
}

function isLastPracticeRule(currentRule) {
    const currentKey = currentRule.isAnnex ? 'annex4' : currentRule.number;
    return PRACTICE_SEQUENCE.indexOf(currentKey) === PRACTICE_SEQUENCE.length - 1;
}

function getPracticeRule(ruleNum) {
    if (ruleNum === 'annex4' && typeof colregsAnnexes !== 'undefined' && Array.isArray(colregsAnnexes)) {
        const annex = colregsAnnexes.find(a => a.id === 'annex-4');
        if (annex && annex.verbatim && annex.verbatim.length > 0) {
            return {
                number: 'annex4',
                isAnnex: true,
                annexNumber: 'IV',
                name: annex.name,
                verbatim: annex.verbatim
            };
        }
    }
    const num = typeof ruleNum === 'string' ? parseInt(ruleNum, 10) : ruleNum;
    if (!isNaN(num)) {
        return colregsRules.find(r => r.number === num);
    }
    return null;
}

function selectRule(ruleNum) {
    // Check if mode and difficulty have been selected first
    if (!currentMode || !currentDifficulty) {
        alert('Please select a quiz mode and difficulty level first!');
        return;
    }
    
    // Hide mode selector and difficulty selector when starting
    document.getElementById('modeSelector').classList.add('hidden');
    document.getElementById('difficultySelector').classList.add('hidden');
    
    if (ruleNum === 'random') {
        const practiceItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 34, 35, 'annex4'];
        const pick = practiceItems[Math.floor(Math.random() * practiceItems.length)];
        currentRule = getPracticeRule(pick);
        if (!currentRule || !currentRule.verbatim || currentRule.verbatim.length === 0) {
            alert('Error: Unable to load rule data. Please refresh the page.');
            return;
        }
        const randomSectionIndex = Math.floor(Math.random() * currentRule.verbatim.length);
        currentSectionIndex = randomSectionIndex;
        currentSection = currentRule.verbatim[randomSectionIndex];
        currentRule.isRandomMode = true;
    } else {
        currentRule = getPracticeRule(ruleNum);
        if (!currentRule || !currentRule.verbatim || currentRule.verbatim.length === 0) {
            alert('Error: Unable to load rule data. Please refresh the page.');
            return;
        }
        currentSectionIndex = 0;
        currentSection = currentRule.verbatim[0];
        currentRule.isRandomMode = false;
    }
    
    completedSections.clear();
    
    startPracticeQuiz();
}

function startPracticeQuiz() {
    document.getElementById('quizArea').classList.remove('hidden');
    document.getElementById('quizTitle').textContent = `Practice - ${currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)}`;
    
    // In practice mode: hide Check (Next = Check), show Clear
    document.getElementById('checkAnswer')?.classList.add('hidden');
    document.getElementById('clearAnswer')?.classList.remove('hidden');
    
    // Load section and keep original formatting (don't strip anything)
    currentSection = currentRule.verbatim[currentSectionIndex];
    initSegmentsForCurrentSection();
    
    document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(currentRule, currentRule.verbatim[currentSectionIndex]);
    
    attemptNumber = 1;
    hasCheckedCurrentSegment = false;
    displayTextWithBlanks();
}

function startExamMode() {
    currentMode = 'exam';
    const result = generateExamQuestions();
    if (result.block) {
        examBlock = result.block;
        examQuestions = result.block.questions;
    } else {
        examBlock = null;
        examQuestions = result.questions || [];
    }

    examQuestions = examQuestions.filter(questionHasVerbatimSteps);

    if (examQuestions.length === 0) {
        alert('Error: Unable to generate exam questions. Please refresh the page.');
        location.reload();
        return;
    }

    currentExamQuestion = 0;
    currentExamStepIndex = 0;
    examAnswers = [];
    examStartTime = Date.now();
    
    // Hide sidebar for exam mode
    const sidebar = document.getElementById('rulesSidebar');
    if (sidebar) {
        sidebar.classList.add('hidden');
    }
    
    // Add exam-mode class to quiz layout for centered, full-width display
    const quizLayout = document.querySelector('.quiz-layout');
    if (quizLayout) {
        quizLayout.classList.add('exam-mode');
    }
    
    document.getElementById('modeSelector').classList.add('hidden');
    document.getElementById('quizArea').classList.remove('hidden');
    document.getElementById('quizTitle').textContent = 'Exam Mode';
    
    loadExamQuestion();
}

function generateExamQuestions() {
    const scenarios = typeof window !== 'undefined' && window.examScenarios;
    if (Array.isArray(scenarios) && scenarios.length > 0) {
        const block = scenarios[Math.floor(Math.random() * scenarios.length)];
        if (block && block.questions && block.questions.length > 0) {
            return { block, questions: block.questions };
        }
    }
    return { block: null, questions: [] };
}

/**
 * Parse a rule reference string (e.g. "r1e", "R4", "R. 9a", "R8fiii", "R10k/l") into { number, section, roman }.
 * Supports: R4, R9c, R8fiii (section + roman numeral), R10k/l (composite - uses first).
 * @param {string} ref - Rule ref such as "r1e", "r4", "R. 9c", "R8fiii", "R10di", "R10k/l"
 * @returns {{ number: number, section: string, roman: string }|null} Parsed rule number, section letter, and optional roman numeral, or null if invalid
 */
function parseRuleRef(ref) {
    if (!ref || typeof ref !== 'string') return null;
    let normalized = ref.trim().toLowerCase().replace(/^r\.?\s*/, '');
    // Normalize "R8f, iii" -> "r8fiii" (collapse spaces/commas within ref)
    normalized = normalized.replace(/[\s,]+/g, '');
    // 1b: Composite refs (R10k/l, R14a & R34a, R9b,R9c,R9d) - use first part only
    const compositeMatch = normalized.match(/[\/&,]/);
    if (compositeMatch) {
        normalized = normalized.split(/[\/&,]/)[0].trim();
    }
    // 1a: Match number + optional section (a-l) + optional roman numeral (i, ii, iii, iv, v, vi, etc.)
    const match = normalized.match(/^(\d+)([a-l])?([ivxlcdm]+)?$/);
    if (!match) return null;
    const number = parseInt(match[1], 10);
    const section = match[2] || '';
    const roman = match[3] || '';
    return { number, section, roman };
}

// Helper function to extract section letter or roman numeral from section text
function getSectionLabel(sectionText) {
    const trimmed = sectionText.trim();
    // Check for letter sections like "(a)" or "(b)"
    const letterMatch = trimmed.match(/^\(([a-z])\)/i);
    if (letterMatch) {
        return letterMatch[1];
    }
    // Check for roman numeral sections like "(i)" or "(ii)"
    const romanMatch = trimmed.match(/^\(([ivxlcdm]+)\)/i);
    if (romanMatch) {
        return `(${romanMatch[1]})`;
    }
    return '';
}

// Build display string: "Rule N - Name" or "Annex N - Name"
function buildRuleIdentifier(rule, sectionText) {
    const sectionLabel = getSectionLabel(sectionText || '');
    const prefix = rule.isAnnex ? `Annex ${rule.annexNumber}` : `Rule ${rule.number}`;
    let id = prefix;
    if (sectionLabel) {
        if (/^[a-z]$/i.test(sectionLabel)) {
            id += ` ${sectionLabel.toUpperCase()}`;
        } else {
            id += sectionLabel;
        }
    }
    return escapeHtml(`${id} - ${rule.name}`);
}

// Split a section into segments by roman numeral sub-paragraphs (e.g. \n(i), \n(ii))
function splitSectionIntoSegments(sectionText) {
    if (!sectionText || typeof sectionText !== 'string') {
        return [''];
    }
    const trimmed = sectionText.trim();
    if (!trimmed) {
        return [''];
    }
    const segments = trimmed.split(/\n(?=\([ivxlcdm]+\)\s)/i);
    if (segments.length === 1 && segments[0] === trimmed) {
        return [trimmed];
    }
    return segments.map(s => s.trim()).filter(s => s.length > 0);
}

function extractLeadingSegmentMarker(segmentText) {
    const raw = typeof segmentText === 'string' ? segmentText : '';
    const trimmedStart = raw.trimStart();
    if (!trimmedStart) {
        return { marker: '', token: '', content: raw, wordOffset: 0 };
    }

    const romanMatch = trimmedStart.match(/^\(([ivxlcdm]+)\)\s*/i);
    if (romanMatch) {
        const token = `(${romanMatch[1]})`;
        return {
            marker: romanMatch[1].toUpperCase(),
            token,
            content: trimmedStart.slice(romanMatch[0].length).trimStart(),
            wordOffset: 1
        };
    }

    const letterMatch = trimmedStart.match(/^\(([a-z])\)\s*/i);
    if (letterMatch) {
        const token = `(${letterMatch[1]})`;
        return {
            marker: letterMatch[1].toUpperCase(),
            token,
            content: trimmedStart.slice(letterMatch[0].length).trimStart(),
            wordOffset: 1
        };
    }

    return { marker: '', token: '', content: raw, wordOffset: 0 };
}

function formatSubsectionToken(marker) {
    const normalised = String(marker || '').trim().toLowerCase();
    if (!normalised) return '';
    if (/^[ivxlcdm]+$/i.test(normalised)) {
        return `${normalised})`;
    }
    return `${normalised.toUpperCase()})`;
}

function buildCompletedSubsectionTrail(parentMarker, completedMarkers) {
    const parentToken = formatSubsectionToken(parentMarker);
    const childTokens = (completedMarkers || [])
        .map(formatSubsectionToken)
        .filter(Boolean)
        .join('\n');
    if (parentToken && childTokens) return `${parentToken}\n${childTokens}`;
    if (parentToken) return parentToken;
    return childTokens;
}

/**
 * Look up verbatim text for a rule reference (e.g. "R9c", "R8fiii", "R10di", "Annex III", "R37/Annex IV", "ATP1E").
 * Uses colregsRules for rules; edgeRefTexts/colregsAnnexes for Annex III, IV, R37/Annex IV, ATP1E.
 * @param {string} ruleRef - Rule ref such as "R9c", "R8fiii", "R10k/l", "Annex III", "R37/Annex IV", "ATP1E"
 * @returns {string|null} Verbatim text for the rule/section/segment, or null if not found
 */
function getVerbatimTextForRuleRef(ruleRef) {
    if (!ruleRef || typeof ruleRef !== 'string') return null;

    if (typeof edgeRefTexts !== 'undefined') {
        const refNorm = ruleRef.trim().toLowerCase().replace(/[\s,]+/g, ' ');
        let edgeKey = null;
        if (refNorm === 'atp1e' || refNorm.includes('atp1e')) {
            edgeKey = 'atp1e';
        } else if (refNorm.includes('annex iii') || refNorm === 'annexiii') {
            edgeKey = 'annex iii';
        } else if (refNorm.includes('annex iv') || refNorm === 'annexiv') {
            edgeKey = 'annex iv';
        } else if ((refNorm.includes('r37') && refNorm.includes('annex')) || refNorm === 'r37/annex iv') {
            edgeKey = 'r37/annex iv';
        }
        if (edgeKey && edgeRefTexts[edgeKey] && Array.isArray(edgeRefTexts[edgeKey].verbatim) && edgeRefTexts[edgeKey].verbatim.length > 0) {
            return edgeRefTexts[edgeKey].verbatim[0];
        }
    }

    const parsed = parseRuleRef(ruleRef);
    if (!parsed || typeof colregsRules === 'undefined' || !Array.isArray(colregsRules)) return null;

    const rule = colregsRules.find(r => r.number === parsed.number);
    if (!rule || !rule.verbatim || !Array.isArray(rule.verbatim)) return null;

    let sectionText = null;
    if (parsed.section) {
        const sectionLetter = `(${parsed.section})`;
        sectionText = rule.verbatim.find(v => {
            const trimmed = (v || '').trim();
            return trimmed.toLowerCase().startsWith(sectionLetter) ||
                trimmed.toLowerCase().startsWith(sectionLetter + ' ');
        });
    } else {
        sectionText = rule.verbatim[0] || null;
    }

    if (!sectionText) return null;

    if (parsed.roman) {
        const segments = splitSectionIntoSegments(sectionText);
        const targetRoman = `(${parsed.roman})`.toLowerCase();
        const segment = segments.find(seg => {
            const trimmed = seg.trim().toLowerCase();
            if (trimmed.startsWith(targetRoman) || trimmed.startsWith(targetRoman + ' ')) {
                return true;
            }
            if (parsed.section) {
                const sectionPrefix = `(${parsed.section})`;
                if (trimmed.startsWith(sectionPrefix + ' ') && trimmed.includes(' ' + targetRoman) || trimmed.includes(' ' + targetRoman + ' ')) {
                    return true;
                }
            }
            return false;
        });
        return segment || null;
    }

    return sectionText;
}

function initSegmentsForCurrentSection() {
    currentSegments = splitSectionIntoSegments(currentSection || '');
    currentSegmentIndex = 0;
}

function practiceSegmentKey(ruleNum, sectionIdx, segmentIdx) {
    return `${ruleNum}-${sectionIdx}-${segmentIdx}`;
}

// Reconstruct segment text with user's typed values in place of blanks
function reconstructSegmentWithUserInput(segmentText, userAnswers, blankIndices) {
    if (!segmentText || !userAnswers || !blankIndices || blankIndices.length !== userAnswers.length) {
        return segmentText || '';
    }
    const words = segmentText.split(/\s+/);
    let blankIdx = 0;
    for (let i = 0; i < words.length && blankIdx < blankIndices.length; i++) {
        if (i === blankIndices[blankIdx]) {
            const word = words[i];
            const trailingPunct = (word.match(/([.,;:!?"'()[\]]*)$/) || ['', ''])[1];
            words[i] = (userAnswers[blankIdx].userInput || '') + trailingPunct;
            blankIdx++;
        }
    }
    return words.join(' ');
}

function populateCompletedSegmentsDisplay() {
    const el = document.getElementById('completedSegmentsDisplay');
    if (!el) return;
    if (currentSegments.length <= 1 || currentSegmentIndex === 0) {
        el.textContent = '';
        el.classList.add('hidden');
        return;
    }

    const lines = [];
    for (let i = 0; i < currentSegmentIndex; i++) {
        const saved = practiceSegmentAnswersBySection[
            practiceSegmentKey(currentRule.number, currentSectionIndex, i)
        ];
        if (!saved?.userAnswers) continue;
        const reconstructed = reconstructSegmentWithUserInput(
            currentSegments[i] || '',
            saved.userAnswers,
            saved.blankIndices
        );
        if (reconstructed.trim()) lines.push(reconstructed);
    }

    if (lines.length === 0) {
        el.textContent = '';
        el.classList.add('hidden');
        return;
    }
    el.textContent = lines.join('\n\n');
    el.classList.remove('hidden');
}

function loadExamQuestion() {
    loadExamQuestionScenarioFormat();
}

/**
 * Render verbatim text with inline blanks (exam style: no hints).
 * Appends to container, sets data-answer-key on each input, returns correctAnswers map.
 * @param {HTMLElement} container - Element to append to
 * @param {string} verbatimText - Full rule text
 * @param {string} keyPrefix - e.g. "2a" or "3" for answer keys
 * @returns {{ correctAnswers: Object }} Map of key -> correct word
 */
function renderVerbatimWithBlanks(container, verbatimText, keyPrefix, wordIndexOffset = 0) {
    const correctAnswers = {};
    const words = (verbatimText || '').split(/\s+/);
    const isRomanNumeral = (w) => /^\([ivxlcdm]+\)$/i.test((w || '').trim());

    words.forEach((word, index) => {
        const cleanWord = word.replace(/[.,;:!?"'\(\)\[\]]/g, '').toLowerCase();
        if (cleanWord.length === 0 || isRomanNumeral(word) || cleanWord.length < 2) {
            container.appendChild(document.createTextNode(word + ' '));
            return;
        }
        const key = `${keyPrefix}-${index + wordIndexOffset}`;
        const { container: wordContainer, input } = createBlankInput(cleanWord, word, false);
        input.dataset.answerKey = key;
        input.classList.add('exam-answer-input');
        correctAnswers[key] = cleanWord;
        container.appendChild(wordContainer);
        container.appendChild(document.createTextNode(' '));
    });

    return { correctAnswers };
}

function questionHasVerbatimSteps(question) {
    const items = question.subParts && question.subParts.length > 0 ? question.subParts : [{ ruleRef: question.ruleRef }];
    for (const item of items) {
        const ruleRef = item.ruleRef || question.ruleRef;
        if (ruleRef && getVerbatimTextForRuleRef(ruleRef)) return true;
    }
    return false;
}

/**
 * Build flattened steps for current exam question. Each step = one (item, segment) to display.
 * When verbatim has multiple roman-numeral segments, each becomes its own step.
 * Only includes steps with verbatim text; fallback questions are excluded.
 * @param {Object} question - The question object
 * @param {number} [questionIndex] - Optional index for key generation when displaying results
 */
function buildExamQuestionSteps(question, questionIndex) {
    const steps = [];
    const displayNum = questionIndex != null ? questionIndex + 1 : currentExamQuestion + 1;
    const keyBase = String(question.originalNumber != null ? question.originalNumber : displayNum);
    const items = question.subParts && question.subParts.length > 0
        ? question.subParts
        : [{ letter: '', text: question.text, ruleRef: question.ruleRef }];

    items.forEach((item) => {
        const ruleRef = item.ruleRef || question.ruleRef;
        const verbatimText = ruleRef ? getVerbatimTextForRuleRef(ruleRef) : null;
        const keyPrefix = item.letter ? `${keyBase}${item.letter}` : keyBase;

        if (verbatimText) {
            const segments = splitSectionIntoSegments(verbatimText);
            segments.forEach((segmentText, segIdx) => {
                steps.push({
                    item, ruleRef, keyPrefix: `${keyPrefix}-${segIdx}`,
                    segmentText, segmentIndex: segIdx, totalSegments: segments.length
                });
            });
        }
    });
    return steps;
}

function loadExamQuestionScenarioFormat() {
    const question = examQuestions[currentExamQuestion];
    const instruction = document.querySelector('.instruction');
    const completedSegmentsDisplay = document.getElementById('completedSegmentsDisplay');
    const textDisplay = document.getElementById('textDisplay');
    const currentRuleInfo = document.getElementById('currentRuleInfo');

    if (!question || !textDisplay) return;

    examQuestionSteps = buildExamQuestionSteps(question);
    if (currentExamStepIndex >= examQuestionSteps.length) {
        currentExamStepIndex = 0;
    }

    const step = examQuestionSteps[currentExamStepIndex];
    if (!step) {
        console.error('No exam step available for question');
        return;
    }

    if (currentRuleInfo) currentRuleInfo.innerHTML = `<strong>Question ${currentExamQuestion + 1} of ${examQuestions.length}</strong>`;
    if (instruction) instruction.classList.add('hidden');
    if (completedSegmentsDisplay) completedSegmentsDisplay.classList.add('hidden');

    textDisplay.innerHTML = '';

    if (examBlock?.scenario) {
        const scenarioDiv = document.createElement('div');
        scenarioDiv.className = 'scenario-block';
        scenarioDiv.innerHTML = escapeHtml(examBlock.scenario);
        textDisplay.appendChild(scenarioDiv);
    }

    const questionBlock = document.createElement('div');
    questionBlock.className = 'exam-question-block';

    const displayNum = currentExamQuestion + 1;
    const questionHeader = document.createElement('div');
    questionHeader.className = 'exam-question-number';
    const ruleRefSuffix = (step.ruleRef && !step.item?.letter) ? ` [${escapeHtml(step.ruleRef)}]` : '';
    questionHeader.innerHTML = `<span class="exam-question-num">${displayNum}.</span> ${escapeHtml(question.text || '')}${ruleRefSuffix}`;
    questionBlock.appendChild(questionHeader);

    const saved = examAnswers[currentExamQuestion];
    const savedStepAnswers = saved?.stepAnswers || {};

    if (examQuestionSteps.length > 0) {
        if (step.totalSegments > 1 && step.segmentIndex > 0) {
            const completedDiv = document.createElement('div');
            completedDiv.className = 'exam-completed-segments';
            const completedChildMarkers = [];
            const prevKeyBase = step.keyPrefix.replace(/-\d+$/, '');
            for (let i = 0; i < step.segmentIndex; i++) {
                const pk = `${prevKeyBase}-${i}`;
                const prevStep = examQuestionSteps.find(s => s.keyPrefix === pk);
                if (prevStep?.segmentText) {
                    const marker = extractLeadingSegmentMarker(prevStep.segmentText).marker;
                    if (/^[ivxlcdm]+$/i.test(marker)) {
                        completedChildMarkers.push(marker);
                    }
                }
            }
            let parentMarker = step.item?.letter || '';
            if (!parentMarker) {
                const firstStep = examQuestionSteps.find(s => s.keyPrefix === `${prevKeyBase}-0`);
                const firstMarker = extractLeadingSegmentMarker(firstStep?.segmentText || '').marker;
                if (/^[a-z]$/i.test(firstMarker)) {
                    parentMarker = firstMarker;
                }
            }
            if (!parentMarker && step.ruleRef) {
                const parsedRef = parseRuleRef(step.ruleRef);
                if (parsedRef?.section) {
                    parentMarker = parsedRef.section;
                }
            }
            completedDiv.textContent = buildCompletedSubsectionTrail(parentMarker, completedChildMarkers);
            questionBlock.appendChild(completedDiv);
        }

        const subBlock = document.createElement('div');
        subBlock.className = 'exam-fill-in-blank-block';
        if (step.item?.letter) {
            const label = document.createElement('div');
            label.className = 'exam-subpart-label';
            const romanNumerals = ['(i)', '(ii)', '(iii)', '(iv)', '(v)', '(vi)', '(vii)', '(viii)', '(ix)', '(x)'];
            const segLabel = step.totalSegments > 1 && romanNumerals[step.segmentIndex] ? ` ${romanNumerals[step.segmentIndex]}` : '';
            label.textContent = `${step.item.letter}.${segLabel}`.trim();
            subBlock.appendChild(label);
        }
        if (step.item?.text && step.item?.letter) {
            const subQuestionDiv = document.createElement('div');
            subQuestionDiv.className = 'exam-subpart-question';
            const subRuleRefSuffix = step.ruleRef ? ` [${escapeHtml(step.ruleRef)}]` : '';
            subQuestionDiv.innerHTML = escapeHtml(step.item.text) + subRuleRefSuffix;
            subBlock.appendChild(subQuestionDiv);
        }
        const markerInfo = extractLeadingSegmentMarker(step.segmentText);
        const renderText = step.item?.letter && markerInfo.wordOffset > 0 ? markerInfo.content : step.segmentText;
        const textContainer = document.createElement('div');
        textContainer.className = 'exam-verbatim-text';
        renderVerbatimWithBlanks(
            textContainer,
            renderText,
            step.keyPrefix,
            step.item?.letter ? markerInfo.wordOffset : 0
        );
        subBlock.appendChild(textContainer);
        questionBlock.appendChild(subBlock);

        const inputs = subBlock.querySelectorAll('.exam-answer-input');
        const stepSaved = savedStepAnswers[step.keyPrefix];
        if (stepSaved?.userAnswers && inputs.length > 0) {
            stepSaved.userAnswers.forEach((a, i) => {
                if (inputs[i]) inputs[i].value = a.userInput || '';
            });
        }
    }

    textDisplay.appendChild(questionBlock);

    const allInputs = textDisplay.querySelectorAll('.exam-answer-input');
    allInputs.forEach((inp) => {
        const key = inp.dataset.answerKey;
        if (key && saved?.answers && saved.answers[key] !== undefined) {
            inp.value = saved.answers[key];
        }
    });

    const checkAnswerBtn = document.getElementById('checkAnswer');
    const clearAnswerBtn = document.getElementById('clearAnswer');
    const secondaryControls = document.getElementById('secondaryControls');
    if (checkAnswerBtn) checkAnswerBtn.classList.add('hidden');
    if (clearAnswerBtn) clearAnswerBtn.classList.add('hidden');
    if (secondaryControls) secondaryControls.classList.add('hidden');

    const nextBtn = document.getElementById('nextQuestion');
    const isLastStepInQuestion = currentExamStepIndex === examQuestionSteps.length - 1;
    const isLastQuestion = currentExamQuestion === examQuestions.length - 1;
    if (nextBtn) {
        if (isLastStepInQuestion && isLastQuestion) {
            nextBtn.textContent = 'Submit Exam';
            nextBtn.classList.remove('btn-primary');
            nextBtn.classList.add('btn-success');
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.classList.remove('btn-success');
            nextBtn.classList.add('btn-primary');
        }
    }

    const firstInput = textDisplay.querySelector('.exam-answer-input');
    if (firstInput) firstInput.focus();

    textDisplay.querySelectorAll('.exam-answer-input').forEach((input, idx, list) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (idx < list.length - 1) {
                    list[idx + 1].focus();
                } else {
                    document.getElementById('nextQuestion')?.click();
                }
            }
        });
    });

    updatePrevButtonState();
}

function saveExamScenarioAnswers() {
    const inputs = document.querySelectorAll('#textDisplay .exam-answer-input');
    const answers = {};
    const correctAnswers = {};
    const question = examQuestions[currentExamQuestion];
    const step = examQuestionSteps[currentExamStepIndex];

    inputs.forEach((inp) => {
        const key = inp.dataset.answerKey;
        if (key) {
            answers[key] = inp.value.trim();
            const correct = inp.dataset.answer;
            if (correct !== undefined) {
                correctAnswers[key] = correct;
            }
        }
    });

    const existing = examAnswers[currentExamQuestion] || {};
    const mergedAnswers = Object.assign({}, existing.answers, answers);
    const mergedCorrectAnswers = Object.assign({}, existing.correctAnswers, correctAnswers);

    let stepAnswers = existing.stepAnswers || {};
    if (step && step.segmentText) {
        const userAnswers = Array.from(inputs).map(input => ({
            answer: input.dataset.answer,
            userInput: input.value.trim().toLowerCase().replace(/[.,;:!?"'\(\)\[\]]/g, '')
        }));
        const blankIndices = [];
        const words = (step.segmentText || '').split(/\s+/);
        const isRomanNumeral = (w) => /^\([ivxlcdm]+\)$/i.test((w || '').trim());
        words.forEach((word, idx) => {
            const cleanWord = word.replace(/[.,;:!?"'\(\)\[\]]/g, '').toLowerCase();
            if (cleanWord.length >= 2 && !isRomanNumeral(word)) blankIndices.push(idx);
        });
        stepAnswers = Object.assign({}, stepAnswers, { [step.keyPrefix]: { userAnswers, blankIndices } });
    }

    examAnswers[currentExamQuestion] = {
        questionIndex: currentExamQuestion,
        question: question,
        answers: mergedAnswers,
        correctAnswers: mergedCorrectAnswers,
        stepAnswers: stepAnswers
    };
}

// Create input for fill-in-blank: showFirstLetterHint=true for beginner (first letter + underscores), false for exam/advanced (blank)
function createBlankInput(cleanWord, word, showFirstLetterHint = false) {
    const container = document.createElement('span');
    container.className = 'word-container word-container--inline';
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = Math.max(cleanWord.length + 10, 80);
    input.dataset.answer = cleanWord;
    input.dataset.original = word;
    input.className = 'hint-input';
    input.placeholder = showFirstLetterHint ? cleanWord[0] + '_'.repeat(cleanWord.length - 1) : '';
    const sizeChars = Math.min(80, Math.max(4, Math.ceil(cleanWord.length * 1.15) + 2));
    input.setAttribute('size', String(sizeChars));
    container.appendChild(input);
    return { container, input };
}

function displayTextWithBlanks() {
    const textDisplay = document.getElementById('textDisplay');
    document.querySelector('.instruction')?.classList.remove('hidden');
    textDisplay.innerHTML = '';
    
    populateCompletedSegmentsDisplay();
    
    const activeSegment = (currentSegments.length > 1 && currentSegmentIndex < currentSegments.length)
        ? currentSegments[currentSegmentIndex]
        : currentSection;
    const markerInfo = extractLeadingSegmentMarker(activeSegment);
    const words = (activeSegment || '').split(/\s+/);
    const inputs = [];
    currentSegmentBlankIndices = [];

    const segmentBlock = document.createElement('div');
    segmentBlock.className = 'verbatim-segment-block';
    if (markerInfo.marker) {
        const markerLabel = document.createElement('div');
        markerLabel.className = 'verbatim-subpart-label';
        markerLabel.textContent = formatSubsectionToken(markerInfo.marker);
        segmentBlock.appendChild(markerLabel);
    }
    const segmentTextLine = document.createElement('div');
    segmentTextLine.className = 'verbatim-segment-text';
    
    words.forEach((word, index) => {
        if (markerInfo.wordOffset > 0 && index === 0 && word.trim().toLowerCase() === markerInfo.token.toLowerCase()) {
            return;
        }

        const cleanWord = word.replace(/[.,;:!?"'\(\)\[\]]/g, '').toLowerCase();
        
        // Always show parenthesized roman numerals (e.g. (i), (ii), (iii), (iv), (v), (vi))
        const isRomanNumeral = /^\([ivxlcdm]+\)$/i.test(word.trim());
        // Only blank words with 2+ letters (same for exam and practice advanced)
        if (cleanWord.length === 0 || isRomanNumeral || cleanWord.length < 2) {
            segmentTextLine.appendChild(document.createTextNode(word + ' '));
            return;
        }
        
        let showWord = false;
        
        // Check if word should be shown in intermediate mode (10% revealed)
        if (currentMode === 'practice' && currentDifficulty === 'intermediate' && Math.random() < 0.10) {
            showWord = true;
        }
        
        if (showWord) {
            segmentTextLine.appendChild(document.createTextNode(word + ' '));
        } else {
            currentSegmentBlankIndices.push(index);
            // Determine which input type to use based on mode and difficulty
            // - Exam mode: No hints (blank)
            // - Advanced practice: No hints (blank)
            // - Intermediate practice: No hints (blank) - 10% words shown as full text above
            // - Beginner practice: First letter hints
            const showHint = currentMode === 'practice' && currentDifficulty === 'beginner';
            const { container, input } = createBlankInput(cleanWord, word, showHint);
            inputs.push(input);
            segmentTextLine.appendChild(container);
            segmentTextLine.appendChild(document.createTextNode(' '));
        }
    });

    segmentBlock.appendChild(segmentTextLine);
    textDisplay.appendChild(segmentBlock);
    
    if (inputs.length > 0) {
        inputs[0].focus();
        
        inputs.forEach((input, index) => {
            // Auto-advance on correct answer in beginner mode
            if (currentMode === 'practice' && currentDifficulty === 'beginner') {
                input.addEventListener('input', (e) => {
                    const userAnswer = e.target.value.trim().toLowerCase().replace(/[.,;:!?"'\(\)\[\]]/g, '');
                    const correctAnswer = e.target.dataset.answer.toLowerCase();
                    
                    if (userAnswer === correctAnswer) {
                        e.target.classList.add('correct');
                        e.target.classList.remove('incorrect');
                        
                        // Move to next input
                        if (index < inputs.length - 1) {
                            inputs[index + 1].focus();
                        } else {
                            // All completed, could auto-check
                            document.getElementById('nextQuestion')?.focus();
                        }
                    }
                });
            }
            
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    } else {
                        document.getElementById('nextQuestion')?.click();
                    }
                }
            });
        });
    }
    updatePrevButtonState();
}

function clearAnswer() {
    document.querySelectorAll('#textDisplay .correct-answer-hint').forEach(el => el.remove());
    const inputs = document.querySelectorAll('#textDisplay input');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'incorrect');
        input.disabled = false;
    });
    document.getElementById('feedbackArea').innerHTML = '';
    document.getElementById('secondaryControls').classList.add('hidden');
    attemptNumber = 1;
    hasCheckedCurrentSegment = false;

    // Section is no longer complete since user cleared their answer.
    completedSections.delete(currentSectionIndex);

    // Reset segment index when past segments so Next follows the flowchart from the start.
    if (currentSegments.length > 1 && currentSegmentIndex >= currentSegments.length) {
        currentSegmentIndex = currentSegments.length - 1;
        displayTextWithBlanks();
    }
}

function prevQuestion() {
    if (currentMode === 'exam') {
        saveExamScenarioAnswers();
        if (currentExamStepIndex > 0) {
            currentExamStepIndex--;
            document.getElementById('feedbackArea').innerHTML = '';
            loadExamQuestion();
        } else if (currentExamQuestion > 0) {
            currentExamQuestion--;
            examQuestionSteps = buildExamQuestionSteps(examQuestions[currentExamQuestion]);
            currentExamStepIndex = examQuestionSteps.length - 1;
            document.getElementById('feedbackArea').innerHTML = '';
            loadExamQuestion();
        }
        return;
    }

    if (currentMode === 'practice') {
        // Save current answers before any navigation (only if viewing a valid segment)
        const inputs = document.querySelectorAll('#textDisplay input');
        if (inputs.length > 0 && currentSegmentIndex < currentSegments.length) {
            const currentAnswers = Array.from(inputs).map(input => ({
                answer: input.dataset.answer,
                userInput: input.value.trim().toLowerCase().replace(/[.,;:!?"'\(\)\[\]]/g, '')
            }));
            practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)] = {
                userAnswers: currentAnswers,
                blankIndices: [...currentSegmentBlankIndices]
            };
        }

        // Section-complete state: we're past the last section (showing "Section complete" message).
        // Previous should go to the start of this rule, not use out-of-bounds indices.
        if (currentSectionIndex >= currentRule.verbatim.length) {
            currentSectionIndex = 0;
            currentSection = currentRule.verbatim[0];
            initSegmentsForCurrentSection();
            currentSegmentIndex = 0;
            hasCheckedCurrentSegment = false;
            document.getElementById('feedbackArea').innerHTML = '';
            document.getElementById('secondaryControls').classList.add('hidden');
            document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(currentRule, currentRule.verbatim[0]);
            attemptNumber = 1;
            displayTextWithBlanks();
            const saved = practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, 0, 0)];
            if (saved?.userAnswers) {
                const inp = document.querySelectorAll('#textDisplay input');
                saved.userAnswers.forEach((a, i) => {
                    if (inp[i]) inp[i].value = (a && a.userInput) ? a.userInput : '';
                });
            }
            updatePrevButtonState();
            return;
        }

        // Segment-level back: 3gIV -> 3gIII
        if (currentSegments.length > 1 && currentSegmentIndex > 0) {
            currentSegmentIndex--;
            hasCheckedCurrentSegment = false;
            document.getElementById('feedbackArea').innerHTML = '';
            document.getElementById('secondaryControls').classList.add('hidden');
            displayTextWithBlanks();
            const saved = practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)];
            if (saved && saved.userAnswers) {
                const inp = document.querySelectorAll('#textDisplay input');
                saved.userAnswers.forEach((a, i) => {
                    if (inp[i]) inp[i].value = a.userInput || '';
                });
            }
            return;
        }

        // Section-level back: 3g -> 3f (last segment of prev section)
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            currentSection = currentRule.verbatim[currentSectionIndex];
            initSegmentsForCurrentSection();
            currentSegmentIndex = currentSegments.length - 1;
            hasCheckedCurrentSegment = false;

            document.getElementById('feedbackArea').innerHTML = '';
            document.getElementById('secondaryControls').classList.add('hidden');

            document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(currentRule, currentRule.verbatim[currentSectionIndex]);

            attemptNumber = 1;
            displayTextWithBlanks();
            const saved = practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)];
            if (saved && saved.userAnswers) {
                const inp = document.querySelectorAll('#textDisplay input');
                saved.userAnswers.forEach((a, i) => {
                    if (inp[i]) inp[i].value = a.userInput || '';
                });
            }
            return;
        }

        // Rule-level back: go to previous rule in practice sequence
        const prevBtn = document.getElementById('prevQuestion');
        if (prevBtn) prevBtn.disabled = false;
        const prevRule = getPrevPracticeRule(currentRule);
        if (prevRule && prevRule.verbatim && prevRule.verbatim.length > 0) {
            currentRule = prevRule;
            currentSectionIndex = prevRule.verbatim.length - 1;
            currentSection = prevRule.verbatim[currentSectionIndex];
            initSegmentsForCurrentSection();
            currentSegmentIndex = currentSegments.length - 1;
            hasCheckedCurrentSegment = false;

            document.getElementById('feedbackArea').innerHTML = '';
            document.getElementById('secondaryControls').classList.add('hidden');

            document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(prevRule, prevRule.verbatim[currentSectionIndex]);

            attemptNumber = 1;
            displayTextWithBlanks();
            const saved = practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)];
            if (saved && saved.userAnswers) {
                const inp = document.querySelectorAll('#textDisplay input');
                saved.userAnswers.forEach((a, i) => {
                    if (inp[i]) inp[i].value = a.userInput || '';
                });
            }
        } else if (prevBtn) {
            prevBtn.disabled = true;
        }
    }
}

function updatePrevButtonState() {
    const prevBtn = document.getElementById('prevQuestion');
    if (!prevBtn) return;
    if (currentMode === 'exam') {
        prevBtn.disabled = currentExamQuestion === 0 && currentExamStepIndex === 0;
    } else if (currentMode === 'practice' && currentRule) {
        const atStart = currentSectionIndex === 0 && (currentSegments.length <= 1 || currentSegmentIndex === 0);
        prevBtn.disabled = atStart && isFirstPracticeRule(currentRule);
    }
}

function checkAnswer() {
    // Check button should only work in practice mode
    if (currentMode === 'exam') {
        return;
    }
    
    const inputs = document.querySelectorAll('#textDisplay input');
    
    if (inputs.length === 0) {
        return;
    }
    
    let allCorrect = true;
    let correctCount = 0;
    
    inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase().replace(/[.,;:!?"'\(\)\[\]]/g, '');
        const correctAnswer = (input.dataset.answer || '').toLowerCase();
        
        if (userAnswer === correctAnswer) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
            correctCount++;
            // Remove any existing hint (user may have corrected after a previous check)
            const hint = input.parentElement?.querySelector('.correct-answer-hint');
            if (hint) hint.remove();
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
            allCorrect = false;
            // Hints only appear when user clicks "Show Correct Answer"
        }
    });
    if (!allCorrect) {
        inputs.forEach(input => {
            if (input.classList.contains('correct')) input.disabled = true;
        });
    }
    
    const feedbackArea = document.getElementById('feedbackArea');
    const percentage = Math.round((correctCount / inputs.length) * 100);
    
    if (allCorrect) {
        hasCheckedCurrentSegment = true;
        if (currentSegments.length > 1) {
            // Capture current inputs for completed-segments display (user-typed, not answer)
            const currentAnswers = Array.from(inputs).map(input => ({
                answer: input.dataset.answer,
                userInput: input.value.trim().toLowerCase().replace(/[.,;:!?"'\(\)\[\]]/g, '')
            }));
            practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)] = {
                userAnswers: currentAnswers,
                blankIndices: [...currentSegmentBlankIndices]
            };
            currentSegmentIndex++;
            if (currentSegmentIndex < currentSegments.length) {
                hasCheckedCurrentSegment = false;
                document.getElementById('feedbackArea').innerHTML = '';
                document.getElementById('secondaryControls').classList.add('hidden');
                displayTextWithBlanks();
                const saved = practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)];
                if (saved?.userAnswers) {
                    const inp = document.querySelectorAll('#textDisplay input');
                    saved.userAnswers.forEach((a, i) => {
                        if (inp[i]) inp[i].value = a.userInput || '';
                    });
                }
            } else {
                completedSections.add(currentSectionIndex);
                const isLastSectionOfRule = currentSectionIndex === currentRule.verbatim.length - 1;
                const sectionCompleteMsg = isLastSectionOfRule
                    ? (isLastPracticeRule(currentRule)
                        ? '<div class="feedback feedback-success mt-2"><strong>Section complete.</strong> You have finished all rules. Select another rule from the sidebar to continue practicing.</div>'
                        : '<div class="feedback feedback-success mt-2"><strong>Section complete.</strong> You have finished all sections in this rule. Click Next to move on.</div>')
                    : '';
                feedbackArea.innerHTML = `
                    <div class="feedback feedback-success">
                        <strong>Congratulations!</strong> You've completed this section. Well done.
                        ${verbatimProgressSvgMarkup(100, 'success')}
                    </div>
                    ${sectionCompleteMsg}
                    ${currentRule.summary ? `
                        <div class="rule-explanation rule-explanation--boxed rule-explanation--success-accent">
                            <strong>Rule Summary:</strong> ${escapeHtml(String(currentRule.summary))}
                        </div>
                    ` : ''}
                `;
            }
        } else {
            const isLastSectionOfRule = currentSectionIndex === currentRule.verbatim.length - 1;
            const sectionCompleteMsg = isLastSectionOfRule
                ? (isLastPracticeRule(currentRule)
                    ? '<div class="feedback feedback-success mt-2"><strong>Section complete.</strong> You have finished all rules. Select another rule from the sidebar to continue practicing.</div>'
                    : '<div class="feedback feedback-success mt-2"><strong>Section complete.</strong> You have finished all runs in this rule. Click Next to move on.</div>')
                : '';
            feedbackArea.innerHTML = `
                <div class="feedback feedback-success">
                    <strong>Congratulations!</strong> You've completed this section. Well done.
                    ${verbatimProgressSvgMarkup(100, 'success')}
                </div>
                ${sectionCompleteMsg}
                ${currentRule.summary ? `
                    <div class="rule-explanation rule-explanation--boxed rule-explanation--success-accent">
                        <strong>Rule Summary:</strong> ${escapeHtml(String(currentRule.summary))}
                    </div>
                ` : ''}
            `;
            completedSections.add(currentSectionIndex);
        }
    } else {
        if (attemptNumber === 1) {
            feedbackArea.innerHTML = `
                <div class="feedback feedback-error">
                    <strong>Not quite right.</strong> You got ${correctCount} out of ${inputs.length} words correct (${percentage}%).
                    ${verbatimProgressSvgMarkup(percentage, 'error')}
                </div>
                ${currentRule.summary ? `
                    <div class="rule-explanation rule-explanation--boxed rule-explanation--hint-accent">
                        <strong>Hint - Rule Summary:</strong> ${escapeHtml(String(currentRule.summary))}
                    </div>
                ` : ''}
            `;
            document.getElementById('secondaryControls').classList.remove('hidden');
        } else {
            feedbackArea.innerHTML = `
                <div class="feedback feedback-error">
                    <strong>Incorrect.</strong> You got ${correctCount} out of ${inputs.length} words correct (${percentage}%).
                    ${verbatimProgressSvgMarkup(percentage, 'error')}
                </div>
                ${currentRule.summary ? `
                    <div class="rule-explanation rule-explanation--boxed rule-explanation--hint-accent">
                        <strong>Understanding this rule:</strong> ${escapeHtml(String(currentRule.summary))}
                    </div>
                ` : ''}
            `;
            document.getElementById('secondaryControls').classList.remove('hidden');
        }
        hasCheckedCurrentSegment = true;
    }
}

/**
 * Normalize rule reference or word for comparison (flexible matching).
 * Handles "R9c", "Rule 9(c)", "9c", "R8f, iii" etc.
 */
function normalizeForMatch(str) {
    if (!str || typeof str !== 'string') return '';
    return str.trim().toLowerCase()
        .replace(/\brule\s*/gi, '')
        .replace(/^r\.?\s*/i, '')
        .replace(/[.,;:!?"'()[\]]/g, '')
        .replace(/\s+/g, '')
        .replace(/\//g, '');
}

function answersMatch(userVal, correctVal) {
    if (!correctVal) return false;
    const u = normalizeForMatch(userVal);
    const c = normalizeForMatch(correctVal);
    if (!u) return false;
    return u === c;
}

/**
 * Compute tiered points for a question: 100% -> 3, 70-99% -> 2, 50-69% -> 1, <50% -> 0.
 */
function mapPercentToPoints(percent) {
    if (percent >= 100) return 3;
    if (percent >= 70) return 2;
    if (percent >= 50) return 1;
    return 0;
}

/**
 * Compute scores for scenario-format exam: points per question, total earned, pass/fail.
 * Store in examAnswers and return { earnedPoints, maxPoints, passed }.
 */
function computeScenarioExamScores() {
    let earnedPoints = 0;
    let maxPoints = 0;

    examAnswers.forEach((answer) => {
        if (!answer) return;
        const correctAnswers = answer.correctAnswers || {};
        const userAnswers = answer.answers || {};
        const keys = Object.keys(correctAnswers);
        if (keys.length === 0) return;

        let correctBlanks = 0;
        keys.forEach((key) => {
            const correct = correctAnswers[key];
            const user = userAnswers[key] || '';
            if (answersMatch(user, correct)) correctBlanks++;
        });

        const totalBlanks = keys.length;
        const percent = totalBlanks > 0 ? (correctBlanks / totalBlanks) * 100 : 0;
        const points = mapPercentToPoints(percent);

        answer.correctBlanks = correctBlanks;
        answer.totalBlanks = totalBlanks;
        answer.percentCorrect = percent;
        answer.points = points;
        answer.correct = (points === 3);

        earnedPoints += points;
        maxPoints += 3;
    });

    const passed = maxPoints > 0 && earnedPoints / maxPoints >= 0.8;
    return { earnedPoints, maxPoints, passed };
}

function tryAgain() {
    attemptNumber = 2;
    hasCheckedCurrentSegment = false;
    document.querySelectorAll('#textDisplay .correct-answer-hint').forEach(el => el.remove());
    const inputs = document.querySelectorAll('#textDisplay input');
    inputs.forEach(input => {
        if (input.classList.contains('incorrect')) {
            input.value = '';
            input.classList.remove('incorrect');
        }
        if (!input.classList.contains('correct')) {
            input.disabled = false;
        } else {
            input.disabled = true;
        }
    });
    
    document.getElementById('feedbackArea').innerHTML = '';
    document.getElementById('secondaryControls').classList.add('hidden');
}

function showAnswer() {
    const inputs = document.querySelectorAll('#textDisplay input');
    inputs.forEach(input => {
        let hint = input.parentElement?.querySelector('.correct-answer-hint');
        if (!hint) {
            hint = document.createElement('span');
            hint.className = 'correct-answer-hint';
            input.parentElement.appendChild(hint);
        }
        hint.textContent = input.dataset.original;
        input.disabled = true;
        input.classList.remove('incorrect');
        input.classList.add('correct');
    });
    
    document.getElementById('secondaryControls').classList.add('hidden');
}

function nextQuestion() {
    if (currentMode === 'exam') {
        saveExamScenarioAnswers();
        if (currentExamStepIndex < examQuestionSteps.length - 1) {
            currentExamStepIndex++;
            document.getElementById('feedbackArea').innerHTML = '';
            document.getElementById('secondaryControls').classList.add('hidden');
            loadExamQuestion();
        } else {
            currentExamQuestion++;
            currentExamStepIndex = 0;
            if (currentExamQuestion < examQuestions.length) {
                document.getElementById('feedbackArea').innerHTML = '';
                document.getElementById('secondaryControls').classList.add('hidden');
                loadExamQuestion();
            } else {
                showExamResults();
            }
        }
        return;
    }

    // Practice: Next = Check first time; second click advances regardless
        if (!hasCheckedCurrentSegment) {
            checkAnswer();
            return;
        }
        if (currentRule.isRandomMode) {
            // Multi-segment: advance to next segment first
            if (currentSegments.length > 1 && currentSegmentIndex < currentSegments.length - 1) {
                const inputsToSave = document.querySelectorAll('#textDisplay input');
                if (inputsToSave.length > 0) {
                    const currentAnswers = Array.from(inputsToSave).map(input => ({
                        answer: input.dataset.answer,
                        userInput: input.value.trim().toLowerCase().replace(/[.,;:!?"'\(\)\[\]]/g, '')
                    }));
                    practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)] = {
                        userAnswers: currentAnswers,
                        blankIndices: [...currentSegmentBlankIndices]
                    };
                }
                currentSegmentIndex++;
                hasCheckedCurrentSegment = false;
                document.getElementById('feedbackArea').innerHTML = '';
                document.getElementById('secondaryControls').classList.add('hidden');
                displayTextWithBlanks();
                const saved = practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)];
                if (saved?.userAnswers) {
                    const inp = document.querySelectorAll('#textDisplay input');
                    saved.userAnswers.forEach((a, i) => {
                        if (inp[i]) inp[i].value = (a && a.userInput) ? a.userInput : '';
                    });
                }
                return;
            }
            // Pick a new random rule and section
            const practiceItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 34, 35, 'annex4'];
            const pick = practiceItems[Math.floor(Math.random() * practiceItems.length)];
            currentRule = getPracticeRule(pick);
            if (!currentRule?.verbatim?.length) {
                alert('Error: Unable to load rule data. Please refresh the page.');
                return;
            }
            currentRule.isRandomMode = true; // Maintain random mode flag
            
            const randomSectionIndex = Math.floor(Math.random() * currentRule.verbatim.length);
            currentSectionIndex = randomSectionIndex;
            currentSection = currentRule.verbatim[randomSectionIndex];
            initSegmentsForCurrentSection();
            
            document.getElementById('feedbackArea').innerHTML = '';
            document.getElementById('secondaryControls').classList.add('hidden');
            
            document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(currentRule, currentRule.verbatim[currentSectionIndex]);
            
            attemptNumber = 1;
            hasCheckedCurrentSegment = false;
            displayTextWithBlanks();
        } else {
            // Normal sequential mode: advance segment-by-segment within section, then next section
            if (currentSegments.length > 1 && currentSegmentIndex < currentSegments.length - 1) {
                const inputsToSave = document.querySelectorAll('#textDisplay input');
                if (inputsToSave.length > 0) {
                    const currentAnswers = Array.from(inputsToSave).map(input => ({
                        answer: input.dataset.answer,
                        userInput: input.value.trim().toLowerCase().replace(/[.,;:!?"'\(\)\[\]]/g, '')
                    }));
                    practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)] = {
                        userAnswers: currentAnswers,
                        blankIndices: [...currentSegmentBlankIndices]
                    };
                }
                currentSegmentIndex++;
                hasCheckedCurrentSegment = false;
                document.getElementById('feedbackArea').innerHTML = '';
                document.getElementById('secondaryControls').classList.add('hidden');
                displayTextWithBlanks();
                const saved = practiceSegmentAnswersBySection[practiceSegmentKey(currentRule.number, currentSectionIndex, currentSegmentIndex)];
                if (saved?.userAnswers) {
                    const inp = document.querySelectorAll('#textDisplay input');
                    saved.userAnswers.forEach((a, i) => {
                        if (inp[i]) inp[i].value = (a && a.userInput) ? a.userInput : '';
                    });
                }
                return;
            }
            currentSectionIndex++;
            
            if (currentSectionIndex < currentRule.verbatim.length) {
                currentSection = currentRule.verbatim[currentSectionIndex];
                initSegmentsForCurrentSection();
                document.getElementById('feedbackArea').innerHTML = '';
                document.getElementById('secondaryControls').classList.add('hidden');
                
                document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(currentRule, currentRule.verbatim[currentSectionIndex]);
                
                attemptNumber = 1;
                hasCheckedCurrentSegment = false;
                displayTextWithBlanks();
            } else {
                const feedbackArea = document.getElementById('feedbackArea');
                if (currentSectionIndex === currentRule.verbatim.length) {
                    const nextRule = getNextPracticeRule(currentRule);
                    if (nextRule) {
                        // Advance directly to next rule; skip the redundant "Section complete" screen.
                        currentRule = nextRule;
                        currentSectionIndex = 0;
                        currentSection = currentRule.verbatim[0];
                        completedSections.clear();
                        initSegmentsForCurrentSection();
                        feedbackArea.innerHTML = '';
                        document.getElementById('secondaryControls').classList.add('hidden');
                        document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(currentRule, currentRule.verbatim[0]);
                        attemptNumber = 1;
                        hasCheckedCurrentSegment = false;
                        displayTextWithBlanks();
                        return;
                    }
                    feedbackArea.innerHTML = isLastPracticeRule(currentRule)
                        ? `
                        <div class="feedback feedback-success">
                            <strong>Congratulations!</strong> You've completed this section. Well done.
                            ${verbatimProgressSvgMarkup(100, 'success')}
                        </div>
                        <div class="feedback feedback-success mt-2">
                            <strong>Section complete.</strong> You have finished all rules. Select another rule from the sidebar to continue practicing.
                        </div>
                    `
                        : `
                        <div class="feedback feedback-success">
                            <strong>Congratulations!</strong> You've completed this section. Well done.
                            ${verbatimProgressSvgMarkup(100, 'success')}
                        </div>
                        <div class="feedback feedback-success mt-2">
                            <strong>Section complete.</strong> You have finished all runs in this rule. Click Next to move on.
                        </div>
                    `;
                    currentSectionIndex++;
                    return;
                }
                const nextRule = getNextPracticeRule(currentRule);
                if (nextRule) {
                    currentRule = nextRule;
                    currentSectionIndex = 0;
                    currentSection = currentRule.verbatim[0];
                    completedSections.clear();
                    initSegmentsForCurrentSection();
                    feedbackArea.innerHTML = '';
                    document.getElementById('secondaryControls').classList.add('hidden');
                    document.getElementById('currentRuleInfo').innerHTML = buildRuleIdentifier(currentRule, currentRule.verbatim[0]);
                    attemptNumber = 1;
                    hasCheckedCurrentSegment = false;
                    displayTextWithBlanks();
                } else {
                    feedbackArea.innerHTML = `
                        <div class="feedback feedback-success">
                            <strong>Congratulations!</strong> You've completed this section. Well done.
                            ${verbatimProgressSvgMarkup(100, 'success')}
                        </div>
                        <div class="feedback feedback-success mt-2">
                            <strong>Section complete.</strong> You have finished all rules. Select another rule from the sidebar to continue practicing.
                        </div>
                    `;
                }
            }
        }
}

function showExamResults() {
    const quizArea = document.getElementById('quizArea');
    const examResults = document.getElementById('examResults');
    if (quizArea) quizArea.classList.add('hidden');
    if (examResults) examResults.classList.remove('hidden');
    showExamResultsScenarioFormat();
}

function showExamResultsScenarioFormat() {
    const scores = computeScenarioExamScores();
    const { earnedPoints, maxPoints, passed } = scores;
    const percentage = maxPoints > 0 ? Math.round((earnedPoints / maxPoints) * 100) : 0;

    const elapsedTime = examStartTime ? Math.floor((Date.now() - examStartTime) / 1000) : 0;
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;

    const summary = document.getElementById('resultsSummary');
    const details = document.getElementById('resultsDetails');
    if (summary) {
        summary.innerHTML = `
        <h3>${earnedPoints} / ${maxPoints} points</h3>
        <p>${percentage}%</p>
        <div class="verbatim-exam-summary">
            ${verbatimProgressSvgMarkup(percentage, passed ? 'success' : 'error')}
        </div>
        <span class="${passed ? 'pass-badge' : 'fail-badge'}">${passed ? 'PASSED' : 'FAILED'}</span>
        <p class="verbatim-exam-time">
            Time: ${minutes}:${String(seconds).padStart(2, '0')}
        </p>
    `;
    }
    if (details) {
        details.innerHTML = '<h3>Your Answers vs Correct Answers</h3>';
    }

    examAnswers.forEach((answer, index) => {
        if (!answer || !answer.question) return;

        const q = answer.question;
        const correctAnswers = answer.correctAnswers || {};
        const stepAnswers = answer.stepAnswers || {};

        const steps = buildExamQuestionSteps(q, index);
        const segmentBlocks = [];

        steps.forEach((step) => {
            const saved = stepAnswers[step.keyPrefix];
            if (!saved?.userAnswers || !saved?.blankIndices) return;

            const userSegment = reconstructSegmentWithUserInput(step.segmentText, saved.userAnswers, saved.blankIndices);
            const correctAnswersArray = saved.blankIndices.map((idx) => ({
                userInput: correctAnswers[`${step.keyPrefix}-${idx}`] || ''
            }));
            const correctSegment = reconstructSegmentWithUserInput(step.segmentText, correctAnswersArray, saved.blankIndices);

            segmentBlocks.push(`
                <div class="result-answer-row">
                    <p class="user-answer">Your answer: ${escapeHtml(userSegment) || '<em>No answer provided</em>'}</p>
                    <p class="correct-answer">Correct answer: ${escapeHtml(correctSegment)}</p>
                </div>
            `);
        });

        let answersHtml;
        if (segmentBlocks.length > 0) {
            answersHtml = segmentBlocks.join('');
        } else {
            const keys = Object.keys(correctAnswers).sort((a, b) => {
                const aParts = a.split('-').map(Number);
                const bParts = b.split('-').map(Number);
                for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
                    const diff = (aParts[i] || 0) - (bParts[i] || 0);
                    if (diff !== 0) return diff;
                }
                return 0;
            });
            const userAnswers = answer.answers || {};
            const userWords = keys.map((k) => userAnswers[k] || '').filter(Boolean);
            const correctWords = keys.map((k) => correctAnswers[k] || '');
            const userText = userWords.length ? userWords.join(' ') : '';
            const correctText = correctWords.join(' ');
            answersHtml = `
                <div class="result-answer-row">
                    <p class="user-answer">Your answer: ${escapeHtml(userText) || '<em>No answer provided</em>'}</p>
                    <p class="correct-answer">Correct answer: ${escapeHtml(correctText)}</p>
                </div>
            `;
        }
        const pointsLabel = typeof answer.points === 'number' ? ` (${answer.points}/3 pts)` : '';
        const div = document.createElement('div');
        div.className = `result-item result-item-scenario ${answer.points === 3 ? 'correct' : answer.points > 0 ? 'partial' : 'incorrect'}`;
        div.innerHTML = `
            <h4 class="result-question-full">Question ${index + 1}${pointsLabel}: ${escapeHtml(q.text || '')}</h4>
            <div class="result-answers">${answersHtml}</div>
        `;
        if (details) details.appendChild(div);
    });

    saveExamResult('verbatim', earnedPoints, maxPoints, examAnswers);
}

function exitQuiz() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        location.reload();
    }
}
