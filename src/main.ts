import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import eventBus from '@/eventbus'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(eventBus)
Vue.use(elementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
