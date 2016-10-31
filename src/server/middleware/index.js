/* eslint global-require:"off" */

import expressMw from './express';
import staticMw from './static';
import errorHandlerMw from './error-handler';
import apiMw from '../../api';
import pageMw from '../page';

import cfg from '../config';

export default async function registerMiddleware(app) {
  await expressMw(app);
  await apiMw(app);
  if (cfg.isDev) {
    await require('./development')(app);
  }
  await staticMw(app);
  await pageMw(app);
  await errorHandlerMw(app);
}
