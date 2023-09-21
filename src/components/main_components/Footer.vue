<script>
export default {
  props: {
    footerInformationLinks: Array,
    footerExtrasLinks: Array,
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <!--# footer-main -->
      <div class="footer-main">
        <div class="footer-main-wrapper d-flex">
          <!--* business info -->
          <div class="business-info">
            <ul>
              <!-- list title -->
              <div class="title">Address Info</div>
              <!-- address -->
              <li>
                <div class="address">
                  <font-awesome-icon
                    :icon="['fas', 'location-dot']"
                    color="#dca458"
                  />
                  <span>
                    60 29th Street San Francisco, CA 94110 507-Union Trade
                    Center, United States of America
                  </span>
                </div>
              </li>
              <!-- tel number -->
              <li>
                <div class="tel-number">
                  <font-awesome-icon :icon="['fas', 'phone']" color="#dca458" />
                  <span> (+00) 123-456-789 </span>
                </div>
              </li>
              <!-- email -->
              <li>
                <div class="email">
                  <font-awesome-icon
                    :icon="['fas', 'envelope']"
                    color="#dca458"
                  />
                  <span> demo@example.com </span>
                </div>
              </li>
            </ul>
          </div>
          <!--* links -->
          <div class="footer-links d-flex">
            <!-- information links -->
            <ul id="information-links">
              <div class="title">Information</div>
              <li v-for="link in this.footerInformationLinks">
                {{ link.text }}
              </li>
            </ul>
            <!-- extras links -->
            <ul id="extras-links">
              <div class="title">Extras</div>
              <li v-for="link in this.footerExtrasLinks">
                {{ link.text }}
              </li>
            </ul>
          </div>
          <!--* newsletter -->
          <div class="newsletter">
            <ul>
              <!-- title -->
              <div class="title">Our Newsletter</div>
              <!-- paragraph -->
              <li>
                <p>
                  There are many variations of passages of form humour or
                  randomised
                </p>
              </li>
              <!-- input -->
              <li>
                <input type="email" placeholder="Enter your email..." />
                <button type="submit">Submit</button>
              </li>
              <!-- socials -->
              <li id="socials">
                <font-awesome-icon
                  class="fa-icon"
                  :icon="['fab', 'facebook-f']"
                />
                <font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']" />
                <font-awesome-icon
                  class="fa-icon"
                  :icon="['fab', 'google-plus-g']"
                />
                <font-awesome-icon class="fa-icon" :icon="['fab', 'skype']" />
                <font-awesome-icon
                  class="fa-icon"
                  :icon="['fab', 'instagram']"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--# footer-bottom -->
    <div class="footer-bottom">
      <div class="container d-flex justify-content-between">
        <div class="copyright">Copyright @ 2023 Codezeel</div>
        <div class="payment-methods">
          <img src="/img/amex.png" />
          <img src="/img/discover.png" />
          <img src="/img/mastercard.png" />
          <img src="/img/paypal.png" />
          <img src="/img/visa.png" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../style/_partials/variables.scss";

footer {
  background-image: url("img/footer-bg.png");
  background-size: cover;
}

.footer-main-wrapper {
  width: 100%;
  padding: 7rem 0;
}

.business-info {
  width: 30%;
}

.footer-links {
  width: 60%;
  justify-content: space-around;
}

.address,
.tel-number,
.email {
  padding: 5px 0;
  color: #aaaaaa;
  font-size: 1.1rem;
}

.title {
  font-size: 1.4rem;
  font-weight: 400;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  padding: 5px 0;
  color: #aaaaaa;
  font-size: 1.1rem;
  cursor: pointer;
}

button {
  background-color: $secondary-color-light;
  border: 2px solid $secondary-color-light;
}

button:active {
  background-color: $secondary-color;
  border: 2px solid $secondary-color-light;
}

#socials .fa-icon {
  color: white;
  padding: 1rem 2rem 0 0;
}

#socials .fa-icon:hover {
  color: $secondary-color-light;
}

.footer-bottom {
  color: #aaaaaa;
  padding-top: 1rem;
  border-top: 1px solid #444;
}

.payment-methods img {
  padding: 0 5px;
}

#information-links li:hover,
#extras-links li:hover {
  color: $secondary-color-light;
}
</style>
