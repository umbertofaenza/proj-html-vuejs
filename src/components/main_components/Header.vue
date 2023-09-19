<script></script>

<template>
  <header>
    <!--# header top -->
    <div class="header-top">
      <div class="container d-flex justify-content-between">
        <!--* left -->
        <div class="header-top__left d-flex">
          <!-- wishlist -->
          <div class="wishlist">Wishlist(0)</div>
          <!-- user help -->
          <div class="user-help">
            Need help?
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="2xs" />
          </div>
        </div>
        <!--* right -->
        <div class="header-top__right">
          <!-- contact number -->
          <div class="contact-number">Call 24/7: 800-8754-987</div>
        </div>
      </div>
    </div>

    <!--# header main -->
    <div class="container" id="header-main">
      <!-- * logo -->
      <div class="logo">
        <img src="/img/logo.png" alt="Game Hoax logo" />
      </div>
      <!--* main menu  -->
      <nav class="main-menu"></nav>
      <!--* user nav -->
      <div class="user-nav"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

header {
  background-color: $primary-color;
}
.header-top {
  color: #aaaaaa;
  border-bottom: 1px solid $primary-color-light;

  .wishlist,
  .user-help,
  .contact-number {
    padding: 10px 0;
    cursor: pointer;
  }
  .wishlist {
    margin-right: 1rem;
  }

  .wishlist:after {
    content: "";
    border-left: 1px solid #444;
    margin-left: 1rem;
  }
}

#header-main {
  padding: 1rem 0;
}
</style>
