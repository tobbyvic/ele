<template>
  <div class="shop">
    <!--引入svg-->
    <svg-example></svg-example>
    <!--header-->
    <header class="shop_header">
      <div class="shop_header_box">
        <img :src="resBaseImgurl + shopDetail.image_path" class="shop_header_img"/>
        <div class="shop_header_div">
          <!--右侧部分上部-->
          <div class="shop_header_div--top">
            <h3>{{ shopDetail.name }}</h3>
          </div>
          <!--右侧部分中部-->
          <div class="shop_header_div--middle">
            <p> {{ tips }}</p>
          </div>
          <!--右侧部分下部-->
          <div class="shop_header_div--bottom">
            <p> {{ shopDetail.promotion_info }} </p>
          </div>
        </div>
      </div>
      <div class="shop_header_activity">
        <span v-for="activity in activities">
          {{ activity.description }}
        </span>
      </div>
    </header>
    <!--top-->
    <div class="shop_top">
      <span>
        <div :class="{shop_top_active: activeFlag === 1}" @click="SWITCH_CONTENT(1)">商品</div>
      </span>
      <span>
        <div :class="{shop_top_active: activeFlag === 0}" @click="SWITCH_CONTENT(0)">评价</div>
      </span>
    </div>

    <!--content-->

    <section class="goods_container" v-if="activeFlag">
      <section class="shop_content_container">
        <section class="shop_content_container_left">
          <ul>
            <li v-for="x in list">
              {{ x }}
            </li>
          </ul>
        </section>
        <section class="shop_content_container_right">
          <ul>
            <li v-for="x in list">
              {{ x }}{{ x }}
            </li>
          </ul>
        </section>
      </section>
    </section>


    <section v-else>
      2
    </section>

    <!--bottom-->
    <div class="shop_bottom">
      <div class="shop_bottom--left">
        <div>
          <span class="shop_bottom_logo">
            <svg width="100%" height="100%">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart">
              </use>
            </svg>
            <span class="shop_bottom_logo_tip">
              1
            </span>
          </span>
          <p>$</p>
          <p>配送费：</p>
        </div>
      </div>
      <div class="shop_bottom--right">
        去结算
      </div>

    </div>
  </div>
</template>

<script>
  import SvgExample from '@/components/page/SvgExample'
  // req
  import req from '@/request'

  export default {
    name: "shop",
    components: {
      SvgExample
    },
    data() {
      return {
        //content页面的切换标志位
        activeFlag: 1,
        // shop详情
        shopDetail: {},
        //图片url前缀
        resBaseImgurl: '//elm.cangdu.org/img/',
        // shop activities
        activities: [],
        // shop配送费tips
        tips: "",
        list: ["ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss", "ssss"]
      }
    },
    created() {
      /**
       * 初始化shop的信息
       * 注意：在访问路由相关参数的时候用$route而不是$router
       */
      console.log(this.$route.params);
      const id = this.$route.params.shopid;
      const that = this;
      req.get(`shopping/restaurant/${id}`)
        .then(function (response) {
          // 获取成功后
          console.log(response.data);
          console.log(response.data.activities[0]);

          if (response.data) {
            //如果返回值
            that.tips = response.data.piecewise_agent_fee.tips;
            that.activities = response.data.activities;
            that.shopDetail = response.data;
          }
        });
    },
    methods: {
      SWITCH_CONTENT(para) {
        this.activeFlag = para;
      }
    }
  }
</script>

<style>
  /**
  header
   */
  .shop {
    height: 100vh;
  }

  .shop_header {
    height: 5.8rem;
    background-color: rgba(119, 103, 137, 0.43);
    position: fixed;
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

  /**
  top
   */
  .shop_top {
    height: 3.5rem;
    background-color: #fff;
    position: fixed;
    top: 5.8rem;
    width: 100%;
  }

  .shop_top span {
    width: 50%;
    float: left;
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .shop_top_active {
    /*border-bottom: 0.1rem solid aqua;*/
    color: #3190e8;
  }

  /**
  content中点击商品部分
   */
  /*点击后最外层的部分*/
  .goods_container {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-bottom: 3.5rem;
    position: absolute;
    /*这句话是个神器，切记*/
    height: calc(100% - 9.3rem);
    bottom: 0;
  }

  /*商品部分外层的容器*/
  .shop_content_container {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
  }

  /*商品部分里面的左右两个能滑动的列*/
  .shop_content_container_left, .shop_content_container_right {
    padding: 0;
    margin: 0;
    width: 50%;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    overflow-y: auto;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  /**
  bottom
   */
  .shop_bottom {
    width: 100%;
    position: fixed;
    height: 3.5rem;
    background-color: aqua;
    bottom: 0;
    display: flex;
    color: #ffffff;
  }

  .shop_bottom--left {
    width: 70%;
    background-color: #363637;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .shop_bottom--left div {

  }

  .shop_bottom--right {
    width: 30%;
    background-color: #43D459;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    height: 100%;

  }

  /*购物车logo*/
  .shop_bottom_logo {
    background-color: #3190e8;
    position: absolute;
    left: 1.2rem;
    top: -1.6rem;
    width: 3.7rem;
    height: 3.7rem;
    border: 0.2rem solid #363637;
    border-radius: 50%;
    padding: 0.35rem;
  }

  /*右上角小图标*/
  .shop_bottom_logo_tip {
    position: absolute;
    width: 1.3rem;
    height: 1.3rem;
    background-color: red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    left: 2.2rem;
    top: -.7rem;
    border-radius: 50%;
  }

  /*.shop_bottom:after {*/
  /*display: block;*/
  /*content: "clear";*/
  /*height: 0;*/
  /*clear: both;*/
  /*overflow: hidden;*/
  /*visibility: hidden;*/
  /*}*/

</style>
