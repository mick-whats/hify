const Args2 = require('args2')
const CE = require('../createElement')
const el = require('../element')
const colorAttributes = require('../helper/color-attributes')
const tagList = require('../tagList')
const isSimpleTag = require('../helper/isSimpleTag')
const isFunction = require('../helper/isFunction')
const escapeGoat = require('escape-goat')
tagList.forEach(tagItem => {
  const [tag, tagArgs] = tagItem

  switch (tag) {
    case 'a':
    case 'abbr':
      module.exports[tag] = function (cont, argValue, ...args) {
        args.push({ [tagArgs[1]]: argValue })
        const attr = colorAttributes(...args)
        return new CE(tag, attr, cont)
      }
      break

    case 'br':
      module.exports[tag] = require(`./br`)
      break
    case 'script':
      module.exports.script = (..._args) => {
        const args = new Args2(_args)
        let fn = args.func() || args.array() || args.str()
        if (isFunction(fn)) {
          fn = `(${fn})()`
        }
        const attr = Object.assign({}, ...args.objs)
        return new CE('script', attr, fn)
      }
      break
    default:
      if (isSimpleTag(tag)) {
        module.exports[tag] = function (...args) {
          const attr = colorAttributes(...args)
          return new CE(tag, attr)
        }
      } else {
        module.exports[tag] = function (cont, ...args) {
          const attr = colorAttributes(...args)
          return new CE(tag, attr, cont)
        }
      }
      break
  }
})

// other
const list = require('./list')
module.exports.ul = (cont, ...args) => list('ul', cont, ...args)
module.exports.ol = (cont, ...args) => list('ol', cont, ...args)
module.exports.table = require('./table')
module.exports.md = require('./markdown')
module.exports.sidebarContainer = require('./sidebarContainer')
module.exports.preCode = (cont, escape = true) => {
  cont = Array.isArray(cont) ? cont.join('\n') : cont
  const _cont = escape ? escapeGoat.escape(cont) : cont
  return el.pre([el.code({ class: 'js' }, _cont)], {
    style: { 'white-space': 'pre-wrap;' }
  })
}
