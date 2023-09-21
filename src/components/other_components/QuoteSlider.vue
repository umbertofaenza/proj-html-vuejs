<script></script>

<template>
  <div id="quote-jumbo">
    <div class="container d-flex align-items-center">
      <!-- quote wrapper -->
      <div
        class="quote-wrapper d-flex flex-column justify-content-center align-items-center"
      >
        <!-- pic -->
        <div class="profile-pic">
          <img src="/img/t5-1-100x100_left.jpg" />
        </div>
        <!-- name -->
        <div class="profile-name">
          <span>Luies Charls</span>
          <span class="role">(Web Designer)</span>
        </div>
        <!-- quote -->
        <div class="quote">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
          voluptas. Magnam quod ad maiores maxime. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ea sapiente, ipsa neque voluptatum at
          omnis. Lorem ipsum dolor sit amet."
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
  }

  .container {
    height: 100%;
  }
}
</style>
