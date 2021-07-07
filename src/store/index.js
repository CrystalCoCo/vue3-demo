import { createStore } from 'vuex'

export default createStore({
  state: {
    spinning: false
  },
  mutations: {
    openLoading(state) {
      state.spinning = true
    },
    hideLoading(state) {
      state.spinning = false
    }
  },
  actions: {
  },
  modules: {
  }
})
