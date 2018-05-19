<template>
  <div class="find">
    <entry-header>
      <template slot="icon">
        <i class="el-icon-search"></i>
      </template>
      <template slot="content">
        订单列表
      </template>
    </entry-header>
    <!--bottom nav-->
    <bottom-nav class="entry_bottom"></bottom-nav>
  </div>
</template>

<script>
  import BottomNav from './children/BottomNav'
  import EntryHeader from './children/EntryHeader'

  export default {
    name: "order",
    components: {
      BottomNav,
      EntryHeader
    }
  }
</script>

<style>

</style>

