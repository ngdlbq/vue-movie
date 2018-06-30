<template>
    <div class="section">
      <p @click="handle">{{title}}({{count}}部）<i></i></p>
      <div class="movie-img">
        <card v-for="(item, index) in movies" :key="index" :movie="item"></card>
      </div>
    </div>
</template>

<script>
import Card from "@/components/card";
export default {
  props: {
    title: String,
    movies: Array,
    count: [Number, String],
    type: {
        type: [String, Number],
        validator(val) {
            val = +val
            return [0, 1].includes(val)
        }
    }
  },
  data() {
    return {};
  },
  components: {
    card: Card
  },
  methods: {
    handle() {
        this.$emit('handle', this.type)
    }
  }
};
</script>

<style lang="scss">
.section {
  padding: 15px;
  margin-bottom: 10px;
  background: #fff;
  & > p {
    line-height: 1;
    margin-bottom: 15px;
    i {
      float: right;
      width: 10px;
      height: 10px;
      border-top: 1px solid #1c2635;
      border-right: 1px solid #1c2635;
      background: #fff;
      transform: rotate(45deg);
      font-weight: 200;
    }
  }
  .movie-img {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
