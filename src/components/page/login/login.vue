<template>
  <div class="login">
    <!--header-->
    <entry-header>
      <template slot="icon">
        <i class="el-icon-search"></i>
      </template>
      <template slot="content">
        密码登录
      </template>
    </entry-header>


    <div class="login_box">
      <ul class="login_box_list">
        <li>
          <el-input v-model="account" placeholder="账号" class="login_box_list_account"></el-input>
        </li>
        <li>
          <el-input v-model="password" placeholder="密码" class="login_box_list_password"></el-input>
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </li>
        <li>
          <el-input v-model="verification" placeholder="验证码" class="login_box_list_verification"></el-input>
          <img :src="baseCode"/>
          <span class="login_box_list_verification_text">
            <p>
              看不清
            </p>
            <a @click="REFRESH_VERICATION">
            换一张
            </a>
          </span>
        </li>
        <li>
          <el-button type="primary" class="login_btn_submit" @click="SUBMIT">登录</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import EntryHeader from '../entry/children/EntryHeader'
  // req
  import req from '@/request'

  export default {
    name: "login",
    components: {
      EntryHeader
    },
    data() {
      return {
        account: "",
        password: "",
        verification: "",


        value2: true,

        baseCode: ""
      }
    },
    mounted() {
      this.INIT_VERIFICATION();
    },
    methods: {
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
      SUBMIT() {
        // 因为后台返回的验证码老是无效，这里就取消登录，默认点击按钮即可登录到dongdong@2017账户
        req.post(`v2/login`, {username: this.account, password: this.password, captcha_code: this.verification })
          .then((response) => {
            console.log(response.data);
        });

        // 返回dongdong@2017账户的相关信息，并存到localStorage中
        req.get(`v1/user?user_id=10163`)
          .then((response) => {
            // 获取成功后
            const res = JSON.stringify(response.data);
            window.localStorage.setItem("user", res);
            this.$router.push("/entry");
          });
      }

    }
  }
</script>

<style>
  .login_box {
    margin-top: 4rem;
  }

  .login_box_list li {
    display: flex;
  }

  .login_box_list_account {
    width: 100%;
  }

  .login_box_list_password {
    width: 80%;
  }

  .login_box_list_verification {
    width: 60%;
  }

  .login_box_list_verification_text {
    font-size: 0.7rem;
  }

  .login_btn_submit {
    margin: 0.5rem 1rem;
    width: 100%;
  }

</style>

