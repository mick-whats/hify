/* eslint-disable no-undef */
const { CreateElement, el, ex, uk } = require('..')
const side = require('./side')

const ElementUISample = el.div([
  el.div({ id: 'ElementUISample' }, [
    el.h2('url:'),
    el.p('{{ url }}'),
    el.h2('search:'),
    el.p('{{ search }}'),
    el.h2('date'),
    el.p('{{ datetime }}'),
    new CreateElement('el-date-picker', {
      'v-model': 'datetime',
      type: 'date',
      'default-value': '2010/10/01',
      format: 'yyyy/MM/dd',
      'value-format': 'yyyyMMdd',
      ':picker-options': 'pickerOptions1'
    })
  ]),
  ex.script(() => {
    Vue.use(ELEMENT)
    Vue.use(ELEMENT.lang)

    // eslint-disable-next-line no-new
    new Vue({
      el: '#ElementUISample',
      data () {
        return {
          datetime: '',
          url: location.href,
          search: location.search || '',
          pickerOptions1: {
            disabledDate (time) {
              return time.getTime() > Date.now()
            },
            shortcuts: [
              {
                text: 'Today',
                onClick (picker) {
                  picker.$emit('pick', new Date())
                }
              },
              {
                text: 'Yesterday',
                onClick (picker) {
                  const date = new Date()
                  date.setTime(date.getTime() - 3600 * 1000 * 24)
                  picker.$emit('pick', date)
                }
              }
            ],
            onPick (opt) {
              console.log('opt: ', opt)
            }
          }
        }
      }
    })
  }),
  ex.preCode(
    [
      '/* eslint-disable no-undef */',
      "const { CreateElement, el, ex, uk } = require('..')",
      '',
      'const ElementUISample = el.div([',
      "  el.div({ id: 'ElementUISample' }, [",
      "    el.h2('url:'),",
      "    el.p('{{ url }}'),",
      "    el.h2('search:'),",
      "    el.p('{{ search }}'),",
      "    el.h2('date'),",
      "    el.p('{{ datetime }}'),",
      "    new CreateElement('el-date-picker', {",
      "      'v-model': 'datetime',",
      "      type: 'date',",
      "      'default-value': '2010/10/01',",
      "      format: 'yyyy/MM/dd',",
      "      'value-format': 'yyyyMMdd',",
      "      ':picker-options': 'pickerOptions1'",
      '    })',
      '  ]),',
      '  ex.script(() => {',
      '    Vue.use(ELEMENT)',
      "    // Vue.use(ELEMENT, { locale: 'ELEMENT.lang' })",
      '    Vue.use(ELEMENT.lang)',
      '',
      '    // eslint-disable-next-line no-new',
      '    new Vue({',
      "      el: '#ElementUISample',",
      '      data () {',
      '        return {',
      "          datetime: '',",
      '          url: location.href,',
      "          search: location.search || '',",
      '          pickerOptions1: {',
      '            disabledDate (time) {',
      '              return time.getTime() > Date.now()',
      '            },',
      '            shortcuts: [',
      '              {',
      "                text: 'Today',",
      '                onClick (picker) {',
      "                  picker.$emit('pick', new Date())",
      '                }',
      '              },',
      '              {',
      "                text: 'Yesterday',",
      '                onClick (picker) {',
      '                  const date = new Date()',
      '                  date.setTime(date.getTime() - 3600 * 1000 * 24)',
      "                  picker.$emit('pick', date)",
      '                }',
      '              }',
      '            ],',
      '            onPick (opt) {',
      "              console.log('opt: ', opt)",
      '            }',
      '          }',
      '        }',
      '      }',
      '    })',
      '  }),',
      '  ex.preCode([], true),',
      '  el.hr()',
      '])',
      '',
      'const main = el.div([',
      "  el.h1('Element-ui with hify'),",
      '  ex.a(',
      "    'http://element.eleme.io/#/en-US/component/date-picker',",
      "    'http://element.eleme.io/#/en-US/component/date-picker'",
      '  ),',
      '  ElementUISample,',
      '  el.hr()',
      '])',
      'main.assets = [',
      "  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/theme-chalk/index.css',",
      "  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/darcula.min.css',",
      "  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',",
      "  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js',",
      "  'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',",
      "  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/index.js',",
      "  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/locale/en.min.js',",
      '  function () {',
      '    $(document).ready(function () {',
      "      $('pre code').each(function (i, block) {",
      '        hljs.highlightBlock(block)',
      '      })',
      '    })',
      '  }',
      ']',
      "const side = el.div([uk.h2('menu'), el.hr()])",
      '',
      'module.exports = uk.sidebarContainer({',
      '  main,',
      '  side,',
      "  title: 'ElementUI sample'",
      '})',
      ''
    ],
    true
  ),
  el.hr()
])

const main = el.div([
  el.h1('Element-ui with hify'),
  ex.a(
    'http://element.eleme.io/#/en-US/component/date-picker',
    'http://element.eleme.io/#/en-US/component/date-picker'
  ),
  ElementUISample,
  el.hr()
])
main.assets = [
  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/theme-chalk/index.css',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/darcula.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js',
  'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/index.js',
  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/locale/en.min.js',
  function () {
    $(document).ready(function () {
      $('pre code').each(function (i, block) {
        hljs.highlightBlock(block)
      })
    })
  }
]
// const side = el.div([uk.h2('menu'), el.hr()])

module.exports = uk.sidebarContainer({
  main,
  side,
  title: 'ElementUI sample'
})
