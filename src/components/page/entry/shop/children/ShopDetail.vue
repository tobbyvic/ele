<template>

  <transition name="show-detail">
    <div class="shop_detail" v-if="detailFlag">

      <!--EntryHeader-->
      <entry-header>
        <template slot="icon">
          <a @click="BACKTO_SHOP"><i class="el-icon-arrow-left"></i></a>
        </template>
        <template slot="content">
          商家详情
        </template>
      </entry-header>


      <!--活动与属性-->
      <section class="shop_detail_activity">
        <h3>
          活动与属性
        </h3>

        <ul>
          <li v-for="support in shopOverall.supports" class="shop_detail_activity_item">
            <span>
              {{support.icon_name}}
            </span>
            <p>{{support.description}}</p>
          </li>
        </ul>
      </section>
      <!--安全公式-->
      <section class="shop_detail_ad">
        <h3>
          食品监督安全公示
        </h3>

        <div class="shop_detail_ad_detail">
          <svg width="3rem" height="3rem">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res_well">
            </use>
          </svg>
          <div class="shop_detail_ad_detail_text">
            <p>监督检查结果--</p>
            <p>检查日期--</p>
          </div>
        </div>
      </section>

      <!--商家信息-->
      <section class="shop_detail_information">
        <h3>
          商家信息
        </h3>

        <ul>
          <li>
            {{shopOverall.name}}
          </li>
          <li>
            地址:{{shopOverall.address}}
          </li>
          <li>
            营业时间:{{shopOverall.opening_hours[0]}}
          </li>
          <li class="permise">
            <p>营业执照</p>
            <a @click="BACKTO_SHOP"><i class="el-icon-arrow-right"></i></a>
          </li>
          <li class="license">
            <p>餐厅服务许可证</p>
            <a @click="BACKTO_SHOP"><i class="el-icon-arrow-right"></i></a>
          </li>
        </ul>
      </section>


    </div>
  </transition>


</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'

  export default {
    name: "shop-detail",
    props: ['shopOverall'],
    components: {
      EntryHeader
    },
    data() {
      return {}
    },
    computed: {
      detailFlag() {
        return this.$store.state.shopDetailFlag
      }
    },
    mounted() {
      console.log(this.shopOverall);
    },
    methods: {
      BACKTO_SHOP() {
        this.$store.commit("MAKETRUE_SHOP_DETAIL", false);
      }
    }
  }
</script>

<style>
  /**
  整个页面
   */
  .shop_detail {
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

  /*transition过渡效果*/
  .show-detail-enter-active, .show-detail-leave-active {
    transition: all .3s;
    transform: translateX(0);
  }

  .show-detail-enter, .show-detail-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }

  /**
  活动与详情
  */
  .shop_detail_activity,.shop_detail_ad,.shop_detail_information {
    background-color: #ffffff;
    /*position: relative;*/
    margin-top: 3.8rem;
    padding: 0.4rem;
  }

  .shop_detail_activity h3,.shop_detail_ad h3,.shop_detail_information h3 {
    border-bottom: 0.04rem solid #CCCCCC;
    padding-bottom: 0.3rem;
    font-size: 1.1rem;
  }

  .shop_detail_activity ul,.shop_detail_information ul {
    padding-top: 0.3rem;
  }



  /*list中每一条目*/
  .shop_detail_activity_item {
    padding: 0.2rem 0;
    display: flex;
    flex: 1;
  }


  .shop_detail_activity_item span {
    /*border: 0.05rem solid ;*/
    background: #8E8E8E;
    display: inline-flex;
    align-content: center;
    justify-content: center;
    border-radius: 10%;
    font-size: 0.9rem;
    color: #ffffff;
    margin-right: 0.6rem;
  }

  .shop_detail_activity_item p {
    font-size: 0.8rem;
  }

  /**
  安全公示
  */

  .shop_detail_ad,.shop_detail_information {
    margin-top: 0.5rem;
  }

  .shop_detail_ad_detail {
    padding-top: 0.3rem;
    display: flex;
    /*justify-content: center;*/


  }

  .shop_detail_ad_detail_text {
    display: inline-flex;
    flex-flow: column;
    margin-left: 0.8rem;
    font-size: 0.9rem;
    align-content: center;
    justify-content: center;
  }

  /**
  商家信息
   */
  .shop_detail_information li {
    padding: 0.5rem 0;
    border-bottom: 0.03rem solid #eeeeee;
    display: flex;
    /*flex: 1;*/
    color: #666;
    font-size: 1rem;
  }

  .permise {
    justify-content: space-between;
  }

  .license {
    justify-content: space-between;
  }










</style>
