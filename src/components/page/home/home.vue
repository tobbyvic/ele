<template>
  <div class="home">
    <!--header-->
    <div class="home_header">
      <div :span="24" class="home_header--inside">
        <div class="home_header--inside_div">
          ele.me
        </div>
        <div class="home_header--inside_div">
          <a @click="JUDGE_SUBMIT">登录|注册</a>
        </div>
      </div>
    </div>
    <!--top-->
    <div class="home_top">
      <div class="home_top_div home_top_div--above">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div class="home_top_div home_top_div--under" @click="POSITION_CITY(location.id)">
        <span id="location_font">{{ location.name }}</span>
        <span><i class="el-icon-arrow-right"></i></span>
      </div>
    </div>
    <!--middle-->
    <section class="home_middle">
      <div class="home_middle--hot">
        热门城市
      </div>
      <div class="home_middle--hot_list">
        <ul>
          <li v-for="item in hotCitys" :key="item.id" @click="POSITION_CITY(item.id)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </section>
    <!--content-->
    <section class="home_content" v-for="title in getGroupTitle" :key="title.key">
      <div class="home_content--title">
        {{ title }}
      </div>
      <div class="home_content--list">
        <ul>
          <li v-for="city in groupCitys[title]" :key="city.id" class="fontGray" @click="POSITION_CITY(city.id)">
            {{ city.name }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  // req
  import req from '@/request'

  export default {
    name: "home",
    data() {
      return {
        // 当前定位城市
        location: {},
        // 热门城市
        hotCitys: [],
        // 所有城市
        groupCitys: {}
      }
    },
    computed: {
      /**
       * 得到返回值中的title A~Z
       * @returns {string[]}
       */
      getGroupTitle: function () {
        return Object.keys(this.groupCitys).sort();
      }

    },
    mounted() {
      // 初始化城市
      this.INIT_CITYS();
    },
    methods: {
      /**
       * 异步初始化城市
       */
      async INIT_CITYS() {
        try {
          const guess = await req.get(`v1/cities`, {type: 'guess'});
          this.location = guess.data;
        } catch (e) {
          console.log("定位获取不到");
        }
        try {
          const hot = await req.get(`v1/cities`, {type: 'hot'});
          this.hotCitys = hot.data;
        } catch (e) {
          console.log("热门城市获取不到");
        }
        try {
          const group = await req.get(`v1/cities`, {type: 'group'});
          this.groupCitys = group.data;
        } catch (e) {
          console.log("所有城市获取不到");
        }
      },
      /**
       * 初始化页面时的ajax
       * @param para
       * @returns {AxiosPromise}
       * @constructor
       */
      AJAX_GET: function (para) {
        return axios({
          method: 'get',
          url: 'v1/cities',
          baseURL: 'http://cangdu.org:8001/',
          params: para  //params是get的参数，data是Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        });
      },
      /**
       * 点击定位城市后跳转
       * @constructor
       */
      POSITION_CITY: function (id) {
        // let id = this.location.id;
        this.$router.push({ path: `/cities/${id}` });
      },
      /**
       *
       * @constructor
       */
      JUDGE_SUBMIT() {
        // 判断是否事先选好了地点
        if(window.localStorage.getItem("geohash")){
          this.$router.push("/login");
          return true
        } else {
          this.$message({
            showClose: true,
            message: '请先选择城市和地点',
            type: 'warning'
          });
          return false
        }
      }

    }
  }
</script>

<style>
  /**
  header
   */
  .home_header {
    background: #2A85E5;
    height: 3.35rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }

  .home_header--inside {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .home_header--inside_div {
    padding: 0 10px;
    color: #ffffff;
  }

  /**
  top
   */
  .home_top {
    background-color: #fff;
    height: 5rem;
    width: 100%;
    margin-top: 3.35rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .home_top_div {
    width: 100%;
    display: flex;
    height: 50%;
    padding: 10px;
    border-bottom: 1px solid #e4e4e4;
    justify-content: space-between;
  }

  .home_top_div span {
    align-self: center;
    font-size: 0.5rem;
    color: #9f9f9f;
  }

  .home_top_div--above {
  }

  .home_top_div--under {
  }

  .home_top_div--under span {
    font-size: 1rem;
  }

  #location_font {
    color: #3190e8;
  }

  /**
  middle
   */
  .home_middle,.home_content {
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e4e4e4;
    margin-bottom: 0.5rem;
  }

  .home_middle--hot,.home_content--title {
    width: 100%;
    padding: 8px;
    font-size: 0.8rem;
    color: #2F2F2F;
  }

  .home_middle--hot_list ul,.home_content--list ul {
    width: 100%;
    font-size: 0.9rem;
    color: #3190e8;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
  }

  .home_middle--hot_list li,.home_content--list li {
    width: 25%;
    text-align: center;
    font-size: 0.9rem;
    padding: 10px 0;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    /*文本不换行，超出部分用省略号表示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /**
  content
   */
  .fontGray {
    color: #666;
  }

</style>
