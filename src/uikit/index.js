// eslint-disable-next-line jsdoc/require-example
/** @typedef {Object} CreateElement */
const CE = require('../createElement')
const el = require('../element')
const ex = require('../extend')
const cdn = require('../cdn')

const tables = require('./tables')
module.exports.table1 = tables.table1
module.exports.table2 = tables.table2
module.exports.table3 = tables.table3
module.exports.table4 = tables.table4
module.exports.table5 = tables.table5
module.exports.table6 = tables.table6
module.exports.table7 = tables.table7
module.exports.table8 = tables.table8
module.exports.table9 = tables.table9
module.exports.header = require('./header')
module.exports.switcher = require('./switcher')
module.exports.container = require('./container')
module.exports.breadcrumb = list => {
  let last = list.pop()
  last = Array.isArray(last) ? last[0] : last
  const _list = list.map(item => {
    return ex.a(...item)
  })
  _list.push(el.span(last))
  return ex.ul(_list, { class: 'uk-breadcrumb' })
}
/**
 * defaultHead
 * htmlのhead部分
 * uikit v3.0.0をcdnから読み込む
 *
 * @param {string} [title='hify'] - html title
 * @returns {CreateElement} - instance
 */
function defaultHead (title = 'hify') {
  const _head = new CE('head', {}, [
    new CE('title', {}, title),
    new CE('meta', { charset: 'utf-8' }),
    new CE('meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1'
    })
  ])
  _head.addAssets(cdn.uikit)
  return _head
}
module.exports.defaultHead = defaultHead
/**
 *
 * @typedef {Object} CreateElement
 * @param {Object} args - { headContent, side, main, title }
 * @param {CreateElement} args.head
 * @param {CreateElement} args.side
 * @param {string} args.title
 * @param {CreateElement} args.headContent
 * @returns {CreateElement}
 * @example
 * sidebarContainer({main})
 */
module.exports.sidebarContainer = function ({ headContent, side, main, title }) {
  const head = defaultHead(title)
  if (headContent) head.contents.push(...headContent)
  const body = el.body([
    el.div(
      {
        class: 'uk-container .uk-container-large'
      },
      [
        el.div({ 'uk-grid': true }, [
          el.div({ class: 'uk-width-3-4 uk-row-first' }, [main]),
          el.div({ class: 'uk-width-1-4 uk-background-muted' }, [side])
        ])
      ]
    )
  ])
  return CE.createHtml({ head, body })
}

module.exports.h1 = (cont, attr) => {
  return ex.h1(cont, { class: 'uk-heading-hero' }, attr)
}
module.exports.h2 = (cont, attr) => {
  return ex.h2(cont, { class: 'uk-heading-primary' }, attr)
}
