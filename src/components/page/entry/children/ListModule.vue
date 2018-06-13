<template>
  <section class="list-module">
    <ul>
      <li v-for="restaurant in locationRestaurant" :key="restaurant.id" @click="GOTO_SHOP(restaurant)">
        <img :src="resBaseImgurl + restaurant.image_path"/>
        <div class="list-module_div">
          <!--右侧部分上部-->
          <div class="list-module_div--top">
            <p>{{ restaurant.name }}</p>
            <span>
                <span id="fengniao">蜂鸟专送</span>
                <span id="zhunshida">准时达</span>
                <span v-for="item in restaurant.supports" :key="item.id">{{item.icon_name}}</span>
              </span>
          </div>
          <!--右侧部分中部-->
          <div class="list-module_div--middle">
            <p> 月售 {{ restaurant.recent_order_num }} 单</p>
            <span>
                <star-rate :count="5" :disabled="true" v-model="restaurant.rating" class=""/>
              </span>
          </div>
          <!--右侧部分下部-->
          <div class="list-module_div--bottom">
            <p> ¥20起送/ {{ restaurant.piecewise_agent_fee.tips }}</p>
            <span>
                {{ restaurant.distance }}/{{ restaurant.order_lead_time }}
              </span>
          </div>
        </div>

      </li>
    </ul>
  </section>
</template>

<script>
  import StarRate from 'vue-cute-rate'

  export default {
    name: "list-module",
    components: {
      StarRate,
    },
    props: ['locationRestaurant'],
    data() {
      return  {
        resBaseImgurl: '//elm.cangdu.org/img/',
      }
    },
    methods: {
      /**
       * 定向到餐馆详情页
       * @param restaurant
       * @constructor
       */
      GOTO_SHOP(restaurant) {
        const id = restaurant.id;
        this.$router.push({ path: `/shop/${id}` }) // -> /user/id
      }
    }
  }
</script>

<style>
  /**
    content
     */
  .list-module {
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    bottom: 0px;
  }

  .list-module ul {
    width: 100%;
    font-size: 0.9rem;
    color: #3190e8;
    display: flex;
    flex-wrap: wrap;
  }

  .list-module li {
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

  .list-module li img {
    width: 4rem;
    height: 4rem;
  }

  /*右侧部分*/
  .list-module_div {
    width: 100%;
    margin-left: 0.3rem;
  }

  .list-module_div div {
    display: flex;
    align-items: center;
    /*padding-left: 5px;*/
  }

  /*top*/
  .list-module_div--top {
    justify-content: space-between;

  }

  .list-module_div--top p {
    color: #333;
    font-weight: 700;
    font-size: 1rem;
    width: 4rem;
    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }

  .list-module_div--top span {
    font-size: 0.5rem;
    color: #999;
    /*border: 0.025rem solid #f1f1f1;*/
    border-radius: 0.2rem;
    margin-left: 0.1rem;
  }

  #fengniao {
    color: #fff;
    background-color: #3190e8;
    border: 0.1rem solid #3190e8;
  }

  #zhunshida {
    color: #3190e8;
    border: 0.08rem solid #3190e8;
  }

  /*middle*/
  .list-module_div--middle {
    justify-content: space-between;

  }

  .list-module_div--middle span {
    margin-left: 1rem;
    font-size: 0.5rem;
  }

  .star-main div {
    margin-left: -4px;
  }

  .star-main i {
    /*//注意这里使用了!important*/
    font-size: 1rem !important;
  }

  /*bottom*/
  .list-module_div--bottom {
    justify-content: space-between;

  }

  .list-module_div--bottom p {
    font-size: 0.5rem;
    color: #999;
  }

  .list-module_div--bottom span {
    font-size: 0.35rem;
    color: #2A85E5;

  }
</style>
