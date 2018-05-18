import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 当前address的坐标
  geohash: {},
  //搜索address时的历史记录
  historyObject: {
    addressHistory: []
  }
}

const getters = {}

const mutations = {
  // 提交geohash
  EMIT_GEOHASH(state, payload) {
    state.geohash = payload
  },
  // 提交address的搜索历史
  EMIT_ADDRESSHISTORY(state, payload) {
    state.historyObject = JSON.parse(sessionStorage.getItem('historyObject'))

    state.historyObject.addressHistory.push(payload);
    let para = JSON.stringify(state.historyObject);
    sessionStorage.setItem('historyObject', para);
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
