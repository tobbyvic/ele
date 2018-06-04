<template>
  <!--<transition name="profile-info">-->
  <div class="profile-add" v-if="true">

    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <a @click="BACK"><i class="el-icon-arrow-left"></i></a>
      </template>
      <template slot="content">
        新增地址
      </template>
    </entry-header>

    <div class="profile-add_form">
      <el-input v-model="name" placeholder="请填写你的姓名"></el-input>
      <el-input v-model="address" placeholder="小区/写字楼/学校等"></el-input>
      <el-input v-model="address_detail" placeholder="请填写详细送餐地址"></el-input>
      <el-input v-model="phone" placeholder="请填写能够联系到您的手机号"></el-input>
      <el-input v-model="phone_bk" placeholder="备用联系电话（选填）"></el-input>
    </div>


    <div class="profile-add_btn">
      <el-button type="primary" @click="">提交信息</el-button>
    </div>





  </div>


</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  // req
  import req from '@/request'

  export default {
    name: "profile-add",
    components: {
      EntryHeader
    },
    data() {
      return {
        name: "",
        address: "",
        address_detail: "",
        phone: "",
        phone_bk: ""
      }
    },
    methods: {
      /**
       * 返回一个
       */
      BACK() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style>

  /**
  整个页面
   */
  .profile-add {
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

  .profile-add_form {
    margin-top: 3.8rem;
  }

  .profile-add_btn {
    width: 100%;
    padding: 0.5rem 1rem;
  }

  .profile-add_btn button{
    width: 100%;
  }

</style>
