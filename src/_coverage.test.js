/* eslint
  import/no-extraneous-dependencies: "off",
  global-require:"off",
  import/no-dynamic-require:"off"
*/
import test from 'tape';
import path from 'path';
import glob from 'glob';

const allScripts = glob
  .sync(`${path.resolve(__dirname)}/**/*.js`)
  .filter(s => !(/\.(test|disabled)\.$/).test(s));

test('Loading all files for coverage check', (t) => {
  t.plan(allScripts.length);
  for (const script of allScripts) {
    require(script);
    t.pass(`Loaded ${script}`);
  }
});
