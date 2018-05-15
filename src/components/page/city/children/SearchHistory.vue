<template>
  <div class="search-history">
    <header>搜索历史</header>
    <section>
      <div class="search-history_content">
        <ul class="search-history_list">
          <li v-for="address in searchHistory" :key="" @click="ENTRY_PAGE(address)">
            <h4>{{ address.name }}</h4>
            <p>{{ address.address }}</p>
          </li>
        </ul>
      </div>
      <div class="search-history_empty">
        <el-button plain class="search-history_empty_btn">清空所有</el-button>
      </div>

    </section>
  </div>
</template>

<script>
  export default {
    name: "search-history",
    computed: {
      /**
       * 从sessionStorage中获取searchHistory
       * @returns {Array}
       */
      searchHistory: function () {
        let arr = [];
        for(let i=0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let val = sessionStorage.getItem(key);
          arr.push(JSON.parse(val));
        }
        return arr
      }
    },
    methods: {
      ENTRY_PAGE(addr) {
        console.log(addr);
        const geohash = addr.geohash;
        this.$router.push({ path: '/entry', params: { geohash }}) // -> /user
      }
    }
  }
</script>

<style>
  /**
  search-history组件样式
   */
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

  .search-history_list li {
    border-bottom: 1px solid #eee;
    padding: 15px;
  }
  .search-history_list li h4 {
    color: #333;
    margin-bottom: 5px;

  }
  .search-history_list li p {
    font-size: 0.5rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .search-history_empty_btn {
    width: 100%;
    border-radius: 0;
  }
</style>
