const IMAGE_PATHS = {
    FLAGS: 'reference/Photos/Flag%20Photo/COLREGS_Flags_AZ_Corrected_ThinBlackBorder_v2',
    DIAGRAMS: 'reference/Photos/Light%20Photo',
    SHAPES: 'reference/Photos/Day%20shapes%20reference%20sheet'
};
if (typeof window !== 'undefined') window.IMAGE_PATHS = IMAGE_PATHS;

const LIGHT_DIAGRAM_MAP = {
    'power-driven-vessel-underway-front': 'power-driven-vessel-underway-front.png',
    'power-driven-vessel-underway-starboard': 'power-driven-vessel-underway-starboard.png',
    'power-driven-vessel-underway-aft': 'power-driven-vessel-underway-aft.png',
    'power-driven-vessel-over-50m-starboard': 'power-driven-vessel-over-50m-starboard.png',
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
if (typeof window !== 'undefined') window.LIGHT_DIAGRAM_MAP = LIGHT_DIAGRAM_MAP;

function getLightDiagramPath(id) {
    const filename = LIGHT_DIAGRAM_MAP[id] || `${id}.jpg`;
    return `${IMAGE_PATHS.DIAGRAMS}/${filename}`;
}

function escapeHtml(text) {
    if (text == null) return '';
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
}

function escapeAttr(text) {
    if (text == null) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

const VALID_EXAM_TYPES = Object.freeze(['verbatim', 'lights-flags', 'understanding']);

function sanitizeAnswerMap(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
    const out = {};
    Object.entries(value).forEach(([k, v]) => {
        const key = String(k);
        if (typeof v === 'string' || typeof v === 'number') {
            out[key] = v;
        }
    });
    return Object.keys(out).length > 0 ? out : undefined;
}

function sanitizeQuestionEntry(question) {
    if (!question || typeof question !== 'object' || Array.isArray(question)) return null;
    const q = {};
    if (typeof question.question === 'string') q.question = question.question;
    if (typeof question.text === 'string') q.text = question.text;
    if (typeof question.correct === 'boolean') q.correct = question.correct;
    if (typeof question.type === 'string') q.type = question.type;
    if (typeof question.points === 'number' && Number.isFinite(question.points)) q.points = question.points;
    if (Array.isArray(question.options)) {
        q.options = question.options.filter(v => typeof v === 'string').slice(0, 32);
    }

    if (question.userAnswer === null || typeof question.userAnswer === 'number' || typeof question.userAnswer === 'string') {
        q.userAnswer = question.userAnswer;
    }
    if (question.correctAnswer === null || typeof question.correctAnswer === 'number' || typeof question.correctAnswer === 'string') {
        q.correctAnswer = question.correctAnswer;
    }

    const answers = sanitizeAnswerMap(question.answers);
    if (answers) q.answers = answers;
    const correctAnswers = sanitizeAnswerMap(question.correctAnswers);
    if (correctAnswers) q.correctAnswers = correctAnswers;

    return q;
}

function validateAndSanitizeExamResult(item) {
    if (!item || typeof item !== 'object') return null;
    const id = typeof item.id === 'number' && Number.isFinite(item.id) ? item.id
        : (typeof item.id === 'string' && /^\d+$/.test(item.id) ? parseInt(item.id, 10) : null);
    if (id == null) return null;
    const examType = VALID_EXAM_TYPES.includes(item.examType) ? item.examType : null;
    if (!examType) return null;
    const score = typeof item.score === 'number' && Number.isFinite(item.score) ? item.score : null;
    const totalQuestions = typeof item.totalQuestions === 'number' && Number.isFinite(item.totalQuestions) ? item.totalQuestions : null;
    if (score == null || totalQuestions == null || score < 0 || totalQuestions <= 0 || score > totalQuestions) return null;
    const date = typeof item.date === 'string' ? item.date : new Date().toISOString();
    const percentage = typeof item.percentage === 'number' && Number.isFinite(item.percentage)
        ? Math.min(100, Math.max(0, item.percentage)) : Math.round((score / totalQuestions) * 100);
    const passed = percentage >= getPassingPercentage(examType);
    const questions = Array.isArray(item.questions)
        ? item.questions.map(sanitizeQuestionEntry).filter(Boolean).slice(0, 500)
        : [];
    return { id, date, examType, score, totalQuestions, percentage, passed, questions };
}

function getExamResults() {
    const raw = Storage.get('examResults');
    if (!Array.isArray(raw)) return [];
    return raw.map(validateAndSanitizeExamResult).filter(Boolean);
}

function initAccordion() {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                if (h.nextElementSibling) {
                    h.nextElementSibling.classList.remove('active');
                }
            });
            if (!isActive && content) {
                header.classList.add('active');
                content.classList.add('active');
            }
        });
    });
}

const Storage = {
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch {
            return null;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            if (error.name === 'QuotaExceededError') {
                alert('Storage quota exceeded. Please go to Statistics page and clear old exam results.');
            }
            return false;
        }
    },
    
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch {
            return false;
        }
    },
    
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch {
            return false;
        }
    }
};

function saveExamResult(examType, score, totalQuestions, questions = []) {
    if (!examType || typeof score !== 'number' || typeof totalQuestions !== 'number') {
        return null;
    }
    
    if (score < 0 || totalQuestions <= 0 || score > totalQuestions) {
        return null;
    }
    
    const results = getExamResults();
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const result = {
        id: Date.now(),
        date: new Date().toISOString(),
        examType: examType,
        score: score,
        totalQuestions: totalQuestions,
        percentage: percentage,
        passed: percentage >= getPassingPercentage(examType),
        questions: questions
    };
    
    results.push(result);
    Storage.set('examResults', results);
    
    return result;
}

function getPassingPercentage(examType) {
    const passingGrades = {
        'verbatim': 80,
        'lights-flags': 70,
        'understanding': 80
    };
    return passingGrades[examType] || 70;
}

function formatDate(isoString) {
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return 'Invalid date';
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initNavDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        const menu = dropdown.querySelector('.nav-dropdown-menu');

        if (!trigger || !menu) return;

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const wasOpen = dropdown.classList.contains('open');
            document.querySelectorAll('.nav-dropdown').forEach(d => {
                d.classList.remove('open');
                d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
            });
            if (!wasOpen) {
                dropdown.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });

        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        });

        menu.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href') || '';
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown').forEach(d => {
                d.classList.remove('open');
                d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

function initImageFallbacks() {
    document.querySelectorAll('img.logo-flag').forEach((img) => {
        img.addEventListener('error', () => {
            img.onerror = null;
            img.src = 'reference/Photos/logo/logo-fixed.jpg';
        }, { once: true });
    });

    document.querySelectorAll('img.shape-img').forEach((img) => {
        img.addEventListener('error', () => {
            img.onerror = null;
            img.src = 'reference/Photos/Light Photo/placeholder.jpg';
        }, { once: true });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initNavDropdowns();
    initImageFallbacks();
});
