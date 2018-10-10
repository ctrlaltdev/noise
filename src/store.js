import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    tweets: []
  },
  mutations: {
    FETCH_TWEETS(state, tweets) {
      state.tweets.unshift(tweets)
    }
  },
  actions: {
    fetchTweets({ commit }) {
      const evtSource = new EventSource('/api/tweets/')
      evtSource.addEventListener('tweet', event => {
        commit("FETCH_TWEETS", JSON.parse(event.data))
      })
    }
  }
})
