const { CreateElement, el } = require('..')

test('collect ', async () => {
  const head = CreateElement.createHead()
  head.addAssets('test.js')
  const div = el.div()
  div.addAssets('test.css')
  const html = el.html([head, div])
  const res1 = await html.toHtml()
  const res2 = await html.toHtml()
  expect(res1).toBe(res2)
})
