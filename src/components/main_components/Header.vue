<script>
import { mainMenuLinks } from "../../data";

export default {
  props: {
    mainMenuLinks: Array,
  },
};
</script>

<template>
  <header>
    <!--# header top -->
    <div class="header-top">
      <div class="container d-flex justify-content-between align-items-center">
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
    <div id="header-main">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- * logo -->
        <div class="logo">
          <img src="/img/logo.png" alt="Game Hoax logo" />
        </div>

        <!--* main menu  -->
        <nav class="main-menu d-flex align-items-center">
          <ul class="d-flex">
            <li
              v-for="link in this.mainMenuLinks"
              :class="link.active ? 'active' : ''"
            >
              {{ link.title }}

              <ul class="dropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <!--* user nav -->
        <div class="user-nav d-flex align-items-center">
          <div class="search">
            <font-awesome-icon
              class="fa-icon"
              :icon="['fas', 'magnifying-glass']"
              size="lg"
            />
          </div>
          <div class="user-account">
            <font-awesome-icon
              class="fa-icon"
              :icon="['far', 'user']"
              size="lg"
            />
          </div>
          <div class="cart d-flex">
            <font-awesome-icon
              class="fa-icon"
              :icon="['fas', 'bag-shopping']"
              size="xl"
            />
            <span class="cart-info">(0) &#163;0.00 </span>
          </div>
        </div>
      </div>
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
  height: 100px;
  color: #ffffff;
  font-weight: 400;

  .container {
    height: 100%;
  }

  .logo {
    cursor: pointer;
  }
  .main-menu {
    height: 100px;

    ul {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      cursor: pointer;
      position: relative;

      &:hover {
        color: $secondary-color-light;
      }

      &:hover:not(:first-child) .dropdown {
        display: block;
      }

      li.active {
        color: $secondary-color-light;
      }
    }
  }

  .dropdown {
    position: absolute;
    top: 100%;
    background-color: $primary-color;
    color: #aaaaaa;
    border: 1px solid $primary-color-light;
    border-radius: 5px;

    display: none;

    li {
      padding: 5px;
    }
  }
  .user-nav {
    .fa-icon {
      cursor: pointer;
    }

    .user-account,
    .cart {
      margin-left: 1.5rem;

      .cart-info {
        margin-left: 5px;
        color: $secondary-color-light;
      }
    }
  }
}
</style>
