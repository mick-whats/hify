const { CreateElement } = require('..')
const path = require('path')
const fs = require('fs-extra')
const _ = require('lodash-core')
const logger = require('eazy-logger').Logger({
  prefix: '{blue:[}{magenta:hify}{blue:] }'
})
const readLinePromise = require('../src/helper/readLinePromise')
const isPromise = object => {
  return Object.prototype.toString.call(object) === '[object Promise]'
}
const glob = require('tiny-glob')
const mkdir = require('make-dir')

module.exports = async options => {
  if (options.silent) {
    logger.setLevel('error')
  }
  const srcDir = options.src ? path.normalize(options.src) : 'src'
  const destDir = options.dest ? path.normalize(options.dest) : 'dest'
  let list = await glob(`${srcDir}/**/*{.h.js,.hify.js}`)
  list = list.filter(_path => {
    return !/\/assets\//.test(_path)
  })
  // console.log('list: ', list)
  let ans = null
  if (!options.force) {
    ans = await readLinePromise('Do you want to do it? (y/n)')
  }
  if (options.force || ans === 'y' || ans === 'Y') {
    // assets以下とfavicon.icoはコピーする
    try {
      await fs.copy(path.join(srcDir, 'assets'), path.join(destDir, 'assets'))
      await fs.copy(
        path.join(srcDir, 'favicon.ico'),
        path.join(destDir, 'favicon.ico')
      )
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }

    for (const item of list) {
      const srcPath = path.join(process.cwd(), item)
      const outPath = path.join(
        process.cwd(),
        item
          .replace(new RegExp(`^${srcDir}`), destDir)
          .replace(/\.(hify|h).js$/, '.html')
      )
      logger.info('srcPath: ', srcPath)
      logger.info('outPath: ', outPath)
      await mkdir(path.dirname(outPath))
      let element = require(srcPath)
      if (_.isFunction(element)) {
        element = await element()
      } else if (isPromise(element)) {
        element = await element
      }
      if (element instanceof CreateElement) {
        await element.toFile(outPath)
      }
      // console.log('done: ', outPath)
    }
    // console.log('end: ', 0)
  } else {
    logger.error('I will stop processing')
    process.exit(0)
  }
}
