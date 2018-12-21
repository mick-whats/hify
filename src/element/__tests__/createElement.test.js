const CreateElement = require('../createElement')
const el = require('../')

test('should ', () => {
  const _style = {
    style: { color: 'red' }
  }
  const _a = el.a('link.text', 'link.url', _style)
  const div = el.div([
    new CreateElement('h1', {}, _a),
    el.br(3),
    el.a('link2', 'link2.url')
  ])
  expect(div.render()).toBe(
    '<div><h1><a href="link.url" style="color:red;">link.text</a></h1>' +
      '<br><br><br><a href="link2.url">link2</a></div>'
  )
  // console.log('div: ', div)
  // console.log('div: ', div.render())
})
