import Promise from 'bluebird';
import React from 'react';
import ReactDOM from 'react-dom/server';
import register from 'ignore-styles';
import logger from './logger';

// don't do style loading for server-side react
register(['.css', '.scss', '.sass']);

// setup globals
global.Promise = Promise;
global.React = React;
global.ReactDOM = ReactDOM;
global.logger = logger;
require('babel-runtime/core-js/promise').default = Promise;

const server = require('./server').default;

export default server;
