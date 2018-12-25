const CE = require('../createElement')
const colorAttributes = require('../helper/color-attributes')
/**
 * list (ul || ol)
 *
 * @param {string} tag - ul or ol
 * @param {string} cont - content
 * @param {Array} [args={}] - attributes
 * @return {CreateElement}
 * @example
 * (cont, ...args) => list('ul', cont, ...args)
 *
 */
function list (tag, cont, ...args) {
  if (!Array.isArray(cont)) cont = [cont]
  const attr = colorAttributes(...args)
  const _contents = cont.map(item => {
    return new CE('li', {}, item)
  })
  return new CE(tag, attr, _contents)
}

module.exports = list
