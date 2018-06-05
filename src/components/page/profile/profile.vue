<template>
  <div class="profile">
    <!--header-->
    <entry-header>
      <template slot="icon">
        <i class="el-icon-search"></i>
      </template>
      <template slot="content">
        我的
      </template>
    </entry-header>

    <!--top-->
    <section class="profile_intro">
      <img :src="imgBaseUrl + user.avatar"/>

      <div class="profile_intro_username">
        <span>{{user.username}}</span>
        <span>手机:{{user.mobile}}</span>
      </div>

      <div class="profile_intro--extend" @click="SHOW_INFO()">
        <svg width="2rem" height="2rem">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_right">
          </use>
        </svg>
      </div>
    </section>

    <!--saving-->
    <section class="profile_saving">
      <div class="profile_saving_balance">
        <span>
        <span>{{}}</span>元
        </span>
        <p>我的余额</p>
      </div>

      <div class="profile_saving_discounts">
        <span>
        <span>{{}}</span>个
        </span>
        <p>我的优惠</p>
      </div>

      <div class="profile_saving_integral">
        <span>
        <span>{{}}</span>分
        </span>
        <p>我的积分</p>
      </div>
    </section>

    <!--list-->
    <ul class="profile_server">

      <li>
        <div class="profile_server_list">
          <svg width="1.3rem" height="1.3rem" v-if="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile_order">
            </use>
          </svg>
          <span>我的订单</span>
        </div>
        <a><i class="el-icon-arrow-right"></i></a>
      </li>

      <li>
        <div class="profile_server_list">
          <svg width="1.3rem" height="1.3rem" v-if="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile_shop">
            </use>
          </svg>
          <span>积分商城</span>
        </div>
        <a><i class="el-icon-arrow-right"></i></a>
      </li>

      <li>
        <div class="profile_server_list">
          <svg width="1.3rem" height="1.3rem" v-if="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile_vip">
            </use>
          </svg>
          <span>饿了么会员卡</span>
        </div>
        <a><i class="el-icon-arrow-right"></i></a>
      </li>
    </ul>

    <ul class="profile_server">

      <li>
        <div class="profile_server_list">
          <svg width="1.3rem" height="1.3rem" v-if="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile_center">
            </use>
          </svg>
          <span>服务中心</span>
        </div>
        <a><i class="el-icon-arrow-right"></i></a>
      </li>

      <li>
        <div class="profile_server_list">
          <svg width="1.3rem" height="1.3rem" v-if="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile_download">
            </use>
          </svg>
          <span>下载饿了么APP</span>
        </div>
        <a><i class="el-icon-arrow-right"></i></a>
      </li>

    </ul>




    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>


    <!--&lt;!&ndash;ProfileDetail页面&ndash;&gt;-->
    <!--<info :user="user"></info>-->

    <transition name="profile-info">
      <router-view :user="user"></router-view>
    </transition>


  </div>
</template>

<script>
  import EntryHeader from '../entry/children/EntryHeader'
  import BottomNav from '../entry/children/BottomNav'
  import info from './children/info'


  import {imgBaseUrl} from '@/components/config/env'

  export default {
    name: "profile",
    components: {
      EntryHeader,
      BottomNav,
      info
    },
    data() {
      return {
        imgBaseUrl,
        user: {}
      }
    },
    created() {

      const str = window.localStorage.getItem("user");
      this.user = JSON.parse(str);

    },
    methods: {
      /**
       * 显示用户详情页
       * @constructor
       */
      SHOW_INFO() {
        this.$router.push( `${this.$route.path}/info` );
      }
    }
  }
</script>

<style>
  .profile {

  }

  /*顶部介绍部分*/
  .profile_intro {
    margin-top: 3.35rem;
    background: #3190e8;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .profile_intro img {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
  }

  .profile_intro_username {
    display: inline-flex;
    flex-flow: column;
    justify-content: center;
  }

  .profile_intro--extend {
    color: #fff;
    line-height: 3.8rem;
  }

  .profile_intro--extend svg {
    vertical-align: middle;
  }


  /*中间saving部分*/
  .profile_saving {
    /*padding: 2rem;*/
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .profile_saving div {
    width: 33.3%;
    padding: 1rem;
  }

  .profile_saving_balance, .profile_saving_balance p {
    text-align: center;
  }

  .profile_saving_discounts, .profile_saving_discounts p {
    text-align: center;
  }

  .profile_saving_integral, .profile_saving_integral p {
    text-align: center;
  }

  /*下面server部分*/
  .profile_server {
    margin-top: 0.4rem;
    background: #fff;
  }

  .profile_server li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 0.03rem solid #eeeeee;
  }

  .profile_server_list {
    display: flex;
    align-content: center;
    vertical-align: center;
  }

  .profile_server_list span {
    margin-left: 0.3rem;
  }









  /*transition过渡效果*/
  .profile-info-enter-active, .profile-info-leave-active {
    transition: all .3s;
    transform: translateX(0);
  }

  .profile-info-enter, .profile-info-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }

</style>
