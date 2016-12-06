const path = require('path')
const fs = require('fs')
const projectDir = path.resolve(__dirname, '../client/')

module.exports = function (webpackHotMiddlewareConfig, exceptList, server) {
    let except = ['.DS_Store']
    except = except.concat(exceptList)
    let entries = {}
    let floders = fs.readdirSync(projectDir)
    floders.forEach(floder => {
        if (except.indexOf(floder) === -1) {
            if (server) {
                entries[floder] = ['./client/' + floder + '/server-entry.js']
            } else {
                if (webpackHotMiddlewareConfig) {
                    entries[floder] = [webpackHotMiddlewareConfig, './client/' + floder + '/client-entry.js']
                } else {
                    entries[floder] = ['./client/' + floder + '/client-entry.js']
                }
            }
            
        }
    })
    return entries
}
