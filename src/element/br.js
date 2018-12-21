/* eslint-disable jsdoc/require-example */
const CE = require('./createElement')

/**
 * br
 *
 * @param {number} repeat - repeat count
 * @return {this}
 */
function br (repeat = 1) {
  const _el = new CE('br')
  _el.render = () => '<br>'.repeat(repeat)
  return _el
}

module.exports = br
