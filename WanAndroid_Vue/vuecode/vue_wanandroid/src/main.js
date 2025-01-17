// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import fastclick from 'fastclick'
import axios from 'axios'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.prototype.isBuild = false
//build
Vue.prototype.baseUrl = 'https://www.wanandroid.com'
// dev
// Vue.prototype.baseUrl = '/api'
Vue.use(Vant)
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
