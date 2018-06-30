<template>
  <div class="movie-list">
      <movie-tab></movie-tab>
  </div>
</template>

<script>
import MovieTab from "@/components/movie-tab";
import { movie } from "Api";

export default {
  data() {
    return {
    };
  },
  components: {
    "movie-tab": MovieTab
  },
};
</script>

<style lang="scss">
.movie-list {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 10;
}
</style>
