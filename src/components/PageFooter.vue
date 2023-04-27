<script>
import { menu, footerNav, socials } from "../data/footer";
export default {
  name: "PageFooter",
  data() {
    return {
      menu,
      footerNav,
      socials,
    };
  },
};
</script>
<template>
  <footer>
    <div class="footer-top">
      <div class="my_container">
        <div class="row row-cols-4">
          <div class="col">
            <img class="logo" src="../assets/img/images/mobile-light-pet-logo-2x-200x52.png" alt="Avada Pet Supplies">
            <div class="address-contacts">
                <!-- TODO anche questo contenuto dinamicamente?-->
                <ul>
                    <li>1234 Avada Avenue Avadaville</li>
                    <li>info@your-company.com</li>
                    <li>Call us: (1) 234 5678</li>
                </ul>
            </div>
          </div>
          <div class="col" v-for="list in menu">
            <h5>{{ list.name }}</h5>
            <ul class="menu">
              <li v-for="item in list.items">{{ item }}</li>
            </ul>
          </div>
          <div class="col">
            <div class="my_card">
                <h5>Subscribe to our newsletter</h5>
                <input type="text" placeholder="Insert your email...*">
                <button class="btn btn-dark">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="footer-nav">
            <ul>
                <!-- TODO fare una computed properties-->
                <li v-for="item in footerNav" :class="item.active === true ? 'active' : ''">{{ item.name }}</li>
            </ul>
        </div>
        <div class="socials">
            <ul>
                <li v-for="social in socials">
                    <font-awesome-icon :icon="'fa-brands ' + social" />
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
        <div class="my_container">
            <span>&copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by Alessia B.</span>
        </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
