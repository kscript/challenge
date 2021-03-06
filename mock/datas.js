const runtime = require('../config/runtime')
const fs = require('fs')
const path = require('path')
module.exports = {
    md: {
        format(method, params, result) {
            let title = /\.md$/.test(params.title) ? params.title : `${params.title}.md`
            let name = params.name
            let category = params.category
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, name, category, title), (err, data) => {
                    if (err) {
                        resolve('')
                        console.log(err)
                    } else {
                        resolve(data.toString())
                    }
                })
            })
        },
        get: {
        }
    },
    category: {
        format(method, params, result) {
            let name = params.name
            let pageno = params.pageno
            let category = params.category
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, name, category, 'category_' + pageno + '.json'), (err, data) => {
                    if (err) {
                        resolve([])
                        console.log(err)
                    } else {
                        resolve(data.toString())
                    }
                })
            })
        },
        get: {}
    },
    timeline: {
        format(method, params, result) {
            let name = params.name
            let pageno = params.pageno
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, name, 'timeline_' + pageno + '.json'), (err, data) => {
                    if (err) {
                        resolve([])
                        console.log(err)
                    } else {
                        resolve(data.toString())
                    }
                })
            })
        },
        get: {}
    },
    categorys: {
        format(method, params, result) {
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, params.name, 'categorys.json'), (err, data) => {
                    if (err) {
                        resolve('')
                        console.log(err)
                    } else {
                        resolve(data.toString())
                    }
                })
            })
        },
        get: {}
    },
    info: {
        format(method, params, result) {
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, 'info.json'), (err, data) => {
                    if (err) {
                        resolve({})
                        console.log(err)
                    } else {
                        resolve(JSON.parse(data))
                    }
                })
            })
        },
        get: {}
    }
}