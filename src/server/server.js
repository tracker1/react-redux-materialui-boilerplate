/* eslint global-require:"off", no-console:"off" */
import express from 'express';

import middleware from './middleware';
import handleGlobalException from './global-exception-handler';
import registerHttp from './register-listener-http';
import registerHttps from './register-listener-https';

// main process
export default async function main() {
  try {
    process.on('uncaughtException', handleGlobalException);
    process.on('SIGINT', () => {
      console.log('Shutting down.');
      setTimeout(() => process.exit(), 10);
    });

    // new express app
    const app = express();

    // configure via middleware
    await middleware(app);

    // add listeners
    await Promise.all([
      registerHttp(app),
      registerHttps(app),
    ]);
  } catch (error) {
    handleGlobalException(error);
  }
}
