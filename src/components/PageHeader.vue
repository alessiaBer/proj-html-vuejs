<script>
export default {
  name: "PageHeader",
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
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon"/>
            </span>
            <input type="text" class="form-control" placeholder="Search..." />
          </div>
          <div class="support">
            <span><strong>Questions?</strong> Call us : 1.800.123.4567</span>
          </div>
          <div class="personal-area d-flex">
            <!-- TODO correggere icone -->
            <font-awesome-icon icon="fa-solid fa-box" class="icon"/>
            <font-awesome-icon icon="fa-regular fa-user" class="icon"/>
          </div>
        </nav>
      </div>
    </div>
    <!-- /.nav-banner -->
    <div class="nav-menu">
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
    <!-- /.nav-menu -->
  </header>
</template>

<style lang="scss" scoped></style>
