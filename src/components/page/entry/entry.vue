<template>
  <div class="entry">
    <!--header-->
    <entry-header :locationAddress="locationAddress">
      <template slot="icon">
        <i class="el-icon-search"></i>
      </template>
      <template slot="content">
        {{ locationAddress.name }}
      </template>
      <template slot="corner">
        登录|注册
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
    },
    methods: {
      /**
       * 将点击的餐馆相关参数传递给food页面
       * @param food
       * @constructor
       */
      JUMPTO_FOOD(food) {
        this.$router.push({ path: '/food', query: { restaurant_category_id : food.id, title: food.title }});
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
