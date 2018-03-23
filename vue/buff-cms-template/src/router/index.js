import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/'
import Home from '@/components/pages/home/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/pages/home',
      component: Home
    },{
      path: '/login',
      name: '/pages/login',
      component: Login
    }
  ]
})
