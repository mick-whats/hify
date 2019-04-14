const ex = require('../extend')
const colorAttributes = require('../helper/color-attributes')

const ukTable = (_class, tArray, ...args) => {
  args.push({ class: _class })
  args = colorAttributes(...args)
  return ex.table(tArray, args)
}
module.exports.table1 = (tArray, ...args) => {
  return ukTable('uk-table', tArray, ...args)
}
module.exports.table2 = (tArray, ...args) => {
  return ukTable('uk-table uk-table-divider', tArray, ...args)
}
module.exports.table3 = (tArray, ...args) => {
  return ukTable('uk-table uk-table-striped', tArray, ...args)
}
module.exports.table4 = (tArray, ...args) => {
  return ukTable('uk-table uk-table-hover', tArray, ...args)
}
module.exports.table5 = (tArray, ...args) => {
  return ukTable('uk-table uk-table-small', tArray, ...args)
}
module.exports.table6 = (tArray, ...args) => {
  return ukTable('uk-table uk-table-justify', tArray, ...args)
}
module.exports.table7 = (tArray, ...args) => {
  return ukTable('uk-table uk-table-middle', tArray, ...args)
}
module.exports.table8 = (tArray, ...args) => {
  return ukTable(
    'uk-table uk-table-responsive uk-table-divider',
    tArray,
    ...args
  )
}
module.exports.table9 = (tArray, ...args) => {
  return ukTable('uk-table uk-table-divider', tArray, ...args)
}
