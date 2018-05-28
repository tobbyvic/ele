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
    <!--商品页面-->
    <section class="goods_container" v-if="activeFlag">
      <list-template>
        <!--左边栏商品分类-->
        <template slot="list_template_container_left">
          <ul class="goods-left_list">
            <li v-for="item in goods" class="goods-left_list_item" @click="CHOOSE_GOOD(item)"
                :class="{list_left_active: leftActiveId === item.id}">
              <div class="">
                {{ item.name }}
                <span class="goods-left_list_item_logo" v-if="foodsGoodNum[item.id]">
                  {{ foodsGoodNum[item.id] }}
                </span>
              </div>
            </li>
          </ul>
        </template>
        <!--右边部分具体商品部分-->
        <template slot="list_template_container_right">
          <!--右边部分顶部的title部分-->
          <div class="goods-right_title">
            <h3>{{ chosedGood.name }}</h3>
            <p>{{ chosedGood.description }}</p>
          </div>
          <!--右边部分列表部分-->
          <ul class="goods-right_list">
            <li v-for="item in chosedGoodFoods" class="goods-right_list_item">
              <!--每一条目中的元素-->
              <div class="goods-right_list_item_main">
                <!--左边图片部分-->
                <div class="goods-right_list_item_main--left">
                  <img :src="resBaseImgurl + item.image_path" class="shop_header_img"/>
                </div>
                <!--右边几行的商品描述-->
                <div class="goods-right_list_item_main--right">
                  <h3 style="font-size: 1rem; font-weight: bolder;">{{item.name}}</h3>
                  <div style="font-size: 0.5rem;color: #999;">{{item.description}}
                  </div>
                  <div>{{ item.tips }}</div>
                  <!--价格-->
                  <div class="goods-right_list_item_main--right_price">
                    <span style="font-size: .8rem;color: #f60;font-weight: bold;">￥{{ item.specfoods[0].price }}</span>

                    <div class="goods-right_list_item_main--right_price_svg">
                      <!-- 减 -->
                      <transition name="slide-fade">
                        <div class="goods-right_list_item_main--right_price_svg--left" v-if="foodNum[item.item_id]">
                          <svg width="1.3rem" height="1.3rem" v-if="true" @click="DELETE_FOOD({food:item})">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#minus_contact">
                            </use>
                          </svg>
                          <span>{{ foodNum[item.item_id] || 0 }}</span>
                        </div>
                      </transition>

                      <!-- 加 -->
                      <svg width="1.3rem" height="1.3rem" v-if="true" @click="ADD_FOOD(item)">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add_contact">
                        </use>
                      </svg>
                    </div>

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
          <span class="shop_bottom_logo" @click="switchCart()">
            <svg width="100%" height="100%">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart">
              </use>
            </svg>
            <span class="shop_bottom_logo_tip">
              {{ sum }}
            </span>
          </span>
          <p>￥{{ sumPrice }}</p>
          <p>配送费：￥5</p>
        </div>
      </div>
      <div class="shop_bottom--right">
        去结算
      </div>
    </div>
    <!--cart-->
    <transition name="show-cart">
      <div class="shop_cart" v-if="showCart">
        <ul>
          <li v-for="item in cartRes">
            <div class="shop_cart_item">
              <span>{{ item.chosedFood.name }}</span>
              <span>{{ item.price }}</span>
              <span class="shop_cart_item--svg">
              <!-- 减 -->
              <div class="goods-right_list_item_main--right_price_svg--left">
                <svg width="1.3rem" height="1.3rem" v-if="true"
                     @click="DELETE_FOOD({food:item.chosedFood,goodId:item.id})">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#minus_contact">
                  </use>
                </svg>
                <span>{{ foodNum[item.chosedFood.item_id] || 0 }}</span>
              </div>
                <!-- 加 -->
              <svg width="1.3rem" height="1.3rem" v-if="true" @click="ADD_FOOD(item.chosedFood)">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add_contact">
                </use>
              </svg>
            </span>
            </div>
          </li>
        </ul>
      </div>
    </transition>
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
        // shop-header部分
        activeFlag: 1,//content页面的切换标志位
        leftActiveId: 2,//左侧点击切换样式标志位

        shopDetail: {},// shop详情
        resBaseImgurl: '//elm.cangdu.org/img/',//图片url前缀
        activities: [],// shop activities
        tips: "",// shop配送费tips

        // content部分
        goods: [],// 商品goods
        chosedGood: {},// 左侧选中的goods，右边对应

        chosedGoodFoods: [],// 选中的good的foods
        activity: {},// activity

        cartRes: [],//最后选中的商品列表
        foodNum: {},//购买的food数量的对象
        foodsGoodNum: {},//购买的food所隶属于的商品分类的总数量

        showCart: false

      }
    },
    mounted() {
      console.log(this.$route.params);
      this.INIT_SHOP();
      this.INIT_GOODS();
    },
    computed: {
      /**
       * 获取最后的商品总数
       */
      sum() {
        let res = 0;
        for (let x in this.foodsGoodNum) {
          res += this.foodsGoodNum[x];
        }
        return res
      },
      /**
       * 最后的商品总价
       */
      sumPrice() {
        let res = 0;

        for (const value of this.cartRes) {
          console.log(value);
          res += (value.price * value.num);
        }
        return res
      }
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
      },
      /**
       * 添加食物
       * @param food
       * @constructor
       */
      ADD_FOOD(food) {
        // let numCateId = 0;
        let numId = food.item_id;
        let price = food.specfoods[0].price;
        console.log(numId);
        // 检查一下cart中已经添加了该food没
        let checkRepeat = false;
        // 如果cart中已经有该food，num+1即可
        this.cartRes.forEach((element) => {
          if (element.chosedFood.item_id === food.item_id) {
            element.num += 1;
            checkRepeat = true;
            // this.foodNum[numId] = element.num; 这句话不会触发视图更新
            this.$set(this.foodNum, numId, element.num);
          }
        });

        // 如果购物车中没有该food，加入该food
        if (!checkRepeat) {
          this.cartRes.push({
            // good的id，便于在选中的food的商品分类中添加标记
            id: this.leftActiveId,
            // food对象
            chosedFood: food,
            price: price,
            num: 1
          });
          // this.foodNum[numId] = 1; 这句话不会触发视图更新
          this.$set(this.foodNum, numId, 1);
        }

        console.log(this.foodNum);
        console.log(this.cartRes);

        // 对其shop的分类上面的数字进行操作
        let numCateId = this.leftActiveId;
        if (this.foodsGoodNum[numCateId]) {
          let last = this.foodsGoodNum[numCateId];
          this.$set(this.foodsGoodNum, numCateId, last + 1);
        } else {
          this.$set(this.foodsGoodNum, numCateId, 1);
        }
        console.log(this.foodsGoodNum);
        console.log(Object.keys(this.foodsGoodNum));


      },
      /**
       * 减少食物
       * 这里的参数运用了es6中的解构赋值
       * @param item
       * @constructor
       */
      DELETE_FOOD({food, goodId}) {
        let numId = food.item_id;
        let numCateId = 0;
        console.log(numId);
        let deleteFlag = false;
        // 如果cart中已经有该food，num-1即可
        this.cartRes.forEach((element) => {
          if (element.chosedFood.item_id === food.item_id) {
            element.num -= 1;
            if (element.num === 0) {
              //数量已归零，在数组中删除该元素
              deleteFlag = true;
            }
            // this.foodNum[numId] = element.num; 这句话不会触发视图更新
            this.$set(this.foodNum, numId, element.num);
          }
        });

        // 如果减1后归零，就将其从购物车清单数组中删除
        if (deleteFlag) {
          this.cartRes.splice(this.cartRes.findIndex(item => item.chosedFood.item_id === numId), 1);
        }

        // 对其shop的分类上面的数字进行操作，减法
        if (goodId) {
          numCateId = goodId;
        } else {
          numCateId = this.leftActiveId;
        }
        this.$set(this.foodsGoodNum, numCateId, this.foodsGoodNum[numCateId] - 1);
      },
      /**
       * 切换购物车的显示和隐藏
       * @returns {boolean}
       */
      switchCart() {
        if (this.cartRes.length) {
          this.showCart = !this.showCart
        } else {
          return false
        }
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

  .goods-left_list, .goods-right_list {
    width: 100%;
    display: flex;
    flex-flow: column;
  }

  /**
    整个左侧部分
    **/
  .goods-left_list {
    background-color: #F4F3F4;
  }

  .list_left_active {
    background-color: #ffffff;
  }

  .goods-left_list_item {
    text-align: center;
    padding: 1rem;
    border-bottom: 0.03rem solid #ededed;
    position: relative;
    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goods-left_list_item_logo {
    position: absolute;
    margin-top: -0.4rem;
    margin-left: 0.2rem;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    background: red;
    border-radius: 50%;
    font-size: 0.5rem;
  }

  /**
  整个右侧部分
  **/
  /*题目部分*/
  .goods-right_title {
    width: 100%;
    background-color: #F4F3F4;
    display: flex;
    padding: 0.7rem;
    flex-flow: row;
    align-items: center;
  }

  .goods-right_title h3 {
    font-size: 1rem;
  }

  .goods-right_title p {
    font-size: 0.6rem;
    color: #2F2F2F;
  }

  /*整个右侧的每一行的样式*/
  .goods-right_list_item_main {
    display: flex;
    flex: 1;
    padding: 0.3rem;
    border-bottom: 0.03rem solid #ededed;
  }

  /*每一行的左部分*/
  .goods-right_list_item_main--left {
    padding-right: 0.4rem;
    display: flex;
    align-items: center;
  }

  /*每一行的右部分*/
  .goods-right_list_item_main--right {
    flex: 1;
    font-size: 0.5rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .goods-right_list_item_main--right_price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /*加减图标部分*/
  .goods-right_list_item_main--right_price_svg {
    display: flex;
    /*flex: 1;*/
    align-items: center;
  }

  /*点击后会进行显隐的过度部分*/
  .goods-right_list_item_main--right_price_svg--left {
    display: flex;
    /*flex: 1;*/
    align-items: center;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .2s ease;
  }

  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .goods-right_list_item_main--right_price_svg span {
    padding: 0 0.1rem;
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
    z-index: 1;
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

  /*cart*/
  .shop_cart {
    position: absolute;
    width: 100%;
    bottom: 3.5rem;
    background-color: #ffffff;
    z-index: 0;
    padding-bottom: 1.6rem;
  }

  .shop_cart_item {
    padding: 0.5rem;
    border-top: 0.03rem solid #ededed;
    display: flex;
    justify-content: space-between;
  }

  .shop_cart_item--svg {
    display: inline-flex;
    justify-content: center;
    align-content: center;
  }

  /*transition过渡效果*/
  .show-cart-enter-active, .show-cart-leave-active {
    transition: all .3s;
    transform: translateY(0);
  }

  .show-cart-enter, .show-cart-leave-active {
    opacity: 0;
    transform: translateY(100%);
  }

</style>
