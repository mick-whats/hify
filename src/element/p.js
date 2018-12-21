const CE = require('./createElement')

/**
 * p (paragraph tag)
 *
 * @param {*} cont - content
 * @param {*} href - link url
 * @param {*} [attr={}] - attributes
 * @returns
 */
function p (cont, attr = {}) {
  return new CE('p', attr, cont)
}

module.exports = p
