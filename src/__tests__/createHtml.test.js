const createHtml = require('../createHtml')
const el = require('../element')

test('should ', () => {
  const body = el.p('hello world')
  expect(body.render()).toBe('<p>hello world</p>')
  const html = createHtml({ body })
  console.log('html: ', html.render())
})
