/* eslint
  import/no-extraneous-dependencies: "off",
  global-require:"off",
  import/no-dynamic-require:"off"
*/
import path from 'path';
import glob from 'glob';

describe('Ensure Code Coverage', () => {
  it('Load all non-test files for coverage checks.', () => {
    const allScripts = glob
      .sync(`${path.resolve(__dirname)}/**/*.js`)
      .filter(s => !(/\.(test|disabled)\.$/).test(s));

    for (const script of allScripts) {
      require(script);
    }
  });
});
