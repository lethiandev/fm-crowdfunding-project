<template>
  <div class="navbar-wrapper">
    <div class="container">
      <nav class="navbar">
        <a class="logo" href="#">
          <img src="~@/assets/logo.svg" alt="Crowdfund" />
        </a>
        <slot></slot>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbar',
});
</script>

<style lang="scss" scoped>
@use '~@/scss/variables' as vars;

.navbar-wrapper {
  background-image: linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,0));
}

.navbar {
  padding: 48px 0;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: vars.$breakpoint-mobile) {
    padding: 32px 0 36px 0;
  }
}

.logo {
  margin-right: auto;
  display: block;

  img {
    max-width: 128px;
    display: block;
  }
}
</style>
