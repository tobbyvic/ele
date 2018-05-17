<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <!--<ul>-->
        <!--<li v-for="food in foodstuff1" :key="food.id">-->
        <!--<img :src="baseImgurl + food.image_url" width="60%"/>-->
        <!--{{ food.title }}-->
        <!--</li>-->
        <!--</ul>-->
        <slot name="foodstuff1"></slot>
      </div>
      <div class="swiper-slide">
        <!--<ul>-->
        <!--<li v-for="food in foodstuff2" :key="food.id">-->
        <!--<img :src="baseImgurl + food.image_url" width="60%"/>-->
        <!--{{ food.title }}-->
        <!--</li>-->
        <!--</ul>-->
        <slot name="foodstuff2"></slot>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-container--bottom"></div>
  </div>
</template>

<script>
  // swiper
  import Swiper from 'swiper';
  import "swiper/dist/css/swiper.min.css";
  import "swiper/dist/js/swiper.min.js";

  export default {
    name: "category-swiper",
    mounted() {
      this.createSwiper();
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
  /*swiper*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    /*text-align: center;*/
    /*font-size: 18px;*/
    /*background: #fff;*/
    /*/* Center slide text vertically */
    */ display: -webkit-box;
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
</style>
