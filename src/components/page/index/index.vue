<template>
  <div class="index">
    <!--header-->
    <div class="index_header">
      <div :span="24" class="index_header--inside">
        <div class="index_header--inside_div">
          <i class="el-icon-search"></i>
        </div>
        <div class="index_header--inside_location">
          xxx
        </div>
        <div class="index_header--inside_div">
          登录|注册
        </div>
      </div>
    </div>
    <!--top-->
    <section class="index_top">
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

  export default {
    name: "index",
    data() {
      return {
        foodstuff1: [],
        foodstuff2: [],
        baseImgurl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      /**
       * 初始化食品分类
       * @type {mounted}
       */
      const that = this;
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
        })
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
  .index_header {
    background: #2A85E5;
    height: 3.35rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }

  .index_header--inside {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .index_header--inside_div {
    padding: 0 10px;
    color: #ffffff;
  }

  .index_header--inside_div a {
    color: #ffffff;
  }

  .index_header--inside_location {
    padding: 0 10px;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%);
  }

  /**
  top
   */
  .index_top {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    margin-top: 3.35rem;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

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
  .swiper-container--bottom {
    bottom: 0;
  }
</style>
