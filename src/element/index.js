const globby = require('globby')

let modules = globby.sync('**', { cwd: __dirname, deep: 0 })
modules = modules.filter(s => s !== 'index.js')
// console.log('modules: ', modules)
for (let fileName of modules) {
  fileName = fileName.replace('.js', '')
  module.exports[fileName] = require(`./${fileName}`)
}
// module.exports.div = require('./div')
// module.exports.a = require('./a')
