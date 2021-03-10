<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <img class="logo" src="~@/assets/logo.svg" alt="Crowdfund" />
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNavbar',
});
</script>

<style lang="scss" scoped>
@use '~@/scss/variables' as vars;

.navbar {
  padding: 48px 0;
  background-image: linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,0));

  @media (max-width: vars.$breakpoint-mobile) {
    padding: 32px 0;
  }
}

.navbar-content {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: auto;
  max-width: 128px;
}
</style>
