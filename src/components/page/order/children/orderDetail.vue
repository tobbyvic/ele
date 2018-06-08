<template>
  <div class="order-detail">
    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <a @click="BACKTO_ORDER"><i class="el-icon-arrow-left"></i></a>
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
        <a v-else>再来一单</a>
        </span>
      </div>


    </section>


    <p>

    </p>
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
</style>
