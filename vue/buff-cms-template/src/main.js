import './includes/css'
import './includes/script'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const isAdmin = true;
let isLogin = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
