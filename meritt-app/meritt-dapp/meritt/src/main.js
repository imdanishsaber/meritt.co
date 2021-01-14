import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { store } from './store/index'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
