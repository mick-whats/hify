const { el, ex, uk } = require('../../../')
const { container } = uk

test('should ', async () => {
  const main = el.div([el.h1('title'), el.p('hello')])
  const header = el.nav(
    {
      class: 'uk-navbar-container uk-margin',
      'uk-navbar': true,
      style: { 'background-color': '#ffcc66' }
    },
    [
      el.div({ class: 'uk-navbar-left' }, [
        el.a('home logo', '/', { class: 'uk-navbar-item uk-logo' }),

        ex.ul([el.a('link a', '/a')], {
          class: 'uk-navbar-nav'
        })
      ])
    ]
  )

  // const res = await container({ main, header }).writeFile()
  // console.log('container: ', res)
})
