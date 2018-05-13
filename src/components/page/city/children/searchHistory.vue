<template>
  <div class="search-history">
    <header>搜索历史</header>
    <section>
      <div class="search-history_content">

      </div>
      <div class="search-history_empty">
        <el-button plain class="search-history_empty_btn">朴素按钮</el-button>
      </div>

    </section>
  </div>
</template>

<script>
  export default {
    name: "search-history"
  }
</script>

<style>
  .search-history {

  }

  .search-history header {
    font-size: 0.8rem;
  }

  .search-history section {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    /*margin-top: 3.85rem;*/
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .search-history_content {

  }

  .search-history_empty_btn {
    width: 100%;
    border-radius: 0;
  }
</style>
