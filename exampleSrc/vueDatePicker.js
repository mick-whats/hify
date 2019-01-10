/* eslint-disable no-undef */
const { el, ex, uk, cdn, CreateElement } = require('..')
const side = require('./side')
const datePickerSample = el.div([
  el.div({ id: 'app' }, [
    new CreateElement('vuejs-datepicker', {
      placeholder: 'select',
      format: 'yyyyMMdd',
      '@selected': a => {
        console.log('okok: ', a)
      }
    })
  ]),
  ex.script(() => {
    // eslint-disable-next-line no-new
    new Vue({
      el: '#app',
      components: {
        vuejsDatepicker
      }
    })
  })
])

const main = el.div([
  el.h1('vuejs-datepicker sample'),
  ex.a(
    'https://www.npmjs.com/package/vuejs-datepicker',
    'https://www.npmjs.com/package/vuejs-datepicker'
  ),
  datePickerSample,
  el.hr()
])
main.assets = [
  cdn.vuejs,
  'https://cdnjs.cloudflare.com/ajax/libs/vuejs-datepicker/1.5.4/vuejs-datepicker.min.js'
]

module.exports = uk.sidebarContainer({
  main,
  side,
  title: 'vuejs-datepicker sample'
})
