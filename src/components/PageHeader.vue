<script>
import menu from "../data/menu";
export default {
  name: "PageHeader",
  data() {
    return {
      menu,
    };
  },
};
</script>
<template>
  <header>
    <div class="nav-banner">
      <div class="my_container">
        <nav class="navbar">
          <img
            class="logo"
            src="../assets/img/images/dark-pet-logo.png"
            alt="Avada Pet Supplies"
          />
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                class="icon"
              />
            </span>
            <input type="text" class="form-control" placeholder="Search..." />
          </div>
          <div class="support">
            <span><strong>Questions?</strong> Call us : 1.800.123.4567</span>
          </div>
          <div class="personal-area d-flex">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
            <font-awesome-icon icon="fa-regular fa-user" class="icon" />
          </div>
        </nav>
      </div>
    </div>
    <!-- /.nav-banner -->
    <div class="nav-menu">
      <div class="my_container">
        <nav class="navbar">
          <ul>
            <li v-for="item in menu" :class="item.active === true ? 'active' : ''">
                {{ item.name }}
                <font-awesome-icon icon="fa-solid fa-chevron-down" v-if="item.dropdown === true" class="icon"/>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- /.nav-menu -->
  </header>
</template>

<style lang="scss" scoped></style>
