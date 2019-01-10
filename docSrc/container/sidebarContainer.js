const { el, ex, uk } = require('../..')

const main = el.div([el.h1('sidebarContainer'), el.p('hogemoge')])
module.exports = uk.sidebarContainer({
  main,
  side: ex.ul(['foo', 'bar', 'baz']),
  title: 'sidebarContainer sample'
})
