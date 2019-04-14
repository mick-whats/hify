const navbar = require('../../..').uk.navbar
test('uikit navbar test ', async () => {
  const logo = ['Hify', '/']
  const list = [
    ['link a', '#a'],
    [
      'link b',
      [
        ['label 1'],
        ['1-2', '#b1-2'],
        ['1-3', '#b1-3'],
        ['---'],
        'label 2',
        ['2-2', '#b2-2'],
        ['2-3', '#b2-3']
      ]
    ],
    ['link c', '#c']
  ]
  const _navbar = navbar({
    logo: logo,
    left: list,
    right: list,
    style: { 'background-color': '#abc' }
  })
  // await _navbar.toBrowser()
  const res = await _navbar.toHtml()
  expect(res).toMatchSnapshot()
})
