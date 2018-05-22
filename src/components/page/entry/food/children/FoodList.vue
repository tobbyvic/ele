<template>
  <div class="food-list">
    <!--svg的引用方法-->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position:absolute;width:0;height:0;visibility:hidden">
      <symbol viewBox="0 0 33 32" id="default" width="100%" height="100%">
        <path fill="#3b87c8"
              d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z">
        </path>
      </symbol>
      <symbol viewBox="0 0 32 32" id="distance" width="100%" height="100%">
        <path fill="#2a9bd3"
              d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z">
        </path>
        <path fill="#2a9bd3"
              d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"></path>
      </symbol>
      <symbol viewBox="0 0 23 32" id="hot" width="100%" height="100%">
        <path fill="#f07373"
              d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"></path>
      </symbol>
      <symbol viewBox="0 0 32 32" id="price" width="100%" height="100%">
        <path fill="#e6b61a"
              d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
        <path fill="#e6b61a"
              d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"></path>
      </symbol>
      <symbol viewBox="0 0 32 32" id="speed" width="100%" height="100%">
        <path fill="#37c7b7"
              d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
        <path fill="#37c7b7" d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"></path>
      </symbol>
      <symbol viewBox="0 0 33 32" id="rating" width="100%" height="100%">
        <path fill="#eba53b"
              d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"></path>
      </symbol>
    </svg>

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
        <section v-show="flag === 'category'" class="category_container">
          <section class="category_left">
            <ul>
              <li v-for="type in restaurantCategory" @click="RIGHT_TO(type)"
                  :class="{category_left_active: activeFlag === type.name}">
                <img :src="GET_IMGPATH(type.image_url)"/>
                {{ type.name }}
                {{ type.count }}
              </li>
            </ul>
          </section>
          <section class="category_right">
            <ul>
              <li v-for="sub in sub_categories" @click="GET_RESTAURANT_BY_CATEGORY_ID(sub)">
                {{ sub.name }}
                {{ sub.count }}
              </li>
            </ul>
          </section>
        </section>
      </transition>
      <!--排序-->
      <transition name="showlist">
        <section v-show="flag === 'sort'" class="sort_container">
          <section class="sort_container_content">
            <ul>
              <li v-for="sortItem in sort" @click="MAKE_SORT_ITEM_ACTIVE(sortItem.text)"
                  :class="{sort_container_content_active: sortActive === sortItem.text}">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" v-bind:xlink:href="sortItem.id">
                  </use>
                </svg>
                <span>{{ sortItem.text }}</span>
              </li>
            </ul>
          </section>
        </section>
      </transition>
      <!--筛选-->
      <transition name="showlist">
        <section v-show="flag === 'filtrate'" class="filtrate_container">
          <p>
            配送方式
          </p>
          <ul class="filtrate_container_list">
            <li>
              <span>蜂鸟专送</span>
            </li>
          </ul>
          <p>
            商家属性（可以多选）
          </p>
          <ul class="filtrate_container_list">
            <li v-for="filtrateItem in filtrateList">
              <span>{{ filtrateItem.text }}</span>
            </li>
          </ul>
          <div class="filtrate_container_btn">
            <el-button plain size="mini">清空</el-button>
            <el-button type="primary" size="mini">确认</el-button>
          </div>

        </section>
      </transition>
    </div>
    <!--ListModule-->
    <list-module :location-restaurant="locationRestaurant" class="food-list_list"></list-module>
  </div>
</template>

<script>
  // req
  import req from '@/request'
  import ListModule from '@/components/page/entry/children/ListModule'

  export default {
    name: "nav-module",
    components: {
      ListModule
    },
    data() {
      return {

        /**
         * 主要
         */
        locationRestaurant: [],
        flag: "",
        para: {
          restaurant_category_ids: [],
          order_by: 4
        },
        /**
         * 分类
         */
        restaurantCategory: [],
        sub_categories: [],
        //判断哪一条目被点击
        activeFlag: "异国料理",
        /**
         * 排序
         */
        sort: [
          {id: "#default", text: "智能排序"},
          {id: "#distance", text: "距离最近"},
          {id: "#hot", text: "销量最高"},
          {id: "#price", text: "起送价最低"},
          {id: "#speed", text: "配送速度最快"},
          {id: "#rating", text: "评分最高"},
        ],
        sortActive: "",
        /**
         * 筛选
         */
        filtrateList: [
          {id: 1, text: "外卖报"},
          {id: 1, text: "准时达"},
          {id: 1, text: "奥特曼"},
        ]
      }
    },
    created() {
      const that = this;
      /**
       * 得到餐馆的分类
       */
      req.get('shopping/v2/restaurant/category')
        .then(function (response) {
          // 获取成功后
          console.log(response.data instanceof Array);
          that.restaurantCategory = response.data;
          that.sub_categories = response.data[0].sub_categories;
        });

      const geohash = this.$storeObject.getStore("geohash");
      /**
       * 根据经纬度详细定位
       */
      req.get('v2/pois/' + geohash)
        .then((response) => {
          // 获取成功后
          console.log(response);
          that.locationAddress = response.data;
          return response.data
        }).then(() => {
        that.GET_RESTAURANT();
      });
    },
    methods: {
      /**
       * 将根据请求的关键字得到对应的restaurant
       */
      GET_RESTAURANT(para) {
        const location = this.locationAddress;
        const that = this;
        const reqPara = {latitude: location.latitude, longitude: location.longitude, ...para};
        console.log(reqPara);
        req.get('shopping/restaurants', reqPara)
          .then((response) => {
            // 获取成功后
            console.log(response.data);
            that.locationRestaurant = response.data;
          })
      },
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
      /**
       * 将该条目变为active,即背景填充为白色
       * @param type
       * @constructor
       */
      RIGHT_TO: function (type) {
        this.sub_categories = type.sub_categories;
        // 将该条目变为active,即背景填充为白色
        this.activeFlag = type.name;
      },
      /**
       * GET_RESTAURANT_BY_CATEGORY_ID
       * @constructor
       */
      GET_RESTAURANT_BY_CATEGORY_ID(sub) {
        this.para.restaurant_category_ids = [sub.id];
        this.GET_RESTAURANT(this.para);
      },
      /**
       * 将该条目变为active
       * @param text
       * @constructor
       */
      MAKE_SORT_ITEM_ACTIVE(text) {
        this.sortActive = text;
        switch (text) {
          case "智能排序":
            this.para.order_by = 4;
            break
          case "距离最近":
            this.para.order_by = 5;
            break
          case "销量最高":
            this.para.order_by = 6;
            break
          case "起送价最低":
            this.para.order_by = 1;
            break
          case "配送速度最快":
            this.para.order_by = 2;
            break
          case "评分最高":
            this.para.order_by = 3;
            break
        }
        this.GET_RESTAURANT(this.para);
      }
    }
  }
</script>

<style>
  /**
  三个导航按钮
   */
  .nav-module {
    /*margin-top: 3.35rem;*/
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

  /*category*/
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

  .category_right {
  }

  .category_left ul, .category_right ul, .sort_container_content ul {
    width: 100%;
    font-size: 0.9rem;
    color: #3190e8;
    display: flex;
    flex-wrap: wrap;
  }

  .category_left li, .category_right li, .sort_container_content li {
    width: 100%;
    height: 2.5rem;
    text-align: center;
    font-size: 0.5rem;
    color: #666;
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

  .category_right li {
    border-bottom: 0.025rem solid #e4e4e4;
  }

  .category_left img {
    width: 1rem;
    height: 1rem;
    display: inline-flex;
  }

  .category_left_active {
    background-color: #ffffff;
  }

  /*sort*/
  .sort_container {
    width: 100%;
    position: absolute;
    top: 2.2rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    z-index: 1;
    display: flex;
  }

  .sort_container_content {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    overflow-y: auto;
    align-items: flex-start;
  }

  .sort_container_content svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  .sort_container_content_active {
    background-color: aqua;
  }

  /*filtrate*/
  .filtrate_container {
    width: 100%;
    position: absolute;
    top: 2.2rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    z-index: 1;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  .filtrate_container p {
    padding: 0.2rem;
    font-size: 0.8rem;
    color: #666;
    margin: 0.3rem 0;
  }

  .filtrate_container_list {
    display: flex;
    flex-flow: wrap;
  }

  .filtrate_container_list li {
    display: inline-flex;
    justify-content: center;
  }

  .filtrate_container_list span {
    padding: 0.2rem;
    font-size: 0.8rem;
    border: 0.025rem solid #eee;
    margin: 0.2rem;
  }

  .filtrate_container_btn {
    margin: 0.5rem 0;
  }

  /**
  food-list_list
   */
  .food-list_list {
    margin-top: 3.35rem;
    padding-top: 2.2rem;
  }
</style>
