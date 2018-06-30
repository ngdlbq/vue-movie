<template>
  <div class="movie-tab">
      <header>
        <em class="iconfont icon-back back" @click="$router.push('/movie')"></em>
        <div class="switch">
            <span class="left" :class="{on: type == 1}" @click="toSwitch(1)">正在上映</span>
            <span class="right" :class="{on: type == 0}" @click="toSwitch(0)">即将上映</span>
        </div>
      </header>
      <div class="movie-tab-list">
        <movie-info v-for="(item, index) in movieList" :key="index" :movie="item"></movie-info>
      </div>
  </div>
</template>

<script>
import MovieInfo from "@/components/movie-info";
import { movie } from "Api";
export default {
  data() {
    return {
      movieList: [],
      params: {
        page_size: 10,
        page: 1
      }
    };
  },
  computed: {
    type() {
      return this.$route.params.type;
    }
  },
  created() {
    this.getMovieList({
      ...this.params,
      type: this.type
    });
  },
  components: {
    "movie-info": MovieInfo
  },
  methods: {
    async getMovieList(params) {
      let { movies } = await movie(params);
      this.movieList = movies;
    },
    toSwitch(type) {
      this.$router.push(`/movie/all/${type}`)
    }
  }
};
</script>

<style lang="scss">
.movie-tab {
  width: 100%;
  height: 100%;
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background: #1c2635;
    .back {
      font-weight: 200;
      font-size: 25px;
      color: #fff;
    }
    .switch {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      transform: translate3d(-50%, -50%, 0);
      background: #0d121a;
      line-height: 30px;
      border-radius: 100px;
      color: #fff;
      border: 1px solid #0d121a;
      text-align: center;
      span {
        float: left;
        border-radius: 100px;
        width: 50%;
      }
      .on {
        background: #1c2635;
      }
    }
  }
  .movie-tab-list {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    padding: 15px;
    top: 58px;
    overflow-y: scroll;
    .movie-info {
      margin-bottom: 20px;
    }
    .movie-info:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
