/* eslint
  no-undef:"off",
  no-console:"off",
  global-require: "off",
*/
import './_init';

console.log('build.js');
async function main() {
  const dist = path.resolve(__dirname, '../dist');

  // rimraf dist
  console.log('rimraf dist');
  await rimraf(dist);

  // create dist
  console.log('mkdir dist');
  shell.mkdir(dist);

  // babel ./server/ to dist/
  console.log('build server');
  shell.exec(`babel-node ${path.resolve(__dirname, './build-server.js')}`)

  // webpack to dist/static/
  console.log('build client');
  shell.exec(`babel-node ${path.resolve(__dirname, './build-client.js')}`)

  // save modified package.json to dist/
  const pkg = require('../package.json');

  delete pkg.devDependencies;
  delete pkg.nyc;
  pkg.main = './server/index.js';
  pkg.scripts = {
    start: 'cross-env NODE_ENV=production node ./server/index.js',
  };

  console.log('package.json');
  await fs.writeFile(path.resolve(dist, 'package.json'), JSON.stringify(pkg, null, 2));

  // create dist/node_modules
  console.log('cd dist', dist);
  shell.cd(dist);

  // npm install --production in dist/
  console.log('npm install --production');
  shell.exec('npm install --production');
  shell.exec('ls');

  shell.cd(path.resolve(__dirname, '../'));
}

main().catch(err => console.error(err.stack));
