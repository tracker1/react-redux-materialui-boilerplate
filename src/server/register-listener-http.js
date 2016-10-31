import http from 'http';
import config from './config';
import logger from './logger';

export default function registerHttp(app) {
  const { httpPort } = config.express;
  if (!httpPort) return Promise.resolve(null); // nothing to load

  return new Promise((resolve, reject) => {
    http.createServer(app).listen(httpPort, (err) => {
      if (err) return reject(err);
      logger.info(`Listening for HTTP requests on port ${httpPort}.`);
      return resolve();
    });
  });
}
