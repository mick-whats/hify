const tables = require('../tables')
const { ex } = require('../../../')
test('uikit tables test ', async () => {
  const res = tables.table1([
    ['label1', 'body1'],
    ['label2', ex.p('body 2', 'gray', 'gold')]
  ])
  expect(res.render()).toBe(
    '<table class="uk-table"><thead></thead><tbody><tr><td>label1</td><td>body1</td></tr><tr><td>label2</td><p style="color:gray;background-color:gold;">body 2</p></tr></tbody></table>'
  )
})
