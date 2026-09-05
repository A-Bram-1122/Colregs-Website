function normalizeForSearch(text) {
    return String(text).replace(/[\s-]+/g, ' ').trim().toLowerCase();
}

document.addEventListener('DOMContentLoaded', () => {
    loadAllRules();
    setupSearch();
});

function loadAllRules() {
    const accordion = document.getElementById('rulesAccordion');
    
    if (!accordion) {
        console.error('Error: rulesAccordion element not found');
        return;
    }

    const hasEscapeHtml = typeof escapeHtml === 'function';
    
    if (typeof colregsRules === 'undefined' || !Array.isArray(colregsRules)) {
        console.error('Error: colregsRules not loaded or invalid');
        accordion.innerHTML = '<div class="rules-load-error">Error: Failed to load COLREGS rules data. Please refresh the page.</div>';
        return;
    }
    
    accordion.innerHTML = '';
    
    colregsRules.forEach(rule => {
        const ruleItem = document.createElement('div');
        ruleItem.className = 'accordion-item rule-accordion';
        ruleItem.dataset.ruleNumber = rule.number;
        ruleItem.dataset.ruleName = rule.name.toLowerCase();
        
        const ruleHeader = document.createElement('button');
        ruleHeader.className = 'accordion-header rule-header';
        ruleHeader.innerHTML = `
            <span class="rule-title">Rule ${hasEscapeHtml ? escapeHtml(rule.number) : rule.number}: ${hasEscapeHtml ? escapeHtml(rule.name) : rule.name}</span>
            <span class="accordion-icon">▼</span>
        `;
        
        const ruleContent = document.createElement('div');
        ruleContent.className = 'accordion-content rule-content';
        
        const ruleBody = document.createElement('div');
        ruleBody.className = 'accordion-body';
        
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'rule-summary';
        summaryDiv.innerHTML = `<strong>Summary:</strong> ${hasEscapeHtml ? escapeHtml(rule.summary || '') : (rule.summary || '')}`;
        ruleBody.appendChild(summaryDiv);
        
        if (rule.verbatim && Array.isArray(rule.verbatim)) {
            const sectionsAccordion = document.createElement('div');
            sectionsAccordion.className = 'sections-accordion';
            
            rule.verbatim.forEach((section, index) => {
                const sectionItem = document.createElement('div');
                sectionItem.className = 'accordion-item section-accordion';
                
                const sectionHeader = document.createElement('button');
                sectionHeader.className = 'accordion-header section-header';
                
                const sectionLabel = getSectionLabel(section, index);
                sectionHeader.innerHTML = `
                    <span class="section-title">Section ${sectionLabel}</span>
                    <span class="accordion-icon">▼</span>
                `;
                
                const sectionContent = document.createElement('div');
                sectionContent.className = 'accordion-content section-content';
                
                const sectionBody = document.createElement('div');
                sectionBody.className = 'accordion-body';
                sectionBody.innerHTML = `<p class="rule-verbatim">${escapeHtml(section)}</p>`;
                
                sectionContent.appendChild(sectionBody);
                sectionItem.appendChild(sectionHeader);
                sectionItem.appendChild(sectionContent);
                sectionsAccordion.appendChild(sectionItem);
            });
            
            ruleBody.appendChild(sectionsAccordion);
        }
        
        ruleContent.appendChild(ruleBody);
        ruleItem.appendChild(ruleHeader);
        ruleItem.appendChild(ruleContent);
        accordion.appendChild(ruleItem);
    });

    if (typeof colregsAnnexes !== 'undefined' && Array.isArray(colregsAnnexes)) {
        colregsAnnexes.forEach(annex => {
            const annexItem = document.createElement('div');
            annexItem.className = 'accordion-item rule-accordion annex-accordion';
            annexItem.dataset.ruleNumber = 'annex-' + annex.number;
            annexItem.dataset.ruleName = annex.name.toLowerCase();

            const annexHeader = document.createElement('button');
            annexHeader.className = 'accordion-header rule-header';
            annexHeader.innerHTML = `
                <span class="rule-title">Annex ${hasEscapeHtml ? escapeHtml(annex.number) : annex.number}: ${hasEscapeHtml ? escapeHtml(annex.name) : annex.name}</span>
                <span class="accordion-icon">▼</span>
            `;

            const annexContent = document.createElement('div');
            annexContent.className = 'accordion-content rule-content';

            const annexBody = document.createElement('div');
            annexBody.className = 'accordion-body';

            const summaryDiv = document.createElement('div');
            summaryDiv.className = 'rule-summary';
            summaryDiv.innerHTML = `<strong>Summary:</strong> ${hasEscapeHtml ? escapeHtml(annex.summary || '') : (annex.summary || '')}`;
            annexBody.appendChild(summaryDiv);

            if (annex.verbatim && Array.isArray(annex.verbatim)) {
                const sectionsAccordion = document.createElement('div');
                sectionsAccordion.className = 'sections-accordion';

                annex.verbatim.forEach((section, index) => {
                    const sectionItem = document.createElement('div');
                    sectionItem.className = 'accordion-item section-accordion';

                    const sectionHeader = document.createElement('button');
                    sectionHeader.className = 'accordion-header section-header';

                    const sectionLabel = getSectionLabel(section, index);
                    sectionHeader.innerHTML = `
                        <span class="section-title">Section ${sectionLabel}</span>
                        <span class="accordion-icon">▼</span>
                    `;

                    const sectionContent = document.createElement('div');
                    sectionContent.className = 'accordion-content section-content';

                    const sectionBody = document.createElement('div');
                    sectionBody.className = 'accordion-body';
                    sectionBody.innerHTML = `<p class="rule-verbatim">${escapeHtml(section)}</p>`;

                    sectionContent.appendChild(sectionBody);
                    sectionItem.appendChild(sectionHeader);
                    sectionItem.appendChild(sectionContent);
                    sectionsAccordion.appendChild(sectionItem);
                });

                annexBody.appendChild(sectionsAccordion);
            }

            annexContent.appendChild(annexBody);
            annexItem.appendChild(annexHeader);
            annexItem.appendChild(annexContent);
            accordion.appendChild(annexItem);
        });
    }

    initializeAccordions();
}

function getSectionLabel(text, index) {
    const match = text.match(/^\(([a-z]|[ivx]+)\)/i);
    if (match) {
        return match[1].toUpperCase();
    }
    return String.fromCharCode(97 + index).toUpperCase(); // a, b, c...
}

function initializeAccordions() {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            if (header.classList.contains('rule-header')) {
                document.querySelectorAll('.rule-header').forEach(h => {
                    if (h !== header) {
                        h.classList.remove('active');
                        if (h.nextElementSibling) {
                            h.nextElementSibling.classList.remove('active');
                        }
                    }
                });
            }
            
            if (!isActive) {
                header.classList.add('active');
                if (content) {
                    content.classList.add('active');
                }
            } else {
                header.classList.remove('active');
                if (content) {
                    content.classList.remove('active');
                }
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchRules');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();
        const items = document.querySelectorAll('.rule-accordion');
        let hasVisibleItems = false;
        const normalizedTerm = normalizeForSearch(searchTerm);
        const isEmptySearch = searchTerm === '' || normalizedTerm === '';

        if (isEmptySearch) {
            items.forEach(item => {
                item.classList.remove('hidden');
                removeHighlights(item);
            });
            const noResults = document.getElementById('noResults');
            if (noResults) noResults.remove();
            return;
        }

        items.forEach(item => {
            const ruleNumber = item.dataset.ruleNumber;
            const ruleName = item.dataset.ruleName;
            const headerEl = item.querySelector('.rule-header .rule-title');
            const headerText = headerEl ? headerEl.textContent : '';
            const body = item.querySelector('.accordion-body');
            const bodyText = body ? body.textContent : '';

            const textMatches =
                normalizeForSearch(ruleName).includes(normalizedTerm) ||
                normalizeForSearch(headerText).includes(normalizedTerm) ||
                normalizeForSearch(bodyText).includes(normalizedTerm);

            const matches = ruleNumber.includes(searchTerm) || textMatches;

            if (matches) {
                item.classList.remove('hidden');
                hasVisibleItems = true;
                highlightText(item, searchTerm);
            } else {
                item.classList.add('hidden');
            }
        });

        let noResults = document.getElementById('noResults');
        if (!hasVisibleItems) {
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.id = 'noResults';
                noResults.className = 'no-results';
                noResults.innerHTML = `
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="30" stroke="#cbd5e1" stroke-width="4"/>
                        <line x1="25" y1="40" x2="55" y2="40" stroke="#cbd5e1" stroke-width="4"/>
                    </svg>
                    <p>No rules found matching "${escapeHtml(searchTerm)}"</p>
                `;
                document.getElementById('rulesAccordion').appendChild(noResults);
            }
        } else if (noResults) {
            noResults.remove();
        }
    });
}

function highlightText(element, term) {
    const body = element.querySelector('.accordion-body');
    
    // CRITICAL: Remove ALL existing highlights and normalize the DOM first
    removeHighlights(element);
    
    // Don't highlight if term is too short or could match HTML attributes
    if (term.length < 2) return;
    
    const regex = term.includes('-') || term.includes(' ')
        ? termToFlexibleRegex(term)
        : new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    
    // Only highlight text nodes, not HTML tags
    highlightTextNodes(body, regex);
}

function termToFlexibleRegex(term) {
    const parts = term.split(/[\s-]+/).filter(Boolean).map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (parts.length === 0) return /(?!)/;
    const pattern = parts.join('[\\s\\-]+');
    return new RegExp(`(${pattern})`, 'gi');
}

function highlightTextNodes(node, regex) {
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        regex.lastIndex = 0;
        if (regex.test(text)) {
            const fragment = document.createDocumentFragment();
            let lastIndex = 0;
            
            // Reset regex for matching - must create new regex to avoid state issues
            const freshRegex = new RegExp(regex.source, regex.flags);
            let match;
            
            while ((match = freshRegex.exec(text)) !== null) {
                if (match.index > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
                }
                const span = document.createElement('span');
                span.className = 'highlight';
                span.textContent = match[0];
                fragment.appendChild(span);
                
                lastIndex = match.index + match[0].length;
                
                // Prevent infinite loop with zero-length matches
                if (match[0].length === 0) {
                    break;
                }
            }
            if (lastIndex < text.length) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
            }
            if (fragment.childNodes.length > 0 && node.parentNode) {
                node.parentNode.replaceChild(fragment, node);
            }
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.classList && node.classList.contains('highlight')) {
            return;
        }
        // Convert to array to avoid live NodeList issues during DOM manipulation
        const children = Array.from(node.childNodes);
        children.forEach(child => highlightTextNodes(child, regex));
    }
}

function removeHighlights(element) {
    const body = element.querySelector('.accordion-body');
    if (!body) return;
    const highlights = body.querySelectorAll('.highlight');
    highlights.forEach(span => {
        const parent = span.parentNode;
        const text = span.textContent;
        span.replaceWith(document.createTextNode(text));
        if (parent) {
            parent.normalize();
        }
    });
    body.normalize();
}
