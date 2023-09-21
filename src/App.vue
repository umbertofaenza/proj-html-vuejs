<script>
// import components
import Header from "./components/main_components/Header.vue";
import Main from "./components/main_components/Main.vue";
import Footer from "./components/main_components/Footer.vue";

// import data
import { mainMenuLinks } from "./data";
import { topShowcaseCardsData } from "./data";
import { bottomShowcaseCardsData } from "./data";
import { footerInformationLinks } from "./data";
import { footerExtrasLinks } from "./data";

export default {
  data() {
    return {
      mainMenuLinks,
      topShowcaseCardsData,
      bottomShowcaseCardsData,
      footerInformationLinks,
      footerExtrasLinks,
    };
  },

  components: { Header, Main, Footer },
};
</script>

<template>
  <Header :mainMenuLinks="mainMenuLinks" />
  <Main
    :topShowcaseCardsData="topShowcaseCardsData"
    :bottomShowcaseCardsData="bottomShowcaseCardsData"
  />
  <Footer
    :footerInformationLinks="footerInformationLinks"
    :footerExtrasLinks="footerExtrasLinks"
  />
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
