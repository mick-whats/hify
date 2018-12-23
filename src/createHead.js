const CE = require('./createElement')

/**
 * head
 *
 * @param {*} title
 * @param {*} href
 * @param {*} [attr={}]
 */
function createHead (obj) {
  if (!obj) {
    obj = {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' }
      ],
      link: [{ rel: 'stylesheet', href: '/style.css' }]
    }
  }
  const head = new CE('head', {}, [])

  if (obj.title) {
    head.contents.push(new CE('title', {}, obj.title))
  }
  if (obj.meta) {
    for (const _meta of obj.meta) {
      head.contents.push(new CE('meta', _meta))
    }
  }
  if (obj.link && Array.isArray(obj.link)) {
    for (const _link of obj.link) {
      head.contents.push(new CE('link', _link))
    }
  }
  return head
}

module.exports = createHead
