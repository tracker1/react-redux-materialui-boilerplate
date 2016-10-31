global.Promise = require('bluebird');
require('babel-runtime/core-js/promise').default = require('bluebird');

var register = require('ignore-styles').default;
register(['.css','.scss','.sass']);
