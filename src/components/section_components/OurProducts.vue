<script>
// import components
import ProductCard from "../other_components/ProductCard.vue";

// import data
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      activeIndexes: [0, 1, 2, 3],
    };
  },

  methods: {
    showNextProd() {
      for (let i = 0; i < this.activeIndexes.length; i++) {
        if (
          this.activeIndexes.includes(this.store.ourProductsData.length - 1)
        ) {
          return;
        } else {
          this.activeIndexes.splice(i, 1, this.activeIndexes[i] + 1);
        }
      }
    },

    showPrevProd() {
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

  components: { ProductCard },
};
</script>

<template>
  <section id="our-products">
    <!-- title -->
    <div class="section-title">Our Products</div>
    <!-- buttons -->
    <div class="products-buttons d-flex justify-content-center">
      <div class="products-btn active">Featured</div>
      <div class="products-btn">New Arrival</div>
      <div class="products-btn">Best Sellers</div>
    </div>
    <!-- cards list-->
    <div class="row row-cols-4" id="cards-list">
      <!-- arrow left -->
      <div @click="showPrevProd()" class="arrow left">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
      <!-- cards -->
      <ProductCard
        v-for="(product, index) in this.store.ourProductsData"
        :key="index"
        :product="product"
        v-show="activeIndexes.includes(index)"
      />
      <!-- arrow right -->
      <div @click="this.showNextProd()" class="arrow right">
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
  font-weight: 400;
  cursor: pointer;

  &.active {
    color: $secondary-color-light;
  }

  &:hover {
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
