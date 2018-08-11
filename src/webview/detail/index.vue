<template>
  <div class="movie-detail">
      <b></b>
      <movie-imgs></movie-imgs>
      <section class="bottom">
          <h3>相关推介</h3>
          <div class="rec-movies-list">
            <rec-movies></rec-movies>
          </div>
      </section>
      <section class="more-info">
        <h4>完美陌生人</h4>
        <p><span></span><span></span></p>
        <p><span></span><span></span></p>
        <p><span></span><span></span></p>
        <p><span></span><span></span></p>
        <ul>
          <li>
            <div>
              <img src="" alt="">
            </div>
            <p></p>
          </li>
        </ul>
        <h3>简介</h3>
        <p></p>
      </section>
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
.movie-detail {
  position: fixed;
  background: rgb(249, 249, 249);
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  & > b {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 10px;
    height: 10px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transform: rotate(45deg);
  }
  .top {
    margin-bottom: 10px;
  }
  .bottom {
    padding: 15px;
    background: #fff;
    h3 {
      margin-bottom: 10px;
    }
  }
  .more-info {

  }
}
</style>
