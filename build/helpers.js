const path = require('path')

module.exports.resolvePath = pathString => path.resolve(__dirname, '..', pathString)
