module.exports = {
    // 匹配分类信息
    '/:name/categorys.json': 'categorys?name=:name',
    // 匹配某一分类
    '/:name/:category.json': 'category?name=:name&category=:category',
    // 匹配某一分类下的问题
    '/:name/:category/:title': 'md?name=:name&category=:category&title=:title',
}