/* eslint no-console:"off" */
import logger from './logger';

export default function handleGlobalException(err) {
  try {
    logger.fatal(err);
  } catch (error) {
    console.error(error);
  }
  setTimeout(() => process.exit(666), 10);
}
