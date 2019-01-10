// https://bootsnipp.com/snippets/featured/bootstrap-docs-sidebar
const { el, ex, uk } = require('..')
const side = require('./side')
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "

const main = el.div(
  [
    el.div([el.ul([], { class: 'main-menu nav nav-stacked affix' })], {
      id: 'sidebar-menu',
      class: 'col-md-2 hidden-xs hidden-sm'
    }),
    el.div(
      [
        el.h1('par-1', { id: 'par-1' }),
        el.h2('sub-par-1-1', { id: 'sub-par-1-1' }),
        el.p(text.repeat(5)),
        el.h2('sub-par-1-2', { id: 'sub-par-1-2' }),
        el.p(text.repeat(5)),
        ex.md(
          '# par-2\n## sub-par-2-1\n\n' +
            text.repeat(5) +
            '\n## sub-par-2-2\n\n' +
            text.repeat(5)
        )
      ],
      { id: 'static-content', class: 'col-md-10' }
    )
  ],
  { class: 'container' }
)
main.assets = [
  'https://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css',
  el.style(`
  ul {
      list-style-type: none;
    padding: 0;
  }
  
  #sidebar-menu .main-menu a {
      display: block;
    font-size: 13px;
    font-weight: 500;
    color: #999;
    padding: 4px 20px;
  }
  #sidebar-menu .main-menu a:hover {
    color: #11427D;
    text-decoration: none;
    background-color: transparent;
    border-left: 1px solid #11427D;
  }
  
  #sidebar-menu .sub-menu a {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 30px;
    font-size: 12px;
    font-weight: 400;
  }`),
  'https://code.jquery.com/jquery-1.11.1.min.js',
  'https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js',
  () => {
    /* eslint-disable */
    $(document).ready(function() {
      var sidebarMainMenu = $('#sidebar-menu .main-menu')
      var staticContent = $('#static-content')
      staticContent.find('h1').each(function() {
        sidebarMainMenu.append(
          '<li id="' +
            $(this).attr('id') +
            '-menu"><a href="#' +
            $(this).attr('id') +
            '">' +
            $(this).html() +
            '</li>'
        )
        title = sidebarMainMenu.find('#' + $(this).attr('id'))
      })
      staticContent.find('h2').each(function() {
        prevTitle = sidebarMainMenu.find(
          '#' +
            $(this)
              .prevAll('h1')
              .first()
              .attr('id') +
            '-menu'
        )
        prevTitle.not(':has(ul)').append('<ul class="sub-menu"></ul>')
        prevTitle
          .find('.sub-menu')
          .append(
            '<li id="' +
              $(this).attr('id') +
              '-menu"><a href="#' +
              $(this).attr('id') +
              '">' +
              $(this).html() +
              '</li>'
          )
      })
      sidebarMainMenu.affix({
        offset: {
          top: 0 // To Modify according to the height offset
        }
      })
    })
    /* eslint-enable */
  }
]

module.exports = uk.sidebarContainer({
  main,
  side,
  title: 'vue sample'
})
