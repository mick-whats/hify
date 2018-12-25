const { CreateElement } = require('..')
const { el } = require('..')

test('should ', () => {
  // a-tag attributes style
  const _style = {
    style: { color: 'green', 'background-color': 'gray' }
  }
  // a-tag
  const _a = el.a('link.text', 'link.url', _style)
  // main element
  const div = el.div([
    new CreateElement('h1', {}, _a),
    el.hr(),
    el.a('link2', 'link2.url'),
    el.br(),
    el.hr('hello', _style),
    el.img('hello', _style),
    el.md([
      '```',
      'function markdown (cont) {',
      '  marked.setOptions({',
      '    breaks: true',
      '  })',
      '  cont = Array.isArray(cont) ? cont : [cont]',
      "  return new CE('div', {}, marked(cont.join('\\n')))",
      '}',
      '```'
    ]),
    el.abbr('Node.js', 'Node.js is an open-source', 'gray')
  ])
  // expect(div.render()).toBe(
  //   '<div><h1><a style="color:red;" href="link.url">link.text</a></h1>' +
  //     '<br><br><br><a href="link2.url">link2</a></div>'
  // )
  div.writeFile()
})

test('bind function', () => {
  const fn = cont => {
    const _p = el.p(cont)
    _p.attributes = { style: { color: 'red' } }
    return _p
  }
  const res = fn('paragraph').render()
  expect(res).toBe('<p style="color:red;">paragraph</p>')
})
