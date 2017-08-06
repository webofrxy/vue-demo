import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import admin from '@/components/admin'
import adminArticleList from '@/components/adminArticleList'
import lastestPractise from '@/components/lastestPractise'
import select from '@/components/select'
import navMenu from '@/components/navMenu'
import header from '@/components/header'
import breadcrumb from '@/components/breadcrumb'
import datePicker from '@/components/datePicker'
import list from '@/components/list'
import pagination from '@/components/pagination'
import login from '@/components/login'
import reg from '@/components/reg'

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
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: '/adminArticleList',
          name: 'adminArticleList',
          component: adminArticleList
        },
        {
          path: '/lastestPractise',
          name: '/lastestPractise',
          component: lastestPractise
        }
      ]
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path:'/breadcrumb',
      name: '/breadcrumb',
      component: breadcrumb
    },
    {
      path: '/datePicker',
      name: '/datePicker',
      component: datePicker
    },
    {
      path: '/list',
      name: '/list',
      component: list
    },
    {
      path: '/pagination',
      name: '/pagination',
      component: pagination
    },
    {
      path: '/login',
      name: '/login',
      component: login
    },
    {
      path: '/reg',
      name: '/reg',
      component: reg
    }
  ]
})
