const CE = require('../createElement')

/**
 *
 *
 * @param {*} { - main, side, title, script }
 */
function sidebarContainer ({ main, side, title = void 0, script }) {
  const _css = `
  .wrapper {
    position: static;
  }
  aside#sidebar-content, main#main-content {
    position: sticky;
    top: 0px;
  }
  
  aside#sidebar-content {
    width: 25%;
    position: fixed;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
  }
  
  main#main-content {
    width: 70%;
    float: right;
  }
  
  footer {
    clear: both;
    position: relative;
    top: 100px;
  }
  aside a {
    border: none;
    color: #5f5f5f;
    cursor: pointer;
  }
  aside h1,aside h2,aside h3,aside h4,aside h5,aside h6 {
    padding-bottom: 1px;
    margin: 1px;
  }
  aside h1 {font-size: 1.5rem;}
  aside h2 {font-size: 1.3rem;}
  aside h3 {font-size: 1.1rem;}
  aside h4 {font-size: 0.9rem;}
  aside h5 {font-size: 0.7rem;}
  aside h6 {font-size: 0.5rem;}
  
  @media screen and (max-width:600px) {
    aside#sidebar-content, main#main-content {
      float: none;
      width: auto;
      position: static;
    }
  }
  `
  const _head = CE.defaultHead(title)
  _head.contents.push(new CE('style', {}, _css))
  const _body = new CE('body', {}, [
    new CE('div', { class: 'wrapper' }, [
      new CE('aside', { id: 'sidebar-content' }, side),
      new CE('main', { id: 'main-content' }, main)
    ])
  ])
  return new CE('html', {}, [_head, _body])
}

module.exports = sidebarContainer
