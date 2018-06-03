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

      <div class="profile_intro--extend" @click="SHOW_PROFILE_DETAIL()">
        <svg width="2rem" height="2rem">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_right">
          </use>
        </svg>
      </div>

    </section>


    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>


    <!--ProfileDetail页面-->
    <profile-detail></profile-detail>

  </div>
</template>

<script>
  import EntryHeader from '../entry/children/EntryHeader'
  import BottomNav from '../entry/children/BottomNav'
  import ProfileDetail from './children/ProfileDetail'



  import {imgBaseUrl} from '@/components/config/env'

  export default {
    name: "profile",
    components: {
      EntryHeader,
      BottomNav,
      ProfileDetail
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
      SHOW_PROFILE_DETAIL() {
        this.$store.commit("MAKETRUE_PROFILE_DETAIL", true);
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


</style>
