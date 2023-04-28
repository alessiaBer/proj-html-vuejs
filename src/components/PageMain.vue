<script>
import { categories, dogFood, bestSellers } from "../data/products";
import { userTestimonials } from "../data/testimonials";
import { articles } from "../data/articles";
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
      userTestimonials,
      articles,
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
    <!-- /.browse section-->
    <section class="testimonials">
      <h2>Users testimonials</h2>
      <div class="my_container">
        <div class="row row-cols-3">
          <div class="col" v-for="testimonial in userTestimonials">
            <div class="my_card">
              <div class="card_img">
                <img :src="testimonial.avatar" :alt="testimonial.user" />
              </div>
              <div class="card_text">
                <p>{{ testimonial.opinion }}</p>
                <span class="user_info"
                  >{{ testimonial.user }}, {{ testimonial.company }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.testimonials section -->
    <section class="newsletter">
      <div class="newsletter_submit">
        <div class="my_container d-flex">
          <div class="text">
            <h2>Join our newsletter</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium reprehenderit minima nisi et veniam ipsa odio.
            </p>
            <div class="input_group d-flex justify-content-between">
              <input type="text" placeholder="Insert your email...*" />
              <div class="button_el">
                <button class="btn btn-dark">
                  <a href="#" class="link_primary">Subscribe</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="articles_preview">
        <div class="my_container">
          <div class="title">
            <h3>Get the best tips & tricks</h3>
            <span>Recent articles</span>
          </div>
          <div class="row row-cols-4">
            <div class="col" v-for="article in articles">
              <div class="my_card">
                <div class="card_img">
                  <img :src="article.img" :alt="article.imgDescription" />
                </div>
                <div class="card_text">
                  <span class="article_title d-block">{{ article.title }}</span>
                  <span class="date">{{ article.date }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="button_el">
            <button class="btn btn_secondary">
              <a href="#" class="link_primary"> Read all articles </a>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- /.newsletter -->
    <section class="banner_shipping">
      <div class="banner_top d-flex">
        <div class="card_overlay_accessories">
          <div class="accessories">
            <span class="find">Find the best animal supplies</span>
            <h3>Popular accessories</h3>
            <div class="button_el">
              <button class="btn btn_light">
                <a href="#" class="link_dark">View all toys accessories</a>
              </button>
            </div>
          </div>
        </div>
        <div class="card_overlay_food">
          <div class="food_arrival">
            <span class="find">Find the best food</span>
            <h3>New food arrival</h3>
            <div class="button_el">
              <button class="btn btn_light">
                <a href="#" class="link_dark">View all food products</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="banner_bottom">
        <div class="my_container">
          <div class="row row-cols-4">
            <div class="col">
              <font-awesome-icon icon="fa-solid fa-truck-moving" class="icon" />
              <span>Free worldwide deliveries</span>
            </div>
            <div class="col">
              <font-awesome-icon icon="fa-regular fa-map" class="icon" />
              <span>Find stores near you</span>
            </div>
            <div class="col">
              <font-awesome-icon icon="fa-solid fa-dollar-sign" class="icon" />
              <span>Best prices guaranteed</span>
            </div>
            <div class="col">
              <font-awesome-icon
                icon="fa-regular fa-credit-card"
                class="icon"
              />
              <span>All credit card accepted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
