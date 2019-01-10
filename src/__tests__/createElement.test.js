const { el } = require('..')

test('assets ', async () => {
  const d1 = el.div()
  d1.assets = 'test1.css'
  d1.assets = 'test1.js'
  d1.assets = () => true
  const d2 = el.div([d1])
  d2.assets = ['test2.css', ['test2.js']]
  const div = el.div([d2])
  const res = await div.htmlify()
  expect(res.includes('<link rel="stylesheet" href="test1.css">')).toBeTruthy()
  expect(res.includes('<script src="test1.js"></script>')).toBeTruthy()
  expect(res.includes('<script>(() => true)()</script>')).toBeTruthy()
  expect(res.includes('<link rel="stylesheet" href="test2.css">')).toBeTruthy()
  expect(res.includes('<script src="test2.js"></script>')).toBeTruthy()
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
