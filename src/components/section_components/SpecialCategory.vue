<script>
// import components
import SpecialCard from "../other_components/SpecialCard.vue";

// import data
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: { SpecialCard },
};
</script>

<template>
  <section id="special-category">
    <!-- title -->
    <div class="section-title">Special Category</div>
    <!-- card -->
    <div class="row row-cols-3">
      <SpecialCard
        v-for="card in this.store.specialCategoryData"
        :cardData="card"
      />
    </div>
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
    margin-bottom: 1.5rem;
  }
}
</style>
