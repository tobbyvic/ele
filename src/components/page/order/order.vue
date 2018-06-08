<template>
  <div class="order">
    <entry-header>
      <template slot="icon">
        <i class="el-icon-search"></i>
      </template>
      <template slot="content">
        订单列表
      </template>
    </entry-header>

    <ul class="order_list">
      <li v-for="item in orders" :key="item.id">

        <div class="order_list_left">
          <img :src="imgBaseUrl + item.restaurant_image_url" class="order_list_left_img"/>
        </div>

        <div class="order_list_text">
          <div class="order_list_text--top" @click="SHOW_ORDER(item)">
            <span>
              {{ item.restaurant_name }}>
            </span>
            <span>
              {{ item.status_bar.title }}
            </span>
          </div>
          <div class="order_list_text--time">
            {{ item.formatted_created_at }}
          </div>
          <div class="order_list_text--middle">
            <span>
              {{ item.basket.group[0][0].name }}
            </span>
            <span style="color: #f60;">
              ￥{{ item.total_amount }}
            </span>
          </div>
          <div class="order_list_text--bottom">
            <span>
              <computed-time v-if="item.status_bar.title == '等待支付'" :time="item.time_pass"></computed-time>
              <a v-else>再来一单</a>
            </span>
          </div>
        </div>
      </li>
    </ul>

    <transition name="order-detail">
      <router-view :itemDetail = "itemDetail"></router-view>
    </transition>

    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>
  </div>
</template>

<script>
  import BottomNav from '../entry/children/BottomNav'
  import EntryHeader from '../entry/children/EntryHeader'
  import {imgBaseUrl} from '@/components/config/env'

  //计算支付的剩余时间
  import computedTime from './children/computedTime'
  // req
  import req from '@/request'

  export default {
    name: "order",
    data() {
      return {
        orders: [],
        user: {},
        imgBaseUrl,
        nowTime: 0,
        // 点击了哪个订单详情
        itemDetail:{}
      }
    },
    computed: {},
    created() {
      this.INIT_ORDERS();
    },
    mounted() {
      // this.now();
    },
    components: {
      BottomNav,
      EntryHeader,
      computedTime
    },
    methods: {
      /**
       * 异步函数，初始化红包列表
       * @returns {Promise<void>}
       * @constructor
       */
      async INIT_ORDERS() {
        let userStr = window.localStorage.getItem("user");
        this.user = JSON.parse(userStr);
        const res = await req.get(`bos/v2/users/${this.user.user_id}/orders`, {limit: 20, offset: 0})
        this.orders = res.data;
        console.log(this.orders);
      },
      now: function () {
        const that = this;
        this.$nextTick(function () {
          setInterval(() => {
            that.nowTime = Date.now()
          }, 1000);
        })
      },
      /**
       * 显示订单详情页
       * @constructor
       */
      SHOW_ORDER(item) {
        this.itemDetail = item;
        this.$router.push(`${this.$route.path}/orderDetail`);
      }
    }
  }
</script>

<style>
  /**
  列表样式
   */
  .order_list {
    margin-top: 3.8rem;
  }

  .order_list li {
    display: flex;
    background: #fff;
    margin-bottom: 0.45rem;
  }

  .order_list_left {
    padding: 0.3rem;
  }

  .order_list_left_img {
    width: 2rem;
    height: 2rem;
  }

  .order_list_text {
    flex: 1;
    padding: 0.3rem 0.6rem;
  }

  /*右边四行文字的样式*/
  .order_list_text--top {
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
  }

  .order_list_text--time {
    font-size: 0.6rem;
    color: #999;
    padding-bottom: 0.1rem;
    border-bottom: 0.03rem solid #eee;
  }

  .order_list_text--middle {
    font-size: 0.8rem;
    color: #666;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0;
    border-bottom: 0.03rem solid #eee;
  }

  .order_list_text--bottom {
    padding: 0.4rem 0;
    display: flex;
    flex-flow: row-reverse;
  }

  .order_list_text--bottom span {
    font-size: .55rem;
    color: #3190e8;
    border: .04rem solid #3190e8;
    padding: .1rem .2rem;
    border-radius: .15rem;
  }

  /*transition过渡效果*/
  .order-detail-enter-active, .order-detail-leave-active {
    transition: all .3s;
    transform: translateX(0);
  }

  .order-detail-enter, .order-detail-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }


</style>

