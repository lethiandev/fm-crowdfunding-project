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
@use '~@/scss/breakpoints' as bp;

.navbar {
  padding: 48px 0 62px 0;
  background-image: linear-gradient(
    to bottom, rgba(0,0,0,.6), transparent
  );

  @include bp.breakpoint-mobile {
    padding: 32px 0;
  }
}

.container {
  display: flex;
  align-items: center;
  max-width: 1108px;
}

.brand {
  margin-right: auto;
  display: block;

  // Fix rendering on backdrop
  position: relative;
  z-index: 1;
}

.logo {
  display: block;
  max-width: 128px;
}
</style>
