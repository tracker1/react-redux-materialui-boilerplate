global.Promise = require('bluebird');
require('babel-runtime/core-js/promise').default = require('bluebird');

global.React = require('react');
global.ReactDOM = require('react-dom');

var register = require('ignore-styles').default;
register(['.css','.scss','.sass']);
