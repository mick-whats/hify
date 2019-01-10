/* eslint-disable no-undef */
const { CreateElement, el, ex, uk } = require('..')
const side = require('./side')
const app1 = el.div([
  el.div({ id: 'app' }, '{{message}}'),
  ex.script(() => {
    window.app = new Vue({
      el: '#app',
      data: { message: 'Hello Vue!' }
    })
  }),
  ex.preCode([
    "  el.div({ id: 'app' }, '{{message}}'),",
    '  ex.script(() => {',
    '    window.app = new Vue({',
    "      el: '#app',",
    "      data: { message: 'Hello Vue!' }",
    '    })',
    '  }),'
  ]),
  el.hr()
])

const app2 = el.div([
  el.div(
    { id: 'app-2', 'v-bind:title': 'message' },
    'Hover your mouse over me for a few seconds to see my dynamically bound title!'
  ),
  ex.script(() => {
    window.app2 = new Vue({
      el: '#app-2',
      data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    })
  }),
  ex.preCode([
    '  el.div(',
    "    { id: 'app-2', 'v-bind:title': 'message' },",
    "    'Hover your mouse over ...'",
    '  ),',
    '  ex.script(() => {',
    '    window.app2 = new Vue({',
    "      el: '#app-2',",
    '      data: {',
    "        message: 'You loaded this page on ' + new Date().toLocaleString()",
    '      }',
    '    })',
    '  }),'
  ]),
  el.hr()
])
const app3 = el.div([
  el.div({ id: 'app-3' }, [
    el.span(
      { 'v-if': 'seen' },
      'Now you see me(enter `app3.seen = false` in the console.)'
    )
  ]),
  ex.script(() => {
    window.app3 = new Vue({
      el: '#app-3',
      data: {
        seen: true
      }
    })
  }),
  ex.preCode([
    "  el.div({ id: 'app-3' }, [",
    '    el.span(',
    "      { 'v-if': 'seen' },",
    "      'Now you see me(enter `app3.seen = false` in the console.)'",
    '    )',
    '  ]),',
    '  ex.script(() => {',
    '    window.app3 = new Vue({',
    "      el: '#app-3',",
    '      data: {',
    '        seen: true',
    '      }',
    '    })',
    '  }),'
  ]),
  el.hr()
])

const app4 = el.div([
  el.div({ id: 'app-4' }, [
    el.ol([el.li({ 'v-for': 'todo in todos' }, '{{  todo.text  }}')])
  ]),
  ex.script(() => {
    window.app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    })
  }),
  ex.preCode([
    "  el.div({ id: 'app-4' }, [",
    "    el.ol([el.li({ 'v-for': 'todo in todos' }, '{{  todo.text  }}')])",
    '  ]),',
    '  ex.script(() => {',
    '    window.app4 = new Vue({',
    "      el: '#app-4',",
    '      data: {',
    '        todos: [',
    "          { text: 'Learn JavaScript' },",
    "          { text: 'Learn Vue' },",
    "          { text: 'Build something awesome' }",
    '        ]',
    '      }',
    '    })',
    '  }),'
  ]),
  el.hr()
])

const app5 = el.div([
  el.div({ id: 'app-5' }, [
    el.p('{{  message  }}'),
    el.button({ 'v-on:click': 'reverseMessage' }, 'Reverse Message')
  ]),
  ex.script(() => {
    window.app5 = new Vue({
      el: '#app-5',
      data: {
        message: 'Hello Vue.js!'
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message
            .split('')
            .reverse()
            .join('')
        }
      }
    })
  }),
  ex.preCode([
    "  el.div({ id: 'app-5' }, [",
    "    el.p('{{  message  }}'),",
    "    el.button({ 'v-on:click': 'reverseMessage' }, 'Reverse Message')",
    '  ]),',
    '  ex.script(() => {',
    '    window.app5 = new Vue({',
    "      el: '#app-5',",
    '      data: {',
    "        message: 'Hello Vue.js!'",
    '      },',
    '      methods: {',
    '        reverseMessage: function () {',
    '          this.message = this.message',
    "            .split('')",
    '            .reverse()',
    "            .join('')",
    '        }',
    '      }',
    '    })',
    '  }),'
  ]),
  el.hr()
])

const app6 = el.div([
  el.div({ id: 'app-6' }, [
    el.p('{{  message  }}'),
    el.input({ 'v-model': 'message' })
  ]),
  ex.script(() => {
    window.app6 = new Vue({
      el: '#app-6',
      data: {
        message: 'Hello Vue!'
      }
    })
  }),
  ex.preCode([
    "  el.div({ id: 'app-6' }, [",
    "    el.p('{{  message  }}'),",
    "    el.input({ 'v-model': 'message' })",
    '  ]),',
    '  ex.script(() => {',
    '    window.app6 = new Vue({',
    "      el: '#app-6',",
    '      data: {',
    "        message: 'Hello Vue!'",
    '      }',
    '    })',
    '  }),'
  ]),
  el.hr()
])

const app7 = el.div([
  el.div({ id: 'app-7' }, [
    el.ol([
      new CreateElement('todo-item', {
        'v-for': 'item in groceryList',
        'v-bind:todo': 'item',
        'v-bind:key': 'item.id'
      })
    ])
  ]),
  ex.script(() => {
    Vue.component('todo-item', {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    })
    window.app7 = new Vue({
      el: '#app-7',
      data: {
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    })
  }),
  ex.preCode(
    [
      "  el.div({ id: 'app-7' }, [",
      '    el.ol([',
      "      new CreateElement('todo-item', {",
      "        'v-for': 'item in groceryList',",
      "        'v-bind:todo': 'item',",
      "        'v-bind:key': 'item.id'",
      '      })',
      '    ])',
      '  ]),',
      '  ex.script(() => {',
      "    Vue.component('todo-item', {",
      "      props: ['todo'],",
      "      template: '<li>{{ todo.text }}</li>'",
      '    })',
      '    window.app7 = new Vue({',
      "      el: '#app-7',",
      '      data: {',
      '        groceryList: [',
      "          { id: 0, text: 'Vegetables' },",
      "          { id: 1, text: 'Cheese' },",
      "          { id: 2, text: 'Whatever else humans are supposed to eat' }",
      '        ]',
      '      }',
      '    })',
      '  }),'
    ],
    true
  ),
  el.hr()
])

const main = el.div([
  el.h1('vue.js Introduction with hify'),
  ex.a(
    'https://vuejs.org/v2/guide/index.html',
    'https://vuejs.org/v2/guide/index.html'
  ),
  el.hr(),
  app1,
  app2,
  app3,
  app4,
  app5,
  app6,
  app7
])
main.assets = [
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/darcula.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js',
  'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
  () => {
    $(document).ready(function () {
      $('pre code').each(function (i, block) {
        hljs.highlightBlock(block)
      })
    })
  }
]

module.exports = uk.sidebarContainer({
  main,
  side,
  title: 'vue sample'
})
