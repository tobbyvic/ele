<template>

  <div class="computedTime">
    {{ resStr }}
  </div>

</template>

<script>
  export default {
    name: "computed-time",
    props: ['time'],
    data() {
      return {
        resStr: "",
        initCount: 900
      }
    },
    mounted() {
      this.initCount -= this.time;
      this.GET_COUNT()
    },
    methods: {
      /**
       * 获取
       * @constructor
       */
      GET_COUNT() {
        clearInterval(this.timer);

        this.timer = setInterval(() => {
          this.initCount -= 1;
          this.GET_RES(this.initCount);
        }, 1000)
      },
      GET_RES(num) {
        if(num >= 0) {
          let m = Math.floor((num/60));
          let s = num - m*60;
          this.resStr = "剩余支付时间为" + m + "分" + s + "秒";
        } else {
          this.resStr = "支付已超时";
        }
      }
    }

  }
</script>

<style>

</style>
