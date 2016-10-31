/* eslint global-require:"off", no-console:"off" */
import express from 'express';

import middleware from './middleware';
import handleGlobalException from './global-exception-handler';
import registerHttp from './register-listener-http';
import registerHttps from './register-listener-https';

// main process
async function main() {
  process.on('uncaughtException', handleGlobalException);

  // new express app
  const app = express();

  // configure via middleware
  await middleware(app);

  // add listeners
  await Promise.all([
    registerHttp(app),
    registerHttps(app),
  ]);
}

// run main process
main().catch(handleGlobalException);
