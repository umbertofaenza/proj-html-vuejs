<script></script>

<template>
  <section id="our-products">
    <!-- title -->
    <div class="section-title">Our Products</div>
    <!-- buttons -->
    <div class="products-buttons d-flex justify-content-center">
      <div class="product-btn active">Featured</div>
      <div class="product-btn">New Arrival</div>
      <div class="product-btn">Best Sellers</div>
    </div>
    <!-- cards -->
    <div class="row row-cols-4"></div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

#our-products {
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
    margin-bottom: 1.5rem;
  }
}

.product-btn {
  padding: 1rem;
  width: 200px;
  border: 1px solid $primary-color-light;
  text-align: center;
  font-weight: 400;
  cursor: pointer;

  &.active {
    color: $secondary-color-light;
  }
}
</style>
