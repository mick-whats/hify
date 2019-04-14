/** @typedef {Object} CreateElement */
const CreateElement = require('../createElement')
const el = require('../element')
const ex = require('../extend')
const chalk = require('chalk')
/**
 * @deprecated
 * uk.navbarに移行します
 * @param {*} { - logo, left, right, style, sticky }
 * @returns
 */
module.exports = ({ logo, left, right, style, sticky }) => {
  console.warn(chalk.red('uk.header is deprecated Please use uk.navbar'))
  const attr = {
    class: 'uk-navbar-container',
    'uk-navbar': true,
    style: style || {},
    'uk-sticky': !!sticky
  }
  const contents = []
  const _left = el.div({ class: 'uk-navbar-left' })
  const _right = el.div({ class: 'uk-navbar-right' })
  if (logo) {
    let logoElement = null
    if (logo instanceof CreateElement) {
      logoElement = logo
    }
    if (Array.isArray(logo)) {
      let [cont, href] = logo
      href = href || '#'
      logoElement = el.a(cont, { class: 'uk-navbar-item uk-logo', href })
    }
    _left.contents.push(logoElement)
  }
  if (left) {
    _left.contents.push(ex.ul(left, { class: 'uk-navbar-nav' }))
  }
  if (right) {
    _right.contents.push(ex.ul(right, { class: 'uk-navbar-nav' }))
  }
  contents.push(_left, _right)
  return el.header(attr, contents)
}
