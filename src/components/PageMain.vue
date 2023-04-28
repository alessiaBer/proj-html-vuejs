<script>
import { categories, dogFood, bestSellers } from "../data/products";
import { userTestimonials } from '../data/testimonials'
import JumboTron from "./JumboTron.vue";
export default {
  name: "PageMain",
  components: {
    JumboTron,
  },
  data() {
    return {
      categories,
      dogFood,
      bestSellers,
      userTestimonials
    };
  },
};
</script>
<template>
  <main>
    <JumboTron />
    <section class="browse">
      <div class="my_container">
        <div class="categories text-center">
          <h3>Browse by category</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            cum iusto adipisci eaque consectetur molestias voluptatibus illum
            similique? Nostrum, et.
          </p>
          <div class="row row-cols-4 category">
            <div class="col" v-for="category in categories">
              <div class="category_card">
                <div class="category_card_img">
                  <img :src="category.img" :alt="category.name" />
                </div>
                <span class="d-block py-3 product_name"
                  >{{ category.name }} ({{ category.amount }})</span
                >
              </div>
            </div>
          </div>
          <div class="row row-cols-3 food">
            <div class="col" v-for="food in dogFood">
              <div class="food_card">
                <div class="title">
                  <h3>{{ food.name }}</h3>
                  <span>{{ food.description }}</span>
                </div>
                <div class="card_img">
                  <img :src="food.img" :alt="food.name" />
                </div>
                <button class="btn btn_secondary btn_static">
                  <a href="#" class="link_primary">
                    Shop {{ food.type.toLowerCase() }}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div class="new_banner">
            <div class="text">
              <span class="find">Find the best animal supplies</span>
              <h2>New arrivals weekly</h2>
              <button class="btn_light">
                <a href="#" class="link_dark"> Learn more about us </a>
              </button>
            </div>
          </div>
          <div class="best_sellers">
            <div class="sellers-top d-flex justify-content-between">
              <div class="text d-flex flex-column align-items-start">
                <span class="d-block">All-time best sellers</span>
                <h3>Item everyone loves</h3>
              </div>
              <div class="button-view">
                <button class="btn btn_secondary">
                  <a href="#" class="link_primary"> View all products </a>
                </button>
              </div>
            </div>
            <div class="row row cols-4">
              <div class="col" v-for="product in bestSellers">
                <div class="my_card">
                  <div class="card_img">
                    <img :src="product.img" :alt="product.name" />
                  </div>
                  <div class="card_text">
                    <span class="d-block pt-3 pb-2 product_name">{{
                      product.name
                    }}</span>
                    <div class="price_container">
                      <span
                        class="original_price"
                        v-if="product.discount === true"
                        >${{ Number(product.originalPrice).toFixed(2) }}</span
                      >
                      <span class="price"
                        >${{ Number(product.price).toFixed(2) }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <h2>Users testimonials</h2>
      <div class="my_container">
        <div class="row row-cols-3">
          <div class="col" v-for="testimonial in userTestimonials">
            <div class="my_card">
              <div class="card_img">
                <img :src="testimonial.avatar" :alt="testimonial.user">
              </div>
              <div class="card_text">
                <p>{{ testimonial.opinion }}</p>
                <span class="user_info">{{ testimonial.user }}, {{ testimonial.company }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
