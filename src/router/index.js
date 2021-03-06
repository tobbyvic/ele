import Vue from 'vue'
import Router from 'vue-router'
/**
 * 引入各个组件
 */
import home from '@/components/page/home/home'
import city from '@/components/page/city/city'
import entry from '@/components/page/entry/entry'
import find from '@/components/page//find/find'
import order from '@/components/page/order/order'
import orderDetail from '@/components/page/order/children/orderDetail'
import login from '@/components/page/login/login'

import benefit from '@/components/page/benefit/benefit'
import oldbenefit from '@/components/page/benefit/children/oldbenefit'
import profile from '@/components/page/profile/profile'
import info from '@/components/page/profile/children/info'
import address from '@/components/page/profile/children/children/address'
import forget from '@/components/page/profile/children/children/forget'
import add from '@/components/page/profile/children/children/children/add'


/**
 * 引入entry进入后的一些组件
 */
import food from '@/components/page/entry/food/food'
import shop from '@/components/page/entry/shop/shop'
import ShopHeader from '@/components/page/entry/shop/children/ShopHeader'

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
      component: order,
      children: [
        {
          path: 'orderDetail',
          component: orderDetail
        }
      ]
    },
    /**
     * 登录login
     */
    {
      path: '/login',
      component: login
    },
    /**
     * 我的profile(用户详情)
     */
    {
      path: '/profile',
      component: profile,
      children: [
        {
          path: 'info',
          component: info,
          children: [
            {
              path: 'address',
              component: address,
              children: [
                {
                  path: 'add',
                  component: add
                }
              ]
            },
            {
              path: 'forget',
              component: forget
            }
          ]
        }
      ]
    },
    /**
     * 红包benefit
     */
    {
      path: '/benefit',
      component: benefit,
      children: [
        {
          path: 'oldbenefit',
          component: oldbenefit
        }
      ]
    },
    //*****************************
    /**
     * food 分类
     */
    {
      path: '/food',
      component: food
    },
    /**
     * shop
     */
    {
      name: 'shop',
      path: '/shop/:shopid',
      component: shop,
    },
    /**
     * shopDetail
     */
    {
      path: '/shop/detail',
      component: ShopHeader

    },
  ]
});
