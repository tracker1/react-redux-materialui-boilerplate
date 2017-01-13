import express from 'express';
import errorHandler from './error-handler';
import notFoundHandler from './not-found-handler';

export default async function registerApp(app) {
  const apiApp = express();

  // TODO: api routes go here.


  // 404 handling after all routs
  apiApp.use(notFoundHandler);

  // Error handling last
  apiApp.use(errorHandler);

  // register API on /api route in parent application
  app.use('/api', apiApp);
}
