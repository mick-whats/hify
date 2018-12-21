const fn = require('../color-attributes')
console.log(
  'fn: ',
  fn('red', 'blue', 'green', { id: 'Myid', class: 'cl1' }, { class: 'cl2' })
)
expect(1).toBe(1)
