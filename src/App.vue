<template>
  <ProjectPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectPage from './pages/ProjectPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    ProjectPage,
  },
});
</script>
