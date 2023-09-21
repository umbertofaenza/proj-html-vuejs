<script>
// import components
import ProductCard from "../other_components/ProductCard.vue";

// import data
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: { ProductCard },
};
</script>

<template>
  <section id="our-products">
    <!-- title -->
    <div class="section-title">Deal Of The Day</div>
    <!-- buttons -->
    <div class="products-buttons d-flex justify-content-center">
      <div class="products-btn">1026 days</div>
      <div class="products-btn">13 hours</div>
      <div class="products-btn">24 minutes</div>
      <div class="products-btn">17 secs</div>
    </div>
    <!-- cards list-->
    <div class="row row-cols-4" id="cards-list">
      <!-- arrow left -->
      <div class="arrow left">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
      <!-- cards -->
      <ProductCard
        v-for="(product, index) in this.store.dotdData"
        :key="index"
        :product="product"
      />
      <!-- arrow right -->
      <div class="arrow right">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
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

.products-buttons {
  margin-bottom: 3rem;
}

.products-btn {
  padding: 1rem;
  width: 200px;
  border: 1px solid $primary-color-light;
  text-align: center;
  font-size: 1.25rem;

  &.active {
    color: $secondary-color-light;
  }
}

#cards-list {
  position: relative;
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
