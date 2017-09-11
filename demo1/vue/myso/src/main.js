// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import JsEncrypt from 'jsencrypt/bin/jsencrypt'
import vuex from 'vuex'
import store from '@/store/index'



Vue.config.productionTip = false

Vue.prototype.$jsEncrypt = JsEncrypt
Vue.use(vuex)
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
