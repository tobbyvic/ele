<template>
  <section class="list_template_container">
    <section class="list_template_container_left">
      <slot name="list_template_container_left"></slot>
    </section>
    <section class="list_template_container_right">
      <slot name="list_template_container_right"></slot>
    </section>
  </section>
</template>

<script>
  export default {
    name: "list_template",
  }
</script>

<style>
  /*商品部分外层的容器*/
  .list_template_container {
    width: 100%;
    display: flex;
    flex: 1;
    position: relative;
  }

  /*商品部分里面的左右两个能滑动的列*/
  .list_template_container_left {
    padding: 0;
    margin: 0;
    width: 25%;
    overflow-y: auto;
  }
  .list_template_container_right {
    padding: 0;
    margin: 0;
    width: 75%;
    flex-flow: column;
    overflow-y: auto;
    background-color: #ffffff;
  }
</style>
