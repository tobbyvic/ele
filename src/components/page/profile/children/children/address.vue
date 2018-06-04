<template>

  <!--<transition name="profile-info">-->
  <div class="profile-address" v-if="true">

    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <a @click="BACK"><i class="el-icon-arrow-left"></i></a>
      </template>
      <template slot="content">
        编辑地址
      </template>
    </entry-header>

    <ul class="profile-address_list">
      <li v-for="item in address" :key="item.id">
        <p>{{ item.address }}</p>
        <p>{{ item.phone }}</p>

        <svg width="1.3rem" height="1.3rem" v-if="true">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete_icon">
          </use>
        </svg>
      </li>
    </ul>

    <div class="profile-address_btn">
      <el-button plain @click="SHOW_ADD">添加地址</el-button>
    </div>



    <transition name="profile-add">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  // req
  import req from '@/request'

  export default {
    name: "profile-address",
    components: {
      EntryHeader
    },
    data() {
      return {
        address: []
      }
    },
    mounted() {
      this.INIT_ADDRESS()
    },
    methods: {
      /**
       * 返回一个
       */
      BACK() {
        this.$router.go(-1);
      },

      /**
       * 初始化地址
       * @returns {Promise<void>}
       * @constructor
       */
      async INIT_ADDRESS() {
        const userStr = window.localStorage.getItem("user");
        const user = JSON.parse(userStr);
        const id = user.user_id;

        let res = await req.get(`v1/users/${id}/addresses`);
        this.address = res.data;
        console.log(res.data);
      },

      /**
       * 到增加地址页
       * @constructor
       */
      SHOW_ADD() {
        this.$router.push( `${this.$route.path}/add` );
      }
    },

  }
</script>

<style>

  /**
  整个页面
   */
  .profile-address {
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


  .profile-address_list {
    margin-top: 3.8rem;
    background: #fff8c3;
    border-bottom: 0.03rem solid #CCCCCC;
  }

  .profile-address_list li {
    position: relative;
  }

  .profile-address_list li svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }


  /*transition过渡效果*/
  .profile-add-enter-active, .profile-add-leave-active {
    transition: all .3s;
    transform: translateX(0);
  }

  .profile-add-enter, .profile-add-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }


  .profile-address_btn {
    width: 100%;
    padding: 0.5rem 1rem;
  }

  .profile-address_btn button{
    width: 100%;
  }

</style>
