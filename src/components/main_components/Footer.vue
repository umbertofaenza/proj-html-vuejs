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
      <div class="footer-main d-flex align-items-center">
        <div class="footer-main-wrapper d-flex">
          <!--* business info -->
          <div class="business-info">
            <!-- list title -->
            <div class="title">Address Info</div>
            <!-- address -->
            <div class="address">
              <font-awesome-icon
                :icon="['fas', 'location-dot']"
                color="#dca458"
              />
              <span>
                60 29th Street San Francisco, CA 94110 507-Union Trade Center,
                United States of America
              </span>
            </div>
            <!-- tel number -->
            <div class="tel-number">
              <font-awesome-icon :icon="['fas', 'phone']" color="#dca458" />
              <span> (+00) 123-456-789 </span>
            </div>
            <!-- email -->
            <div class="email">
              <font-awesome-icon :icon="['fas', 'envelope']" color="#dca458" />
              <span> demo@example.com </span>
            </div>
          </div>
          <!--* links -->
          <div class="footer-links d-flex">
            <!-- information links -->
            <ul>
              <div class="title">Information</div>
              <li v-for="link in this.footerInformationLinks">
                {{ link.text }}
              </li>
            </ul>
            <!-- extras links -->
            <ul>
              <div class="title">Extras</div>
              <li v-for="link in this.footerExtrasLinks">
                {{ link.text }}
              </li>
            </ul>
          </div>
          <!--* newsletter -->
          <div class="newsletter"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-image: url("img/footer-bg.png");
  background-size: cover;
}

.footer-main-wrapper {
  padding: 7rem 0;
}

.container,
.business-info,
.footer-main {
  height: 100%;
}

.business-info,
.newsletter {
  width: 25%;
}

.footer-links {
  width: 50%;
  justify-content: space-around;
}

.address,
.tel-number,
.email {
  padding: 10px 0;
  color: #aaaaaa;
  font-size: 1.1rem;
}

.title {
  font-size: 1.4rem;
  font-weight: 400;
}

li {
  padding: 5px 0;
  color: #aaaaaa;
  font-size: 1.1rem;
  cursor: pointer;
}
</style>
