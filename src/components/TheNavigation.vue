<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarList from './NavbarList.vue';
import NavbarListItem from './NavbarListItem.vue';

export default defineComponent({
  name: 'TheNavigation',
  components: {
    NavbarList,
    NavbarListItem,
  },
});
</script>
