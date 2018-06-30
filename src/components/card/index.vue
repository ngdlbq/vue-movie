<template>
    <figure>
        <div>
            <div class="img">
                <img :src="`http://movies.kyriel.cn/${movie.posterKey}`" :alt="movie.title">
                <em>{{movie.rate}}</em>
            </div>
            <p>{{movie.title}}</p>
        </div>
    </figure>
</template>

<script>
export default {
  name: "card",
  props: {
    movie: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
figure {
  width: 25%;
  margin-bottom: 10px;
  & > div {
    margin-right: 5px;
    height: 100%;
  }
  .img {
    position: relative;
    height: 80%;
  }
  p {
    margin-top: 5px;
    font-size: 12px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  em {
    position: absolute;
    bottom: 0;
    right: 5px;
    color: rgb(255, 153, 0);
  }
}
</style>
