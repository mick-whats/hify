/* eslint-disable no-undef */
const { el, ex, uk, cdn } = require('../..')
const side = require('./side')

const main = el.div([
  el.h1('server manual'),
  el.hr(),
  el.h2('usage'),
  el.p(
    '最も簡単な例です。プロジェクト直下に`www`という名のディレクトリを用意して`index.jsを作成します。`'
  ),
  ex.preCode(['www', '├── foo.js', '└── index.js']),
  el.h3('index.js'),
  ex.preCode([
    "const { el, ex } = require('hify')",
    '',
    'module.exports = (params, state, url) => {',
    '  return el.div([',
    "    el.h1('foo page'),",
    "    el.p('hello foo'),",
    "    ex.a('index link','/'),",
    '    ex.br(),',
    "    ex.a('foo link','/foo')",
    '  ])',
    '}',
    ''
  ]),
  el.p('コマンドラインから`hify server`を実行します'),
  ex.preCode([
    '$ hify server',
    'routes:  {',
    "  '': [Function],",
    '}',
    'server start:  http://localhost:8888',
    ''
  ]),
  el.p(
    'これでserverが起動します。`http://localhost:8888`を開いて確認してください。'
  )
])
main.assets = [cdn.vuejs]

module.exports = uk.sidebarContainer({
  main,
  side,
  title: 'vuejs-datepicker sample'
})
