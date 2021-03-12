<template>
  <div class="status-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StatusGroup',
});
</script>

<style lang="scss" scoped>
.status-group {
  display: flex;
}
</style>
