const os = require('os')
const path = require('path')

const PROJECT_NAME = 'hify'
const BASENAME = `node-${PROJECT_NAME}.html`

module.exports.PROJECT_NAME = PROJECT_NAME
module.exports.BASENAME = BASENAME
module.exports.TMPPATH = path.join(os.tmpdir(), BASENAME)
module.exports.BROSYNC_CMD = `URI=${os.tmpdir()} &&browser-sync start --server $URI --files $URI/${BASENAME} --startPath "/${BASENAME}"`
