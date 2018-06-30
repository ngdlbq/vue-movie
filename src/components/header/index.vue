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
    <!-- <template v-else-if="type == 0 || type == 1">
      <em class="iconfont icon-back back" @click="back"></em>
      <div class="switch">
        <span class="left" :class="{on: type == 1}" @click="toSwitch(1)">正在上映</span>
        <span class="right" :class="{on: type == 0}" @click="toSwitch">即将上映</span>
      </div>
    </template> -->
  </div>
</template>

<script>
export default {
  name: "mv-header",
  data() {
    return {};
  },
  // computed: {
  //   type() {
  //     let type = this.$route.params.type;
  //     return type === undefined ? 2 : type;
  //   }
  // },
  created() {
    // this.toSwitch(this.type);
  },
  components: {},
  methods: {
    toUser() {
      this.$router.push("/user");
    },
    // back() {
    //   this.$router.push("/movie");
    // },
    // toSwitch(type) {
    //   if (type == 2) return;
    //   if (type == 1) {
    //     this.$router.push("/movie/all/1");
    //   } else {
    //     this.$router.push("/movie/all/0");
    //   }
    // }
  }
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 2;
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
      background: url("./logo.png") no-repeat;
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
