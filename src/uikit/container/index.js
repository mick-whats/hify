/** @typedef {Object} CreateElement */
const CE = require('../../createElement')
const el = require('../../element')
// const ex = require('../../extend')
// const cdn = require('../../cdn')

module.exports.container = ({ main, side, header, footer, title, head }) => {
  if (main == null) {
    throw new Error('mainは必須です')
  }
  if (head == null) {
    head = CE.defaultHead(title)
  }
  if (!header == null) {
    return el.html([head, el.body([header, main])])
  }
}
