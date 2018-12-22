const colorAttributes = require('../color-attributes')

test('basic ', () => {
  const fn = (...args) => {
    return colorAttributes(...args)
  }
  const res = fn(
    'red',
    'blue',
    'green',
    { id: 'Myid', class: 'cl1' },
    { class: 'cl2' }
  )
  expect(res).toEqual({
    style: {
      color: 'red',
      'background-color': 'blue',
      'border-color': 'green'
    },
    id: 'Myid',
    class: ['cl1', 'cl2']
  })
})
test('base and other ', () => {
  const fn = (str1, str2, ...args) => {
    return colorAttributes(...args)
  }
  const res = fn(
    'red',
    'blue',
    'green',
    { id: 'Myid', class: 'cl1' },
    { class: 'cl2' }
  )
  expect(res).toEqual({
    style: { color: 'green' },
    id: 'Myid',
    class: ['cl1', 'cl2']
  })
})
test('nothing', () => {
  const fn = (...args) => {
    return colorAttributes(...args)
  }
  const res = fn()
  expect(res).toEqual({})
})
