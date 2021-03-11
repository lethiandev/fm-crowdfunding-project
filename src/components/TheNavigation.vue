<template>
  <NavList>
    <NavListItem>About</NavListItem>
    <NavListItem>Discover</NavListItem>
    <NavListItem>Started</NavListItem>
  </NavList>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavList from './NavList.vue';
import NavListItem from './NavListItem.vue';

export default defineComponent({
  name: 'TheNavigation',
  components: {
    NavList,
    NavListItem,
  },
});
</script>
