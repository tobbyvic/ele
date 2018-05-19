import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 当前address的坐标
  geohash: {},
  //address的历史记录
  historyObject: {
    addressHistory: []
  }
};

const getters = {}

const mutations = {
  // 提交geohash
  EMIT_GEOHASH(state, payload) {
    state.geohash = payload
  },
  // 提交address的搜索历史
  EMIT_ADDRESSHISTORY(state, payload) {
    // 提交搜索历史时，先将addressHistory置为session的值
    if (sessionStorage.getItem('historyObject') == null) {
      console.log("目前历史为空");
      state.historyObject.addressHistory.length = 0;
    } else {
      state.historyObject.addressHistory = JSON.parse(sessionStorage.getItem('historyObject')).addressHistory;
    }
    // 判断是提交历史，还是清空历史
    if (payload == "empty") {
      state.historyObject.addressHistory.length = 0;
      sessionStorage.removeItem('historyObject');
    } else {
      state.historyObject.addressHistory.push(payload);
      // 将处理过的addressHistoty赋给sessionStorage
      sessionStorage.setItem('historyObject', JSON.stringify(state.historyObject));
    }

  },
  //0.全部 1.经验分享 2.入门学习 3.成果分享
  EMIT_TYPE(state, obj) {
    state.homePara.type = obj.type;
  },
  EMIT_PAGE(state, obj) {
    state.homePara.page = obj.page;
  },
  // *********************QueryDetail.vue***********************
  EMIT_TOPICID(state, obj) {
    state.QueryPara.topic_id = obj.topic_id;
    console.log(state.QueryPara);
  }

};

export default new Vuex.Store({
  state,
  mutations,
  getters
})
