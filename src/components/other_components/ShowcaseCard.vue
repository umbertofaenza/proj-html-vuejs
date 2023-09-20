<script>
import { createHydrationRenderer } from "vue";

export default {
  props: {
    cardData: Object,
  },

  created() {
    console.log(this.image);
  },
};
</script>

<template>
  <div class="col">
    <!--* showcase card -->
    <div class="showcase-card d-flex justify-content-end align-items-center">
      <div class="card-text">
        <!-- label -->
        <div class="label">
          {{ cardData.label }}
        </div>
        <!-- title -->
        <div class="card-title">
          {{ cardData.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

.showcase-card {
  height: 350px;
  background-color: black;
}

.label {
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
  background-color: $secondary-color;
  width: max-content;
  padding: 0 2rem;
  border-radius: 50px 0;
}

.card-title {
  font-size: 2rem;
  color: white;
  font-weight: 400;
  margin: 1rem 0;
  text-shadow: 1px 1px #333;
}

.card-text {
  width: 250px;
  margin-right: 5rem;
}
</style>
