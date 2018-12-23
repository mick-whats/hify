const createHtml = require('..').CreateElement.createHtml
const el = require('../element')

test('should ', () => {
  const body = el.p('hello world')
  expect(body.render()).toBe('<p>hello world</p>')
  const html = createHtml({ body })
  expect(html.render()).toMatch(
    new RegExp(
      '<html>' +
        '<head><meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width,initial-scale=1">' +
        '<link rel="stylesheet" href="/Users.*?/css/github.css">' +
        '</head>' +
        '<p>hello world</p>' +
        '</html>'
    )
  )
})
