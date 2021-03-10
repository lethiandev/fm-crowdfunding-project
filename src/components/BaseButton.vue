<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
});
</script>

<style lang="scss" scoped>
@use '~@/scss/variables' as vars;

.button {
  padding: vars.$button-padding;
  background-color: vars.$primary;
  background-clip: padding-box;
  vertical-align: middle;
  font: inherit;
  line-height: 1em;
  color: white;
  outline: none;
  border: none;
  border-radius: 2048px;
  cursor: pointer;

  &:hover {
    background-color: hsl(176, 72%, 28%);
  }
}
</style>
