<template>
  <div id="app">
    <mv-header></mv-header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './assets/iconfont.css'
import Header from '@/components/header'

export default {
  name: 'App',
  components: {
    'mv-header': Header
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>


