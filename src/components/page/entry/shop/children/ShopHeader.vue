<template>
  <header class="shop_header">
    <div class="shop_header_box">
      <router-link to="/entry" class="shop_header_icon--link">
        <i class="el-icon-arrow-left shop_header_icon--left"></i>
      </router-link>
      <img :src="resBaseImgurl + shopOverall.image_path" class="shop_header_img"/>
      <div class="shop_header_div">
        <!--右侧部分上部-->
        <div class="shop_header_div--top">
          <h3>{{ shopOverall.name }}</h3>
        </div>
        <!--右侧部分中部-->
        <div class="shop_header_div--middle">
          <p> {{ tips }}</p>
        </div>
        <!--右侧部分下部-->
        <div class="shop_header_div--bottom">
          <p> {{ shopOverall.promotion_info }} </p>
        </div>


      </div>
      <a @click="SHOW_SHOP_DETAIL">
        <i class="el-icon-arrow-right shop_header_icon--right"></i>
      </a>
    </div>

    <div class="shop_header_activity">
        <span v-for="activity in activities">
          {{ activity.description }}
        </span>
    </div>



  </header>



</template>

<script>
  import req from '@/request'
  import ShopDetail from './ShopDetail'

  export default {
    name: "shop-header",
    props: ['shopOverall', 'tips'],
    components: {
      ShopDetail
    },
    data() {
      return {
        resBaseImgurl: '//elm.cangdu.org/img/',//图片url前缀
        // activities: [],// shop activities
        // tips: "",// shop配送费tips
        detailFlag: false
      }
    },
    computed: {
      activities() {
        return this.shopOverall.activities;
      }
    },
    mounted() {
    },
    methods: {
      SHOW_SHOP_DETAIL() {
        this.$store.commit("MAKETRUE_SHOP_DETAIL", true);
      }
    }

  }
</script>

<style>
  .shop_header {
    height: 5.8rem;
    background-color: rgba(119, 103, 137, 0.43);
    /*position: fixed;*/
    width: 100%;
    background: url(https://ws3.sinaimg.cn/large/006tNc79gy1fpezlo2tyqj30hs0budh4.jpg);
    color: #ffffff;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .shop_header_box {
    width: 100%;
    display: flex;
    height: 4rem;
    padding-left: .6rem;
  }

  .shop_header_img {
    width: 4rem;
    height: 4rem;
  }

  .shop_header_div {
    width: 100%;
  }

  .shop_header_icon--link {
    display: inline-flex;
    flex-flow: column;
  }

  .shop_header_icon--left {
    color: #fff;
    font-size: 1.2rem;
  }

  .shop_header_icon--right {
    /*transform:rotate(180deg);*/
    /*-ms-transform:rotate(180deg); 	!* IE 9 *!*/
    /*-moz-transform:rotate(180deg); 	!* Firefox *!*/
    /*-webkit-transform:rotate(180deg); !* Safari 和 Chrome *!*/
    /*-o-transform:rotate(180deg); 	!* Opera *!*/
    line-height: 4rem;
    color: #ffffff;
    font-size: 1.8rem;
  }

  /*右侧*/
  .shop_header_div--top h3 {
    font-size: 1.1rem;
    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .shop_header_div--middle p {
    font-size: .8rem;
  }

  .shop_header_div--bottom p {
    font-size: .8rem;
  }

  .shop_header_activity {
    width: 100%;
    padding-left: .6rem;
  }
</style>
