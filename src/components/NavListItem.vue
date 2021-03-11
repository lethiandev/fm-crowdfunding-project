<template>
  <a class="nav-list-item" href="/">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarListItem',
});
</script>

<style lang="scss" scoped>
@use '~@/scss/variables' as vars;

.nav-list-item {
  margin-left: 32px;
  line-height: 1em;
  text-decoration: none;
  color: white;
  display: block;

  &:hover,
  &:active,
  &:visited {
    text-decoration: underline;
  }
}

</style>
