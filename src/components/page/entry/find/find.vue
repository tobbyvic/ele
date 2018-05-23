<template>
  <div class="find">
    <entry-header>
      <template slot="icon">
        <i class="el-icon-search"></i>
      </template>
      <template slot="content">
        搜索商家或美食
      </template>
    </entry-header>
    <search-restaurant></search-restaurant>
    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>
  </div>
</template>

<script>
  import SearchModule from '@/components/page/city/children/SearchModule'
  import BottomNav from '@/components/page/entry/children/BottomNav'
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  import SearchRestaurant from './children/SearchRestaurant'

  export default {
    name: "find",
    components: {
      SearchModule,
      BottomNav,
      EntryHeader,
      SearchRestaurant
    }
  }
</script>

<style>

</style>
