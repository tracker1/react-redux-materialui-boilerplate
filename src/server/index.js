const Bluebird = require('bluebird');
const React = require('react');
const ReactDOM = require('react-dom/server');
const register = require('ignore-styles').default;
const logger = require('./logger');

// don't do style loading for server-side react
register(['.css', '.scss', '.sass']);

// setup globals
global.Promise = Bluebird;
global.React = React;
global.ReactDOM = ReactDOM;
global.logger = logger;
require('babel-runtime/core-js/promise').default = Bluebird;

const server = require('./server').default;

module.exports = {
  default: server,
};

if (!module.parent) {
  server().catch((err) => {
    logger.fatal(err);
    process.exit(666);
  });
}
