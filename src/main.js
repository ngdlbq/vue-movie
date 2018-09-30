// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

Vue.config.productionTip = false
// this is my first demo
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  render(h) {
    return h(App)
  }
})
