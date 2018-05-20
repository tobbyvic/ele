<template>
  <div class="nav-module">
    <div class="nav-module_all" :class="{}">
      <!--分类-->
      <div class="nav-module_part_container" @click="SWITCH_SHOW('category')">
        <div class="nav-module_part_border" :class="{nav_module_part_title: flag === 'category'}">
          <span>分类</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
      </div>
      <!--排序-->
      <div class="nav-module_part_container" @click="SWITCH_SHOW('sort')">
        <div class="nav-module_part_border" :class="{nav_module_part_title: flag === 'sort'}">
          <span :class="{}">排序</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
      </div>
      <!--筛选-->
      <div class="nav-module_part_container" @click="SWITCH_SHOW('filtrate')">
        <div class="nav-module_part_border" :class="{nav_module_part_title: flag === 'filtrate'}">
          <span :class="{}">筛选</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
      </div>
    </div>
    <!--transition过渡部分-->
    <!--分类-->
    <transition name="showlist">
      <section v-show="flag === 'category'" class="category_container sort_detail_type">
        <section class="category_left">
          <ul>
            <li>
              aaaaa
            </li>
          </ul>
        </section>
        <section class="category_right">
          <ul>
            <li>
              bbbbb
            </li>
          </ul>
        </section>
      </section>
    </transition>
    <!--排序-->
    <transition name="showlist">
      <section v-show="flag === 'sort'" class="category_container sort_detail_type">
        <section class="category_left">
          <ul>
            <li>
              ccccc
            </li>
          </ul>
        </section>
        <section class="category_right">
          <ul>
            <li>
              bbbbb
            </li>
          </ul>
        </section>
      </section>
    </transition>
    <!--筛选-->
    <transition name="showlist">
      <section v-show="flag === 'filtrate'" class="category_container sort_detail_type">
        <section class="category_left">
          <ul>
            <li>
              dddd
            </li>
          </ul>
        </section>
        <section class="category_right">
          <ul>
            <li>
              bbbbb
            </li>
          </ul>
        </section>
      </section>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "nav-module",
    data() {
      return {
        flag: ""
      }
    },
    methods: {
      /**
       * 根据flag的值切换下拉的视图
       * @param flag
       * @constructor
       */
      SWITCH_SHOW: function (flag) {
        if (this.flag === flag) {
          this.flag = "";
        } else {
          this.flag = flag;
        }
      }
    }
  }
</script>

<style>
  .nav-module {
    margin-top: 3.35rem;
    /*display: flex;*/
    background-color: #fff;
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  .nav-module_all {
    width: 100%;
    position: relative;
    padding-top: 0.3rem;
    padding-bottom: 0.25rem;
    border-bottom: 0.05rem solid #e4e4e4;
    z-index: 2;
  }
  /*为元素清除浮动*/
  .nav-module_all:after {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .nav-module_part_container {
    margin: 0px;
    float: left;
    width: 33.33%;
    /* border-right: 0.025rem solid #e4e4e4; */
    display: inline-flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    height: 1.6rem;
  }

  .nav-module_part_border {
    width: 100%;
    border-right: 0.025rem solid #e4e4e4;
    display: inline-flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }

  /*点击下拉按钮后样式改变*/
  .nav_module_part_title {
    color: #3190e8;
  }

  .nav_module_part_title svg {
    transform: rotate(180deg);
    fill: #3190e8;
  }

  .sort_icon{
    vertical-align: middle;
    transition: all .3s;
    fill:#666;
    margin-left: 5px;
  }

  /*展开的内容*/
  .category_container {
    width: 100%;
    position: absolute;
    top: 2.2rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    z-index: 1;
  }

  /*transition过渡效果*/
  .showlist-enter-active, .showlist-leave-active {
    transition: all .3s;
    transform: translateY(0);
  }

  .showlist-enter, .showlist-leave-active {
    opacity: 0;
    transform: translateY(-100%);
  }

</style>
