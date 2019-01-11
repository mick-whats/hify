/** @typedef {Object} CreateElement */
const CE = require('../createElement')
const el = require('../element')
const ex = require('../extend')
const cdn = require('../cdn')
// const ex = require('../../extend')
// const cdn = require('../../cdn')

module.exports = ({ logo, left, right, style }) => {
  const attr = {
    class: 'uk-navbar-container uk-margin',
    'uk-navbar': true,
    style: style || {}
  }
  const contents = []
  const _left = el.div({ class: 'uk-navbar-left' })
  const _right = el.div({ class: 'uk-navbar-right' })
  if (logo) {
    let [cont, href] = logo
    href = href || '#'
    _left.contents.push(el.a(cont, { class: 'uk-navbar-item uk-logo', href }))
  }
  if (left) {
    _left.contents.push(ex.ul(left, { class: 'uk-navbar-nav' }))
  }
  if (right) {
    _right.contents.push(ex.ul(right, { class: 'uk-navbar-nav' }))
  }
  contents.push(_left, _right)
  return el.nav(attr, contents)
}
