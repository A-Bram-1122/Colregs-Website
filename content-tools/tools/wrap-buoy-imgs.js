const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', '..', '..', 'lights-signals.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const emptyFixes = [
  [/src="" alt="Cardinal mark"/, 'src="reference/Photos/Bouys/Cardinal-Markers.png" alt="Cardinal mark"'],
  [/src="" alt="Isolated danger mark"/, 'src="reference/Photos/Bouys/Isolated-Danger-Marks.png" alt="Isolated danger mark"'],
  [/src="" alt="Safe water mark"/, 'src="reference/Photos/Bouys/Safe-Water-Marks.png" alt="Safe water mark"'],
  [/src="" alt="Special mark"/, 'src="reference/Photos/Bouys/Special-Marks.png" alt="Special mark"'],
  [/src="" alt="Emergency wreck marking buoy"/, 'src="reference/Photos/Bouys/emergency-wreck-01.jpg" alt="Emergency wreck marking buoy"'],
];
for (const [re, rep] of emptyFixes) {
  html = html.replace(re, rep);
}

html = html.replace(/<img\s+([^>]*\bbuoy-img\b[^>]*)>/g, (match, attrs) => {
  const sm = attrs.match(/\bsrc="([^"]*)"/);
  const src = sm ? sm[1] : '';
  if (!src) return match;
  return `<a href="${src}" class="buoy-img-link" target="_blank" rel="noopener noreferrer"><img ${attrs}></a>`;
});

fs.writeFileSync(htmlPath, html);
console.log('Updated', htmlPath);
