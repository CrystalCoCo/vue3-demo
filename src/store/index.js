import { createStore } from 'vuex'

export default createStore({
  state: {
    spinning: false
  },
  mutations: {
    loading(state, status) {
      state.spinning = status
    }
  },
  actions: {
  },
  modules: {
  }
})
