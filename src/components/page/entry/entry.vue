<template>
  <div class="entry">
    <!--header-->
    <div class="entry_header">
      <div :span="24" class="entry_header--inside">
        <div class="entry_header--inside_div">
          <i class="el-icon-search"></i>
        </div>
        <div class="entry_header--inside_location">
          {{ locationAddress.name }}
        </div>
        <div class="entry_header--inside_div">
          登录|注册
        </div>
      </div>
    </div>
    <!--top-->
    <section class="entry_top">
      <!-- Slider main container -->
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <ul>
              <li v-for="food in foodstuff1" :key="food.id">
                <img :src="baseImgurl + food.image_url" width="60%"/>
                {{ food.title }}
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul>
              <li v-for="food in foodstuff2" :key="food.id">
                <img :src="baseImgurl + food.image_url" width="60%"/>
                {{ food.title }}
              </li>
            </ul>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-container--bottom"></div>
      </div>
    </section>
    <!--restaurant content-->
    <section class="entry_content">
      <ul>
        <li v-for="restaurant in locationRestaurant" :key="restaurant.id">
          <img :src="resBaseImgurl + restaurant.image_path"/>
          <div class="entry_content_div">
            <div class="entry_content_div--top">
              <p>{{ restaurant.name }}</p>
              <span>
                <span v-for="item in restaurant.supports" :key="item.id">{{item.icon_name}}</span>
              </span>

            </div>
            <div class="entry_content_div--middle">
              <p> ¥20起送/ {{ restaurant.piecewise_agent_fee.tips }}</p>
              <span>
                <star-rate  :count="5" :disabled="true" v-model="num" class=""/>
              </span>
            </div>
            <div class="entry_content_div--bottom">
              <p> ¥20起送/ {{ restaurant.piecewise_agent_fee.tips }}</p>
              <span>
                {{ restaurant.distance }}/{{ restaurant.order_lead_time }}
              </span>
            </div>
          </div>

        </li>
      </ul>

    </section>
    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>
  </div>
</template>

<script>
  /**
   * 这两个必须都要引入
   */
  import Swiper from 'swiper';
  import "swiper/dist/css/swiper.min.css";
  import "swiper/dist/js/swiper.min.js";

  import req from '@/request'

  import BottomNav from './children/BottomNav'
  import StarRate from 'vue-cute-rate'


  export default {
    name: "entry",
    components: {
      BottomNav,
      StarRate
    },
    data() {
      return {
        foodstuff1: [],
        foodstuff2: [],
        baseImgurl: 'https://fuss10.elemecdn.com',
        locationAddress: {},
        locationRestaurant: [],
        resBaseImgurl: '//elm.cangdu.org/img/',
        num: 3
      }
    },
    computed: {},
    mounted() {

      console.log(this.$route.query);
      const geohash = this.$route.query.geohash;
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
          // 初始化swiper
          // let swiper = new Swiper('.swiper-container', {
          //   pagination: {
          //     el: '.swiper-pagination',
          //   }
          // });
          that.createSwiper();
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
       * 初始化swiper
       */
      createSwiper() {
        const swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          paginationClickable: true,
          speed: 600,
          autoplay: 4000,
          onTouchEnd: function () {
            swiper.startAutoplay()
          }
        })
      }
    }
  }
</script>

<style>
  /**
  header
   */
  .entry_header {
    background: #2A85E5;
    height: 3.35rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .entry_header--inside {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .entry_header--inside_div {
    padding: 0 10px;
    color: #ffffff;
  }

  .entry_header--inside_div a {
    color: #ffffff;
  }

  .entry_header--inside_location {
    padding: 0 10px;
    color: #ffffff;
    position: absolute;
    width: 50%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%);

    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

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
  content
   */
  .entry_content {
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    bottom: 0px;
  }

  .entry_content ul {
    width: 100%;
    font-size: 0.9rem;
    color: #3190e8;
    display: flex;
    flex-wrap: wrap;
  }

  .entry_content li {
    width: 100%;
    text-align: center;
    font-size: 0.5rem;
    padding: 20px 20px;
    border-bottom: 1px solid #CCCCCC;
    /*flex*/
    display: flex;
    /*flex-direction: column;*/
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: left;
  }

  .entry_content li img {
    width: 4rem;
    height: 4rem;
  }

  .entry_content_div {
    width: 100%;
  }

  .entry_content_div div {
    display: flex;
    align-items: center;
    /*padding-left: 5px;*/
  }

  /*top*/
  .entry_content_div--top {
    justify-content: space-between;

  }
  .entry_content_div--top p {
    color: #333;
    font-weight: 700;
    font-size: 1rem;
  }
  .entry_content_div--top span{
    font-size: 0.5rem;
    color: #999;
    border: 0.025rem solid #f1f1f1;
    border-radius: 0.08rem;
    margin-left: 0.1rem;
  }
  /*middle*/
  .entry_content_div--middle span{
    margin-left: 1rem;
  }
  .sss {
    margin-left: 4px;
  }
  .star-main div {
    margin-left: -4px;
  }




  /*bottom*/
  .entry_content_div--bottom {
    justify-content: space-between;

  }
  .entry_content_div--bottom p {
    font-size: 0.5rem;
    color: #999;
  }
  .entry_content_div--bottom span{
    font-size: 0.35rem;
    color: #2A85E5;

  }

  /*swiper*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    /*text-align: center;*/
    /*font-size: 18px;*/
    /*background: #fff;*/
    /*!* Center slide text vertically *!*/
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    /*-webkit-box-pack: center;*/
    /*-ms-flex-pack: center;*/
    /*-webkit-justify-content: center;*/
    /*justify-content: center;*/
    /*-webkit-box-align: center;*/
    /*-ms-flex-align: center;*/
    /*-webkit-align-items: center;*/
    /*align-items: center;*/
  }

  .swiper-slide ul {
    width: 100%;
    font-size: 0.9rem;
    color: #3190e8;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
  }

  .swiper-slide li {
    width: 25%;
    text-align: center;
    font-size: 0.5rem;
    padding: 10px 0;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /**
  bottom
   */
  .entry_bottom {

  }

</style>
