import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import index from '@/components/index'
import tab_2 from '@/components/tab_2'
import tab_3 from '@/components/tab_3'
import tab_4 from '@/components/tab_4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: Container,
      children: [
        {
          path: 'home',
          name: 'index',
          component: index
        },
        {
          path: 'mywallet',
          name: 'mywallet',
          component: tab_2
        },
        {
          path: 'myloan',
          name: 'myloan',
          component: tab_3
        },
        {
          path: 'mytoken',
          name: 'mytoken',
          component: tab_4
        }
      ]
    }
    // {
    //   path: '/',
    //   redirect: '/home',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/home',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/mywallet',
    //   name: 'mywallet',
    //   component: tab_2
    // },
    // {
    //   path: '/myloan',
    //   name: 'myloan',
    //   component: tab_3
    // },
    // {
    //   path: '/mytoken',
    //   name: 'mytoken',
    //   component: tab_4
    // }
  ]
})
