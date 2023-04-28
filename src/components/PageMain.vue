<script>
import { categories, dogFood } from "../data/main";
import JumboTron from "./JumboTron.vue";
export default {
  name: "PageMain",
  components: {
    JumboTron,
  },
  data() {
    return {
      categories,
      dogFood
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
                <span class="d-block py-3">{{ category.name }} ({{ category.amount }})</span>
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
                  <img :src="food.img" :alt="food.name">
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
                <a href="#" class="link_dark">
                  Learn more about us
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
