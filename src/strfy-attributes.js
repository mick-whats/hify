// convertAttributes = (attr)->
//   str = ''
//   if _.isPlainObject(attr)
//     for key, value of attr
//       if _.isPlainObject(value)
//         str+= " #{key}=" + '"'
//         for sKey, sVal of value
//           str+= "#{sKey}:#{sVal};"
//         str+= '"'
//       else
//         str+= " #{key}=" + '"' + value + '"'
//   else if _.isString(attr)
//     str = ' ' + attr
//   return str

function strfyAttributes(obj) {
  const attributes = []
  Object.entries(obj).forEach(([k,v])=> {
    
    if (typeof v === "function" || typeof v === "object" && !!v){
      v = Object.entries(v).map(([ik,iv]) => {
        return `${ik}:${iv};`
      })
      // v = `${key}="${valString}"`
    } else if (v === false){
      continue
    } else if (Array.isArray(v)) {
			v = v.join(' ');
    } 
    let attribute = key
    if (v !== true) {
      let attribute = `=${String(v)}`
    }
    attributes.push(attribute)
  })
  return attributes.length > 0 ? ' ' + attributes.join(' ') : '';
}

module.exports = strfyAttributes