const header = require('../header')
const { el, ex } = require('../../../')
const container = require('../container')
test('uikit header test ', async () => {
  const logo = ['Hify', '/']
  const list = [
    ex.a('link a', '/a'),
    ex.a('link b', '/b'),
    ex.a('link c', '/c')
  ]
  const div = el.div([
    ex.preCode([
      "  const logo = ['Hify', '/']",
      '  const list = [',
      "    ex.a('link a', '/a'),",
      "    ex.a('link b', '/b'),",
      "    ex.a('link c', '/c')",
      '  ]'
    ]),
    el.h2('only left'),
    ex.preCode(['header({ left: list }),']),
    header({ left: list }),
    el.hr(),
    el.h2('only right'),
    ex.preCode(['header({ right: list }),']),
    header({ right: list }),
    el.hr(),
    el.h2('logo, left, right'),
    ex.preCode(['header({ logo, left: list, right: list }),']),
    header({ logo, left: list, right: list }),
    el.hr(),
    el.h2('logo, left'),
    ex.preCode(['header({ logo, left: list }),']),
    header({ logo, left: list }),
    el.hr(),
    el.h2('logo, right'),
    ex.preCode(['header({ logo, right: list }),']),
    header({ logo, right: list }),
    el.hr(),
    el.h2('style'),
    ex.preCode([
      `header({ logo, right: list, style: { 'background-color': 'lightgreen' } }),`
    ]),
    header({ logo, right: list, style: { 'background-color': 'lightgreen' } })
  ])
  const con = container({ main: div })
  const res = await con.toHtml()
  expect(res).toMatchSnapshot()
})
