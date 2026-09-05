const fs = require('fs');
const path = require('path');
const htmlPath = path.join(__dirname, '..', '..', 'lights-signals.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(
  /<a href="([^"]+)" class="buoy-img-link" target="_blank" rel="noopener noreferrer">(<img[^>]+>)<\/a>/g,
  '$2'
);
fs.writeFileSync(htmlPath, html);
