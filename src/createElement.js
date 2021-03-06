const fs = require('fs')
const path = require('path')
const opn = require('opn')
const strfyAttributes = require('./helper/strfy-attributes')
const settings = require('./settings')
const isSimpleTag = require('./helper/isSimpleTag')
const _ = require('lodash-core')
const formatHtml = require('victorica')
const cdn = require('./cdn')
// const formatHtml = require('html-format')
// const createHtml = require('./createHtml')

class CreateElement {
  /**
   *Creates an instance of CreateElement.
   * @param {string} tag
   * @param {object} [attr={}]
   * @param {Array} contents
   * @memberof CreateElement
   */
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
    this._assets = arg
  }
  addAssets (arg) {
    if (Array.isArray(arg)) {
      this._assets.push(...arg)
    } else {
      this._assets.push(arg)
    }
  }
  collect (nest) {
    this.contents.forEach(content => {
      if (content instanceof CreateElement) {
        try {
          JSON.stringify(content)
          if (content.assets.length) {
            this.addAssets(content.assets)
          }
          this.addAssets(content.collect(true))
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
      this.assets = _.uniq(this.assets)
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
    if (this.tag === 'head') {
      const assets = _(this.assets)
        .chain()
        .flatten()
        .uniq()
        .value()
      assets.forEach((_require, i) => {
        const asset = CreateElement.asset(_require)
        if (asset) {
          const _equal = this.contents.find(elem => {
            return _.isEqual(asset, elem)
          })
          if (!_equal) this.contents.push(asset)
        }
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
  async toHtml () {
    let _html =
      this.tag !== 'html'
        ? CreateElement.createHtml({ body: this })
          .collect()
          .render()
        : this.collect().render()
    _html = '<!DOCTYPE html>' + _html
    return formatHtml(_html, { space: '  ' })
  }
  async toFile (savePath = settings.TMPPATH) {
    if (!path.isAbsolute(savePath)) {
      throw new Error('Please specify with absolute path')
    }
    const _html = await this.toHtml()
    fs.writeFileSync(savePath, _html) // TODO: atomicify
    return savePath
  }

  async toBrowser (savePath = settings.TMPPATH) {
    await this.toFile(savePath)
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
    const _head = new CreateElement('head', {}, [
      new CreateElement('title', {}, title),
      new CreateElement('meta', { charset: 'utf-8' }),
      new CreateElement('meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      })
    ])
    _head.addAssets(cdn.uikit)
    return _head
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
