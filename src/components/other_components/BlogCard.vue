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
  height: 400px;
  cursor: pointer;
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
</style>
