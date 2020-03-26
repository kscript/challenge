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
      component: r => require.ensure([], () => r(require('@/views/index.vue')))
    },
    {
      path: '/question',
      name: 'question',
      component: r => require.ensure([], () => r(require('@/views/question/index.vue'))),
      children: [
        {
          path: '/question/:category',
          name: 'questionCategory',
          component: r => require.ensure([], () => r(require('@/views/question/category.vue'))),
        },
        {
          path: '/question/:category/:title',
          name: 'questionViewer',
          component: r => require.ensure([], () => r(require('@/views/question/viewer.vue'))),
        }
      ]
    }
  ]
})
