<template>
  <TheHeading />
  <main class="main">
    <div class="container">
      <TheProject />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconBookmark from './assets/icon-bookmark.svg';
import TheHeading from './components/TheHeading.vue';
import TheProject from './components/TheProject.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeading,
    TheProject,
  },
  computed: {
    IconBookmark: () => IconBookmark,
  },
});
</script>
