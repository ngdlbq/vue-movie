<template>
  <div class="rec-movies-list">
<rec-movie></rec-movie>
<rec-movie></rec-movie>
<rec-movie></rec-movie>
<rec-movie></rec-movie>
<rec-movie></rec-movie>
<rec-movie></rec-movie>
<rec-movie></rec-movie>

  </div>
</template>

<script>
import RecMovie from './rec-movie'
export default {
  name: "rec-movies",
  data() {
    return {};
  },
  components: {
      [RecMovie.name]: RecMovie
  },
  methods: {}
};
</script>

<style lang="scss">
.rec-movies-list {

}
</style>
