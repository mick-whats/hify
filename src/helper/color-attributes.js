const Args2 = require('args2')

/**
 * colorAttributes
 *
 * @param {any} _args - arguments
 * @returns {Object} - attributes object
 * @example
 * const fn = (...args) => {
 *   return colorAttributes(...args)
 * }
 * const res = fn(
 *   'red',
 *   'blue',
 *   'green',
 *   { id: 'Myid', class: 'cl1' },
 *   { class: 'cl2' }
 * )
 * // ->
 * {
 *   style: {
 *     color: 'red',
 *     'background-color': 'blue',
 *     'border-color': 'green'
 *   },
 *   id: 'Myid',
 *   class: ['cl1', 'cl2']
 * }
 */
function colorAttributes (..._args) {
  const args = new Args2(_args)
  const _style = Object.create(null)
  const attributes = Object.create(null)
  const _color = args.str()
  if (_color) {
    _style['color'] = _color
  }
  const _bgColor = args.str()
  if (_bgColor) {
    _style['background-color'] = _bgColor
  }
  const _borerColor = args.str()
  if (_borerColor) {
    _style['border-color'] = _borerColor
  }
  if (Object.keys(_style).length) {
    attributes.style = _style
  }
  const _class = []
  args.objs.forEach(item => {
    if (item.class) {
      _class.push(item.class)
      delete item.class
    }
    Object.assign(attributes, item)
  })
  if (_class.length) {
    attributes.class = _class
  }

  return attributes
}

module.exports = colorAttributes
