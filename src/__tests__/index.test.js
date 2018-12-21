const CreateElement = require('../createElement')
const el = require('../element')

test('should ', () => {
  const _style = {
    style: {color: 'red'}
  }
  const _a = el.a('link.text', 'link.url',_style)
  const div = el.div([
    new CreateElement('h1', {}, _a),
    el.br(),
    el.a('link2', 'link2.url')
  ])
  // const div = new CreateElement(
  //   'div', {}, new CreateElement('h1', {}, _a))
  console.log('div: ', div)
  console.log('div: ', div.render())
})
