import expressMw from './express';
import staticMw from './static';
import devMw from './development';
import errorHandlerMw from './error-handler';
import apiMw from '../../api';
import pageMw from '../page';

export default async function registerMiddleware(app) {
  await expressMw(app);
  await apiMw(app);
  await devMw(app);
  await staticMw(app);
  await pageMw(app);
  await errorHandlerMw(app);
}
