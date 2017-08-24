import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import admin from '@/components/admin'
import adminArticleList from '@/components/adminArticleList'
import lastestPractise from '@/components/lastestPractise'
import adminArticleEdit from '@/components/adminArticleEdit'
import adminChangeInfo from '@/components/adminChangeInfo'
import select from '@/components/common/select'
import navMenu from '@/components/common/navMenu'
import adminHeader from '@/components/adminHeader'
import breadcrumb from '@/components/common/breadcrumb'
import datePicker from '@/components/common/datePicker'
import list from '@/components/common/list'
import pagination from '@/components/common/pagination'
import login from '@/components/login'
import reg from '@/components/reg'
import banner from '@/components/banner'

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
        },
        {
          path: '/adminArticleEdit',
          name: '/adminArticleEdit',
          component: adminArticleEdit
        },
        {
          path: '/adminChangeInfo',
          name: '/adminChangeInfo',
          component: adminChangeInfo
        }
      ]
    },
    {
      path: '/adminHeader',
      name: 'adminHeader',
      component: adminHeader
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
    },
    {
      path: '/banner',
      name: '/banner',
      component: banner
    }
  ]
})
