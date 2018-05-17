<template>
  <div class="entry_header">
    <div :span="24" class="entry_header--inside">
      <div class="entry_header--inside_div">
        <slot name="icon"></slot>
      </div>
      <div class="entry_header--inside_location">
        <slot name="content"></slot>
      </div>
      <div class="entry_header--inside_div">
        <slot name="corner"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "entry-header",
    props: ['locationAddress']
  }
</script>

<style>
  /**
    header
     */
  .entry_header {
    background: #2A85E5;
    height: 3.35rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .entry_header--inside {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .entry_header--inside_div {
    padding: 0 10px;
    color: #ffffff;
  }

  .entry_header--inside_div a {
    color: #ffffff;
  }

  .entry_header--inside_location {
    padding: 0 10px;
    color: #ffffff;
    position: absolute;
    width: 50%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%);

    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
