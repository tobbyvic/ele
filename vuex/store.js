import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Qs from 'qs'

Vue.use(Vuex)

// 创建axios实例，便于直接在store中进行使用
const VueAxios = axios.create({
  baseURL: 'http://yjhapi.agxx.club/iweb/',
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }],
  transformResponse: [(data) => {
    let res = data.slice(1)
    return JSON.parse(res)
  }]
});

const state = {
  // Home.vue传递的数据
  homePara: {
    par: "index_new",
    type: 0,
    tsort: "new",
    tech_type: "",
    user_id: "", // 选填
    page: 1
  },
  resPara: {},
  // QueryDetail要传递的数据
  QueryPara: {
    topic_id: ""
  }
}

const getters = {
  GetUserPara: state => {
    return JSON.parse(sessionStorage.userInfo)
  }
}

const mutations = {
  // *********************Home.vue***********************
  POST_TOPICLIST() {
    VueAxios.get('topic/topicList', {
      params: state.homePara
    })
      .then((response) => {
        // 返回的json字符串，转换为object
        let res = response.data;
        state.resPara = res.data;
        console.log(state.homePara);
      })
      .catch((error) => {
        console.log(error);
      });
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
