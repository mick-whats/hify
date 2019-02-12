const el = require('../element')

module.exports = list => {
  const labels = []
  const bodys = []
  list.forEach(item => {
    labels.push(el.li([el.a({ href: '#' }, [item[0]])]))
    bodys.push(el.li([item[1]]))
  })

  return el.div([
    el.ul(
      {
        class: 'uk-subnav uk-subnav-pill',
        'uk-switcher': true
      },
      labels
    ),
    el.ul(
      {
        class: 'uk-switcher uk-margin'
      },
      bodys
    )
  ])
}
