<template>
  <div class="navbar-list">
    <ul class="navbar-list-ul">
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
.navbar-list-ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}
</style>
