import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import select from '@/components/select'

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
    }
  ]
})
