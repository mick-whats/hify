// const globby = require('globby')

// let modules = globby.sync('**', { cwd: __dirname, deep: 0 })
// // modules = modules.filter(s => s !== 'index.js')
// // console.log('modules: ', modules)
// for (let fileName of modules) {
//   fileName = fileName.replace('.js', '')
//   module.exports[fileName] = require(`./${fileName}`)
// }
// // module.exports.div = require('./div')
// // module.exports.a = require('./a')

// module.exports = require('./modules')

const CE = require('../createElement')
const colorAttributes = require('../helper/color-attributes')
const tagList = require('./tagList')
// const modules = Object.create(null)
tagList.forEach(tagItem => {
  const tag = tagItem[0]
  const tagCategory = tagItem[1]
  const tagArgs = tagItem[2]

  if (tag === 'a') {
    module.exports.a = function (cont, href, attr = {}) {
      const _attr = { href: href }
      const _el = new CE('a', _attr, cont)
      _el.attributes = Object.assign(_el.attributes, attr)
      return _el
    }
  } else if (tag === 'br') module.exports.br = require(`./br`)
  else {
    module.exports[tag] = function (cont, ...args) {
      const attr = colorAttributes(...args)
      return new CE(tag, attr, cont)
    }
  }
})

// function a (cont, href, attr = {}) {
//   const _attr = { href: href }
//   const _el = new CE('a', _attr, cont)
//   _el.attributes = Object.assign(_el.attributes, attr)
//   return _el
// }
