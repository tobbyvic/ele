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
        <el-button type="primary" class="search-res-input--under_btn" size="mini" @click="SUBMIT_KEYWORD(searchKeyword)">提交</el-button>
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
        <div class="" v-if="switchFlag">
          <ul class="">
            <li v-for="item in restaurantHistoryList" :key="">
              {{ item }}
            </li>
          </ul>
          <el-button plain class="" @click="">清空所有</el-button>
        </div>
        <div id="" v-else>当前没有任何条目!</div>
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
    computed: {

    },
    watch: {
      // 如果 `searchKeyword` 发生改变，这个函数就会运行
      searchKeyword: function (newQuestion, oldQuestion) {
        this.isSubmit = false;
      }
    },
    methods: {
      SUBMIT_KEYWORD(keyword) {
        this.isSubmit = true;

        //判断是否是重复的记录，不重复的话添加到restaurantHistoryList
        let checkFlag = false;
        if (this.restaurantHistoryList !== []) {
          if(this.restaurantHistoryList.indexOf(keyword) !== -1){
            checkFlag = true;
          }
        }
        if(checkFlag) {
          return false
        } else {
          this.restaurantHistoryList.push(keyword)
          this.$storeObject.setStore('restaurantHistoryList',this.restaurantHistoryList);
        }
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
