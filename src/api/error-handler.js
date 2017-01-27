import clone from 'fclone';
import logger from './logger';

/* eslint-disable no-unused-vars */
export default (error, req, res, next) => {
/* eslint-enable no-unused-vars */

  // http status code
  let status = ~~(error && error.status) || 500;
  if (status < 200 || status >= 600) status = 500;

  // Clone logError so it's safe for logging.
  const logError = Object.assign(clone(error), { status });
  
  // Error from jwt middleware
  if (error.name === 'UnauthorizedError') {
    logError.inner = undefined;
  }

  // Log server errors
  if (status >= 500) logger.error(logError);

  // Return response nested under "error" to the client
  //  Don't send server-side stack trace to the client
  res.status(status).json({ error: { ...logError, stack: undefined } });
};
