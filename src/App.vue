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
img {
  width: 100%;
  height: 100%;
}
.content {
  position: absolute;
  top: 56px;
  bottom: 0;
  width: 100%;
  overflow: scroll;
}
</style>


