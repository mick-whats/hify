const stringifyAttributes = require('stringify-attributes')

class CreateElement {
  constructor (tag, attr, contents) {
    this.tag = tag
    this.attributes = attr
    this.contents = Array.isArray(contents) ? contents : [contents]
  }
  render () {
    let contents = this.contents.map(content => {
      if (content instanceof CreateElement) {
        content = content.render()
      }
      return content
    })
    contents = contents.join('')
    const attr = stringifyAttributes(this.attributes)
    return `<${this.tag}${attr}>${contents}</${this.tag}>`
  }
}

module.exports = CreateElement
