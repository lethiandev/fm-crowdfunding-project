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
@use '~@/scss/variables' as vars;

.navbar-list-item {
  margin-left: 32px;
  line-height: 1em;
  display: block;

  @media (max-width: vars.$breakpoint-mobile) {
    margin: 0;
    padding: 0;
  }
}

.navbar-list-item::v-deep > a {
  text-decoration: none;
  color: white;
  display: block;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  @media (max-width: vars.$breakpoint-mobile) {
    padding: 27px 24px;
    font-weight: 500;
    color: black;

    & {
      border-bottom: solid 1px #ddd;
    }
  }
}
</style>
