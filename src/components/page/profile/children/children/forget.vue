<template>
  <div class="forget">
    <!--header-->
    <entry-header>
      <template slot="icon">
        <a @click="BACK"><i class="el-icon-arrow-left"></i></a>
      </template>
      <template slot="content">
        密码登录
      </template>
    </entry-header>


    <div class="forget_box">
      <ul class="forget_box_list">
        <li>
          <el-input v-model="account" placeholder="账号" class="forget_box_list_account"></el-input>
        </li>
        <li>
          <el-input v-model="account" placeholder="旧密码" class="forget_box_list_account"></el-input>
        </li>
        <li>
          <el-input v-model="account" placeholder="请输入新密码" class="forget_box_list_account"></el-input>
        </li>
        <li>
          <el-input v-model="account" placeholder="请确认密码" class="forget_box_list_account"></el-input>
        </li>
        <li>
          <el-input v-model="verification" placeholder="验证码" class="forget_box_list_verification"></el-input>
          <img :src="baseCode"/>
          <span class="forget_box_list_verification_text">
            <p>
              看不清
            </p>
            <a @click="REFRESH_VERICATION">
            换一张
            </a>
          </span>
        </li>
        <li>
          <el-button type="primary" class="forget_btn_submit" @click="CONFIRM">确认更改</el-button>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  // req
  import req from '@/request'

  export default {
    name: "forget",
    components: {
      EntryHeader,
    },
    data() {
      return {
        account: "",
        verification: "",

        baseCode: ""
      }
    },
    mounted() {
      this.INIT_VERIFICATION();
    },
    methods: {
      /**
       * 返回一个
       */
      BACK() {
        this.$router.go(-1);
      },
      /**
       * 初始化验证码
       * @constructor
       */
      INIT_VERIFICATION() {
        const that = this;
        req.post(`v1/captchas`)
          .then(function (response) {
            // 获取成功后
            const res = response.data;
            that.baseCode = res.code;
          });
      },
      // async替代方案
      // async getCaptchaCode(){
      //   let res = await getcaptchas();
      //   this.baseCode = res.code;
      // },
      /**
       * 刷新验证码
       * @constructor
       */
      REFRESH_VERICATION() {
        this.INIT_VERIFICATION();
      },
      /**
       * 登录按钮
       * @constructor
       */
      CONFIRM() {
        this.$router.push(`/profile`);
      }

    }
  }
</script>

<style>

  /**
  整个页面
   */
  .forget {
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

  .forget_box {
    margin-top: 4rem;
  }

  .forget_box_list li {
    display: flex;
  }

  .forget_box_list_account {
    width: 100%;
  }


  .forget_box_list_verification {
    width: 60%;
  }

  .forget_box_list_verification_text {
    font-size: 0.7rem;
  }

  .forget_btn_submit {
    margin: 0.5rem 1rem;
    width: 100%;
  }
</style>
