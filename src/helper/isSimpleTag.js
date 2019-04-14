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
module.exports = tagName => simpleTags.includes(tagName)
