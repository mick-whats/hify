const PROJECT_NAME = 'xqx'
const os = require('os')
const fs = require('fs')
const path = require('path')
const opn = require('opn')
const strfyAttributes = require('./helper/strfy-attributes')
// const createHtml = require('./createHtml')
const simpleTags = [
  'br',
  'img',
  'hr',
  'meta',
  'input',
  'embed',
  'area',
  'base',
  'col',
  'keygen',
  'link',
  'param',
  'source'
]
const isSimple = tagName => simpleTags.includes(tagName)

class CreateElement {
  constructor (tag, attr = {}, contents) {
    this.tag = tag
    this.attributes = attr
    this.contents = Array.isArray(contents)
      ? contents
      : contents == null
        ? []
        : [contents]
  }
  render () {
    const attr = strfyAttributes(this.attributes)
    if (!isSimple(this.tag)) {
      let contents = this.contents.map(content => {
        if (content instanceof CreateElement) {
          try {
            JSON.stringify(content)
            content = content.render()
          } catch (error) {
            if (error.message === 'Converting circular structure to JSON') {
              content = '!!!cyclic object value'
            } else {
              throw error
            }
          }
        }
        return content
      })
      contents = contents.join('')
      return `<${this.tag}${attr}>${contents}</${this.tag}>`
    } else {
      return `<${this.tag}${attr}>`
    }
  }
  async writeFile (
    savePath = path.join(os.tmpdir(), `node-${PROJECT_NAME}.html`),
    pretty_print = true
  ) {
    if (!path.isAbsolute(savePath)) {
      throw new Error('Please specify with absolute path')
    }
    // let _html = this.render()
    let _html =
      this.tag !== 'html'
        ? CreateElement.createHtml({ body: this }).render()
        : this.render()
    fs.writeFileSync(savePath, _html)
    return savePath
  }

  async toBrowser (
    savePath = path.join(os.tmpdir(), `node-${PROJECT_NAME}.html`),
    pretty_print = true
  ) {
    await this.writeFile(savePath, pretty_print)
    console.log('opn: ', opn)
    opn(savePath)
    return savePath
  }
  static createHtml (obj = {}) {
    const html = new CreateElement('html', {}, [
      obj.head || CreateElement.createHead(),
      obj.body || new CreateElement('body', {}, 'hello world')
    ])
    return html
  }
  static createHead (obj) {
    if (!obj) {
      obj = {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width,initial-scale=1' }
        ],
        link: [
          { rel: 'stylesheet', href: path.join(__dirname, '../css/github.css') }
        ]
      }
    }
    const head = new CreateElement('head', {}, [])
    if (obj.title) {
      head.contents.push(new CreateElement('title', {}, obj.title))
    }
    if (obj.meta) {
      for (const _meta of obj.meta) {
        head.contents.push(new CreateElement('meta', _meta))
      }
    }
    if (obj.link && Array.isArray(obj.link)) {
      for (const _link of obj.link) {
        head.contents.push(new CreateElement('link', _link))
      }
    }
    return head
  }
}

module.exports = CreateElement
