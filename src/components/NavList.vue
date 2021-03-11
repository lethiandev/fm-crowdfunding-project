<template>
  <div class="nav-wrapper">
    <NavBurger />
    <div class="nav-backdrop"></div>
    <nav class="nav">
      <slot></slot>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBurger from './NavBurger.vue';

export default defineComponent({
  name: 'NavList',
  components: {
    NavBurger,
  },
});
</script>

<style lang="scss" scoped>
@use '~@/scss/breakpoints' as bp;

.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;

  @include bp.breakpoint-mobile {
    background-color: white;
    border: solid 1px #f2f2f2;
    border-radius: 8px;
    display: none;

    position: absolute;
    z-index: 1;
    top: 88px;
    right: 24px;
    left: 24px;

    .active ~ & {
      display: block;
    }
  }
}

.nav-backdrop {
  background-image: linear-gradient(
    to bottom, rgba(0,0,0,0.6), transparent
  );
  display: none;
  height: 100vh;

  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  left: 0;

  @include bp.breakpoint-mobile {
    .active ~ & {
      display: block;
    }
  }
}

.nav-burger {
  display: none;

  // Fix rendering on backdrop
  position: relative;
  z-index: 1;

  @include bp.breakpoint-mobile {
    display: block;
  }
}
</style>
