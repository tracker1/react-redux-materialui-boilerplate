// for now, using console, using require for testing
var c = require('console');

// TODO: map to appropriate logger tool
var logger = {
  error: (...args) => c.error(...args),
  warn: (...args) => c.warn(...args),
  log: (...args) => c.log(...args),
  info: (...args) => c.info(...args),
  debug: (...args) => c.log(...args),
};

export default logger;
