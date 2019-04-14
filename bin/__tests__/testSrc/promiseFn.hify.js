const { el } = require('../../..')

module.exports = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(el.span('test Promise'))
  }, 10)
})
