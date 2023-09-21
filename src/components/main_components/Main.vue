<script>
// import components
import ShowcaseCard from "../other_components/ShowcaseCard.vue";
import SpecialCategory from "../section_components/SpecialCategory.vue";
import OurProducts from "../section_components/OurProducts.vue";
import DOTD from "../section_components/DOTD.vue";
import Blogs from "../section_components/Blogs.vue";
import QuoteSlider from "../other_components/QuoteSlider.vue";

export default {
  components: {
    ShowcaseCard,
    SpecialCategory,
    OurProducts,
    DOTD,
    Blogs,
    QuoteSlider,
  },

  props: {
    topShowcaseCardsData: Array,
    bottomShowcaseCardsData: Array,
  },
};
</script>

<template>
  <main>
    <!--# jumbotron -->
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

    <div class="container">
      <!--# showcase divider -->
      <div class="showcase-divider d-flex justify-content-center">
        <!-- box -->
        <div class="box d-flex align-items-center">
          <!-- box icon -->
          <div class="box__icon">
            <font-awesome-icon :icon="['fas', 'truck']" size="2x" />
          </div>
          <!-- box text -->
          <div class="box__text">
            <span>Free Delivery</span>
            <span>Free Shipping on All Orders</span>
          </div>
        </div>

        <!-- box -->
        <div class="box d-flex align-items-center">
          <!-- box icon -->
          <div class="box__icon">
            <font-awesome-icon :icon="['fas', 'sack-dollar']" size="2x" />
          </div>
          <!-- box text -->
          <div class="box__text">
            <span>Money Return</span>
            <span>Back Guarantee in 7 Days</span>
          </div>
        </div>

        <!-- box -->
        <div class="box d-flex align-items-center">
          <!-- box icon -->
          <div class="box__icon">
            <font-awesome-icon :icon="['fas', 'tag']" size="2x" />
          </div>
          <!-- box text -->
          <div class="box__text">
            <span>Member Discount</span>
            <span>On Every Order over &#x24;130.00</span>
          </div>
        </div>

        <!-- box -->
        <div class="box d-flex align-items-center">
          <!-- box icon -->
          <div class="box__icon">
            <font-awesome-icon
              :icon="['fas', 'hand-holding-dollar']"
              size="2x"
            />
          </div>
          <!-- box text -->
          <div class="box__text">
            <span>Return Policy</span>
            <span>Support 24 hours a day</span>
          </div>
        </div>
      </div>

      <!--# showcase top -->
      <div class="row row-cols-2" id="showcase-top">
        <ShowcaseCard
          v-for="(card, index) in topShowcaseCardsData"
          :key="index"
          :cardData="card"
        />
      </div>

      <!--# special category section  -->
      <SpecialCategory />

      <!--# our products section  -->
      <OurProducts />

      <!--# showcase bottom -->
      <div class="row row-cols-2" id="showcase-bottom">
        <ShowcaseCard
          v-for="(card, index) in bottomShowcaseCardsData"
          :key="index"
          :cardData="card"
        />
      </div>

      <!--# deal of the day section  -->
      <DOTD />
    </div>

    <!--# quote jumbo/slider -->
    <QuoteSlider />

    <div class="container">
      <!--# blogs section  -->
      <Blogs />

      <!--# sponsors divider -->
      <div
        class="sponsors-divider d-flex justify-content-around align-items-center"
      >
        <img src="/img/brand-01.png" />
        <img src="/img/brand-02.png" />
        <img src="/img/brand-03.png" />
        <img src="/img/brand-04.png" />
        <img src="/img/brand-05.png" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

main {
  background-image: url(/img/body-bg.jpg);
}

#jumbotron {
  height: 800px;
  background-image: url(/img/jumbotron.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.jumbotron-content {
  .label {
    color: black;
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
    color: black;
    background-color: white;
    width: max-content;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    font-weight: 400;

    &:hover {
      background-color: $secondary-color;
    }
  }
}

.showcase-divider {
  padding: 3rem 0;

  .box {
    padding: 0 2.5rem;
    border-right: 1px solid #333;
    cursor: pointer;

    &:hover .box__icon,
    &:hover span {
      color: $secondary-color;
    }

    &:last-child {
      border: none;
    }

    .box__icon {
      margin-right: 1rem;
    }

    span {
      display: block;
      font-weight: 400;

      &:nth-of-type(2) {
        color: #aaaaaa;
        font-weight: 300;
      }
    }
  }
}

#showcase-top {
  padding: 2rem 0;
}

#showcase-bottom {
  padding: 4rem 0;
}

.sponsors-divider {
  padding: 4rem;
}
</style>
