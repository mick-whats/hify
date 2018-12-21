const fn = require('../strfy-attributes')

test('should ', () => {
  expect(
    fn({
      id: 'myId',
      class: 'myClass',
      style: { color: 'red' }
    })
  ).toBe(' id="myId" class="myClass" style="color:red;"')
})
