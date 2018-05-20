<template>
  <div class="nav-module">
    <!--分类-->
    <div class="nav-module_part" :class="{choose_type:sortBy == 'food'}">
      <div class="nav-module_part_container" @click="SWITCH_SHOW">
        <div class="nav-module_part_border">
          <span :class="{category_title: sortBy == 'food'}">foodTitle</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
      </div>
      <!--transition过渡部分-->
      <transition name="showlist" v-show="flag">
        <section v-show="flag" class="category_container sort_detail_type">
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
    </div>
    <!--排序-->
    <div class="nav-module_part" :class="{choose_type:sortBy == 'food'}">
      <div class="nav-module_part_container" @click="SWITCH_SHOW">
        <div class="nav-module_part_border">
          <span :class="{category_title: sortBy == 'food'}">foodTitle</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
      </div>
      <!--transition过渡部分-->
      <!--<transition name="showlist" v-if="flag">-->
        <!--<section v-if="flag" class="category_container sort_detail_type">-->
          <!--<section class="category_left">-->
            <!--<ul>-->
              <!--<li>-->
                <!--aaaaa-->
              <!--</li>-->
            <!--</ul>-->
          <!--</section>-->
          <!--<section class="category_right">-->
            <!--<ul>-->
              <!--<li>-->
                <!--bbbbb-->
              <!--</li>-->
            <!--</ul>-->
          <!--</section>-->
        <!--</section>-->
      <!--</transition>-->
    </div>
    <!--筛选-->
    <div class="nav-module_part" :class="{choose_type:sortBy == 'food'}">
      <div class="nav-module_part_container" @click="SWITCH_SHOW">
        <div class="nav-module_part_border">
          <span :class="{category_title: sortBy == 'food'}">foodTitle</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-module",
    data() {
      return {
        flag: true
      }
    },
    methods: {
      SWITCH_SHOW: function () {
        this.flag = !this.flag;
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

  .nav-module_part {
    margin: 0px;
    float: left;
    width: 33.33%;
  }

  .nav-module_part_container {
    width: 100%;
    border-right: 0.025rem solid #e4e4e4;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    height: 2.2rem;
    padding: 0.3rem 0;
    border-bottom: 0.05rem solid #e4e4e4;
  }

  /*展开的内容*/
  .category_container {
    width: 100%;
    position: absolute;
    top: 1.9rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    z-index: -1;
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
