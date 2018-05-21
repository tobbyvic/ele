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
    <food-list></food-list>

  </div>
</template>

<script>
  // req
  import req from '@/request'
  import EntryHeader from '../children/EntryHeader'
  import ListModule from '../children/ListModule'
  import FoodList from './children/FoodList'

  export default {
    name: "food",
    components: {
      EntryHeader,
      ListModule,
      FoodList
    },
    data() {
      return {
        locationRestaurant: []
      }
    },
    mounted() {


    },
  }
</script>

<style>

</style>
