const path = require('path')
const fs = require('fs')
const readLinePromise = require('../src/helper/readLinePromise')
// const globby = require('globby')
function isPromise (object) {
  return Object.prototype.toString.call(object) === '[object Promise]'
}
function isAsyncFunction (object) {
  return Object.prototype.toString.call(object) === '[object AsyncFunction]'
}
const glob = require('tiny-glob')
const mkdir = require('make-dir')

module.exports = async options => {
  const srcDir = options.src ? options.src : 'src'
  const destDir = options.dest ? options.dest : 'dest'
  const list = await glob(
    `${srcDir}/**/*.{h.js,hify.js,html.js,doc.js,ico,png,svg}`
  ).catch(err => {
    console.log('err: ', err)
  })
  // console.log('list: ', list)
  let ans = null
  if (!options.force) {
    console.log('list: ', list)
    ans = await readLinePromise('Do you want to do it? (y/n)')
  }
  if (options.force || ans === 'y' || ans === 'Y') {
    for (const item of list) {
      const srcPath = path.join(process.cwd(), item)
      const outPath = path.join(
        process.cwd(),
        item
          .replace(new RegExp(`^${srcDir}`), destDir)
          .replace(/\.(doc|h).js$/, '.html')
      )
      console.log('srcPath: ', srcPath)
      console.log('outPath: ', outPath)
      await mkdir(path.dirname(outPath))

      if (/(png$|svg$|ico$)/.test(item)) {
        fs.copyFileSync(srcPath, outPath)
      } else {
        let element = require(srcPath)
        console.log('isPromise: ', isPromise(element))
        if (isAsyncFunction(element)) {
          // TODO: functionの場合、promiseの場合に対応
          element = await element()
          await element.toFile(outPath)
        } else {
          await element.toFile(outPath)
        }
      }
      console.log('done: ', outPath)
    }
    console.log('end: ', 0)
  } else {
    console.error('I will stop processing')
    process.exit(0)
  }
}
