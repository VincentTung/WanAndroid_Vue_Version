import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainpage/mainpage'
import Knowledge from '@/components/knowledge/Knowledge'
import WxAccount from '@/components/wxaccount/wxaccount'
import Project from '@/components/project/project'
import Article from '@/components/article/article'
import TabPage from '@/components/tabpage/tabpage'
import TabKnowledge from '@/components/tabknowledge/tabknowledge'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tabpage/mainpage'
    },

    {
      path: '/tabpage',
      name: 'TabPage',
      component: TabPage,
      children: [
        {
          path: 'mainpage',
          name: 'MainPage',
          component: MainPage
        },

        {
          path: 'knowledge',
          name: 'Knowledge',
          component: Knowledge
        },
        {
          path: 'wxaccount',
          name: 'WxAccount',
          component: WxAccount
        }, {
          path: 'project',
          name: 'Project',
          component: Project
        }
      ]
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/tabknowledge',
      name: 'TabKnowledge',
      component: TabKnowledge
    }
  ]
})
