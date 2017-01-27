const path = require('path');
const glob = require('glob');
const base = path.resolve(__dirname, '../');

const allScripts = glob.sync(path.join(__dirname, '../src') + '/**/*.js');

const tests = allScripts.filter(s => (/\.test\.js$/).test(s));
const scripts = allScripts.filter(s => !(/\.(test|disabled|unsafe)\./).test(s));

const untested = scripts.filter(s => !tests.includes(s.replace(/\.js$/,'.test.js')));

if (untested.length) {
  console.error('\n\nThe following scripts do not have a test file.');
  untested
    .map(s => path.resolve(s).replace(base, '').substr(1))
    .forEach(s => console.error(`     ${s}`));
  process.nextTick(() => process.exit(1));
}
