<template>
  <div class="project-brand">
    <img class="project-logo" src="~@/assets/logo-mastercraft.svg" alt="Mastercraft logo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectBrand',
});
</script>

<style lang="scss" scoped>
.project-brand {
  margin: 0 auto -28px auto;
  display: block;
  width: 56px;
  height: 56px;
}

.project-logo {
  width: inherit;
  height: inherit;
}
</style>
