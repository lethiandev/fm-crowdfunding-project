<template>
  <div class="navbar-list-wrapper">
    <NavbarBurger />
    <ul class="navbar-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarBurger from './NavbarBurger.vue';

export default defineComponent({
  name: 'NavbarList',
  components: {
    NavbarBurger,
  },
});
</script>

<style lang="scss" scoped>
@use '~@/scss/variables' as vars;

.navbar-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: vars.$breakpoint-mobile) {
    background-color: white;
    border-radius: 8px;
    display: none;

    // Make navbar links as dropdown menu
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    .active ~ & {
      display: block;
    }
  }
}

.navbar-burger {
  display: none;

  @media (max-width: vars.$breakpoint-mobile) {
    display: block;
  }
}

</style>
