const path = require('path')
const fs = require('fs')
module.exports = (pages, rootDir) => {
  const routes = {}

  if (pages.length) {
    // console.log('pages: ', pages)
    const routerJs = pages.find(p => path.basename(p) === 'router.js')
    // console.log('router.js: ', routerJs)
    if (routerJs) {
      Object.entries(require(path.join(process.cwd(), routerJs))).forEach(
        ([k, v]) => {
          return (routes[k] = v)
        }
      )
    } else {
      pages
        .filter(page => {
          return !page.includes('/assets/')
        })
        .forEach(pagePath => {
          const pageName = pagePath
            .replace(/.js$/, '')
            .replace(rootDir + '/', '')
          // const pageName = path.basename(pagePath, '.js')
          pagePath = path.join(process.cwd(), pagePath)
          if (pageName === 'index') {
            routes[''] = require(pagePath)
          } else {
            routes[pageName] = require(pagePath)
          }
        })
    }
    pages
      .filter(page => {
        return page.includes('/assets/')
      })
      .forEach(page => {
        routes[page.replace(rootDir + '/', '')] = () =>
          fs.readFileSync(path.join(process.cwd(), page), 'utf8')
      })
  } else {
    // TODO:
    throw new Error('wwwdirectoryが存在しません')
  }
  console.log('routes: ', routes)
  return routes
}
