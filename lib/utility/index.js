/* eslint-disable global-require */
/**
 * Base utility library. This lets each useful function
 * be contained in it's own file rather than having
 * one large utility class with many functions. It also
 * makes it so that each client file can pull in only the
 * functionality that it needs rather than an entire
 * utility class with many functions that it doesn't need.
 */

module.exports = {
  getElementIndex: require('./getElementIndex')
};
