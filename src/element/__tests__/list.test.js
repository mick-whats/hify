const { el } = require('../../')
const arr = ['one', 'two', 'three']
test('ulist', () => {
  const res = el.ulist(arr).render()
  expect(res).toBe('<ul><li>one</li><li>two</li><li>three</li></ul>')
})
test('olist', () => {
  const res = el.olist(arr).render()
  expect(res).toBe('<ol><li>one</li><li>two</li><li>three</li></ol>')
})
test('ulist with id', () => {
  const res = el.ulist(arr, { id: 'Myid' }).render()
  expect(res).toBe('<ul id="Myid"><li>one</li><li>two</li><li>three</li></ul>')
})
test('string arg', () => {
  const res = el.ulist('paragraph').render()
  expect(res).toBe('<ul><li>paragraph</li></ul>')
})
test('color attributes ', () => {
  const res = el.ulist(arr, 'red', 'gray', { id: 'Myid' }).render()
  expect(res).toBe(
    '<ul style="color:red;background-color:gray;" id="Myid">' +
      '<li>one</li>' +
      '<li>two</li>' +
      '<li>three</li>' +
      '</ul>'
  )
})
test('circular structure', () => {
  const _list = el.ulist(arr)
  _list.contents = [_list]
  const res = _list.render()
  expect(res).toBe('<ul>!!!cyclic object value</ul>')
})
