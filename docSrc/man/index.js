/* eslint-disable no-undef */
const { el, uk, cdn } = require('../..')
const side = require('./side')

const main = el.div([el.h1('hify manual'), el.hr(), el.h2('usage')])
main.assets = [cdn.vuejs]

module.exports = uk.sidebarContainer({
  main,
  side,
  title: 'vuejs-datepicker sample'
})
