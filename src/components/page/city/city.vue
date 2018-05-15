<template>
  <div class="city">
    <!--header-->
    <div class="city_header">
      <div :span="24" class="city_header--inside">
        <div class="city_header--inside_div">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="city_header--inside_location">
          {{ locationCity.name }}
        </div>
        <div class="city_header--inside_div">
          切换城市
        </div>
      </div>
    </div>
    <!--top-->
    <section class="city_top">
      <div class="city_top--above">
        <el-input
          placeholder="输入学校、商务楼、地址"
          v-model="address"
          clearable class="city_top--above_input">
        </el-input>
      </div>
      <div class="city_top--under">
        <el-button type="primary" class="city_top--under_btn" size="mini" @click="SEARCH_ADDRESS">提交</el-button>
      </div>
    </section>
    <!--content-->
    <search-history v-if="searchHistory"></search-history>
    <search-keyword :search-result="searchResult" v-else></search-keyword>


  </div>
</template>

<script>
  import req from '@/request'
  import searchHistory from './children/searchHistory'
  import searchKeyword from './children/searchKeyword'

  export default {
    name: "city",
    components: {
      searchHistory: searchHistory,
      searchKeyword: searchKeyword
    },
    data() {
      return {
        address: '',
        locationCity: '',
        searchHistory: true,
        searchResult: []

      }
    },
    created() {
      console.log(this.$route.params);
      console.log(this.$route.path);
      let that = this;
      /**
       * 获取当前定位的城市详细
       */
      req.get('v1/cities/' + this.$route.params.id)
        .then(function (response) {
          // 获取成功后
          that.locationCity = response.data
        })
    },
    methods: {
      SEARCH_ADDRESS: function () {
        /**
         * 如果搜索内容不为空就发起ajax请求
         */
        if (this.address === '') {
          this.$message.error('内容为空');
          return false
        } else {
          let that = this;
          req.get('v1/pois', {city_id: that.locationCity.id, keyword: that.address})
            .then(function (response) {
              // 获取成功后
              console.log(response.data);
              that.searchResult = response.data;
              // 切换子组件为SearchKeyword
              that.searchHistory = false;
            })
        }
      }
    }
  }
</script>

<style>
  /**
  header
   */
  .city_header {
    background: #2A85E5;
    height: 3.35rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }

  .city_header--inside {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .city_header--inside_div {
    padding: 0 10px;
    color: #ffffff;
  }

  .city_header--inside_location {
    padding: 0 10px;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%);
  }

  /**
  top
   */
  .city_top {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    margin-top: 3.85rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .city_top--above, .city_top--under {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .city_top--above {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  .city_top--under {
    padding-bottom: 0.4rem;
  }

  .el-input__inner, .city_top--under_btn {
    height: 2rem;
    width: 100%;
    border-radius: 0;
  }
</style>
