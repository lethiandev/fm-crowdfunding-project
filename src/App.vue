<template>
  <TheHeader>
    <TheNavbar></TheNavbar>
  </TheHeader>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconBookmark from './assets/icon-bookmark.svg';
import TheHeader from './components/TheHeader.vue';
import TheNavbar from './components/TheNavbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheNavbar,
  },
  computed: {
    IconBookmark: () => IconBookmark,
  },
});
</script>
