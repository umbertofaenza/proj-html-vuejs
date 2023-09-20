<script>
// import components
import BlogCard from "../other_components/BlogCard.vue";

// import data
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: { BlogCard },
};
</script>

<template>
  <section id="blogs">
    <!-- title -->
    <div class="section-title">New Game Blogs</div>
    <!-- cards -->
    <div class="row row-cols-3">
      <BlogCard v-for="blog in this.store.blogsData" :blog="blog" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

#blogs {
  border-bottom: 1px solid #444;
  padding-bottom: 4rem;
}
.section-title {
  font-size: 3rem;
  font-weight: 400;
  text-align: center;

  &:after {
    content: "";
    display: block;
    border-bottom: 2px solid $secondary-color;
    width: 3rem;
    margin: 0.5rem auto;
    margin-bottom: 1.5rem;
  }
}
</style>
