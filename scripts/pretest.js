const path = require('path');
const glob = require('glob');
const base = path.resolve(__dirname, '../');

const allScripts = glob.sync(path.join(__dirname, '../src') + '/**/*.js');

const tests = allScripts.filter(s => !(/\.disabled\./).test(s)).filter(s => (/\.test\.js$/).test(s));
const scripts = allScripts.filter(s => !(/\.(test|disabled)\.$/).test(s));

const untested = scripts.filter(s => !tests.includes(s.replace(/\.js$/,'.test.js')));

if (untested.length) {
  console.error('The following scripts do not have a test file.');
  for (var s of untested) {
    console.error(`     ${path.resolve(s).replace(base, '').substr(1)}`);
  }
  process.nextTick(() => process.exit(1));
}
