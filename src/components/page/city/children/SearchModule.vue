<template>
  <div>
    <!--input-->
    <section class="search-input">
      <div class="search-input--above">
        <el-input
          placeholder="输入学校、商务楼、地址"
          v-model="address"
          clearable class="search-input--above_input">
        </el-input>
      </div>
      <div class="search-input--under">
        <el-button type="primary" class="search-input--under_btn" size="mini" @click="SEARCH_ADDRESS">提交</el-button>
      </div>
    </section>
    <!--history-->
    <div class="search-history" v-if="switchFlag">
      <header>搜索历史</header>
      <section>
        <div class="search-history_content" v-if="!(historyList.length == 0)">
          <ul class="search-history_list">
            <li v-for="address in historyList" :key="" @click="ADDRESS_ENTRANCE(address)">
              <h4>{{ address.name }}</h4>
              <p>{{ address.address }}</p>
            </li>
          </ul>
          <el-button plain class="search-history_empty_btn" @click="EMPTY_HISTORY">清空所有</el-button>
        </div>
        <div id="search-history_tip" v-else>当前没有任何条目!</div>
      </section>
    </div>
    <!--result-->
    <div class="search-keyword" v-else>
      <ul class="search-keyword_list">
        <li v-for="address in searchResult" :key="" @click="ADDRESS_ENTRANCE(address)">
          <h4>{{ address.name }}</h4>
          <p>{{ address.address }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import req from '@/request'
  export default {
    name: "search-module",
    props: ['locationCity'],
    data() {
      return {
        address: '',//搜索框的关键字
        searchResult: [],//搜索框搜索的结果
        switchFlag: true,//点击搜索按钮后切换div

        historyList: [],//历史记录List
      }
    },
    computed: {
    },
    created() {
      this.INIT_HISTORY();
    },
    methods: {
      /**
       * 搜索历史初始化
       */
      INIT_HISTORY: function () {
        //获取搜索历史记录
        if (this.$storeObject.getStore('historyList')) {
          this.historyList = JSON.parse(this.$storeObject.getStore('historyList'));
        }else{
          this.historyList = [];
        }
      },
      /**
       * 清空历史数据
       */
      EMPTY_HISTORY: function () {
        this.$storeObject.removeStore('historyList');
        this.INIT_HISTORY();
      },
      /**
       * 如果搜索框不为空就发起ajax请求搜索关键字的结果
       * @returns {boolean}
       * @constructor
       */
      SEARCH_ADDRESS: function () {
        if (this.address == '') {
          this.$message.error('内容为空');
          return false
        } else {
          let that = this;
          req.get('v1/pois', {city_id: that.locationCity.id, keyword: that.address})
            .then(function (response) {
              // 获取成功后
              console.log(response.data);
              that.searchResult = response.data;
              //切换div
              that.switchFlag = false
            })
        }
      },
      /**
       * 从搜索或历史中点击某一条目进行跳转
       * @param addr
       * @constructor
       */
      ADDRESS_ENTRANCE(addr) {
        const geohash = addr.geohash;

        // 转到entry页面
        this.$router.push({ path: '/entry', query: { geohash }}) // -> /user
        this.$store.commit('EMIT_GEOHASH', geohash);

        //判断是否是重复的记录，不重复的话添加到historyList
        console.log(addr);
        let checkFlag = false;
        if (this.historyList.length) {
          this.historyList.forEach((element) => {
            if(element.geohash == geohash) {
              checkFlag = true;
              return false //这里只是return里面的箭头函数
            }
          });
        }
        if(checkFlag) {
          return false
        } else {
          this.historyList.push(addr)
          this.$storeObject.setStore('historyList',this.historyList);
        }
      }

    }
  }
</script>

<style>
  /**
  top
   */
  .search-input {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    margin-top: 3.85rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .search-input--above, .search-input--under {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .search-input--above {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  .search-input--under {
    padding-bottom: 0.4rem;
  }

  .el-input__inner, .search-input--under_btn {
    height: 2rem;
    width: 100%;
    border-radius: 0;
  }
  /**
  search-history组件样式
   */
  .search-history {

  }

  .search-history header {
    font-size: 0.8rem;
  }

  .search-history section {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    /*margin-top: 3.85rem;*/
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .search-history_content {

  }

  .search-history_list li {
    border-bottom: 1px solid #eee;
    padding: 15px;
  }

  .search-history_list li h4 {
    color: #333;
    margin-bottom: 5px;

  }

  .search-history_list li p {
    font-size: 0.5rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .search-history_empty_btn {
    width: 100%;
    border-radius: 0;
  }

  #search-history_tip {
    background-color: #E0E0E0;
    text-align: center;
  }

  /**
  search-keyword组件样式
   */
  .search-keyword {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    /*margin-top: 3.85rem;*/
    display: flex;
    flex-direction: column;
  }

  .search-keyword_list li {
    border-bottom: 1px solid #eee;
    padding: 15px;
  }

  .search-keyword_list li h4 {
    color: #333;
    margin-bottom: 5px;

  }

  .search-keyword_list li p {
    font-size: 0.5rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
