<script></script>

<template>
  <section id="blogs">
    <!-- title -->
    <div class="section-title">New Game Blogs</div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

#blogs {
  padding-bottom: 1rem;
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
