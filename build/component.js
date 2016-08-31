'use strict'
require('shelljs/global')

const babel     = require("babel-core")
const fs        = require('fs')
const path      = require('path')
const ora       = require('ora')
env.NODE_ENV    = 'production'
const spinner   = ora('building components for production...')

spinner.start()

const isJS = /.js$/
const basePath = __dirname + '/../dist/components/'
const componentsDir = __dirname + '/../src/components/'
const vueSort = [
    'basic',
    'form',
    'navigation',
    'common',
    'global'
]
const copyDir = ['directive', 'lib', 'plugin']

rm('-rf', basePath)
mkdir('-p', basePath)

const initFloder = (base, subDirs) => {
    let queue = []
    subDirs.forEach(dir => {
        queue.push(new Promise((resolve, reject) => {
            fs.mkdir(base + dir, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        }))
    })
    return Promise.all(queue)
}

const readDir = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
    })
}

const copyFile = (originPath, originFileName, newPath, newFileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(originPath, originFileName), (err, data) => {
            if (!err) {
                let res = babel.transform(data.toString(), {
                    comments: false,
                    presets: ["es2015", "stage-2"],
                    plugins: ["transform-runtime"]
                })
                fs.writeFile(path.join(newPath, newFileName), res.code, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            } else {
                reject(err)
            }
        })
    })
}

const copyIndex = function () {
    return readDir(componentsDir)
        .then(files => {
            let queue = []
            files.forEach((fileName) => {
                if (isJS.test(fileName)) {
                    queue.push(copyFile(componentsDir, fileName, basePath, fileName))
                }
            })
            return Promise.all(queue)
        })
        .then(() => {
            return initFloder(basePath, copyDir)
        })
        .then(() => {
            let queue = []
            copyDir.forEach(dir => {
                readDir(path.join(componentsDir, dir))
                    .then(files => {
                        files.forEach((fileName) => {
                            if (isJS.test(fileName)) {
                                queue.push(copyFile(path.join(componentsDir, dir), fileName, path.join(basePath, dir), fileName))
                            }
                        })
                    })
            })
            return Promise.all(queue)
        })
}

var getVueWithDir = function (dirArr) {
    var promise = new Promise(function (resolve, reject) {
        var isVue = /.vue$/
        var list = []
        fs.readdir(dirArr.join('/'), function (err, files) {
            if (!err) {
                files.forEach(function (file) {
                    if (isVue.test(file)) {
                        list.push({
                            content: '',
                            filename: file,
                            dir: dirArr[1],
                            path: dirArr.join('/') + '/' + file
                        })
                    }
                })
                resolve(list)
            } else {
                reject()
            }
        })
    })
    
    return promise
}

const getComponents = () => {
    let componentslist = []
    let queue = []
    vueSort.forEach((dir) => {
        queue.push(getVueWithDir([componentsDir, dir]))
    })
    return Promise.all(queue)
        .then((results) => {
            results.forEach((list) => {
                componentslist = componentslist.concat(list)
            })
            return Promise.resolve(componentslist)
        })
}

const removeStyle = (str) => {
    return str.replace(/<style.*>(.|\n)*?<\/style>/, "")
}

const convertVue = (path) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (!err) {
                var content = removeStyle(data.toString())
                resolve(content)
            } else {
                reject(err)
            }
        })
    })
}

const saveVue = (list) => {
    initFloder(basePath, vueSort)
        .then(() => {
            list.forEach((item) => {
                fs.writeFile(basePath + item.dir + '/' + item.filename, item.content, function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
            })
        })
}

copyIndex()
    .then(() => {
        return getComponents()
    })
    .then((list) => {
        let queue = []
        list.forEach(function (item) {
            queue.push(new Promise(function (resolve , reject) {
                convertVue(item.path)
                    .then(function (content) {
                        item.content = content
                        resolve(item)
                    })
            }))
        })
        return Promise.all(queue)
    })
    .then((list) => {
        saveVue(list)
        spinner.stop()
    })
