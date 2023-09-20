<script></script>

<template>
  <section id="special-category">
    <div class="section-title">Special Category</div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

#special-category {
  padding: 1.5rem 0;
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
  }
}
</style>
