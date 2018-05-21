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
            <li v-for="type in restaurantCategory" @click="RIGHT_TO(type)" :class="{category_left_active: activeFlag === type.name}">
              <img :src="GET_IMGPATH(type.image_url)"/>
              {{ type.name }}
            </li>
          </ul>
        </section>
        <section class="category_right">
          <ul>
            <li v-for="sub in sub_categories" @click="">
              {{ sub.name }}
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
  // req
  import req from '@/request'

  export default {
    name: "nav-module",
    data() {
      return {
        flag: "",
        restaurantCategory: [],
        sub_categories: [],
        //判断哪一条目被点击
        activeFlag: "异国料理"
      }
    },
    created() {
      const that = this;
      req.get('shopping/v2/restaurant/category')
        .then(function (response) {
          // 获取成功后
          console.log(response.data instanceof Array);
          that.restaurantCategory = response.data;
          that.sub_categories = response.data[0].sub_categories;
        });
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
      },
      /**
       * 将image_url处理一下
       * @param path
       * @returns {string}
       * @constructor
       */
      GET_IMGPATH: function (path) {
        return this.$getImgPath(path);
      },

      RIGHT_TO: function (type) {
        this.sub_categories = type.sub_categories;
        // 将该条目变为active,即背景填充为白色
        this.activeFlag = type.name;
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

  /**
   点击下拉按钮后样式改变
    */
  .nav_module_part_title {
    color: #3190e8;
  }

  .nav_module_part_title svg {
    transform: rotate(180deg);
    fill: #3190e8;
  }

  .sort_icon {
    vertical-align: middle;
    transition: all .3s;
    fill: #666;
    margin-left: 5px;
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

  /**
   展开页内部的内容
    */
  .category_container {
    width: 100%;
    position: absolute;
    top: 2.2rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    z-index: 1;
    display: flex;
    height: 22.5rem;
    overflow-y: auto;
  }

  .category_left, .category_right {
    padding: 0;
    margin: 0;
    width: 50%;
    display: inline-flex;
    overflow-y: auto;
    align-items: flex-start;
  }

  .category_left {
    background-color: #f1f1f1;
  }

  .category_left ul,.category_right ul {
    width: 100%;
    font-size: 0.9rem;
    color: #3190e8;
    display: flex;
    flex-wrap: wrap;
  }

  .category_left li,.category_right li {
    width: 100%;
    height: 2.5rem;
    text-align: center;
    font-size: 0.5rem;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .category_left img {
    width: 1rem;
    height: 1rem;
    display: inline-flex;
  }

  .category_left_active {
    background-color: #ffffff;
  }
</style>
