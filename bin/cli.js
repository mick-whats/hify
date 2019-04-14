#!/usr/bin/env node
const cli = require('cac')()
const createServer = require('./createServer')
const build = require('./build')
cli
  .command('server', 'start server')
  .option('-p, --port <port>', 'port number or 8888')
  .option('-o, --open', 'with open browser') // TODO: 未実装
  .action(async options => {
    const port = options.port || 8888
    let server = await createServer(options)
    server.listen(port)
  })
cli
  .command('build', 'Build a static site')
  .option('-D, --dev', 'develop mode')
  .option('-s, --src [src]', 'source directory')
  .option('-d, --dest [dest]', 'destination directory')
  .option('-f, --force', 'Run without confirmation')
  .option('-l, --silent', 'Do not output log')
  .action(async options => {
    await build(options)
  })

cli.help()
cli.parse()
