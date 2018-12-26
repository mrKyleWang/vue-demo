// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Content from '../components/Content.vue'
import User from '../components/User.vue'
import UserAdd from '../components/user/UserAdd.vue'
import UserList from '../components/user/UserList.vue'
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { name: 'news', path: '/news', component: News },
    { path: '/content/:aid', component: Content },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: 'add',
          component: UserAdd
        },
        {
          path: 'list',
          component: UserList
        }
      ]
    },
    { path: '/*', redirect: '/home' }
  ]
})

export default router
