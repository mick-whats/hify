const CE = require('../createElement')
const colorAttributes = require('../helper/color-attributes')
const tagList = require('./tagList')
// const modules = Object.create(null)
tagList.forEach(tagItem => {
  const tag = tagItem[0]
  const tagArgs = tagItem[1]

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
      module.exports.br = require(`./br`)
      break
    default:
      if (tagArgs.length) {
        // TODO:
        const _contents = tagArgs[0]
        const _argKey = tagArgs[1] === 'attr' ? null : tagArgs[1]
        const _attr = tagArgs.find(item => item === 'attr')
      } else {
        module.exports[tag] = function (cont, ...args) {
          const attr = colorAttributes(...args)
          return new CE(tag, attr, cont)
        }
      }
      break
  }
  // if (tag === 'a' || tag === 'abbr') {
  //   module.exports[tag] = function (cont, argValue, ...args) {
  //     args.push({ [tagArgs[1]]: argValue })
  //     const attr = colorAttributes(...args)
  //     return new CE(tag, attr, cont)
  //   }
  // } else if (tag === 'br') module.exports.br = require(`./br`)
  // else {
  //   module.exports[tag] = function (cont, ...args) {
  //     const attr = colorAttributes(...args)
  //     return new CE(tag, attr, cont)
  //   }
  // }
})

// other
const list = require('./list')
module.exports.ulist = (cont, ...args) => list('ul', cont, ...args)
module.exports.olist = (cont, ...args) => list('ol', cont, ...args)
module.exports.tbl = require('./tbl')
module.exports.md = require('./markdown')
