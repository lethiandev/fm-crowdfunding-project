<template>
  <header class="header">
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeading',
});
</script>

<style lang="scss" scoped>
@use '~@/scss/variables' as vars;

.header {
  margin-bottom: -120px;
  background-image: url('~@/assets/image-hero-desktop.jpg');
  background-position: center;
  background-size: cover;
  min-height: 400px;

  @media (max-width: vars.$breakpoint-mobile) {
    margin-bottom: -84px;
    background-image: url('~@/assets/image-hero-mobile.jpg');
    min-height: 300px;
  }
}
</style>
