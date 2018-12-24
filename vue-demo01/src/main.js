import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

// 配置路由
import Home from './components/Home.vue'
import News from './components/News.vue'
import Content from './components/Content.vue'
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '/content/:aid', component: Content },
    { path: '/*', redirect: '/home' }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
