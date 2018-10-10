import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: [
      {id: 1, text: "This is a tweet 1"},
      {id: 2, text: "This is a tweet 2"},
      {id: 3, text: "This is a tweet 3"},
      {id: 4, text: "This is a tweet 4"}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
