/* eslint-disable no-undef */
const { el, uk, cdn } = require('../..')
// const side = require('./side')

const main = el.div([el.h1('hify manual'), el.hr(), el.h2('usage')])
main.assets = [cdn.vuejs]

module.exports = uk.sidebarContainer({
  main,
  side: el.ol([1, 2, 3]),
  title: 'vuejs-datepicker sample'
})
