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
      <div class="my-container">
        <div class="row row-cols-4">
          <div class="col"></div>
          <div class="col" v-for="list in menu">
            <h5>{{ list.name }}</h5>
            <ul>
              <li v-for="item in list.items">{{ item }}</li>
            </ul>
          </div>
          <div class="col"></div>
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
  </footer>
</template>

<style lang="scss" scoped></style>
