<script>
// import components
import Header from "./components/main_components/Header.vue";
import Main from "./components/main_components/Main.vue";
import Footer from "./components/main_components/Footer.vue";

// import data
import { mainMenuLinks } from "./data";
import { topShowcaseCardsData } from "./data";

export default {
  data() {
    return {
      mainMenuLinks,
      topShowcaseCardsData,
    };
  },

  components: { Header, Main, Footer },
};
</script>

<template>
  <Header :mainMenuLinks="mainMenuLinks" />
  <Main :topShowcaseCardsData="topShowcaseCardsData" />
  <Footer />
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
