<script>
import { categories } from "../data/main";
import JumboTron from "./JumboTron.vue";
export default {
  name: "PageMain",
  components: {
    JumboTron,
  },
  data() {
    return {
      categories,
    };
  },
};
</script>
<template>
  <main>
    <JumboTron />
    <section>
      <div class="my_container">
        <h3>Browse by category</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum
          iusto adipisci eaque consectetur molestias voluptatibus illum
          similique? Nostrum, et.
        </p>
        <div class="row row-cols-4">
          <div class="col" v-for="category in categories">
            <div class="my_card">
              <img
                :src="'../assets/img/images/' + category.img"
                :alt="category.name"
              />
              <span>{{ category.name }} ({{ category.amount }})</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
