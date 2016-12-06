const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')

function getFileName (serverConfig, projectName) {
    return serverConfig.output.filename.replace('[name]', projectName)
}

module.exports = function setupDevServer(serverConfig, projectName, onUpdate) {
    const serverCompiler = webpack(serverConfig)
    const mfs = new MFS()
    const outputPath = path.join(serverConfig.output.path, getFileName(serverConfig, projectName))

    serverCompiler.outputFileSystem = mfs
    serverCompiler.watch({}, (err, stats) => {
        if (err) throw err
        stats = stats.toJson()
        stats.errors.forEach(err => console.error(err))
        stats.warnings.forEach(err => console.warn(err))
        onUpdate(mfs.readFileSync(outputPath, 'utf-8'))
    })
}
