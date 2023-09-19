<script>
// import components
import Header from "./components/main_components/Header.vue";
import Main from "./components/main_components/Main.vue";
import Footer from "./components/main_components/Footer.vue";

// import data
import { mainMenuLinks } from "./data";

export default {
  data() {
    return {
      mainMenuLinks,
    };
  },

  components: { Header, Main, Footer },
};
</script>

<template>
  <Header :mainMenuLinks="mainMenuLinks" />
  <Main />
  <Footer />
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
