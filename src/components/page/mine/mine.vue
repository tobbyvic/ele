<template>
  <div class="mine">
    <!--header-->
    <entry-header>
      <template slot="icon">
        <i class="el-icon-search"></i>
      </template>
      <template slot="content">
        我的
      </template>
    </entry-header>


  </div>
</template>

<script>
  import EntryHeader from '../entry/children/EntryHeader'

  export default {
    name: "mine",
    components: {
      EntryHeader
    }
  }
</script>

<style>

</style>
