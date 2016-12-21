const fs = require('fs')
const path = require('path')

// const queue = []
const except = makeMap('.DS_Store')
const rootPath = 'radon-ui/components/'
const cssPath = 'radon-ui/css/default/'

function readFile (link) {
    return new Promise((resolve, reject) => {
        fs.readFile(link, 'utf8', (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

function writeFile (link, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(link, content, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

function createDir (link) {
    return new Promise((resolve, reject) => {
        fs.access(link, (err) => {
            if (!err) {
                resolve()
            }
            fs.mkdir(link, (err) => {
                if (err) return reject(err)
                resolve()
            })
        })
    })
}

function readdir (link) {
    return new Promise((resolve, reject) => {
        fs.readdir(link, (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data)
        })
    })
}

function makeMap (exp) {
    const arr = exp.split(',')
    const set = new Set()
    arr.forEach(item => set.add(item))
    return set
}

function exceptArray (arr) {
    let results = []
    arr.forEach(item => {
        if (!except.has(item)) {
            results.push(item)
        }
    })
    return results
}

const isVue = /\.vue$/
const styleReg = /<style.?>((.|\n)*)<\/style>/
const firstN = /^\n/

function collectStyle (content) {
    if (!styleReg.test(content)) return ''
    const result = content.match(styleReg)
    let css = ''
    if (result.length > 1) {
        css = result[1]
        css = clearFirstN(css)
    }
    return css
}

function clearFirstN (str) {
    while (firstN.test(str)) {
        str = str.substr(1)
    }
    return str
}

function cssExtra ({ link, floder, file }) {
    return new Promise((resolve, reject) => {
        let styleContent = ''
        let fileContent = ''
        const cssName = file.replace('.vue', '') + '.css'

        readFile(link)
            .then(content => {
                fileContent = content
                styleContent = collectStyle(content)
            })
            .then(() => {
                const link = path.resolve(__dirname, cssPath, floder)
                return createDir(link)
            })
            .then(() => {
                let content = fileContent.replace(styleReg, '')
                content = clearFirstN(content)

                if (styleContent) {
                    content = `<style src="radon-ui-css/${floder}/${cssName}"></style>\n` + content
                    writeFile(path.resolve(__dirname, cssPath, floder, cssName), styleContent)
                    return writeFile(path.resolve(__dirname, rootPath, floder, file), content)
                } else {
                    return Promise.resolve()
                }
            })
            .then(resolve)
            .catch(reject)
    })
}

readdir(path.resolve(__dirname, rootPath))
    .then(data => {
        const floders = exceptArray(data)
        const queue = []

        floders.forEach(floder => {
            queue.push(new Promise((resolve, reject) => {
                readdir(path.resolve(__dirname, rootPath, floder))
                    .then(files => {
                        resolve({
                            files: files,
                            floder: floder
                        })
                    })
                    .catch(reject)
            }))
        })
        return Promise.all(queue)
    })
    .then(list => {
        const queue = []
        list.forEach(data => {
            const files = exceptArray(data.files)
            files.forEach(file => {
                if (isVue.test(file)) {
                    queue.push({
                        file: file,
                        floder: data.floder,
                        link: path.resolve(__dirname, rootPath, data.floder, file)
                    })
                }
            })
        })
        return queue
    })
    .then(jobs => {
        const queue = []
        jobs.forEach(job => {
            queue.push(cssExtra(job))
        })
        return Promise.all(queue)
    })
    .then(() => {
        console.log('all done')
    })
    .catch(err => {
        console.log(err)
    })
