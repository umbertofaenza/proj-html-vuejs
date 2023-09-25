<script>
// import components
import BlogCard from "../other_components/BlogCard.vue";

// import data
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      activeIndexes: [0, 1, 2],
    };
  },

  methods: {
    showNext() {
      for (let i = 0; i < this.activeIndexes.length; i++) {
        if (this.activeIndexes.includes(this.store.blogsData.length - 1)) {
          return;
        } else {
          this.activeIndexes.splice(i, 1, this.activeIndexes[i] + 1);
        }
      }
    },

    showPrev() {
      for (let i = 0; i < this.activeIndexes.length; i++) {
        if (
          this.activeIndexes.at(this.activeIndexes.length - 1) ==
          this.activeIndexes.length - 1
        ) {
          return;
        } else {
          this.activeIndexes.splice(i, 1, this.activeIndexes[i] - 1);
        }
      }
    },
  },

  components: { BlogCard },
};
</script>

<template>
  <section id="blogs">
    <!-- title -->
    <div class="section-title">New Game Blogs</div>
    <!-- cards -->
    <div class="row row-cols-3" id="blogs-list">
      <!-- arrow left -->
      <div class="arrow left" @click="showPrev()">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
      <BlogCard
        v-for="(blog, index) in this.store.blogsData"
        :key="index"
        :blog="blog"
        v-show="this.activeIndexes.includes(index)"
      />
      <!-- arrow right -->
      <div class="arrow right" @click="showNext()">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

#blogs {
  border-bottom: 1px solid #444;
  padding-bottom: 4rem;
}

#blogs-list {
  position: relative;
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

.arrow {
  border: 1px solid currentColor;
  width: max-content;
  height: max-content;
  aspect-ratio: 1;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.arrow.left {
  position: absolute;
  top: 30%;
  left: -0.5rem;
  z-index: 1;
}

.arrow.right {
  position: absolute;
  top: 30%;
  right: -0.5rem;
  z-index: 1;
}
</style>
