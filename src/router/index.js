import Vue from 'vue'
import Router from 'vue-router'
/**
 * 引入各个组件
 */
import home from '@/components/page/home/home'
import city from '@/components/page/city/city'
import entry from '@/components/page/entry/entry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    /**
     * app首页，选择城市
     */
    {
      path: '/home',
      component: home
    },
    /**
     * app,根据城市选择详细地址
     */
    {
      path: '/cities/:id',
      component: city
    },
    /**
     * app,根据城市选择详细地址
     */
    {
      path: '/entry',
      component: entry
    }
  ]
});
