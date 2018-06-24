<template>
  <div class="header">
    <div class="logo">
      <i></i>
    </div>
    <div class="tab">
      <router-link to="/movie">首页</router-link>
      <router-link to="/category">分类</router-link>
      <router-link to="/rank">榜单</router-link>
      <router-link to="/search">搜索</router-link>
    </div>
    <div class="user" @click="toUser">
      <i class="iconfont icon-account"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "mv-header",
  data() {
    return {};
  },
  components: {},
  methods: {
    toUser() {
      this.$router.push('/user')
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background: #1c2635;
  color: #ccc;
  .logo {
    width: 25%;
    box-sizing: border-box;
    padding: 15px;
    i {
      display: block;
      width: 100%;
      height: 100%;
      background: url('./logo.png') no-repeat;
      background-size: contain; 
    }
  }
  .user {
    width: 15%;
  }
  .tab {
    flex: 1;
    display: flex;
    a {
      width: 0;
      flex: 1;
      color: #ccc;
      text-decoration: none;
    }
    a.router-link-active {
      color: #fff;
      box-shadow: inset 0 -2px #fff;
    }
  }
}
</style>
