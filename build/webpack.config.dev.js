const {baseWebpackConfig} = require('./webpack.config.base'),
    webpackMerge = require('webpack-merge'),
    {resolvePath} = require('./helpers'),
    webpack = require('webpack')


module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: resolvePath('dist'),
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})