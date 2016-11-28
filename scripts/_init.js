/* eslint import/no-extraneous-dependencies:"off" */
global.Promise = require('bluebird');
require('babel-runtime/core-js/promise').default = require('bluebird');
global.shell = require('shelljs');
global.rimraf = Promise.promisify(require('rimraf'));
global.path = require('path');
global.fs = require('mz/fs');
global.exec = require('mz/child_process').exec;
global.glob = require('glob');
global.babel = require('babel-core');
