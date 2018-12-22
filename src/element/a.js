const CE = require('../createElement')

/**
 * a (anchor tag)
 *
 * @param {*} cont - content
 * @param {*} href - link url
 * @param {*} [attr={}] - attributes
 * @returns
 */
function a (cont, href, attr = {}) {
  const _attr = { href: href }
  const _el = new CE('a', _attr, cont)
  _el.attributes = Object.assign(_el.attributes, attr)
  return _el
}

module.exports = a
