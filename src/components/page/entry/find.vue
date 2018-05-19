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
    <search-module></search-module>
    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>
  </div>
</template>

<script>
  import SearchModule from '../city/children/SearchModule'
  import BottomNav from './children/BottomNav'
  import EntryHeader from './children/EntryHeader'

  export default {
    name: "find",
    components: {
      SearchModule,
      BottomNav,
      EntryHeader
    }
  }
</script>

<style>

</style>
