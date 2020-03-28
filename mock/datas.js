const runtime = require('../config/runtime')
const fs = require('fs')
const path = require('path')
module.exports = {
    question: {
        format(method, params, result) {
            let title = /\.md$/.test(params.title) ? params.title : `${params.title}.md`
            let category = params.category
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, '/question/', category, '/', title), (err, data) => {
                    err ? resolve('') : resolve(data.toString())
                })
            })
        },
        get: {
        }
    },
    category: {
        format(method, params, result) {
            let category = params.category
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, '/question/', category + '.json'), (err, data) => {
                    resolve(err ? [] : JSON.parse(data.toString()))
                })
            })
        },
        get: {}
    },
    categorys: {
        format(method, params, result) {
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(runtime.mockPath, '/question/', 'categorys.json'), (err, data) => {
                    err ? resolve('') : resolve(data.toString())
                })
            })
        },
        get: {}
    }
}