/* eslint
  no-undef:"off",
  no-console:"off",
  global-require: "off",
  no-continue: "off"
*/
import './_init';

console.log('build.js');
async function main() {
  const dist = path.resolve(__dirname, '../dist');

  // create dist
  console.log('mkdir dist');
  if (!fs.existsSync(dist)) {
    shell.mkdir(dist);
  }

  shell.cd(path.resolve(__dirname, '../'));
  const files = glob.sync('./src/**/*', { nodir: true })
    .filter(f => !(/(disabled|test)/).test(f))
    .map(f => f.replace(/\\/g, '/'));

  for (let file of files) {
    // if it's the dev middleware, skip
    if (file === './src/server/middleware/development.js') {
      continue;
    }

    let s = await fs.readFile(file);

    // if it's the dev-prod middleware, replace dev middleware
    if (file === './src/server/middleware/development-prod.js') {
      file = './src/server/middleware/development.js';
    }

    if ((/\.jsx?$/).test(file)) {
      const o = babel.transform(s, {
        presets: [
          ['modern-node', { loose: true }],
          'stage-0',
          'react',
        ],
        plugins: ['transform-decorators-legacy'],
      });
      s = o.code;
    }

    const outPath = file.replace(/\\/, '/').replace(/^\.\/src\//, './dist/');
    const outDir = path.dirname(outPath);

    console.log(`Saving ${outPath}`);
    if (!fs.existsSync(outDir)) {
      shell.mkdir('-p', outDir);
    }
    await fs.writeFile(outPath, s);
  }
}

main().catch(err => console.error(err.stack));
