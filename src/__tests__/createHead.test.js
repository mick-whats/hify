const createHead = require('..').CreateElement.createHead
test('basic ', () => {
  const _head = {
    title: 'MyTitle',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'A description of the page', id: 'desc' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no,address=no,email=no' }
    ],
    link: [{ rel: 'stylesheet', href: '/style.css' }]
    // script: [],
    // style: []
  }

  expect(createHead(_head).render()).toBe(
    '<head>' +
      '<title>MyTitle</title>' +
      '<meta charset="utf-8">' +
      '<meta name="description" content="A description of the page" id="desc">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<meta name="format-detection" content="telephone=no,address=no,email=no">' +
      '<link rel="stylesheet" href="/style.css">' +
      '</head>'
  )
})

test('nothing is default', () => {
  expect(createHead().render()).toMatch(
    new RegExp(
      '<head>' +
        '<meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width,initial-scale=1">' +
        '<link rel="stylesheet" href=".*?/github.css">' +
        '</head>'
    )
  )
})
