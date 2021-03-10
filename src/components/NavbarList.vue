<template>
  <div class="navbar-list-wrapper">
    <ul class="navbar-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarList',
});
</script>

<style lang="scss" scoped>
.navbar-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}
</style>
