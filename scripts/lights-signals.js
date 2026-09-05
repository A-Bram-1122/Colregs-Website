const maritimeFlags = [
    { letter: 'A', phonetic: 'Alfa', international: 'I have a diver down; keep well clear at slow speed', nato: 'I have a diver down; keep well clear at slow speed' },
    { letter: 'B', phonetic: 'Bravo', international: 'I am taking in, discharging, or carrying dangerous cargo', nato: 'I am taking in, discharging, or carrying dangerous cargo' },
    { letter: 'C', phonetic: 'Charlie', international: 'Yes (affirmative)', nato: 'Yes (affirmative)' },
    { letter: 'D', phonetic: 'Delta', international: 'I am maneuvering with difficulty; keep clear', nato: 'I am maneuvering with difficulty; keep clear' },
    { letter: 'E', phonetic: 'Echo', international: 'I am directing my course to starboard', nato: 'I am directing my course to starboard' },
    { letter: 'F', phonetic: 'Foxtrot', international: 'I am disabled; communicate with me', nato: 'Flight operations underway' },
    { letter: 'G', phonetic: 'Golf', international: 'I require a pilot', nato: 'I require a pilot' },
    { letter: 'H', phonetic: 'Hotel', international: 'I have a pilot on board', nato: 'I have a pilot on board' },
    { letter: 'I', phonetic: 'India', international: 'I am altering my course to port', nato: 'Coming alongside' },
    { letter: 'J', phonetic: 'Juliett', international: 'I am on fire and have dangerous cargo; keep clear', nato: 'I am on fire and have dangerous cargo; keep clear' },
    { letter: 'K', phonetic: 'Kilo', international: 'I wish to communicate with you', nato: 'I wish to communicate with you' },
    { letter: 'L', phonetic: 'Lima', international: 'You should stop your vessel immediately', nato: 'You should stop your vessel immediately' },
    { letter: 'M', phonetic: 'Mike', international: 'My vessel is stopped; making no way', nato: 'My vessel is stopped; making no way' },
    { letter: 'N', phonetic: 'November', international: 'No (negative)', nato: 'No (negative)' },
    { letter: 'O', phonetic: 'Oscar', international: 'Man overboard', nato: 'Man overboard' },
    { letter: 'P', phonetic: 'Papa', international: 'The vessel is about to set sail', nato: 'All personnel return to ship; proceeding to sea (in port)' },
    { letter: 'Q', phonetic: 'Quebec', international: 'I request free pratique (clearance)', nato: 'Boat recall; all boats return to ship' },
    { letter: 'R', phonetic: 'Romeo', international: 'Reverse course', nato: 'Preparing to replenish (at sea); Ready duty ship (in port)' },
    { letter: 'S', phonetic: 'Sierra', international: 'I am operating astern propulsion', nato: 'Conducting flag hoist drill' },
    { letter: 'T', phonetic: 'Tango', international: 'Keep clear of me; I am engaged in pair trawling', nato: 'Do not pass ahead of me' },
    { letter: 'U', phonetic: 'Uniform', international: 'You are running into danger', nato: 'You are running into danger' },
    { letter: 'V', phonetic: 'Victor', international: 'I require assistance', nato: 'I require assistance' },
    { letter: 'W', phonetic: 'Whiskey', international: 'I require medical assistance', nato: 'I require medical assistance' },
    { letter: 'X', phonetic: 'X-ray', international: 'Stop carrying out your intentions', nato: 'Stop carrying out your intentions and watch for my signals' },
    { letter: 'Y', phonetic: 'Yankee', international: 'I am dragging my anchor', nato: 'Ship has visual communications duty' },
    { letter: 'Z', phonetic: 'Zulu', international: 'I require a tug', nato: 'I require a tug' }
];

document.addEventListener('DOMContentLoaded', () => {
    loadMaritimeFlags();
    loadLightDiagrams();
    setupSidebarNavigation();
    setupLateralMarksRegionToggle();
});

function setupLateralMarksRegionToggle() {
    const toggle = document.querySelector('.region-toggle');
    const btns = document.querySelectorAll('.region-btn');
    const contents = document.querySelectorAll('.lateral-marks-content');
    if (!toggle || !btns.length || !contents.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const region = this.dataset.region;
            if (!region) return;

            toggle.dataset.active = region;

            btns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            contents.forEach(content => {
                if (content.dataset.region === region) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });
}

function loadLightDiagrams() {
    const basePath = IMAGE_PATHS.DIAGRAMS;
    const placeholder = 'reference/Photos/Light%20Photo/placeholder.jpg';
    document.querySelectorAll('.light-diagram-img[data-diagram]').forEach(img => {
        const id = img.dataset.diagram;
        const mapped = LIGHT_DIAGRAM_MAP[id];
        const filename = mapped || `${id}.jpg`;
        img.src = `${basePath}/${filename}`;
        img.onerror = function() {
            if (this.dataset.triedPng) {
                this.onerror = null;
                this.src = placeholder;
            } else {
                this.dataset.triedPng = '1';
                this.src = mapped ? placeholder : `${basePath}/${id}.png`;
            }
        };
    });
}

function setupSidebarNavigation() {
    const navButtons = document.querySelectorAll('.category-button');
    const sections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => section.classList.remove('active'));
            const target = document.getElementById(`${targetSection}-section`);
            if (target) {
                target.classList.add('active');
            }
        });
    });
}

function loadMaritimeFlags() {
    const flagsGrid = document.getElementById('flagsGrid');
    if (!flagsGrid) return;

    maritimeFlags.forEach((flag) => {
        const card = document.createElement('div');
        card.className = 'flag-card';
        card.dataset.flag = flag.letter;

        const sameMeaning = flag.international === flag.nato;
        const esc = typeof escapeHtml === 'function' ? escapeHtml : (t) => (t == null ? '' : String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'));
        const escAttr = typeof escapeAttr === 'function' ? escapeAttr : (t) => (t == null ? '' : String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        const meaningHtml = sameMeaning
            ? `<div class="meaning-block"><strong>International / NATO:</strong> ${esc(flag.international)}</div>`
            : `<div class="meaning-block"><strong>International:</strong> ${esc(flag.international)}</div>
               <div class="meaning-block"><strong>NATO:</strong> ${esc(flag.nato)}</div>`;

        card.innerHTML = `
            <div class="flag-display">
                <img src="${escAttr(IMAGE_PATHS.FLAGS + '/' + flag.letter + '.jpg')}" alt="Flag ${escAttr(flag.letter)} - ${escAttr(flag.phonetic)}" class="flag-img" width="138" height="133" loading="lazy">
            </div>
            <div class="flag-info">
                <h3>${esc(flag.letter)} - ${esc(flag.phonetic)}</h3>
                <div class="flag-meaning">
                    ${meaningHtml}
                </div>
            </div>
        `;

        flagsGrid.appendChild(card);
    });
}
