// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import '@/assets/public/reset.css'
// import '@/assets/font/iconfont.css'
import store from '@/store/index'
import 'babel-polyfill'
import api from '@/api'
import '@/assets/public/rem'



Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
