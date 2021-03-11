<template>
  <div class="nav-wrapper">
    <NavBurger />
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
@use '~@/scss/variables' as vars;

.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.nav-burger {
  display: none;
}
</style>
