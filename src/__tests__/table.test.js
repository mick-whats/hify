const { el, ex } = require('..')
const html1 =
  '<table style="width:80%;">' +
  '<thead>' +
  '<tr style="background-color:silver;">' +
  '<th>name</th><th>age</th><th>sex</th></tr>' +
  '</thead>' +
  '<tbody>' +
  '<tr><td>alice</td><td>17</td><td>female</td></tr>' +
  '<tr><td>bob</td><td>24</td><td>male</td></tr>' +
  '<tr><td>chris</td><td style="color:gold;background-color:gray;">54</td><td>male</td></tr>' +
  '</tbody></table>'
test('table ', () => {
  const _style = {
    style: { border: 'double', 'background-color': 'gray' }
  }
  const table = el.table([
    el.thead([el.tr([el.th('name'), el.th('age'), el.th('sex')])]),
    el.tbody([
      el.tr([el.td('alice'), el.td('17'), el.td('female')]),
      el.tr([el.td('bob'), el.td('24', _style), el.td('male')]),
      el.tr([el.td('chris'), el.td('54'), el.td('male')])
    ])
  ])
  // table.toFile()
  expect(table.render()).toBe(
    '<table>' +
      '<thead>' +
      '<tr><th>name</th><th>age</th><th>sex</th></tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr><td>alice</td><td>17</td><td>female</td></tr>' +
      '<tr><td>bob</td><td style="border:double;background-color:gray;">24</td><td>male</td></tr>' +
      '<tr><td>chris</td><td>54</td><td>male</td></tr>' +
      '</tbody>' +
      '</table>'
  )
})
test('table extend ', () => {
  const table = ex.table(
    [
      [
        'name',
        'age',
        'sex',
        { header: true, style: { 'background-color': 'silver' } }
      ],
      ['alice', 17, 'female'],
      ['bob', 24, 'male'],
      ['chris', ex.td(54, 'gold', 'gray'), 'male']
    ],
    { style: { width: '80%' } }
  )
  // table.toBrowser()
  expect(table.render()).toBe(html1)
})

test('table extend object[]', () => {
  const table = ex.table(
    [
      {
        name: 'alice',
        age: 17,
        sex: 'female',
        // 中身がObjectなら_trAttrというkeynameでなくても良い
        _trAttr: { header: true, style: { 'background-color': 'silver' } }
      },
      {
        name: 'bob',
        age: 24,
        sex: 'male'
      },
      {
        name: 'chris',
        age: ex.td(54, 'gold', 'gray'),
        sex: 'male'
      }
    ],

    { style: { width: '80%' } }
  )
  // table.toFile()
  expect(table.render()).toBe(html1)
})
