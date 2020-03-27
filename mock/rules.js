module.exports = {
    // 匹配分类信息
    '/question/categorys.json': 'categorys',
    // 匹配某一分类
    '/question/:category/list.json': 'category?category=:category',
    // 匹配某一分类下的问题
    '/question/:category/:title': 'question?category=:category&title=:title',
}