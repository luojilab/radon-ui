const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const getEntries = require('./getEntries')
const webpackHotMiddlewareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'

const developmentConf = merge(baseConfig, {
    entry: getEntries(webpackHotMiddlewareConfig),
    plugins: [
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 3 versions']
                    }),
                    require('precss')(),
                    require('postcss-url')()
                ]
            }
        })
    ]
})

module.exports = developmentConf
