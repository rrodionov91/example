
const {resolvePath} = require('./helpers'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    {VueLoaderPlugin} = require("vue-loader");

module.exports.baseWebpackConfig = {
    entry: resolvePath('src/index.js'),
    output: {
        filename: '[name].bundle.min.js',
        path: resolvePath('dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolvePath('index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': resolvePath('src'),
            '@routing': resolvePath('src/routing'),
            '@pages': resolvePath('src/pages'),
            '@components': resolvePath('src/common_components'),
            '@styles': resolvePath('src/styles'),
            '@utils': resolvePath('src/utils'),
            '@services': resolvePath('src/services'),
            '@store': resolvePath('src/store')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: 'build/'
                            }
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    }
};