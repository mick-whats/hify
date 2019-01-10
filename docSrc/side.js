const { el, ex, uk } = require('..')
const path = require('path')
const globby = require('globby')

const list = globby.sync(['*', '!*make.js', '!*side.js'], {
  cwd: __dirname
})
// console.log('list: ', list)
const files = list.map(filePath => {
  return ex.a(
    path.basename(filePath),
    filePath.replace(/.js$/, '') + '.html'
    // path.join(__dirname, '../examples', filePath.replace(/.js$/, '') + '.html')
  )
})
module.exports = el.div([
  uk.h2('links'),
  ex.ul(files, { class: 'uk-nav uk-nav-default' })
])
