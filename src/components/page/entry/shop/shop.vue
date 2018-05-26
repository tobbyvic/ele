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
      <list-template>
        <template slot="list_template_container_left">
          <ul class="goods_container_name_list">
            <li v-for="item in goods" class="goods_container_name_list_item" @click="CHOOSE_GOOD(item)" :class="{list_left_active: leftActiveId === item.id}">
              {{ item.name }}
            </li>
          </ul>
        </template>
        <template slot="list_template_container_right">
          <div class="goods_container_detail_title">
            <h3>{{ chosedGood.name }}</h3>
            <p>{{ chosedGood.description }}</p>
          </div>
          <ul class="goods_container_detail_list">
            <li v-for="item in chosedGoodFoods" class="goods_container_detail_list_item">
              <div class="goods_container_detail_list_item_main">
                <div class="goods_container_detail_list_item_main--left">
                  <img :src="resBaseImgurl + item.image_path" class="shop_header_img"/>
                </div>
                <div class="goods_container_detail_list_item_main--right">
                  <h3 style="font-size: 1rem; font-weight: bolder;">{{item.name}}</h3>
                  <div style="font-size: 0.5rem;color: #999;">{{item.description}}
                  </div>
                  <div>{{ item.tips }}</div>

                  <div class="goods_container_detail_list_item_main--right_price">
                    <span style="font-size: .8rem;color: #f60;font-weight: bold;">￥{{ item.specfoods[0].price }}</span>
                    <svg width="1.3rem" height="1.3rem" v-if="true">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add_contact">
                      </use>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </list-template>
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
  import ListTemplate from '@/components/page/entry/children/ListTemplate'
  // req
  import req from '@/request'

  export default {
    name: "shop",
    components: {
      SvgExample,
      ListTemplate
    },
    data() {
      return {
        //content页面的切换标志位
        activeFlag: 1,
        //左侧点击切换样式标志位
        leftActiveId: 2,
        // shop详情
        shopDetail: {},
        //图片url前缀
        resBaseImgurl: '//elm.cangdu.org/img/',
        // shop activities
        activities: [],
        // shop配送费tips
        tips: "",
        // 商品goods
        goods: [],
        // 左侧选中的goods，右边对应
        chosedGood: {},
        // 选中的goods的foods
        chosedGoodFoods: [],
        // activity
        activity: {},
      }
    },
    mounted() {
      console.log(this.$route.params);
      this.INIT_SHOP();
      this.INIT_GOODS();
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
      },
      /**
       * 初始化content中商品的的信息
       */
      INIT_GOODS() {
        const id = this.$route.params.shopid;
        const that = this;
        req.get('shopping/v2/menu', {restaurant_id: id})
          .then(function (response) {
            // 获取成功后
            console.log(response.data);
            that.goods = response.data;
            // 初始化数据
            that.CHOOSE_GOOD(response.data[0]);
          });
      },
      /**
       * 切换 "商品" 和 "评价"
       * @param para
       * @constructor
       */
      SWITCH_CONTENT(para) {
        this.activeFlag = para;
      },
      /**
       * 选中一个good
       * @param good
       * @constructor
       */
      CHOOSE_GOOD(good) {
        this.chosedGood = good;
        this.chosedGoodFoods = good.foods;
        this.activity = good.activity
        this.leftActiveId = good.id;
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
    height: 3.2rem;
    background-color: #fff;
    position: fixed;
    top: 5.8rem;
    width: 100%;
    border-bottom: 0.02rem solid #CCCCCC;
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
    padding-bottom: 3.5rem;

    position: absolute;
    /*这句话是个神器，切记*/
    height: calc(100% - 9rem);
    bottom: 0;
  }

  .goods_container_name_list, .goods_container_detail_list {
    width: 100%;
    display: flex;
    flex-flow: column;
  }

  .goods_container_name_list {
    background-color: #F4F3F4;
  }

  .list_left_active {
    background-color: #ffffff;
  }

  .goods_container_name_list_item {
    text-align: center;
    padding: 1rem;
    border-bottom: 0.03rem solid #ededed;
    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /*整个右侧的最上方标题部分*/
  .goods_container_detail_title {
    width: 100%;
    background-color: #F4F3F4;
    display: flex;
    padding: 0.7rem;
    flex-flow: row;
    align-items: center;
  }

  .goods_container_detail_title h3 {
    font-size: 1rem;
  }

  .goods_container_detail_title p {
    font-size: 0.6rem;
    color: #2F2F2F;
  }

  /*整个右侧的每一行的样式*/
  .goods_container_detail_list_item_main {
    display: flex;
    flex: 1;
    padding: 0.3rem;
    border-bottom: 0.03rem solid #ededed;
  }

  /*每一行的左右部分*/
  .goods_container_detail_list_item_main--left {
    padding-right: 0.4rem;
    display: flex;
    align-items: center;
  }

  .goods_container_detail_list_item_main--right {
    flex: 1;
    font-size: 0.5rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .goods_container_detail_list_item_main--right_price {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
