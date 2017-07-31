import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import select from '@/components/select'
import navMenu from '@/components/navMenu'
import allPage from '@/components/allPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/navMenu',
      name: 'navMenu',
      component: navMenu
    },
    {
      path: '/allPage',
      name: 'allPage',
      component: allPage
    }
  ]
})
