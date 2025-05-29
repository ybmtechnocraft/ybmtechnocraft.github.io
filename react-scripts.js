#!/usr/bin/env node
const { spawnSync } = require('child_process');
const cmd = process.argv[2];
if (cmd === 'test') {
  const result = spawnSync('node', ['src/App.test.js'], { stdio: 'inherit' });
  process.exit(result.status);
} else {
  console.error('react-scripts stub: command not supported:', cmd);
  process.exit(1);
}
