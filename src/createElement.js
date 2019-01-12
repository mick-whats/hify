const fs = require('fs')
const path = require('path')
const opn = require('opn')
const strfyAttributes = require('./helper/strfy-attributes')
const settings = require('./settings')
const isSimpleTag = require('./helper/isSimpleTag')
const _ = require('lodash-core')
const formatHtml = require('victorica')
const escapeGoat = require('escape-goat')
// const formatHtml = require('html-format')
// const createHtml = require('./createHtml')

class CreateElement {
  constructor (tag, attr = {}, contents) {
    this.tag = tag
    this.attributes = attr
    this.contents = Array.isArray(contents)
      ? contents
      : contents == null
        ? []
        : [contents]
    this._assets = []
  }
  get assets () {
    return this._assets
  }
  set assets (arg) {
    if (Array.isArray(arg)) {
      this._assets.push(...arg)
    } else {
      this._assets.push(arg)
    }
  }
  collect (nest) {
    // TODO: headに直接コレクトする
    this.contents.forEach(content => {
      if (content instanceof CreateElement) {
        try {
          JSON.stringify(content)
          if (content._assets.length) {
            this.assets = content._assets
          }
          this.assets = content.collect(true)
          // _requires.push(...content.collect(true))
        } catch (error) {
          if (error.message !== 'Converting circular structure to JSON') {
            throw error
          }
        }
      }
    })
    if (nest) {
      return this.assets || []
    } else {
      this._assets = _.uniq(this.assets)
      return this
    }
  }
  render () {
    const attr = strfyAttributes(this.attributes)
    if (
      this.tag === 'html' &&
      this.assets.length &&
      this.contents[0].tag === 'head'
    ) {
      this.contents[0].assets = this.assets
    }
    if (this.tag === 'head' && this.assets.length) {
      this.assets.forEach(_require => {
        const asset = CreateElement.asset(_require)
        if (asset) this.contents.push(asset)
      })
    }
    if (!isSimpleTag(this.tag)) {
      let contents = this.contents.map(content => {
        if (content instanceof CreateElement) {
          try {
            JSON.stringify(content)
            // content.assets = this.assets
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
  async htmlify () {
    let _html =
      this.tag !== 'html'
        ? CreateElement.createHtml({ body: this })
          .collect()
          .render()
        : this.collect().render()
    _html = '<!DOCTYPE html>' + _html
    return formatHtml(_html, { space: '  ' })
  }
  async writeFile (savePath = settings.TMPPATH) {
    if (!path.isAbsolute(savePath)) {
      throw new Error('Please specify with absolute path')
    }
    const _html = await this.htmlify()
    fs.writeFileSync(savePath, _html)
    return savePath
  }

  async toBrowser (savePath = settings.TMPPATH) {
    await this.writeFile(savePath, pretty_print)
    console.log('opn: ', opn)
    opn(savePath)
    return savePath
  }
  static createHtml ({ head, body }) {
    let _body = body || new CreateElement('body', {}, 'hello world')
    if (_body.tag !== 'body') {
      _body = new CreateElement('body', {}, _body)
    }
    const html = new CreateElement('html', {}, [
      head || CreateElement.defaultHead(),
      _body
    ])
    return html
  }
  static defaultHead (title = 'hify') {
    return new CreateElement('head', {}, [
      new CreateElement('title', {}, title),
      new CreateElement('meta', { charset: 'utf-8' }),
      new CreateElement('meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      }),
      new CreateElement(
        'style',
        {},
        fs.readFileSync(path.join(__dirname, '../css/github.css'), 'utf8')
      )
    ])
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
        // style: [
        //   new CreateElement('style', {},fs.readFileSync('../css/github.css','utf8'))
        // ]
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
  static asset (src) {
    switch (true) {
      case /css$/.test(src):
        return new CreateElement('link', { rel: 'stylesheet', href: src })
      case /js$/.test(src):
        return new CreateElement('script', { src: src })
      case typeof src === 'function':
        return new CreateElement('script', {}, `(${src.toString()})()`)
      case src instanceof CreateElement:
        return src
      default:
        return new CreateElement('style', {}, String(src))
    }
  }
}

module.exports = CreateElement
