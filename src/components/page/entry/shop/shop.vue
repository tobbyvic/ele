<template>
  <div class="shop">
    <!--引入svg-->
    <svg-example></svg-example>
    <!--header-->
    <header class="shop_header">
      <img src="https://ws3.sinaimg.cn/large/006tKfTcgy1fpdpnpqmx7j30m80m876f.jpg" class="shop_header_img"/>
      <div class="shop_header_div">
        <!--右侧部分上部-->
        <div class="shop_header_div--top">
          <p>你个小伙子</p>
        </div>
        <!--右侧部分中部-->
        <div class="shop_header_div--middle">
          <p> 月售 单</p>
        </div>
        <!--右侧部分下部-->
        <div class="shop_header_div--bottom">
          <p> ¥20起送</p>
        </div>
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
    <section class="shop_content">
      <div v-if="activeFlag">
        1
      </div>
      <div v-else>
        2
      </div>
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

  export default {
    name: "shop",
    components: {
      SvgExample
    },
    data() {
      return {
        activeFlag: 1
      }
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
    height: 5.5rem;
    background-color: rgba(119, 103, 137, 0.43);
    position: fixed;
    width: 100%;
    background: url(https://ws3.sinaimg.cn/large/006tNc79gy1fpezlo2tyqj30hs0budh4.jpg);
    color: #ffffff;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .shop_header_img {
    width: 4rem;
    height: 4rem;
  }

  .shop_header_div {
    width: 100%;
  }

  /**
  top
   */
  .shop_top {
    height: 3.5rem;
    background-color: #fff;
    position: fixed;
    top: 5.5rem;
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
  content
  */
  .shop_content {
    /*margin-top: 9rem;*/
    top: 9rem;
    /*如果不加下面这句，页面会乱掉*/
    position: relative;
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
