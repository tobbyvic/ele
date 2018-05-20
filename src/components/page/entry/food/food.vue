<template>
  <div class="food">
    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <i class="el-icon-arrow-left"></i>
      </template>
      <template slot="content">
        {{ }}
      </template>
    </entry-header>
    <!--NavModule-->
    <nav-module></nav-module>
    <!--ListModule-->
    <list-module :location-restaurant="locationRestaurant"></list-module>

  </div>
</template>

<script>
  // req
  import req from '@/request'
  import EntryHeader from '../children/EntryHeader'
  import ListModule from '../children/ListModule'
  import NavModule from './children/NavModule'

  export default {
    name: "food",
    components: {
      EntryHeader,
      ListModule,
      NavModule
    },
    data() {
      return {
        locationRestaurant: []
      }
    },
    mounted() {

      console.log(this.$route.query);
      const geohash = this.$storeObject.getStore("geohash");
      const that = this;
      /**
       * 根据经纬度详细定位
       */
      req.get('v2/pois/' + geohash)
        .then(function (response) {
          // 获取成功后
          console.log(response);
          that.locationAddress = response.data;
          /**
           * 得到详细定位后获取商铺列表
           */
          req.get('shopping/restaurants', {latitude: response.data.latitude, longitude: response.data.longitude})
            .then(function (response) {
              // 获取成功后
              console.log(response.data);
              that.locationRestaurant = response.data;
            });
        });
    },
  }
</script>

<style>

</style>
