import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 导入
import Hiword from '@/components/Hiword.vue'
// 注册
Vue.component("Hiword",Hiword)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
