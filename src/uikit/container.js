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
  // main = el.div({ class: 'uk-container' }, [main])
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
  const body = el.body()
  if (header) body.contents.push(header)
  if (side) {
    body.contents.push(
      el.div({ class: 'uk-container' }, [
        el.div({ 'uk-grid': true, class: 'uk-grid' }, [
          el.main({ class: 'uk-width-3-4 uk-row-first uk-first-column' }, [
            main
          ]),
          el.nav({ class: 'uk-width-1-4' }, [side])
        ])
      ])
    )
  } else {
    body.contents.push(el.main({ class: 'uk-container' }, [main]))
  }
  if (footer) body.contents.push(footer)
  return el.html([head, body])
}
