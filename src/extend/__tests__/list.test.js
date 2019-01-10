const { ex } = require('../../')
const arr = ['one', 'two', 'three']
test('ul', () => {
  const res = ex.ul(arr).render()
  expect(res).toBe('<ul><li>one</li><li>two</li><li>three</li></ul>')
})
test('ol', () => {
  const res = ex.ol(arr).render()
  expect(res).toBe('<ol><li>one</li><li>two</li><li>three</li></ol>')
})
test('ul with id', () => {
  const res = ex.ul(arr, { id: 'Myid' }).render()
  expect(res).toBe('<ul id="Myid"><li>one</li><li>two</li><li>three</li></ul>')
})
test('string arg', () => {
  const res = ex.ul('paragraph').render()
  expect(res).toBe('<ul><li>paragraph</li></ul>')
})
test('color attributes ', () => {
  const res = ex.ul(arr, 'red', 'gray', { id: 'Myid' }).render()
  expect(res).toBe(
    '<ul style="color:red;background-color:gray;" id="Myid">' +
      '<li>one</li>' +
      '<li>two</li>' +
      '<li>three</li>' +
      '</ul>'
  )
})
test('circular structure', () => {
  const _list = ex.ul(arr)
  _list.contents = [_list]
  const res = _list.render()
  expect(res).toBe('<ul>!!!cyclic object value</ul>')
})
