const fs = require('fs');
const source = fs.readFileSync(require.resolve('./App.js'), 'utf8');
if (/YBM Techno Craft/i.test(source)) {
  console.log('Test passed');
} else {
  console.error('Header text not found');
  process.exit(1);
}
