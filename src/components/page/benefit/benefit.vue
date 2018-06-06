<template>


  <div class="benefit">
    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <a @click="BACK"><i class="el-icon-arrow-left"></i></a>
      </template>
      <template slot="content">
        我的红包
      </template>
    </entry-header>

    <section class="benefit_content">
      <!--最上面一行提示几个红包到期-->
      <div class="benefit_content--top">
        <span class="benefit_content--top--left">
          有<span>{{ benefitArray.length }}</span>个红包到期
        </span>
        <span class="benefit_content--top--right">
          <svg width="1rem" height="1rem" v-if="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#benefit_question">
            </use>
          </svg>
          红包说明
        </span>
      </div>

      <!--列表部分-->
      <ul class="benefit_content_list">
        <li v-for="benefit in benefitArray" :key="benefit.id">
          <div class="benefit_content_list_item--up">
            <div class="benefit_content_list_item--up--left">
              <span>￥{{ benefit.amount.toFixed(1) }}</span>
              <span>{{ benefit.description_map.sum_condition }}</span>
            </div>
            <div class="benefit_content_list_item--up--center">
              <h3>{{ benefit.name }}</h3>
              <span>{{ benefit.description_map.validity_periods }}</span>
              <span>{{ benefit.description_map.phone }}</span>
            </div>
            <div class="benefit_content_list_item--up--right">
              <p>{{ benefit.description_map.validity_delta }}</p>
            </div>
          </div>

          <!--每一条目下面的限制-->
          <div class="benefit_content_list_item--down">
            <p>{{ typeof(benefit.limit_map) === "object"?benefit.limit_map.restaurant_flavor_ids:"不限品类" }}</p>
          </div>

        </li>
      </ul>


      <div class="benefit_content_history">
        <p>查看历史红包&nbsp;>>></p>
      </div>
    </section>




  </div>

</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  // req
  import req from '@/request'

  export default {
    name: "benefit",
    components: {
      EntryHeader
    },
    data() {
      return {
        user: {},
        benefitArray: []
      }
    },
    mounted() {
      // 初始化红包列表
      this.INIT_BENEFIT();
    },
    methods: {
      /**
       * 返回一个
       */
      BACK() {
        this.$router.go(-1);
      },
      /**
       * 异步函数，初始化红包列表
       * @returns {Promise<void>}
       * @constructor
       */
      async INIT_BENEFIT() {
        let userStr = window.localStorage.getItem("user");
        this.user = JSON.parse(userStr);
        const res = await req.get(`promotion/v2/users/${this.user.user_id}/hongbaos`,{limit: 20, offset: 0})
        this.benefitArray = res.data;
        console.log(this.benefitArray);
      }
    }
  }
</script>

<style>
  /**
  整个页面
   */
  .benefit {
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

  /**
  content主要内容部分
   */
  .benefit_content {
    margin-top: 3.8rem;
  }

  /*最上面一行部分*/
  .benefit_content--top {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 0.4rem;
    align-content: center;
    font-size: smaller;
  }

  .benefit_content--top--left {
  }

  .benefit_content--top--right {
    display: inline-flex;
    align-content: center;
  }

  /*列表部分*/
  .benefit_content_list {
    padding: 0.4rem;
  }

  .benefit_content_list li {
    padding-bottom: 0.8rem;
  }

  .benefit_content_list_item--up {
    display: flex;
    background: #fff;
    flex: 1;
    justify-content: space-evenly;
  }

  .benefit_content_list_item--up div {
    display: inline-flex;
    flex-flow: column;
    font-size: 0.8rem;
    padding: 0.5rem;
    align-content: center;
    justify-content: center;
  }


  /*下部分*/
  .benefit_content_list_item--down {
    background: #f9f9f9;
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .benefit_content_history {
    padding: 1rem 0;
    font-size: 0.8rem;
    color: #2F2F2F;
    text-align: center;
  }







</style>
