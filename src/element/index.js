const CE = require('../createElement')
const isSimpleTag = require('../helper/isSimpleTag')
const tagList = require('../tagList')
const { isPlainObject } = require('lodash-core')
const _merge = require('lodash-core').merge
const Args2 = require('args2')
tagList.forEach(tagItem => {
  const tag = tagItem[0]
  if (isSimpleTag(tag)) {
    module.exports[tag] = (...args) => {
      const attr = Object.create(null)
      for (const arg of args) {
        if (isPlainObject(arg)) {
          _merge(attr, arg)
        }
      }
      return new CE(tag, attr)
    }
  } else {
    module.exports[tag] = (..._args) => {
      const args = new Args2(_args)
      const cont = args.arr() || args.str() || args.func() || []
      const attr = _merge(...args.objs)
      // const attr = args.objs.reduce((p, c) => _merge(p, c), {})
      return new CE(tag, attr, cont)
    }
  }
})
