const switcher = require('../switcher')
const { ex } = require('../../../')
test('uikit switcher test ', async () => {
  const res = switcher([
    ['label1', 'body1'],
    ['label2', ex.p('body 2', 'gray', 'gold')]
  ])
  expect(res.render()).toBe(
    '<div>' +
      '<ul class="uk-subnav uk-subnav-pill" uk-switcher>' +
      '<li><a href="#">label1</a></li>' +
      '<li><a href="#">label2</a></li>' +
      '</ul>' +
      '<ul class="uk-switcher uk-margin">' +
      '<li>body1</li>' +
      '<li><p style="color:gray;background-color:gold;">body 2</p></li>' +
      '</ul>' +
      '</div>'
  )
})
