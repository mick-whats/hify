const fn = require('../strfy-attributes')

test('example ', () => {
  expect(
    fn({
      id: 'myId',
      class: ['myClass', 'u-20'],
      isHappy: true,
      style: { color: 'red', 'font-size': '14px' },
      alt: ''
    })
  ).toBe(
    ' id="myId" class="myClass u-20" isHappy style="color:red;font-size:14px;" alt=""'
  )
})

test('nothing', () => {
  expect(fn({})).toBe('')
})
