<script></script>

<template>
  <footer>
    <div class="container">
      <!--# footer-main -->
      <div class="footer-main">
        <!-- business info -->
        <div class="business-info d-flex flex-column justify-content-center">
          <!-- list title -->
          <div class="title">Address Info</div>
          <!-- address -->
          <div class="address">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              color="#dca458"
            />
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, tempore!
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
        <!-- links -->
        <div class="footer-links"></div>
        <!-- newsletter -->
        <div class="newsletter"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 500px;
  background-image: url("img/footer-bg.png");
  background-size: cover;
}

.container,
.business-info,
.footer-main {
  height: 100%;
}

.business-info {
  width: 25%;
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
</style>
