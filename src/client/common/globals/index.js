/* eslint
  no-use-before-define:"off",
  no-nested-ternary:"off"
*/
const w = (
  (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this
);
const noop = (() => {});
const con = w.console || {};

con.log = con.log || noop;
con.info = con.info || con.log || (() => {});
con.warn = con.warn || con.log || (() => {});
con.error = con.error || con.log || (() => {});

export const window = w;
export const console = con;
export const document = w.document || null;
