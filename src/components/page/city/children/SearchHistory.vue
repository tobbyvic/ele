<template>
  <div class="search-history">
    <header>搜索历史</header>
    <section>
      <div class="search-history_content" v-if="emptyFlag">
        <ul class="search-history_list">
          <li v-for="address in searchHistory" :key="" @click="ENTRY_PAGE(address)">
            <h4>{{ address.name }}</h4>
            <p>{{ address.address }}</p>
          </li>
        </ul>
        <el-button plain class="search-history_empty_btn" @click="EMPTY_HISTORY">清空所有</el-button>
      </div>
      <div id="search-history_tip" v-else>当前没有任何条目!</div>

    </section>
  </div>
</template>

<script>
  export default {
    name: "search-history",
    data() {
      return {
        emptyFlag: true
      }
    },
    computed: {
      /**
       * 从sessionStorage中获取searchHistory
       * @returns {Array}
       */
      searchHistory: function () {
        if (sessionStorage.getItem('historyObject') == null) {
          return false
        } else {
          const res = JSON.parse(sessionStorage.getItem('historyObject')).addressHistory;
          return res
        }
      }
    },
    mounted() {
      this.INIT_VIEW();
    },
    methods: {
      /**
       * 页面判断
       * @constructor
       */
      INIT_VIEW() {
        if (sessionStorage.getItem('historyObject') == null) {
          this.emptyFlag = false;
        } else {
          this.emptyFlag = true;
        }
      },
      /**
       * 点击历史记录的条目
       * @param addr
       * @constructor
       */
      ENTRY_PAGE(addr) {
        console.log(addr);
        const geohash = addr.geohash;
        this.$router.push({path: '/entry', query: {geohash}}) // -> /user
        this.$store.commit('EMIT_GEOHASH', geohash);
      },
      /**
       * 提交更改历史，清空
       * @constructor
       */
      EMPTY_HISTORY() {
        this.$store.commit('EMIT_ADDRESSHISTORY', 'empty');
        this.INIT_VIEW();
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

  #search-history_tip {
    background-color: #E0E0E0;
    text-align: center;
  }
</style>
