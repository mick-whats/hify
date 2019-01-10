const path = require('path')
const globby = require('globby')

;(async () => {
  const list = await globby(['*', '!*make.js', '!*side.js'], {
    cwd: __dirname
  }).catch(err => {
    console.log('err: ', err)
  })
  // console.log('list: ', list)
  for (const item of list) {
    const srcPath = item
    const outPath = path.join(
      __dirname.replace('docSrc', 'docs'),
      item.replace(/js$/, 'html')
    )
    console.log('outPath: ', outPath)
    const element = require('./' + srcPath)
    await element.writeFile(outPath)
    console.log('done: ', outPath)
  }
  console.log('end: ', 0)
})()
