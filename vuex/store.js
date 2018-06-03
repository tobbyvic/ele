import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 当前address的坐标
  geohash: "",
  //address的历史记录
  historyObject: {
    addressHistory: []
  },
  //shop.vue中shopDetail的显示和隐藏标志位
  shopDetailFlag: false,
  //profile.vue中profileDetail的显示和隐藏标志位
  profileDetailFlag: false
};

const getters = {}

const mutations = {
  // 提交geohash
  EMIT_GEOHASH(state, payload) {
    console.log(payload);
    state.geohash = payload;
    if (state.geohash == "") {
      return
    } else {
      window.localStorage.setItem("geohash", state.geohash);
    }
  },
  // 使shopDetailFlag显示
  MAKETRUE_SHOP_DETAIL(state, payload) {
    state.shopDetailFlag = payload
  },
  // 使profileDetailFlag显示
  MAKETRUE_PROFILE_DETAIL(state, payload) {
    state.profileDetailFlag = payload
  },


  // 提交address的搜索历史
  // EMIT_ADDRESSHISTORY(state, payload) {
  //   // 提交搜索历史时，先将addressHistory置为session的值
  //   if (sessionStorage.getItem('historyObject') == null) {
  //     console.log("目前历史为空");
  //     state.historyObject.addressHistory.length = 0;
  //   } else {
  //     state.historyObject.addressHistory = JSON.parse(sessionStorage.getItem('historyObject')).addressHistory;
  //   }
  //   // 判断是提交历史，还是清空历史
  //   if (payload == "empty") {
  //     state.historyObject.addressHistory.length = 0;
  //     sessionStorage.removeItem('historyObject');
  //   } else {
  //     state.historyObject.addressHistory.push(payload);
  //     // 将处理过的addressHistoty赋给sessionStorage
  //     sessionStorage.setItem('historyObject', JSON.stringify(state.historyObject));
  //   }
  //
  // },

};

export default new Vuex.Store({
  state,
  mutations,
  getters
})
