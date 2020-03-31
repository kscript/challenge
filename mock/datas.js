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
                    err ? resolve('') : resolve(data.toString())
                })
            })
        },
        get: {
        }
    },
    category: {
        format(method, params, result) {
            let name = params.name
            let category = params.category
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, name, category + '.json'), (err, data) => {
                    resolve(err ? [] : JSON.parse(data.toString()))
                })
            })
        },
        get: {}
    },
    categorys: {
        format(method, params, result) {
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, params.name, 'categorys.json'), (err, data) => {
                    err ? resolve('') : resolve(data.toString())
                })
            })
        },
        get: {}
    }
}