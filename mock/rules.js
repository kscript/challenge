module.exports = {
    // 匹配某一分类
    '/question/category/:category': 'category?category=:category',
    // 匹配某一分类下的问题
    '/question/:category/:title': 'question?category=:category&title=:title',
    // 匹配分类信息
    '/question/categorys/': 'categorys',
}