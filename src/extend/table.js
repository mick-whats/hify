const CE = require('../createElement')
const colorAttributes = require('../helper/color-attributes')
const _ = require('lodash-core')
const { isPlainObject } = _
/**
 * table
 *
 * @param {Array} tArray - table Array
 * @param {Array} [args={}] - attributes
 * @return {CreateElement}
 * @example
 * const table = el.tbl(
 *   [
 *     [
 *       'name',
 *       'age',
 *       'sex',
 *       { header: true, style: { 'background-color': 'silver' } }
 *     ],
 *     ['alice', 17, 'female'],
 *     ['bob', 24, 'male'],
 *     ['chris', el.td(54, 'gold', 'gray'), 'male']
 *   ],
 *   { style: { width: '80%' } }
 * )
 * table.render()
 */
function tbl (tArray, ...args) {
  if (!Array.isArray(tArray)) throw new Error('required array type argument')
  args = colorAttributes(...args)
  const _table = new CE('table', args)
  const _thead = new CE('thead')
  const _tbody = new CE('tbody')
  if (isPlainObject(tArray[0])) {
    let keys = null
    const _refArr = []
    tArray.forEach((row, i) => {
      if (i === 0) {
        const _keys = []
        let _headerAttr = null
        const _values = []
        Object.entries(row).forEach(([k, v]) => {
          if (isPlainObject(v)) {
            if (v.header) {
              _headerAttr = v
            } else {
              _values.push(v)
            }
          } else {
            _keys.push(k)
            _values.push(v)
          }
        })
        keys = _.cloneDeep(_keys)
        if (_headerAttr) _keys.push(_headerAttr)
        _refArr.push(_keys, _values)
      } else {
        const _values = []
        const _trAttr = Object.values(row).find(cell => isPlainObject(cell))
        keys.forEach(key => {
          _values.push(row[key])
        })
        if (_trAttr) _values.push(_trAttr)
        _refArr.push(_values)
      }
    })
    tArray = _refArr
  }
  tArray.forEach(row => {
    const _trAttr = row.find(c => isPlainObject(c)) || {}
    let _cellTagName = 'td'
    let _raw = _tbody
    if (_trAttr) {
      if (_trAttr.header) {
        _raw = _thead
        _cellTagName = 'th'
        delete _trAttr.header
      }
    }
    const _row = new CE('tr', _trAttr)
    row.forEach(cell => {
      if (!isPlainObject(cell)) {
        if (cell instanceof CE) {
          _row.contents.push(cell)
        } else {
          _row.contents.push(new CE(_cellTagName, {}, cell))
        }
      }
    })
    _raw.contents.push(_row)
  })
  _table.contents.push(_thead, _tbody)
  return _table
}

module.exports = tbl
