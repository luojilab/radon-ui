'use strict'

const webpackSources = require('webpack-sources')
const distName = 'static/css/dist.css'

function CovFont() {}

CovFont.prototype.createCssAsset = function(css, originalAsset) {
  return new webpackSources.RawSource(css);
}

CovFont.prototype.apply = function (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
        let assets = compilation.assets
        let asset = assets[distName]
        let distFile = asset.source()
        let newFile = distFile.replace(/static\/fonts/g, '..\/fonts')
        assets[distName] = this.createCssAsset(newFile, asset)
        callback()
    })
}

module.exports = CovFont
