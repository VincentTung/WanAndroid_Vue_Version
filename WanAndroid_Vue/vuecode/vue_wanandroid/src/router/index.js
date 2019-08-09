import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainpage/mainpage'
// import HelloWorld from '@/components/HelloWorld'

import Knowledge from '@/components/knowledge/Knowledge'
import WxAccount from '@/components/wxaccount/wxaccount'
import Project from '@/components/project/project'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: Knowledge
    },
    {
      path: '/wxaccount',
      name: 'WxAccount',
      component: WxAccount
    }, {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})
