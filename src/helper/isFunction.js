module.exports = fn => fn && {}.toString.call(fn) === '[object Function]'
