<template>
      <section class="top">
          <div class="imgs">
              <img src="./1.jpg" alt="">
          </div>
          <p><b>完美陌生人</b><i @click="showMore">简介</i></p>
          <p>8.6分 · 剧情 喜剧 · 97分钟，96分钟（中国大陆）</p>
      </section>
</template>

<script>
export default {
  name: "movie-imgs",
  data() {
    return {
      visible: false
    };
  },
  components: {},
  methods: {
    showMore() {
      this.visible = true
    }
  }
};
</script>

<style lang="scss">
.top {
  width: 100%;
  font-size: 15px;
  background: #fff;
  border-bottom: 1px solid #eee;
  .imgs {
    height: 210px;
  }
  & > p:nth-child(2) {
    padding: 20px 15px;
    line-height: 1;
    b {
      font-size: 20px;
    }
    i {
      float: right;
      font-style: normal;
      &::after {
        display: inline-block;
        content: "";
        width: 10px;
        height: 10px;
        border-top: 1px solid #1c2635;
        border-right: 1px solid #1c2635;
        background: #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        font-weight: 200;
      }
    }
  }
  & > p:last-child {
    padding: 0 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 15px;
  }
}
</style>
