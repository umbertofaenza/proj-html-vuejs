<script>
export default {
  props: {
    cardData: Object,
  },
};
</script>

<template>
  <div class="col">
    <!-- card -->
    <div class="special-card d-flex align-items-end">
      <!-- card text -->
      <div class="card-text">
        <!-- title -->
        <div class="card-title">
          {{ cardData.title }}
        </div>
        <!-- button -->
        <div class="card-btn">
          <a :href="cardData.href">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

a {
  text-decoration: none;
  color: currentColor;
}

.special-card {
  height: 550px;
  background-color: black;
}

.card-text {
  width: 100%;
  background-color: rgba($color: $primary-color, $alpha: 0.5);
  padding: 1.5rem;

  .card-title {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .card-btn {
    color: $secondary-color-light;
    text-decoration: underline;
  }
}
</style>
