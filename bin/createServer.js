const hify = require('..')
const { CreateElement } = hify
const http = require('http')
const globby = require('globby') // TODO: 削除予定
const glob = require('tiny-glob')
const rlite = require('rlite-router')
const routeMap = require('./routeMap')

module.exports = async options => {
  const port = options.port || 8888
  const rootDir = options.root || 'www'
  const pages = await glob('**/' + rootDir + '/**/*.js')
  // const pages = globby.sync([rootDir])
  const notFound = () => new CreateElement('h1', {}, '404 NOT FOUND').render()
  const routes = rlite(notFound, routeMap(pages, rootDir))
  console.info('server start: ', `http://localhost:${port}`)
  const _server = http.createServer(async (req, res) => {
    const url = req.url
    console.info('responce: ', url)
    if (url !== '/favicon.ico') {
      const element = await routes(url)
      if (element instanceof CreateElement) {
        const html = await element.toHtml().catch(err => {
          console.error('server error: ', err)
          res.write(err.message)
          res.end()
        })
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(html)
        res.end()
      } else {
        const contentType = (function () {
          switch (true) {
            case /\.css$/.test(url):
              return 'text/css'
            case /\.js$/.test(url):
              return 'text/javascript'
            default:
              return 'text/plain'
          }
        })()
        res.writeHead(200, { 'Content-Type': contentType })
        res.write(element)
        res.end()
      }
    }
  })
  _server
    .on('close', path => console.log(`Close server ${path}`))
    .on('error', (err, socket) => console.log(`server error001: ${err}`))
  return _server
}
