const fs = require('fs')
const path = require('path')
module.exports = {
    question: {
        format(method, params, result){
            let title = /\.md$/.test(params.title) ? params.title : `${params.title}.md`
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(process.cwd(), '/public/question/' + title), (err, data) => {
                    err ? reject({msg: '问题不存在'}) : resolve({ data: data.toString() })
                })
            })
        },
        get: {
        }
    }
}