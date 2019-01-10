#!/usr/bin/env node
const cli = require('cac')()
const createServer = require('./createServer')

cli
  .command('server', 'start server')
  .option('-p, --port <port>', 'port number or 8888')
  .action(async options => {
    const port = options.port || 8888
    let server = createServer(options)
    server.listen(port)
  })

cli.help()
cli.parse()
