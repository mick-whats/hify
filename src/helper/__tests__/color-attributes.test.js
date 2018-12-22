const fn = require('../color-attributes')

test('should ', () => {
  const res = fn(
    'red',
    'blue',
    'green',
    { id: 'Myid', class: 'cl1' },
    { class: 'cl2' }
  )

  expect(res).toEqual({
    color: 'red',
    'background-color': 'blue',
    'border-color': 'green',
    id: 'Myid',
    class: ['cl1', 'cl2']
  })
})
