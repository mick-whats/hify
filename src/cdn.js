const highlightJs =
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js'
const highlightFn = () => {
  $(document).ready(function () {
    $('pre code').each(function (i, block) {
      hljs.highlightBlock(block)
    })
  })
}
const jquery3 =
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
module.exports.jquery3 = [jquery3]

module.exports.highlightJs_darcula = [
  jquery3,
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/darcula.min.css',
  highlightJs,
  highlightFn
]
module.exports.highlightJs_gruvbox_light = [
  jquery3,
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/gruvbox-light.min.css',
  highlightJs,
  highlightFn
]
module.exports.highlightJs_monokai = [
  jquery3,
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/monokai.min.css',
  highlightJs,
  highlightFn
]
module.exports.uikit = [
  'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.25/css/uikit.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.25/js/uikit.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.25/js/uikit-icons.min.js'
]

module.exports.elementUi = [
  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/theme-chalk/index.css',

  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/index.js',
  'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/locale/en.min.js'
]

module.exports.vuejs = [
  'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.min.js'
]
