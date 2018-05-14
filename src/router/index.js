import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/page/home/home'
import city from '@/components/page/city/city'
import index from '@/components/page/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cities/:id',
      component: city
    },
    {
      path: '/index',
      component: index
    }
  ]
});
