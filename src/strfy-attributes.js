function strfyAttributes (obj) {
  const attributes = []
  Object.entries(obj).forEach(([k, v]) => {
    if (Array.isArray(v)) {
      v = v.join(' ')
    } else if (typeof v === 'object' && !!v) {
      v = Object.entries(v)
        .map(([ik, iv]) => {
          return `${ik}:${iv};`
        })
        .join('')
    } else if (v === false) {
      return
    }
    let attribute = k
    if (v !== true) {
      attribute += `="${String(v)}"`
    }
    attributes.push(attribute)
  })
  return attributes.length > 0 ? ' ' + attributes.join(' ') : ''
}

module.exports = strfyAttributes
