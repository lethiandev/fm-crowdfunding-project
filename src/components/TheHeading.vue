<template>
  <header class="header">
    <MainNavbar>
      <NavbarList>
        <NavbarListItem>
          <a href="#">About</a>
        </NavbarListItem>
        <NavbarListItem>
          <a href="#">Discover</a>
        </NavbarListItem>
        <NavbarListItem>
          <a href="#">Started</a>
        </NavbarListItem>
      </NavbarList>
    </MainNavbar>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainNavbar from './MainNavbar.vue';
import NavbarList from './NavbarList.vue';
import NavbarListItem from './NavbarListItem.vue';

export default defineComponent({
  name: 'TheHeading',
  components: {
    MainNavbar,
    NavbarList,
    NavbarListItem,
  },
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
