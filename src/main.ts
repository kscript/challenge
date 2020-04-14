import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import eventBus from '@/eventbus'
import 'element-ui/lib/theme-chalk/index.css'
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $bus: Vue;
  }
}
Vue.config.productionTip = false
Vue.use(eventBus)
Vue.use(elementUI)
store.dispatch('info').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
