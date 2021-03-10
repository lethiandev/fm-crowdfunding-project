<template>
  <li class="navbar-list-item">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarListItem',
});
</script>

<style lang="scss" scoped>
.navbar-list-item {
  margin-left: 32px;
}

.navbar-list-item::v-deep > a {
  text-decoration: none;
  color: white;

  &:hover,
  &:active {
    text-decoration: underline;
  }
}
</style>
