<template>
  <div class="navbar">
    <div class="container">
      <a class="brand" href="/">
        <img class="logo" src="~@/assets/logo.svg" alt="Crowdfund project logo" />
      </a>
      <slot></slot>
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

.navbar {
  padding: 48px 0;
  background-image: linear-gradient(
    to bottom, rgba(0,0,0,.5), transparent );

  @media (max-width: vars.$breakpoint-mobile) {
    padding: 32px 0;
  }
}

.container {
  display: flex;
  align-items: center;
}

.brand {
  margin-right: auto;
  display: block;
}

.logo {
  display: block;
  max-width: 128px;
}
</style>
