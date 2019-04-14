const { el, ex } = require('../..')

test('hr', () => {
  expect(el.hr('red').render()).toBe('<hr>')
  expect(ex.hr('red').render()).toBe('<hr style="color:red;">')
  expect(el.hr({ id: 'MyId' }).render()).toBe(ex.hr({ id: 'MyId' }).render())
})
test('link', () => {
  expect(el.link({ rel: 'stylesheet', href: 'uikit.min.css' }).render()).toBe(
    '<link rel="stylesheet" href="uikit.min.css">'
  )
})
test('a', () => {
  expect(ex.a('text', 'url').render()).toBe('<a href="url">text</a>')
  expect(ex.a(['text'], 'url').render()).toBe('<a href="url">text</a>')
})
