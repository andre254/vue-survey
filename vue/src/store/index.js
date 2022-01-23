import { createStore } from 'vuex'


// store acceps the following configuration objects SGAMM.
// after, head over to main.js and import the store.js
const store = createStore({
  state: {
    user: {
      data: {},
      token: null
    }
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {},

})

export default store;
