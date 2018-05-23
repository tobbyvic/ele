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

    <!--content-->
    <!--<search-history v-if="searchHistory" :history-list="historyList"></search-history>-->
    <!--<search-keyword :search-result="searchResult" v-else></search-keyword>-->
    <search-module :location-city="locationCity"></search-module>


  </div>
</template>

<script>
  import req from '@/request'
  import SearchModule from './children/SearchModule'


  export default {
    name: "city",
    components: {
      // searchHistory: searchHistory,
      // searchKeyword: searchKeyword
      SearchModule
    },
    data() {
      return {
        locationCity: '',
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


</style>
