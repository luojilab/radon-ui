const path = require('path')
const webpack = require('webpack')
const webpackHotMiddlewareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
const getEntries = require('./getEntries')

module.exports = {
    context: path.resolve(__dirname, '../'),
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: 'client/[name].js',
        chunkFilename: 'client/[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'radon-ui': path.resolve(__dirname, '../client/radon-ui/')
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
            loader: 'file',
            query: {
                name: 'file/[name].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
}