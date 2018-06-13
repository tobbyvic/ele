<template>
  <div class="order-detail">
    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <router-link to="/order"><i class="el-icon-arrow-left"></i></router-link>
      </template>
      <template slot="content">
        订单详情
      </template>
    </entry-header>

    <section class="order-detail_title">
      <div class="order-detail_title--top">
        <img :src="imgBaseUrl + itemDetail.restaurant_image_url" class="order-detail_title--top_img"/>
      </div>
      <h2>{{ itemDetail.status_bar.title }}</h2>
      <div class="order-detail_title--bottom">
        <span>
        <computed-time v-if="itemDetail.status_bar.title == '等待支付'" :time="item.time_pass"></computed-time>
        <a @click="BUY_AGAIN" v-else>再来一单</a>
        </span>
      </div>
    </section>

    <section class="order-detail_infro">
      <div class="order-detail_infro_title">
        <img :src="imgBaseUrl + itemDetail.restaurant_image_url" class="order-detail_infro_title_img"/>
        <span>{{ itemDetail.restaurant_name }}</span>
        <!--<span><i class="el-icon-arrow-right"></i></span>-->
      </div>

      <ul class="order-detail_infro_list">
        <!--买到的商品及价钱列表-->
        <li v-for="item in itemDetail.basket.group[0]" class="order-detail_infro_item">
          <span>
            {{ item.name }}
          </span>
          <span class="order-detail_infro_item--right">
            <span style="color: #8E8E8E; font-size: 1rem;padding-right: 0.5rem;">x{{ item.quantity }}</span>
            <span>{{ item.price }}</span>
          </span>
        </li>
      </ul>
      <div class="order-detail_infro_deliver">
        <span>
          {{ itemDetail.basket.deliver_fee.name }}
        </span>

        <span>
          {{ itemDetail.basket.deliver_fee.price }}
        </span>
      </div>
      <div class="order-detail_infro_price">
        实付: {{ itemDetail.total_amount }}
      </div>
    </section>

    <section class="order-detail_deliver">
      <h3>配送信息</h3>

      <div class="order-detail_deliver_time">
        配送时间: &nbsp;尽快送达
      </div>

      <div class="order-detail_deliver_address">
        配送地址: &nbsp;默认地址
      </div>




    </section>


  </div>
</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  import {imgBaseUrl} from '@/components/config/env'
  import computedTime from './computedTime'

  export default {
    name: "order-detail",
    props: ['itemDetail'],
    components: {
      EntryHeader,
      computedTime
    },
    data() {
      return {
        imgBaseUrl
      }
    },
    mounted() {
      console.log(this.itemDetail);

    },
    methods: {
      /**
       * 返回到上一页
       * @constructor
       */
      BACKTO_ORDER() {
        // this.$store.commit("MAKETRUE_PROFILE_DETAIL", false);
        this.$router.go(-1);
      },
      /**
       * 再来一单，跳转到entry页
       * @constructor
       */
      BUY_AGAIN() {
        this.$router.push("/entry");
      },

      GOTO_SHOP() {
        const id = this.itemDetail.id;
        this.$router.push({ path: `/shop/${id}` }) // -> /user/id
      }

    }
  }
</script>

<style>
  /**
    整个页面
     */
  .order-detail {
    /*position: relative;*/
    position: absolute;
    top: 0;
    z-index: 4;
    height: 100vh;
    width: 100%;
    /*width: 100vw;*/
    /*width: 100%;*/
    background: #ebebeb;
    color: #000;
  }

  /**
  页面的title
   */

  .order-detail_title {
    margin-top: 3.8rem;
    background: #fff;
    display: flex;
    flex-flow: column;
    text-align: center;
  }

  .order-detail_title--top_img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .order-detail_title--bottom {
    padding: 0.6rem 0;
  }

  .order-detail_title--bottom span {
    font-size: .55rem;
    color: #3190e8;
    border: .04rem solid #3190e8;
    padding: .1rem .2rem;
    border-radius: .15rem;
    /*display: inline-flex;*/
  }

  /**
  页面的infro
   */

  .order-detail_infro,.order-detail_deliver {
    margin-top: .45rem;
    background: #fff;
  }

  .order-detail_infro_title {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    border-bottom: 0.03rem solid #eee;
    padding: .4rem;
  }

  .order-detail_infro_title span {
    line-height: 2rem;
    justify-self: flex-end;
  }

  .order-detail_infro_title_img {
    width: 2rem;
    height: 2rem;
  }

  /*页面每一条商品的记录*/
  .order-detail_infro_list {
    border-bottom: 0.03rem solid #eee;
  }

  .order-detail_infro_item,.order-detail_infro_deliver {
    display: flex;
    justify-content: space-between;
    padding: .4rem .2rem;
  }

  .order-detail_infro_deliver {
    border-bottom: 0.03rem solid #eee;
  }

  .order-detail_infro_item--right {
    display: inline-flex;
  }

  .order-detail_infro_price {
    display: flex;
    justify-content: flex-end;
    padding: .8rem .2rem;
    color: #f60;
    font-weight: 600;
  }

  /**
  最下面的配送信息
   */
  .order-detail_deliver h3 {
    padding: .4rem;
    border-bottom: 0.03rem solid #eee;
  }

  .order-detail_deliver div {
    padding: .4rem .2rem;
    color: #666;
  }


</style>
