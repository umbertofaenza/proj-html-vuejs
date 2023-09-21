<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      activeSlide: 0,
    };
  },
};
</script>

<template>
  <div id="quote-jumbo">
    <div class="container d-flex align-items-center">
      <!-- quote wrapper -->
      <div
        class="quote-wrapper d-flex flex-column justify-content-center align-items-center"
      >
        <!-- pic -->
        <div class="profile-pic">
          <img :src="this.store.quoteSliderData[activeSlide].profilePic" />
        </div>
        <!-- name -->
        <div class="profile-name">
          <span>
            {{ this.store.quoteSliderData[activeSlide].profileName }}
          </span>
          <span class="role">
            ({{ this.store.quoteSliderData[activeSlide].profileRole }})
          </span>
        </div>
        <!-- quote -->
        <div class="quote">
          {{ this.store.quoteSliderData[activeSlide].quote }}
        </div>
        <!-- slider controls -->
        <div class="slider-controls d-flex">
          <div class="dot-control active">
            <font-awesome-icon :icon="['fas', 'circle']" size="2xs" />
          </div>
          <div class="dot-control">
            <font-awesome-icon :icon="['fas', 'circle']" size="2xs" />
          </div>
          <div class="dot-control">
            <font-awesome-icon :icon="['fas', 'circle']" size="2xs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

#quote-jumbo {
  height: 450px;
  background-image: url("/img/parallax.jpg");
  background-size: cover;
  background-position: center;
  margin: 3.5rem 0;
  font-size: 1.2rem;

  .profile-pic {
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid $secondary-color-light;
  }

  .profile-name {
    font-weight: 400;
    margin: 1rem 0;
  }

  .profile-name .role {
    color: $secondary-color-light;
    margin-left: 5px;
  }

  .quote {
    max-width: 70%;
    color: #aaaaaa;
    text-align: center;
    margin-bottom: 1rem;
  }

  .container {
    height: 100%;
  }
}

.slider-controls {
  .dot-control {
    margin: 0 10px;
    cursor: pointer;

    &.active {
      color: $secondary-color;
    }
  }
}
</style>
