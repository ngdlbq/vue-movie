import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '@/webview/movie'
import Rank from '@/webview/rank'
import Category from '@/webview/category'
import User from '@/webview/user'
import Search from '@/webview/search'
import AllMovie from '@/webview/all-movie'
import Detail from '@/webview/detail'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/movie'
}, {
  path: '/movie',
  name: 'movie',
  component: Movie,
  children: [{
    path: 'all/:type',
    name: 'movie-list',
    component: AllMovie
  }, {
    path: 'detail/:id',
    component: Detail
  }]
}, {
  path: '/category',
  name: 'category',
  component: Category
}, {
  path: '/search',
  name: 'search',
  component: Search
}, {
  path: '/rank',
  name: 'rank',
  component: Rank
}, {
  path: '/user',
  name: 'user',
  component: User
}]

export default new VueRouter({
  routes
})
