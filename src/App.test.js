const fs = require('fs');
const path = require('path');

const source = fs.readFileSync(require.resolve('./App.js'), 'utf8');
if (!/YBM Techno Craft/i.test(source)) {
  console.error('Header text not found');
  process.exit(1);
}

const imgRegex = /["'`](images\/[^"'`]+)["'`]/g;
let match;
const missing = [];
while ((match = imgRegex.exec(source))) {
  const imgPath = path.resolve(__dirname, '..', match[1]);
  if (!fs.existsSync(imgPath)) {
    missing.push(match[1]);
  }
}

if (missing.length) {
  console.error('Missing images:', missing.join(', '));
  process.exit(1);
}

console.log('Test passed');
