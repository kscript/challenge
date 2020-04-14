module.exports = {
    '/info.json': 'info',
    // 匹配分类信息
    '/:name/categorys.json': 'categorys?name=:name',
    '/:name/timeline_:pageno.json': 'timeline?name=:name&pageno=:pageno',
    // 匹配某一分类
    '/:name/:category/category_:pageno.json': 'category?name=:name&category=:category&pageno=:pageno',
    // 匹配某一分类下的问题
    '/:name/:category/:title': 'md?name=:name&category=:category&title=:title',
}