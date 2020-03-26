import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: r => require.ensure( [], () => r (require('@/views/index.vue'))),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: r => require.ensure( [], () => r (require('@/views/home.vue'))),
        },
        {
          path: '/question/:title',
          name: 'question',
          component: r => require.ensure( [], () => r (require('@/views/question.vue'))),
        }
      ]
    }
  ]
})
