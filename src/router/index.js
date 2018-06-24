import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '@/webview/movie'
import Rank from '@/webview/rank'
import Category from '@/webview/category'
import User from '@/webview/user'
import Search from '@/webview/search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/movie'
  }, {
    path: '/movie',
    component: Movie
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/rank',
    component: Rank
  }, {
    path: '/user',
    component: User
  }]
})
