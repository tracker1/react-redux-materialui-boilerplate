// for now, using console, using require for testing
const console = global.console = global.console || {};
console.log = console.log || (() => {});
console.info = console.info || console.log || (() => {});
console.warn = console.warn || console.log || (() => {});
console.error = console.error || console.log || (() => {});

// TODO: map to appropriate logger tool
const logger = {
  error: (...args) => console.error(...args),
  warn: (...args) => console.warn(...args),
  log: (...args) => console.log(...args),
  info: (...args) => console.info(...args),
  debug: (...args) => console.log(...args),
};

export default logger;
