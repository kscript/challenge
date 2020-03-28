const path = require('path')

const base = {
  // 静态数据存放路径
  staticPath: process.env.NODE_ENV === 'development' ? '/api/' : '/article/challenge/',
  // mock服务数据路径 
  // 由于要将项目和数据进行分离, 所以mock数据需要到外面的项目里取
  mockPath: path.join(process.cwd(), '../article/challenge/'),
}
const store = {
  // 是否缓存请求结果
  cache: true
}
const _default = {
  ...base,
  store
}
module.exports = _default
