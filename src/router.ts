import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      // redirect: '/question',
      component: r => require.ensure([], () => r(require('@/views/index.vue')))
    },
    {
      path: '/question',
      name: 'question',
      component: r => require.ensure([], () => r(require('@/views/question/index.vue'))),
      children: [
        {
          path: '/question/:category',
          name: 'question_category',
          component: r => require.ensure([], () => r(require('@/views/question/category.vue'))),
        },
        {
          path: '/question/:category/:title',
          name: 'question_category_title',
          component: r => require.ensure([], () => r(require('@/views/question/viewer.vue'))),
        }
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: r => require.ensure([], () => r(require('@/views/article/index.vue'))),
      children: [
      ]
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: r => require.ensure([], () => r(require('@/views/knowledge/index.vue'))),
      children: [
      ]
    }
  ]
})
