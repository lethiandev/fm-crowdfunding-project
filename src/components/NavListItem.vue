<template>
  <a class="nav-item" href="/">
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
@use '~@/scss/breakpoints' as bp;

.nav-item {
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

  @include bp.breakpoint-mobile {
    margin: 0;
    padding: 26.5px 24px;
    font-size: 1.1em;
    font-weight: 500;
    color: black;

    &:not(:last-child) {
      border-bottom: solid 1px #f2f2f2;
    }
  }
}

</style>
