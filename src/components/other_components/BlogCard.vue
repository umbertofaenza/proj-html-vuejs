<script>
export default {
  props: {
    blog: Object,
  },
};
</script>

<template>
  <div class="col">
    <!-- blog card -->
    <div class="blog-card">
      <!-- media -->
      <div class="card-media">
        <!-- hover controls -->
        <div class="blog-controls">
          <font-awesome-icon class="fa-icon" :icon="['fas', 'plus']" />
          <font-awesome-icon class="fa-icon" :icon="['fas', 'gears']" />
        </div>
        <img :src="blog.img" />
      </div>
      <!-- text -->
      <div class="card-text align-self-end">
        <!-- date -->
        <span class="blog-date">
          <font-awesome-icon
            class="fa-icon"
            :icon="['far', 'calendar-days']"
            color="#f9aa01"
          />
          {{ blog.date }}
        </span>
        <!-- comments -->
        <span class="blog-comments">
          <font-awesome-icon
            class="fa-icon"
            :icon="['far', 'comments']"
            color="#f9aa01"
          />
          {{ blog.comments }} comments</span
        >
        <!-- title -->
        <div class="blog-title">{{ blog.title }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

img {
  max-width: 100%;
}

.blog-card {
  cursor: pointer;
  padding: 1rem 0;

  &:hover .blog-controls {
    display: block;
  }
}

.blog-title {
  font-weight: 400;
}

.blog-date,
.blog-comments {
  display: inline-block;
  padding: 10px 10px 5px 0px;
  color: #aaaaaa;
}

.fa-icon {
  margin-right: 5px;
}

.card-media {
  position: relative;
}

.blog-controls {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: none;

  .fa-icon {
    aspect-ratio: 1;
    padding: 10px;
    border: 1px solid currentColor;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
