<template>
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
</template>

<script>
import req from '@/request'

export default {
  name: "shop-header",
  data() {
    return {
      shopDetail: {},// shop详情
      resBaseImgurl: '//elm.cangdu.org/img/',//图片url前缀
      activities: [],// shop activities
      tips: "",// shop配送费tips
    }
  },
  mounted() {
    this.INIT_SHOP();
  },
  methods: {
    /**
     * 初始化顶部shop的信息
     * 注意：在访问路由相关参数的时候用$route而不是$router
     */
    INIT_SHOP() {
      const id = this.$route.params.shopid;
      const that = this;
      req.get(`shopping/restaurant/${id}`)
        .then(function (response) {
          // 获取成功后
          console.log(response.data);
          if (response.data) {
            //如果返回值
            that.tips = response.data.piecewise_agent_fee.tips;
            that.activities = response.data.activities;
            that.shopDetail = response.data;
          }
        });
    }
  }

}
</script>

<style>
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
</style>
