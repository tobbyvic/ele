<template>
  <div class="food-list">
    <svg-example></svg-example>

    <!--EntryHeader-->
    <entry-header>
      <template slot="icon">
        <router-link to="/entry"><i class="el-icon-arrow-left"></i></router-link>
      </template>
      <template slot="content">
        {{ title }}
      </template>
    </entry-header>
    <!--Nav-->
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
            <li :class="{filtrate_list_active: delivery_mode.indexOf(3) !== -1}" @click="SWITCH_DELIVERY_MODE(3)">
              <span>蜂鸟专送</span>
            </li>
          </ul>
          <p>
            商家属性（可以多选）
          </p>
          <ul class="filtrate_container_list" >
            <li v-for="filtrateItem in filtrateList" :class="{filtrate_list_active: supportArr.indexOf(filtrateItem.id) !== -1}" @click="SWITCH_SUPPORT(filtrateItem.id)">
              <span>{{ filtrateItem.text }}</span>
            </li>
          </ul>
          <div class="filtrate_container_btn">
            <el-button plain size="mini" @click="EMPTY_FILTRATE">清空</el-button>
            <el-button type="primary" size="mini" @click="SUBMIT_FILTRATE">确认</el-button>
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
  import EntryHeader from '@/components/page/entry/children/EntryHeader'
  import SvgExample from '@/components/page/SvgExample'

  export default {
    name: "nav-module",
    components: {
      ListModule,
      EntryHeader,
      SvgExample
    },
    data() {
      return {

        /**
         * 主要
         */
        locationRestaurant: [],
        flag: "",
        title: "全部餐饮",
        para: {
          restaurant_category_ids: [],
          order_by: 4,
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
          {id: 7, text: "外卖保"},
          {id: 9, text: "准时达"},
          {id: 4, text: "开发票"},
          {id: 3, text: "在线付"}
        ],
        supportArr: [],
        delivery_mode: []
      }
    },
    computed: {
    },
    created() {
      console.log(this.$route.query);
      if (this.$route.query.title) {
        this.title = this.$route.query.title;
        this.para.restaurant_category_id  = this.$route.query.restaurant_category_id;
      } else {
        console.log("没有值在route.query中");
      }
      this.title = this.$route.query.title;
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
        that.GET_RESTAURANT(that.para);
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
        this.title = sub.name;
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
            break;
          case "距离最近":
            this.para.order_by = 5;
            break;
          case "销量最高":
            this.para.order_by = 6;
            break;
          case "起送价最低":
            this.para.order_by = 1;
            break;
          case "配送速度最快":
            this.para.order_by = 2;
            break;
          case "评分最高":
            this.para.order_by = 3;
            break
        }
        this.GET_RESTAURANT(this.para);
      },
      /**
       * 点击切换样式,"配送方式"
       * @param id
       * @constructor
       */
      SWITCH_DELIVERY_MODE(id) {
        if (this.delivery_mode.indexOf(id) !== -1){
          //如果发现元素已存在，删除元素，样式也会改变
          this.delivery_mode = [];
        } else {
          //不存在则添加样式
          this.delivery_mode.push(id);
        }
      },
      /**
       * 点击切换样式,"商家属性"
       * @param id
       * @constructor
       */
      SWITCH_SUPPORT(id) {
        if (this.supportArr.indexOf(id) !== -1){
          //如果发现元素已存在，删除元素，样式也会改变
          this.supportArr.splice(this.supportArr.findIndex(item => item === id), 1);
        } else {
          //不存在则添加样式
          this.supportArr.push(id);
        }
      },
      /**
       * 清空所有选中的样式
       * @constructor
       */
      EMPTY_FILTRATE() {
        this.delivery_mode = [];
        this.supportArr = [];
      },
      /**
       * 提交选中的筛选选项
       * @constructor
       */
      SUBMIT_FILTRATE() {
        this.para.delivery_mode = this.delivery_mode;
        this.para.support_ids  = this.supportArr;
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
    flex-direction: row;
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
    background-color: #CCCCCC;
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

  .filtrate_list_active {
    color: #3190e8;
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
