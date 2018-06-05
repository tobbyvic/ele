<template>

  <!--<transition name="profile-info">-->
    <div class="profile-info" v-if="true">

      <!--EntryHeader-->
      <entry-header>
        <template slot="icon">
          <a @click="BACKTO_PROFILE"><i class="el-icon-arrow-left"></i></a>
        </template>
        <template slot="content">
          账户信息
        </template>
      </entry-header>


      <!--商家信息-->
      <section class="profile_info_information">
        <h3>
          用户信息
        </h3>

        <ul class="profile_info_information_list">
          <li class="profile_info_avatar">
            <p>头像</p>
            <div>
              <img :src="imgBaseUrl + user.avatar" class="profile_info_information_list_avatar"/>
              <a><i class="el-icon-arrow-right"></i></a>
            </div>
          </li>

          <li class="profile_info_account">
            <p>用户名</p>
            <a><i class="el-icon-arrow-right"></i></a>
          </li>

          <li class="profile_info_address" @click="SHOW_ADDRESS">
            <p>收货地址</p>
            <a><i class="el-icon-arrow-right"></i></a>
          </li>

          <li class="profile_info_password" @click="CHANGE_PASSWORD">
            <p>登录密码</p>
            <div style="color: #8E8E8E;">
              修改
              <a><i class="el-icon-arrow-right"></i></a>
            </div>
          </li>
        </ul>

      </section>
      <div class="profile_info_btn">
        <el-button type="danger" @click="SGIN_OUT">退出登录</el-button>
      </div>


      <transition name="profile-address">
        <router-view :user="user"></router-view>
      </transition>


    </div>


</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  import {imgBaseUrl} from '@/components/config/env'

  export default {
    name: "profile-info",
    props: ['user'],
    components: {
      EntryHeader
    },
    data() {
      return {
        imgBaseUrl
      }
    },
    computed: {
      // profileDetailFlag() {
      //   return this.$store.state.profileDetailFlag
      // }
    },
    mounted() {
    },
    methods: {
      /**
       * 返回到上一页
       * @constructor
       */
      BACKTO_PROFILE() {
        // this.$store.commit("MAKETRUE_PROFILE_DETAIL", false);
        this.$router.go(-1);
      },
      /**
       * 退出登录
       * @constructor
       */
      SGIN_OUT() {
        window.localStorage.removeItem("user");
        this.$router.push("/entry");
      },
      /**
       * 到地址页
       * @constructor
       */
      SHOW_ADDRESS() {
        this.$router.push( `${this.$route.path}/address` );
      },
      /**
       * 到更改密码页
       * @constructor
       */
      CHANGE_PASSWORD() {
        this.$router.push( `${this.$route.path}/forget` );
      }
    }
  }
</script>

<style>
  /**
  整个页面
   */
  .profile-info {
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
  .profile-address-enter-active, .profile-address-leave-active {
    transition: all .3s;
    transform: translateX(0);
  }

  .profile-address-enter, .profile-address-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }

  /****************整个内容部分****************/
  .profile_info_information {
    background-color: #ffffff;
    /*position: relative;*/
    margin-top: 3.8rem;
    padding: 0.4rem;
  }

  .profile_info_information h3 {
    border-bottom: 0.04rem solid #CCCCCC;
    padding-bottom: 0.3rem;
    font-size: 1.1rem;
  }

  /****************某一条木*****************/
  .profile_info_information_list li {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 0.03rem solid #eeeeee;
  }

  /****************第一条头像部分*****************/

  .profile_info_avatar p {
    line-height: 3rem;
  }

  .profile_info_avatar div {
    display: flex;
    align-content:center;
    line-height: 3rem;
  }

  /*头像*/
  .profile_info_information_list_avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .profile_info_btn {
    width: 100%;
    padding: 0.5rem 1rem;
  }

  .profile_info_btn button{
    width: 100%;
  }




</style>
