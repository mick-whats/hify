const CE = require('../createElement')
const colorAttributes = require('../helper/color-attributes')
/**
 * p (paragraph tag)
 *
 * @param {string|Array} cont - content
 * @param {*} [args] - colorAttributes
 * @returns {createElement}
 * @example
 * el.p('paragraph', 'red', 'gray', { id: 'Myid' }).render()
 *  // -> '<p id="Myid" style="color:red;background-color:gray;">paragraph</p>'
 *
 */
function p (cont, ...args) {
  const attr = colorAttributes(...args)
  return new CE('p', attr, cont)
}

module.exports = p
