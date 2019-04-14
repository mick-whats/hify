const CE = require('../createElement')
const marked = require('marked')

/**
 * markdown(ez-md)
 *
 * @param {string} cont - markdown text
 * @return {CreateElement}
 * @example
 * el.md('# my header1\n\n## my header2\n\nhello world\n\n---')
 */
function markdown (cont) {
  marked.setOptions({
    breaks: true
  })
  cont = Array.isArray(cont) ? cont : [cont]
  return new CE('div', {}, marked(cont.join('\n')))
}

module.exports = markdown
