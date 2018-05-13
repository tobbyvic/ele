<template>
  <div class="search-keyword">
    <ul class="search-keyword_list">
      <li v-for="x in searchResult" :key="">
        <h4>{{ x.name }}</h4>
        <p>{{ x.address }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "search-keyword",
    props: ['searchResult']
  }
</script>

<style>
  .search-keyword {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    /*margin-top: 3.85rem;*/
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
  .search-keyword_list li {
    border-bottom: 1px solid #eee;
  }
  .search-keyword_list li p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>
