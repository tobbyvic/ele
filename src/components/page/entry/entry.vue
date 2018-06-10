<template>
  <div class="entry">
    <!--header-->
    <entry-header :locationAddress="locationAddress">
      <template slot="icon">
        <router-link to="/find"><i class="el-icon-search"></i></router-link>
      </template>
      <template slot="content">
        {{ locationAddress.name }}
      </template>
      <template slot="corner">
        <router-link to="/profile" v-if="userSubmitted">
          <svg width="1.3rem" height="1.3rem"  style="color: #ffffff;vertical-align: center">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user">
            </use>
          </svg>
        </router-link>


        <router-link to="/login" v-else>
          登录|注册
        </router-link>
      </template>
    </entry-header>
    <!--top-->
    <section class="entry_top">
      <category-swiper>
        <template slot="foodstuff1">
          <ul>
            <li v-for="food in foodstuff1" :key="food.id" @click="JUMPTO_FOOD(food)">
              <img :src="baseImgurl + food.image_url" width="60%"/>
              {{ food.title }}
            </li>
          </ul>
        </template>
        <template slot="foodstuff2">
          <ul>
            <li v-for="food in foodstuff2" :key="food.id" @click="JUMPTO_FOOD(food)">
              <img :src="baseImgurl + food.image_url" width="60%"/>
              {{ food.title }}
            </li>
          </ul>
        </template>
      </category-swiper>
    </section>
    <!--restaurant content-->
    <list-module :location-restaurant="locationRestaurant"></list-module>
    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>
  </div>
</template>

<script>
  /**
   * 这两个必须都要引入
   */
  // req
  import req from '@/request'
  // 引入子组件部分
  import BottomNav from './children/BottomNav'
  import EntryHeader from './children/EntryHeader'
  import CategorySwiper from './children/CategorySwiper'
  import ListModule from './children/ListModule'


  export default {
    name: "entry",
    components: {
      BottomNav,
      EntryHeader,
      CategorySwiper,
      ListModule
    },
    data() {
      return {
        // 用户是否登录，右上角的切换标志
        userSubmitted: false,

        foodstuff1: [],
        foodstuff2: [],
        baseImgurl: 'https://fuss10.elemecdn.com',
        locationAddress: {},
        locationRestaurant: [],
      }
    },
    computed: {},
    mounted() {

      console.log(this.$route.query);
      const geohash = this.$storeObject.getStore("geohash");
      const that = this;

      /**
       * 初始化食品分类
       * @type {mounted}
       */
      req.get('v2/index_entry')
        .then(function (response) {
          // 获取成功后
          console.log(response.data);
          // 等分数组
          that.foodstuff1 = that.sliceArray(response.data, 8)[0];
          that.foodstuff2 = that.sliceArray(response.data, 8)[1];
          console.log(that.sliceArray(response.data, 8));
        });
      /**
       * 根据经纬度详细定位
       */
      req.get('v2/pois/' + geohash)
        .then(function (response) {
          // 获取成功后
          console.log(response);
          that.locationAddress = response.data;
          /**
           * 得到详细定位后获取商铺列表
           */
          req.get('shopping/restaurants', {latitude: response.data.latitude, longitude: response.data.longitude})
            .then(function (response) {
              // 获取成功后
              console.log(response.data);
              that.locationRestaurant = response.data;
            });
        });
      /**
       * 判断用户是否登录
       */
      if (window.localStorage.getItem("user")) {
        this.userSubmitted = true;
      }
    },
    methods: {
      /**
       * 将点击的餐馆相关参数传递给food页面
       * @param food
       * @constructor
       */
      JUMPTO_FOOD(food) {
        this.$router.push({path: '/food', query: {restaurant_category_id: food.id, title: food.title}});
      }
    }
  }
</script>

<style>


  /**
  top
   */
  .entry_top {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    margin-top: 3.35rem;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  /**
  bottom
   */
  .entry_bottom {

  }

</style>
