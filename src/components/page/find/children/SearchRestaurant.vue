<template>
  <div>
    <!--input-->
    <section class="search-res-input">
      <div class="search-res-input--above">
        <el-input
          placeholder="输入学校、商务楼、地址"
          v-model="searchKeyword"
          clearable class="search-res-input--above_input">
        </el-input>
      </div>
      <div class="search-res-input--under">
        <el-button type="primary" class="search-res-input--under_btn" size="mini"
                   @click="SUBMIT_KEYWORD(searchKeyword)">提交
        </el-button>
      </div>
    </section>
    <!--result-->
    <div class="" v-if="searchKeyword !== ''&& isSubmit ">
      没有搜索到任何结果
    </div>
    <!--history-->
    <div class="search-res_history" v-else>
      <header>搜索历史</header>
      <section>
        <div class="" v-if="restaurantHistoryList.length !== 0">
          <ul class="search-res_history--list">
            <li v-for="item in restaurantHistoryList" :key="">
              {{ item }}
            </li>
          </ul>
          <div class="search-res_history--empty" @click="EMPTY_HISTORY">清空历史</div>
        </div>
        <p id="" class="search-res_history--null" v-else>当前没有任何历史记录!</p>
      </section>
    </div>

  </div>

</template>

<script>
  export default {
    name: "search-res-restaurant",
    data() {
      return {
        searchKeyword: "",
        restaurantHistoryList: [],
        switchFlag: true,
        /**
         * 通过isNotEmpty和isSubmit的三种情况：NN,YN,YY来判断页面是显示history还是result
         */
        isSubmit: true

      }
    },
    computed: {},
    created() {
      this.INIT_HISTORY();
      console.log(this.restaurantHistoryList);

    },
    watch: {
      // 如果 `searchKeyword` 发生改变，这个函数就会运行
      searchKeyword: function (newQuestion, oldQuestion) {
        this.isSubmit = false;
      }
    },
    methods: {
      /**
       * 搜索历史初始化
       */
      INIT_HISTORY: function () {
        //获取搜索历史记录
        if (this.$storeObject.getStore('restaurantHistoryList')) {
          this.restaurantHistoryList = JSON.parse(this.$storeObject.getStore('restaurantHistoryList'));
        }else{
          this.restaurantHistoryList = [];
        }
      },
      /**
       * 根据提交的是不是重复值进行提交
       * @param keyword
       * @returns {boolean}
       * @constructor
       */
      SUBMIT_KEYWORD(keyword) {
        this.isSubmit = true;
        //判断是否空值
        if(keyword === "") {
          return
        }
        //判断是否是重复的记录，不重复的话添加到restaurantHistoryList
        let checkFlag = false;
        if (this.restaurantHistoryList !== []) {
          if (this.restaurantHistoryList.indexOf(keyword) !== -1) {
            checkFlag = true;
          }
        }
        if (checkFlag) {
          return false
        } else {
          this.restaurantHistoryList.push(keyword)
          this.$storeObject.setStore('restaurantHistoryList', this.restaurantHistoryList);
        }
      },
      /**
       * 清空历史数据,并初始化
       */
      EMPTY_HISTORY() {
        this.$storeObject.removeStore('restaurantHistoryList');
        this.INIT_HISTORY();
      }
    }
  }
</script>

<style>
  /**
  top
   */
  .search-res-input {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    margin-top: 3.85rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .search-res-input--above, .search-res-input--under {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .search-res-input--above {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  .search-res-input--under {
    padding-bottom: 0.4rem;
  }

  .search-res-input--under_btn {
    height: 2rem;
    width: 100%;
    border-radius: 0;
  }

  .search-res_history--empty {
    padding: 0.6rem 0;
    text-align: center;
    border-top: 0.025rem solid #CCCCCC;
    font-size: 1rem;
  }

  .search-res_history--list  li{
    padding: 0.6rem 0.2rem;
    display: flex;
  }
  .search-res_history--null {
    padding: 0.6rem 0.2rem;
    display: flex;
    background-color: #E0E0E0;
    text-align: center;
  }

  /**
  history
   */
  .search-res_history section {
    background-color: #fff;
    /*height: 5rem;*/
    width: 100%;
    /*margin-top: 3.85rem;*/
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

</style>
