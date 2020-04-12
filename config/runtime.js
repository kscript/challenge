const path = require('path')
const staticPath = '/challenge-docs/'
const local_dir = 'dist'
const remote = {
  host: 'https://github.com',
  user: 'kscript',
  repository: 'challenge-docs',
  branch: 'master',
  dir: 'public',
}
const base = {
  // 静态数据存放路径
  staticPath: process.env.NODE_ENV === 'development' ? '/api/' : staticPath,
  // mock服务数据路径 
  // 由于要将项目和数据进行分离, 所以mock数据需要到外面的项目里取
  mockPath: path.join(process.cwd(), '..', staticPath, local_dir),
  remote,
  remotePath: [remote.host, remote.user, remote.repository, 'edit', remote.branch, remote.dir].join('/')
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
