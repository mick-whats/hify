const createHtml = require('..').CreateElement.createHtml
const el = require('../element')
const cdn = require('../cdn')
test('render ', () => {
  const body = el.p('hello world')
  expect(body.render()).toBe('<p>hello world</p>')
  const html = createHtml({ body })
  expect(html.render()).toMatch(new RegExp('<html>'))
  expect(html.render()).toMatch(
    new RegExp('<head><title>hify</title><meta charset="utf-8">')
  )
  expect(html.render()).toMatch(
    new RegExp(
      '<meta name="viewport" content="width=device-width,initial-scale=1">'
    )
  )
  expect(html.render()).toMatch(
    new RegExp('</head><body><p>hello world</p></body></html>')
  )
})
test('toHtml ', async () => {
  const p = el.p('hello world')
  p.addAssets(['test.css', 'test.js'])
  p.addAssets([cdn.highlightJs_darcula])
  const body = el.body([p])
  body.addAssets(['test.css', 'test.js'])
  const html = createHtml({ body })
  html.addAssets(['test.css', 'test.js'])

  // console.log('html: ', html.contents[1].contents[0]._assets)
  const res = await html.toHtml()
  expect(res).not.toMatch(
    new RegExp(
      'uikit/3.0.0-rc.25/css/uikit.min.css' +
        '[\\s\\S]*?' +
        'uikit/3.0.0-rc.25/css/uikit.min.css'
    )
  )
  expect(res).toMatch(new RegExp('<html>'))
  expect(res).toMatch(new RegExp('<head>'))
  expect(res).toMatch(new RegExp('<title>hify</title>'))
  expect(res).toMatch(new RegExp('<meta charset="utf-8">'))
  expect(res).toMatch(
    new RegExp(
      '<meta name="viewport" content="width=device-width,initial-scale=1">'
    )
  )
  // expect(res).toMatch(new RegExp('<style>[\\s\\S]*?</style>'))

  expect(res).toMatch(new RegExp('<link rel="stylesheet" href="test.css">'))
  expect(res).toMatch(new RegExp('<script src="test.js"></script>'))
  expect(res).not.toMatch(
    new RegExp(
      '<script src="test.js"></script>' +
        '[\\s\\S]*?' +
        '<script src="test.js"></script>'
    )
  )
  expect(res).toMatch(new RegExp('</head>'))
  expect(res).toMatch(new RegExp('</html>'))
})
