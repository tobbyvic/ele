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
