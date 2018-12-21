const CE = require('../createElement')

function div (contents, attr = {}) {
  if (!Array.isArray(contents)) contents = [contents]
  const _el = new CE('div', attr, contents)
  return _el
}

module.exports = div
