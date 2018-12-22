const { el } = require('../../')

test('string arg ', () => {
  const res = el.p('paragraph').render()
  expect(res).toBe('<p>paragraph</p>')
})
test('Array arg', () => {
  const res = el.p(['paragraph', 'no.5']).render()
  expect(res).toBe('<p>paragraphno.5</p>')
})
test('simple attributes ', () => {
  const res = el.p('paragraph', { id: 'Myid' }).render()
  expect(res).toBe('<p id="Myid">paragraph</p>')
})
test('color attributes ', () => {
  const res = el.p('paragraph', 'red', 'gray', { id: 'Myid' }).render()
  expect(res).toBe(
    '<p id="Myid" style="color:red;background-color:gray;">paragraph</p>'
  )
})
test('circular structure', () => {
  const _p = el.p('foo')
  _p.contents = [_p]
  const res = _p.render()
  expect(res).toBe('<p>!!!cyclic object value</p>')
})
test('not circular structure', () => {
  const _p = el.p('foo')

  const res = el.div([_p, _p]).render()
  expect(res).toBe('<div><p>foo</p><p>foo</p></div>')
})
