document.addEventListener('DOMContentLoaded', () => {
    loadStatistics();
    setupFilters();
    setupActions();
});

function getOptionTextFromBank(examType, questionText, index) {
    if (index == null) return null;
    const bank = examType === 'lights-flags' ? (typeof lightsFlagsQuestions !== 'undefined' ? lightsFlagsQuestions : null)
        : examType === 'understanding' ? (typeof understandingQuestions !== 'undefined' ? understandingQuestions : null)
        : null;
    if (!bank || !Array.isArray(bank)) return null;
    const match = bank.find(q => q && q.question === questionText);
    if (!match || !match.options || !match.options[index]) return null;
    return match.options[index];
}

function loadStatistics() {
    const results = getExamResults();
    const emptyState = document.getElementById('emptyState');
    const resultsTableContainer = document.getElementById('resultsTableContainer');

    if (!emptyState || !resultsTableContainer) return;

    if (results.length === 0) {
        emptyState.classList.remove('hidden');
        resultsTableContainer.classList.add('hidden');
    } else {
        emptyState.classList.add('hidden');
        resultsTableContainer.classList.remove('hidden');

        updateOverviewStats(results);
        displayResults(results);
    }
}

function updateOverviewStats(results) {
    const totalExams = results.length;
    const examsPassed = results.filter(r => r.passed).length;
    const avgScore = results.length > 0 
        ? Math.round(results.reduce((sum, r) => sum + (r.percentage || 0), 0) / results.length)
        : 0;
    
    const totalEl = document.getElementById('totalExams');
    const passedEl = document.getElementById('examsPassed');
    const avgEl = document.getElementById('avgScore');
    if (totalEl) totalEl.textContent = totalExams;
    if (passedEl) passedEl.textContent = examsPassed;
    if (avgEl) avgEl.textContent = avgScore + '%';
}

function displayResults(results) {
    const tbody = document.getElementById('resultsTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const sortedResults = [...results].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedResults.forEach(result => {
        const tr = document.createElement('tr');
        tr.dataset.examType = result.examType;
        
        const examTypeClass = result.examType;
        const examTypeName = {
            'verbatim': 'Verbatim Quiz',
            'lights-flags': 'Signals, Flags & Buoys',
            'understanding': 'Understanding'
        }[result.examType] || result.examType;
        const safeId = typeof escapeAttr === 'function' ? escapeAttr(String(result.id)) : String(result.id);
        
        tr.innerHTML = `
            <td>${escapeHtml(formatDate(result.date))}</td>
            <td><span class="exam-type ${escapeAttr(examTypeClass)}">${escapeHtml(examTypeName)}</span></td>
            <td class="score-cell">${escapeHtml(result.score + '/' + result.totalQuestions)}</td>
            <td class="percentage-cell">${escapeHtml(result.percentage + '%')}</td>
            <td><span class="status-badge ${result.passed ? 'pass' : 'fail'}">${result.passed ? 'Pass' : 'Fail'}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-small btn-secondary view-details" data-id="${safeId}">View Details</button>
                    <button class="btn btn-small btn-danger delete-result" data-id="${safeId}">Delete</button>
                </div>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            viewResultDetails(this.dataset.id);
        });
    });
    
    document.querySelectorAll('.delete-result').forEach(btn => {
        btn.addEventListener('click', function() {
            deleteResult(this.dataset.id);
        });
    });

    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter && activeFilter.dataset.filter) {
        filterResults(activeFilter.dataset.filter);
    }
}

function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            
            const filter = this.dataset.filter;
            filterResults(filter);
        });
    });
}

function filterResults(filter) {
    const rows = document.querySelectorAll('#resultsTableBody tr');

    rows.forEach(row => {
        if (filter === 'all') {
            row.classList.remove('hidden');
        } else {
            row.classList.toggle('hidden', row.dataset.examType !== filter);
        }
    });
}

function setupActions() {
    const clearBtn = document.getElementById('clearAllData');
    const exportBtn = document.getElementById('exportData');
    const importBtn = document.getElementById('importData');
    const importInput = document.getElementById('importExamFile');
    if (clearBtn) clearBtn.addEventListener('click', clearAllData);
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    if (importBtn && importInput) {
        importBtn.addEventListener('click', () => importInput.click());
        importInput.addEventListener('change', onImportExamFileSelected);
    }
}

function renumberImportedResults(existing, imported) {
    const used = new Set(existing.map(r => r.id));
    let nextId = existing.length ? Math.max(...existing.map(r => r.id), 0) + 1 : 1;
    return imported.map(item => {
        let id = item.id;
        while (used.has(id)) {
            id = nextId++;
        }
        used.add(id);
        return { ...item, id };
    });
}

function onImportExamFileSelected(ev) {
    const file = ev.target.files && ev.target.files[0];
    ev.target.value = '';
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        let parsed;
        try {
            parsed = JSON.parse(String(reader.result || ''));
        } catch {
            alert('That file is not valid JSON.');
            return;
        }
        const rawList = Array.isArray(parsed)
            ? parsed
            : (parsed && typeof parsed === 'object' && Array.isArray(parsed.examResults) ? parsed.examResults : null);
        if (!rawList) {
            alert('Expected a JSON array of exam results, or an object with an "examResults" array.');
            return;
        }
        const valid = rawList.map(validateAndSanitizeExamResult).filter(Boolean);
        if (valid.length === 0) {
            alert('No valid exam results were found in that file.');
            return;
        }

        const existing = getExamResults();
        const merge = existing.length === 0
            ? true
            : confirm('Append imported results to your existing history? Click Cancel to replace all results with the file only.');

        const base = merge ? existing : [];
        const combined = merge ? [...base, ...renumberImportedResults(base, valid)] : renumberImportedResults([], valid);

        if (!Storage.set('examResults', combined)) {
            return;
        }
        loadStatistics();
        alert(`Imported ${valid.length} valid result(s).`);
    };
    reader.onerror = () => alert('Could not read that file.');
    reader.readAsText(file, 'UTF-8');
}

function statisticsModalLine(label, valueText) {
    const p = document.createElement('p');
    p.className = 'statistics-modal-line';
    const strong = document.createElement('strong');
    strong.textContent = label;
    p.appendChild(strong);
    p.appendChild(document.createTextNode(' ' + valueText));
    return p;
}

function statisticsAppendYourAnswerPieces(p, pieces) {
    p.className = 'statistics-detail-line';
    const strong = document.createElement('strong');
    strong.textContent = 'Your answer:';
    p.appendChild(strong);
    p.appendChild(document.createTextNode(' '));
    pieces.forEach((piece, i) => {
        if (i > 0) p.appendChild(document.createTextNode(' '));
        if (piece.wrong) {
            const span = document.createElement('span');
            span.className = 'statistics-detail-wrong';
            span.textContent = piece.text;
            p.appendChild(span);
        } else {
            p.appendChild(document.createTextNode(piece.text));
        }
    });
}

function viewResultDetails(id) {
    const results = getExamResults();
    const result = results.find(r => r.id === parseInt(id, 10));

    if (!result) {
        alert('Result not found.');
        return;
    }

    const examTypeName = {
        'verbatim': 'Verbatim Quiz',
        'lights-flags': 'Signals, Flags & Buoys Quiz',
        'understanding': 'Understanding Quiz'
    }[result.examType] || result.examType;

    const modal = document.createElement('div');
    modal.className = 'statistics-modal-backdrop';

    const modalContent = document.createElement('div');
    modalContent.className = 'statistics-modal-panel';

    const title = document.createElement('h2');
    title.className = 'statistics-modal-title';
    title.textContent = examTypeName + ' Results';
    modalContent.appendChild(title);

    modalContent.appendChild(statisticsModalLine('Date:', formatDate(result.date)));
    modalContent.appendChild(statisticsModalLine('Score:', `${result.score}/${result.totalQuestions} (${result.percentage}%)`));
    modalContent.appendChild(statisticsModalLine('Status:', result.passed ? 'PASSED' : 'FAILED'));

    if (result.questions && result.questions.length > 0) {
        const detailsTitle = document.createElement('h3');
        detailsTitle.className = 'statistics-modal-section-title';
        detailsTitle.textContent = 'Question Details:';
        modalContent.appendChild(detailsTitle);

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'statistics-modal-details';

        const isVerbatimWithFullData = result.examType === 'verbatim' && result.questions.some(q => {
            return q && (q.correctAnswers !== undefined || (q.correctAnswer !== undefined));
        });

        if (isVerbatimWithFullData) {
            result.questions.forEach((q, index) => {
                if (!q) return;
                const qBlock = document.createElement('div');
                const verbatimFail = q.points !== undefined && q.points === 0;
                qBlock.className = verbatimFail
                    ? 'statistics-qblock statistics-qblock--verbatim-wrong'
                    : 'statistics-qblock statistics-qblock--verbatim-partial';

                const qNum = document.createElement('p');
                qNum.className = 'statistics-qblock-num';
                qNum.textContent = `Question ${index + 1}`;
                if (q.points !== undefined) {
                    qNum.textContent += ` (${q.points}/3 points)`;
                }
                qBlock.appendChild(qNum);

                const qText = q.question?.text || q.question || '';
                if (qText) {
                    const textP = document.createElement('p');
                    textP.className = 'statistics-qblock-text';
                    textP.textContent = typeof qText === 'string' ? qText : '';
                    qBlock.appendChild(textP);
                }

                const userAnswers = q.answers || q.userAnswer || {};
                const correctAnswers = q.correctAnswers || (q.correctAnswer !== undefined ? { 0: q.correctAnswer } : {});
                const keys = new Set([...Object.keys(userAnswers || {}), ...Object.keys(correctAnswers || {})]);

                if (keys.size > 0) {
                    const pieces = [];
                    const correctParts = [];
                    keys.forEach(key => {
                        const userVal = (userAnswers || {})[key] || '(blank)';
                        const correctVal = (correctAnswers || {})[key];
                        const isWrong = correctVal !== undefined && correctVal !== null &&
                            String(userVal).toLowerCase().trim() !== String(correctVal).toLowerCase().trim();
                        pieces.push({ text: String(userVal), wrong: isWrong });
                        if (correctVal !== undefined && correctVal !== null) correctParts.push(String(correctVal));
                    });
                    const userP = document.createElement('p');
                    statisticsAppendYourAnswerPieces(userP, pieces);
                    qBlock.appendChild(userP);
                    if (correctParts.length > 0) {
                        const correctP = document.createElement('p');
                        correctP.className = 'statistics-detail-line statistics-detail-correct';
                        const s = document.createElement('strong');
                        s.textContent = 'Correct answer:';
                        correctP.appendChild(s);
                        correctP.appendChild(document.createTextNode(' ' + correctParts.join(' ')));
                        qBlock.appendChild(correctP);
                    }
                } else if (q.userAnswer !== undefined || q.answers) {
                    const userVal = q.userAnswer ?? (typeof q.answers === 'object' ? Object.values(q.answers || {}).join(' ') : q.answers);
                    const correctVal = q.correctAnswer;
                    const isWrong = correctVal !== undefined && String(userVal || '').toLowerCase().trim() !== String(correctVal).toLowerCase().trim();
                    const userP = document.createElement('p');
                    statisticsAppendYourAnswerPieces(userP, [{ text: String(userVal || '(blank)'), wrong: isWrong }]);
                    qBlock.appendChild(userP);
                    if (correctVal !== undefined) {
                        const correctP = document.createElement('p');
                        correctP.className = 'statistics-detail-line statistics-detail-correct';
                        const s = document.createElement('strong');
                        s.textContent = 'Correct answer:';
                        correctP.appendChild(s);
                        correctP.appendChild(document.createTextNode(' ' + String(correctVal)));
                        qBlock.appendChild(correctP);
                    }
                }

                detailsDiv.appendChild(qBlock);
            });
        } else {
            result.questions.forEach((q, index) => {
                if (!q) return;
                const qBlock = document.createElement('div');
                qBlock.className = q.correct
                    ? 'statistics-qblock statistics-qblock--mc-correct'
                    : 'statistics-qblock statistics-qblock--mc-wrong';

                const qNum = document.createElement('p');
                qNum.className = 'statistics-qblock-num';
                qNum.textContent = `Question ${index + 1} ${q.correct ? 'Correct' : 'Incorrect'}`;
                qBlock.appendChild(qNum);

                if (q.question) {
                    const textP = document.createElement('p');
                    textP.className = 'statistics-qblock-text';
                    textP.textContent = q.question;
                    qBlock.appendChild(textP);
                }

                const questionText = q.question || '';
                let userText = q.options && q.userAnswer !== null && q.userAnswer !== undefined && q.options[q.userAnswer] !== undefined
                    ? q.options[q.userAnswer] : null;
                let correctText = q.options && q.correctAnswer !== undefined && q.options[q.correctAnswer] !== undefined
                    ? q.options[q.correctAnswer] : null;
                if (userText == null && questionText && result.examType) {
                    userText = getOptionTextFromBank(result.examType, questionText, q.userAnswer);
                }
                if (correctText == null && questionText && result.examType) {
                    correctText = getOptionTextFromBank(result.examType, questionText, q.correctAnswer);
                }
                if (userText == null) userText = q.userAnswer !== null && q.userAnswer !== undefined ? String(q.userAnswer) : 'Not answered';
                if (correctText == null) correctText = q.correctAnswer !== undefined ? String(q.correctAnswer) : 'N/A';

                const userP = document.createElement('p');
                statisticsAppendYourAnswerPieces(userP, [{ text: String(userText), wrong: !q.correct }]);
                qBlock.appendChild(userP);

                const correctP = document.createElement('p');
                correctP.className = 'statistics-detail-line statistics-detail-correct';
                const s = document.createElement('strong');
                s.textContent = 'Correct answer:';
                correctP.appendChild(s);
                correctP.appendChild(document.createTextNode(' ' + String(correctText)));
                qBlock.appendChild(correctP);
                detailsDiv.appendChild(qBlock);
            });
        }

        modalContent.appendChild(detailsDiv);
    }

    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn btn-primary statistics-modal-close';
    closeBtn.type = 'button';
    closeBtn.textContent = 'Close';
    closeBtn.onclick = () => modal.remove();
    modalContent.appendChild(closeBtn);

    modal.appendChild(modalContent);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    const escHandler = function(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.removedNodes.forEach(function(node) {
                if (node === modal) {
                    document.removeEventListener('keydown', escHandler);
                    observer.disconnect();
                }
            });
        });
    });
    observer.observe(document.body, { childList: true });

    document.body.appendChild(modal);
}

function deleteResult(id) {
    if (!confirm('Are you sure you want to delete this result?')) {
        return;
    }
    
    const results = getExamResults();
    const filtered = results.filter(r => r.id !== parseInt(id, 10));
    Storage.set('examResults', filtered);
    
    loadStatistics();
}

function clearAllData() {
    if (!confirm('Are you sure you want to delete ALL exam results? This cannot be undone.')) {
        return;
    }
    
    if (!confirm('This will permanently delete all your progress. Are you absolutely sure?')) {
        return;
    }
    
    Storage.remove('examResults');
    loadStatistics();
}

function exportData() {
    const results = getExamResults();
    
    if (results.length === 0) {
        alert('No data to export.');
        return;
    }
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `colregs-results-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
