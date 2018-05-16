import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Qs from 'qs'

Vue.use(Vuex)

const state = {
  // Home.vue传递的数据
  geohash: {}
}

const getters = {
}

const mutations = {
  // *********************Home.vue***********************
  EMIT_GEOHASH(state, payload) {
    state.geohash = payload
  },
  //“最热” or “最新”
  EMIT_TSORT(state, obj) {
    state.homePara.tsort = obj.tsort;
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
