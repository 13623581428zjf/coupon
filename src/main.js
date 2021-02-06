// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import 'amfe-flexible/index.js'
import BScroll from 'better-scroll'
import axios from 'axios';
Vue.prototype.$axios = axios;
import './rem.js'
Vue.prototype.$http = axios
//引入store
import store from './vuex/store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
