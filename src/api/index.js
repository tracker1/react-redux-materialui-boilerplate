import express from 'express';

const apiApp = express();

// TODO: api routes go here.

export default async function registerApp(app) {
  app.use('/api', apiApp);
}
