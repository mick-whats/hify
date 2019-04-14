const readline = require('readline')
module.exports = question => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(question, answer => {
      resolve(answer)
      rl.close()
    })
  })
}
