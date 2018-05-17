<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import './style/common';
  html {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  /*适配iphone5*/
  @media screen and (max-width: 320px){
    html {
      font-size: 13.65px;
    }
  }
  /*适配iphone6plus*/
  @media screen and (min-width: 376px) and (max-width: 414px){
    html {
      font-size: 17.66px;
    }
  }
  /*适配ipad*/
  @media screen and (min-width: 415px) and (max-width: 768px){
    html {
      font-size: 32.76px;
    }
  }
  /*适配ipad pro*/
  @media screen and (min-width: 769px) {
    html{
      font-size: 43.69px;
    }
  }

  body {
    background-color: #E0E0E0;
  }

</style>
