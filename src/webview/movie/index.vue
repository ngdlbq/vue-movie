<template>
  <div class="all-movie">
    <movie-type title="正在上映" :count="playing.count" type="1" :movies="playing.movies" @handle="handle"></movie-type>
    <movie-type title="即将上映" :count="willPlaying.count" type="0" :movies="willPlaying.movies" @handle="handle"></movie-type>
    <router-view></router-view>
  </div>
</template>

<script>
import { movie } from "Api";
import MovieType from '@/components/movie-type'
export default {
  components: {
    'movie-type': MovieType 
  },
  data() {
    return {
      playing: {},
      willPlaying: {},
      palyingP: {
        page_size: 8,
        page: 1,
        type: 1
      },
      willPalyingP: {
        page_size: 8,
        page: 1,
        type: 0
      }
    };
  },
  created() {
    this.getPlayingMovie(this.palyingP);
    this.getWillMovie(this.willPalyingP);
  },
  methods: {
    async getPlayingMovie(params) {
      this.playing = await movie(params);
    },
    async getWillMovie(params) {
      this.willPlaying = await movie(params);
    },
    handle(type) {
      type = +type
      this.$router.push(`/movie/all/${type}`)
    }
  }
};
</script>

<style lang="scss">
.all-movie {
  background: rgb(246, 246, 246);
}
</style>
