import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainpage/mainpage'
import Knowledge from '@/components/knowledge/Knowledge'
import WxAccount from '@/components/wxaccount/wxaccount'
import Project from '@/components/project/project'
import Article from '@/components/article/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainpage'
    },
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
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
