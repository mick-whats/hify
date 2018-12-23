const CE = require('./createElement')
const createHead = require('./createHead')

/**
 * head
 *
 * @param {*} title
 * @param {*} href
 * @param {*} [attr={}]
 */
function createHtml (obj = {}) {
  const html = new CE('html', {}, [
    obj.head || createHead(),
    obj.body || new CE('body', {}, 'hello world')
  ])
  // head = head or createHead()
  // body = body or new CE('body',{},'hello world')
  return html
}

module.exports = createHtml
