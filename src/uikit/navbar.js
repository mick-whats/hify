/** @typedef {Object} CreateElement */
const CreateElement = require('../createElement')
const el = require('../element')
const ex = require('../extend')
/**
 * uk.navbar
 *
 * @see https://getuikit.com/docs/navbar
 * @param {*} { - logo, left, right, style, sticky }
 * @returns
 */
module.exports = ({ logo, left, right, style, sticky }) => {
  // eslint-disable-next-line require-jsdoc
  function listToElement (list) {
    if (!Array.isArray(list)) {
      return null
    }
    const contents = list.map(line => {
      if (!Array.isArray(line)) {
        line = [line]
      }
      if (Array.isArray(line[1])) {
        const dropDownList = el.li([ex.a(String(line[0]), '#')])
        const dropDownItems = line[1].map(dropDownItem => {
          if (Array.isArray(dropDownItem) && dropDownItem.length > 1) {
            return el.li([ex.a(dropDownItem[0], dropDownItem[1])])
          }
          const label = Array.isArray(dropDownItem)
            ? String(dropDownItem[0])
            : String(dropDownItem)
          return label === '---'
            ? el.li({ class: 'uk-nav-divider' })
            : el.li({ class: 'uk-nav-header' }, label)
        })
        dropDownList.contents.push(
          el.div({ class: 'uk-navbar-dropdown' }, [
            el.ul({ class: 'uk-nav uk-navbar-dropdown-nav' }, dropDownItems)
          ])
        )
        return dropDownList
      } else {
        return el.li([ex.a(String(line[0]), String(line[1]))])
      }
    })
    return el.ul(contents, { class: 'uk-navbar-nav' })
  }
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
    _left.contents.push(listToElement(left))
  }
  if (right) {
    _right.contents.push(listToElement(right))
  }
  contents.push(_left, _right)
  return el.nav(attr, contents)
}
