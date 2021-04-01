<template>
  <div class="page-project">
    <TheHeading />
    <main class="main">
      <div class="container">
        <TheProject />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeading from '@/components/TheHeading.vue';
import TheProject from '@/components/TheProject.vue';

export default defineComponent({
  name: 'ProjectPage',
  components: {
    TheHeading,
    TheProject,
  },
});
</script>
