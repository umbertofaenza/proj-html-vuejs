<script></script>

<template>
  <main>
    <!--* jumbotron -->
    <div id="jumbotron">
      <div class="container h-100 d-flex align-items-center">
        <div class="jumbotron-content">
          <!-- label -->
          <div class="label">Upcoming Stock</div>
          <!-- title -->
          <div class="jumbotron-title">Resident Evil 3 Remake</div>
          <!-- button -->
          <div class="jumbotron-btn">Shop Now</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

main {
  background-image: url(../../../public/img/body-bg.jpg);
}

#jumbotron {
  height: 800px;
  background-image: url(../../../public/img/jumbotron.jpg);
  background-size: 99%;
  background-repeat: no-repeat;
}

.jumbotron-content {
  .label {
    font-size: 2rem;
    font-weight: 400;
    background-color: $secondary-color;
    width: max-content;
    padding: 0 2rem;
    border-radius: 50px 0;
  }
  .jumbotron-title {
    font-size: 5rem;
    color: white;
    font-weight: 400;
    max-width: 70%;
    line-height: 5rem;
    margin: 2rem 0 5rem 0;
    text-shadow: 1px 1px #333;
  }

  .jumbotron-btn {
    background-color: white;
    width: max-content;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    font-weight: 400;
  }
}
</style>
