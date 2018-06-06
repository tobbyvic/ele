<template>
  <div class="oldbenefit">
    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <a @click="BACK"><i class="el-icon-arrow-left"></i></a>
      </template>
      <template slot="content">
        过期红包
      </template>
    </entry-header>

    <section class="oldbenefit_content">
      <!--列表部分-->
      <ul class="oldbenefit_content_list">
        <li v-for="benefit in oldbenefitArray" :key="benefit.id">
          <div class="oldbenefit_content_list_item--up">
            <div class="oldbenefit_content_list_item--up--left">
              <span>￥{{ benefit.amount.toFixed(1) }}</span>
              <span>{{ benefit.description_map.sum_condition }}</span>
            </div>
            <div class="oldbenefit_content_list_item--up--center">
              <h3>{{ benefit.name }}</h3>
              <span>{{ benefit.description_map.validity_periods }}</span>
              <span>{{ benefit.description_map.phone }}</span>
            </div>

            <svg width="4rem" height="4rem" class="oldbenefit_content_expired">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expired">
              </use>
            </svg>
            <!--<div class="oldbenefit_content_list_item&#45;&#45;up&#45;&#45;right">-->
              <!--<p>{{ benefit.description_map.validity_delta }}</p>-->
            <!--</div>-->
          </div>

          <!--每一条目下面的限制-->
          <div class="oldbenefit_content_list_item--down">
            <p>{{ typeof(benefit.limit_map) === "object"?benefit.limit_map.restaurant_flavor_ids:"不限品类" }}</p>
          </div>



        </li>
      </ul>
    </section>


  </div>
</template>

<script>
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  // req
  import req from '@/request'

  export default {
    name: "oldbenefit",
    components: {
      EntryHeader
    },
    props: ['user'],
    data() {
      return {
        oldbenefitArray: []
      }
    },
    created() {
      // 初始化红包列表
      this.INIT_OLDBENEFIT();
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
      async INIT_OLDBENEFIT() {
        const res = await req.get(`promotion/v2/users/${this.user.user_id}/expired_hongbaos`,{limit: 20, offset: 0})
        this.oldbenefitArray = res.data;
        console.log(this.oldbenefitArray);
      }
    }
  }
</script>

<style>
  /**
  整个页面
   */
  .oldbenefit {
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
  .oldbenefit_content {
    margin-top: 3.8rem;
    color: #9B9B9B;
  }

  /*列表部分*/
  .oldbenefit_content_list {
    padding: 0.4rem;
  }

  .oldbenefit_content_list li {
    padding-bottom: 0.8rem;
    position: relative;
  }

  .oldbenefit_content_list_item--up {
    display: flex;
    background: #fff;
    flex: 1;
    justify-content: space-evenly;
  }

  .oldbenefit_content_list_item--up div {
    display: inline-flex;
    flex-flow: column;
    font-size: 0.8rem;
    padding: 0.5rem;
    align-content: center;
    justify-content: center;
  }

  .oldbenefit_content_expired {
    position: absolute;
    right: 1rem;
    top: 0.6rem;
  }

  /*下部分*/
  .oldbenefit_content_list_item--down {
    background: #f9f9f9;
    padding: 0.5rem;
    font-size: 0.8rem;
  }

</style>
