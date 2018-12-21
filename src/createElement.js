const stringifyAttributes = require('stringify-attributes')
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
        ? null
        : [contents]
  }
  render () {
    const attr = stringifyAttributes(this.attributes)
    if (!isSimple(this.tag)) {
      let contents = this.contents.map(content => {
        if (content instanceof CreateElement) {
          content = content.render()
        }
        return content
      })
      contents = contents.join('')

      return `<${this.tag}${attr}>${contents}</${this.tag}>`
    } else {
      return `<${this.tag}${attr}>`
    }
  }
}

module.exports = CreateElement
