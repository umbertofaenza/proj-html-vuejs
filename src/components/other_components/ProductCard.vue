<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<template>
  <div class="col">
    <!-- card -->
    <div class="product-card">
      <!-- media -->
      <div class="product-media">
        <div v-if="product.discount" class="label">
          {{ product.discount }}
        </div>
        <img class="main-image" :src="product.img" />
        <img class="hover-image" src="/img/15.jpg" />
      </div>
      <!-- info -->
      <div class="product-info align-self-end">
        <!-- rating -->
        <div class="product-rating">
          <!-- full stars -->
          <font-awesome-icon
            v-for="i in Math.ceil(product.rating)"
            :icon="['fas', 'star']"
            style="color: #f9aa01"
            size="xs"
          />
          <!-- empty stars -->
          <font-awesome-icon
            v-for="i in 5 - Math.ceil(product.rating)"
            :icon="['fas', 'star']"
            style="color: #b9b8b6"
            size="xs"
          />
        </div>
        <!-- name -->
        <div class="product-name">
          {{ product.productName }}
        </div>
        <!-- price & controls-->
        <!-- price -->
        <div class="product-price">
          <span v-if="product.previousPrice" class="prev-price">{{
            product.previousPrice
          }}</span>
          {{ product.price }}
        </div>
        <!-- controls -->
        <div class="product-controls">
          <span>
            <font-awesome-icon
              class="fa-icon"
              :icon="['fas', 'bag-shopping']"
            />
          </span>
          <span>
            <font-awesome-icon class="fa-icon" :icon="['fas', 'heart']" />
          </span>
          <span>
            <font-awesome-icon class="fa-icon" :icon="['fas', 'maximize']" />
          </span>
          <span>
            <font-awesome-icon class="fa-icon" :icon="['fas', 'eye']" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

img {
  max-width: 100%;
}

.product-card {
  background-color: black;
  cursor: pointer;

  &:hover .product-price {
    display: none;
  }

  &:hover .product-controls {
    display: flex;
  }

  &:hover .main-image {
    display: none;
  }

  &:hover .hover-image {
    display: block;
  }
}

.product-media {
  position: relative;

  .hover-image {
    display: none;
  }
}

.label {
  color: black;
  font-weight: 400;
  background-color: $secondary-color;
  width: max-content;
  padding: 0 1rem;
  border-radius: 50px 0;

  position: absolute;
  top: 1rem;
  left: 1rem;
}

.product-info {
  width: 100%;
  padding: 0.5rem;
  background-color: rgba($color: $primary-color, $alpha: 0.7);

  .product-rating,
  .product-name,
  .product-price {
    padding: 10px;
  }

  .product-name {
    font-weight: 400;
  }

  .product-price {
    color: $secondary-color-light;
  }

  .prev-price {
    text-decoration: line-through;
    color: white;
  }
}

.product-controls {
  border-top: 1px solid $primary-color-light;
  margin-top: 10px;
  justify-content: center;

  display: none;

  span {
    display: inline-block;
    padding: 4px 1.5rem;
    border-right: 1px solid $primary-color-light;
  }

  span:last-child {
    border: none;
  }
}
</style>
