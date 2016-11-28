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
  shell.mkdir(dist);

  shell.cd(path.resolve(__dirname, '../'));
  shell.exec('cross-env NODE_ENV=production webpack --production');
}

main().catch(err => console.error(err.stack));
