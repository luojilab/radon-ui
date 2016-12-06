const webpack = require('webpack')
const base = require('./webpack.base')
const getEntries = require('./getEntries')
module.exports = Object.assign({}, base, {
  target: 'node',
  devtool: false,
  entry: getEntries(null, ['login'], true),
  output: Object.assign({}, base.output, {
    filename: 'server/[name].js',
    libraryTarget: 'commonjs2'
  }),
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})
