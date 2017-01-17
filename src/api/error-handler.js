import clone from 'fclone';
import logger from './logger';

export default (req, res, next, error) => {
  const code = (error && error.code) || 500;

  // Clone logError so it's safe for logging.
  const logError = Object.assign(clone(error), { code });

  // Log server errors
  if (code >= 500) logger.error(logError);

  // Return response nested under "error" to the client
  //  Don't send server-side stack trace to the client
  res.status(code).json({ error: { ...logError, stack: undefined } });
};
