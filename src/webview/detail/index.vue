<template>
  <div class="movie-detail">
      <movie-imgs></movie-imgs>
      <sction class="bottom">
          <h3>相关推介</h3>
          <div class="rec-movies-list">
            <rec-movies></rec-movies>
          </div>
      </sction>
  </div>
</template>

<script>
import MovieImgs from './movie-imgs'
import RecMovie from '@/components/rec-movie'
export default {
  name: 'detail',
  data() {
    return {}
  },
  components: {
      [MovieImgs.name]: MovieImgs,
      [RecMovie.name]: RecMovie
  },
  methods: {}
}
</script>

<style lang="scss">
</style>
