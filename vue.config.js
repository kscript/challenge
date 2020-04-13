const path = require("path")
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/challenge/',
  // indexPath: '404.html',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('@@', resolve('/'))
  },
  configureWebpack: (configure) => {
    return {
      externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
        'element-ui': 'ELEMENT',
        'js-yaml': 'jsyaml',
        'prismjs': 'Prism',
        'esprima': 'esprima',
        "leancloud-storage": "AV",
        "valine": "Valine",
        // 'vue-markdown': 'VueMarkdown',
        'unorm': 'unorm'
      }
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData: `@import "@/assets/scss/variables.scss";@import "@/assets/scss/global.scss";`
      }
    }
  }
}