const CreateElement = require('./createElement')

function head (title, href, attr = {}) {
  const _head = {
    charset: 'utf-8',
    title: CreateElement('title', {}, title),
    meta: [
      { name: 'description', content: 'A description of the page', id: 'desc' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ],
    link: [],
    script: [],
    style: []
  }
}

module.exports = head
