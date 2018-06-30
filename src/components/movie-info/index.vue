<template>
  <div class="movie-info" @click="geteDtail(movie.id)">
      <div class="left">
          <img :src="`http://movies.kyriel.cn/${movie.posterKey}`" :alt="movie.title">
      </div>
      <div class="right">
        <div class="info">
            <h3>{{movie.title}}</h3>
            <p>观众评影<em>{{movie.rate}}</em></p>
            <p class="casts">主演：{{movie.casts | casts}}</p>
            <p>时长：{{movie.duration}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
  data() {
    return {};
  },
  methods: {
    geteDtail(id) {
      this.$router.push(`/movie/detail/${id}`)
    }
  },
  filters: {
    casts(casts) {
      let str = "";
      casts.forEach(item => {
        str += item.name + "，";
      });
      return str.slice(0, -1);
    }
  }
};
</script>

<style lang="scss">
.movie-info {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: 110px;
  .left {
    width: 80px;
  }
  .right {
    flex: 1;
    margin-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid #e6e6e6;
    .info {
      p {
        font-size: 14px;
        color: #666;
        margin-top: 8px;
        em {
          display: inline-block;
          margin-left: 20px;
          line-height: 1;
          background: rgba(240, 184, 64, 0.1);
          color: rgb(233, 175, 15);
        }
      }
      .casts {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
