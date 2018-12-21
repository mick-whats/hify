const CE = require('../createElement')

function br (repeat) {
  const _el = new CE('br')
  // if (typeof repeat === 'number') return _el.repeat(repeat)
  return _el
}

module.exports = br
