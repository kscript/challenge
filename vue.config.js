module.exports = {
  devServer: {
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