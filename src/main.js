import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './routes.js'

Vue.config.debug = true;//开启错误提示

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: {App}
})