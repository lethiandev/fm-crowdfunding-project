<template>
  <div class="project">
    <ProjectBrand />
    <ProjectHeading />
    <ProjectStatus />
    <ProjectAbout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectBrand from '@/components/ProjectBrand.vue';
import ProjectHeading from '@/components/ProjectHeading.vue';
import ProjectStatus from '@/components/ProjectStatus.vue';
import ProjectAbout from '@/components/ProjectAbout.vue';

export default defineComponent({
  name: 'TheProject',
  components: {
    ProjectAbout,
    ProjectBrand,
    ProjectHeading,
    ProjectStatus,
  },
});
</script>

<style lang="scss" scoped>

.section {
  padding: 46px;
  margin-bottom: 26px;
  background-color: white;
  border: solid 1px #f2f2f2;
  border-radius: 8px;
}
</style>
