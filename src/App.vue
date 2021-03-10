<template>
  <TheHeading />
  <main class="main">
    <div class="container">
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconBookmark from './assets/icon-bookmark.svg';
import TheHeading from './components/TheHeading.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeading,
  },
  computed: {
    IconBookmark: () => IconBookmark,
  },
});
</script>
