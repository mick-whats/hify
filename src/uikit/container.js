/** @typedef {Object} CreateElement */
const CE = require('../createElement')
const el = require('../element')
const cdn = require('../cdn')
// const ex = require('../../extend')
// const cdn = require('../../cdn')

module.exports = ({ main, side, header, footer, title, head }) => {
  if (main == null) {
    throw new Error('mainは必須です')
  }
  main = el.div({ class: 'uk-container' }, [main])
  if (head == null) {
    head = new CE('head', {}, [
      new CE('title', {}, title),
      new CE('meta', { charset: 'utf-8' }),
      new CE('meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      })
    ])
  }
  head.assets = cdn.uikit

  if (header) {
    const body = el.body([header, main])
    return el.html([head, body])
  } else {
    const body = el.body([main])
    return el.html([head, body])
  }
}
