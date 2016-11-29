// for now, using console, using require for testing
import { console } from './globals';

// TODO: map to appropriate logger tool
const logger = {
  fatal: (...args) => console.error(...args),
  error: (...args) => console.error(...args),
  warn: (...args) => console.warn(...args),
  log: (...args) => console.log(...args),
  info: (...args) => console.info(...args),
  debug: (...args) => console.log(...args),
};

export default logger;
