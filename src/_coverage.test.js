var test = require('tape');
var path = require('path');
var glob = require('glob');

var allScripts = glob.sync(path.resolve(__dirname) + '/**/*.js').filter(s => !(/\.test\.js$/).test(s));

test('Loading all files for coverage check', function(t){
  t.plan(allScripts.length);
  for (var script of allScripts) {
    require(script);
    t.pass('Loaded ' + script);
  }
});
