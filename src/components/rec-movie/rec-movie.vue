<template>
      <div class="rec-movie">
          <div class="left">
              <img src="./1.jpg" alt="">
          </div>
          <div class="right">
              <div class="right-content">
                  <p>青年马克思</p>
                  <p>xx青年马克思xx</p>
                  <p>青年马克思</p>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: 'rec-movie',
  data() {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss">
  .rec-movie {
    display: flex;
    height: 76px;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    .left {
      width: 17%;
    }
    .right {
      flex: 1;
    }
    .right-content {
      margin-left: 10px;
      p {
        line-height: 1.6;
      }
    }
  }
</style>
