<template>
  <BaseButton class="button-icon">
    <div class="icon-wrapper">
      <BaseIcon :icon="icon" />
    </div>
    <slot></slot>
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';

export default defineComponent({
  name: 'BaseButtonIcon',
  components: {
    BaseButton,
    BaseIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@use '~@/scss/variables' as vars;

.button-icon {
  $padding-y: nth($list: vars.$button-padding, $n: 1);
  $padding-x: nth($list: vars.$button-padding, $n: 2);
  padding-left: calc(#{$padding-x} + 4px);
  border-left: solid calc(#{$padding-y} + 0.5em) transparent;
  position: relative;
}

.icon-wrapper {
  background-color: #2F2F2F;
  border-radius: 2048px;
  height: 100%;

  // Pull the icon to left edge
  transform: translate(-50%, 0);
  position: absolute;
  top: 0;
  left: 0;

  > .icon {
    pointer-events: none;
    user-select: none;
    height: 100%;
  }
}
</style>
