const baseWebpackConfig = require('./webpack.config.base'),
    webpackMerge = require('webpack-merge'),
    {resolvePath} = require('./helpers')

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'production'
})