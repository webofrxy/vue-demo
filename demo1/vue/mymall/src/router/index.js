import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import register from '@/page/register'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: '/index',
      component: index,
      children: [
        {path: '/home',name: 'home',component: home},
        {path: '/classify',name: 'classify',component: classify},
        {path: '/shopCart',name: 'shopCart',component: shopCart},
        {path: '/mine',name: 'mine', component: mine}
      ],
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'name',
      component: login
    }
  ]
})
