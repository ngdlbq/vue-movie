// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

// this is master
// this is feat_detail_study
Vue.config.productionTip = false
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  render(h) {
    return h(App)
  }
})
