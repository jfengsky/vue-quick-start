import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

Vue.config.debug = true;//开启错误提示

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {App}
})