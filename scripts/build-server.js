/* eslint
  no-undef:"off",
  no-console:"off",
  global-require: "off",
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
  const files = glob.sync('./src/**/*', { nodir: true }).filter(f => !(/(disabled|test)/).test(f));

  for (const file of files) {
    let s = await fs.readFile(file);

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
