import Vue from 'vue'
import Router from 'vue-router'
/**
 * 引入各个组件
 */
import home from '@/components/page/home/home'
import city from '@/components/page/city/city'
import entry from '@/components/page/entry/entry'
import find from '@/components/page/entry/find/find'
import order from '@/components/page/entry/order'


/**
 * 引入entry进入后的一些组件
 */
import food from '@/components/page/entry/food/food'

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
    //*****************************
    /**
     * 首页entry
     */
    {
      path: '/entry',
      component: entry
    },
    /**
     * 首页find
     */
    {
      path: '/find',
      component: find
    },
    /**
     * 首页order
     */
    {
      path: '/order',
      component: order
    },
    //*****************************
    /**
     * food 分类
     */
    {
      path: '/food',
      component: food
    }
  ]
});
