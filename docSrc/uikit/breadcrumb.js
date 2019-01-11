const { el, ex, uk } = require('../../')
const breadcrumb = uk.breadcrumb
const container = uk.container

// test('uikit header test ', async () => {

const list = [['foo', '#foo'], ['bar', '#bar'], ['baz', '#baz']]
const div = el.div([
  breadcrumb(list),
  ex.preCode([
    "const list = [['foo', '#foo'], ['bar', '#bar'], ['baz', '#baz']]",
    'const div = el.div([',
    '  breadcrumb(list),',
    '  ex.preCode([',
    '    ',
    '  ])',
    '])'
  ])
])

module.exports = container({ main: div })
// const res = await con.htmlify()
//   expect(res).toMatchSnapshot()
// })
