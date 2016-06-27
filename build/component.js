require('shelljs/global')
var fs = require('fs')
var ora = require('ora')
env.NODE_ENV = 'production'
var spinner = ora('building components for production...')
spinner.start()

var basePath = __dirname + '/../dist/components/'
var componentsDir = __dirname + '/../src/components/'
var vueSort = [
        'basic',
        'form',
        'navigation',
        'presentation'
    ]

rm('-rf', basePath)
mkdir('-p', basePath)

var copyIndex = function () {
    var isJS = /.js$/
    fs.readdir(componentsDir, function (err, files) {
        files.forEach(function (file) {
            if (isJS.test(file)) {
                fs.readFile(componentsDir + file, function (err, data) {
                    if (!err) {
                        console.log(file)
                        fs.writeFile(basePath + file, data.toString(), function (err) {
                            if (err) {
                                console.log(err)
                            }
                        })
                    } else {
                        console.log(err)
                    }
                })
            }
        })
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

var getComponents = function () {
    var componentslist = []
    var queue = []
    vueSort.forEach(function (dir) {
        queue.push(getVueWithDir([componentsDir, dir]))
    })
    return Promise.all(queue)
        .then(function (results) {
            results.forEach(function (list) {
                componentslist = componentslist.concat(list)
            })
            return Promise.resolve(componentslist)
        })
}

var removeStyle = function (str) {
    return str.replace(/<style.*>(.|\n)*?<\/style>/, "")
}

var convertVue = function (path) {
    var promise = new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (!err) {
                var content = removeStyle(data.toString())
                resolve(content)
            } else {
                reject(err)
            }
        })
    })
    return promise
}

var initFloder = function () {
    var queue = []
    vueSort.forEach(function (dir) {
        queue.push(new Promise(function (resolve, reject) {
            fs.mkdir(basePath + dir, function (err) {
                if (err) {
                    reject('flo err?')
                } else {
                    resolve()
                }
            })
        }))
    })
    
    return Promise.all(queue)
}

var saveVue = function (list) {
    initFloder().then(function () {
        list.forEach(function (item) {
            fs.writeFile(basePath + item.dir + '/' + item.filename, item.content, function (err) {
                if (err) {
                    console.log(err)
                }
            })
        })
    })
}

copyIndex()

getComponents()
    .then(function (list) {
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
    .then(function (list) {
        saveVue(list)
        spinner.stop()
    })
