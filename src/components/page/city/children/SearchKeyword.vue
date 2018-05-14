<template>
  <div class="search-keyword">
    <ul class="search-keyword_list">
      <li v-for="address in searchResult" :key="" @click="ADDRESS_ENTRANCE(address)">
        <h4>{{ address.name }}</h4>
        <p>{{ address.address }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "search-keyword",
    props: ['searchResult'],
    methods: {
      /**
       * 选中某个地址后暂存到sessionstorage中用作历史
       * @param addr
       * @constructor
       */
      ADDRESS_ENTRANCE: function (addr) {
        console.log(addr);
        let addrStr = JSON.stringify(addr);
        sessionStorage.setItem(addr.name,addrStr);
      }
    }
  }
</script>

<style>
  /**
  search-keyword组件样式
   */
  .search-keyword {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    /*margin-top: 3.85rem;*/
    display: flex;
    flex-direction: column;
  }
  .search-keyword_list li {
    border-bottom: 1px solid #eee;
    padding: 15px;
  }
  .search-keyword_list li h4 {
    color: #333;
    margin-bottom: 5px;

  }
  .search-keyword_list li p {
    font-size: 0.5rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
