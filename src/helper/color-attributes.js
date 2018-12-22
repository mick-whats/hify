args2 = require('args2')

/**
 * colorAttributes
 *
 * @param {*} obj
 * @returns
 */

/**
 * colorAttributes
 *
 * @param {any} _args - arguments
 * @returns {Object}
 * @example
 * const res = fn(
 *   'red',
 *   'blue',
 *   'green',
 *   { id: 'Myid', class: 'cl1' },
 *   { class: 'cl2' }
 * )
 * // -> {
 *   color: 'red',
 *   'background-color': 'blue',
 *   'border-color': 'green',
 *   id: 'Myid',
 *   class: ['cl1', 'cl2']
 * }
 */
function colorAttributes (..._args) {
  const args = new args2(_args)
  const newArgs = Object.create(null)
  const _color = args.str()
  if (_color) {
    newArgs['color'] = _color
  }
  const _bgColor = args.str()
  if (_bgColor) {
    newArgs['background-color'] = _bgColor
  }
  const _borerColor = args.str()
  if (_borerColor) {
    newArgs['border-color'] = _borerColor
  }
  const _class = []

  args.objs.forEach(item => {
    if (item.class) {
      _class.push(item.class)
      delete item.class
    }
    Object.assign(newArgs, item)
  })
  if (_class.length) {
    newArgs.class = _class
  }
  return newArgs
}

module.exports = colorAttributes
