// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.production')
var webpackServer = require('./webpack.server')

var spinner = ora('building for production...')
spinner.start()

var staticPath = __dirname + '/../public/'

rm('-rf', staticPath + 'css/')
rm('-rf', staticPath + 'js/')
rm('-rf', staticPath + 'client/')

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

webpack(webpackServer, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})