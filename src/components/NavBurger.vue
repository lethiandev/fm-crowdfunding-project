<template>
  <button type="button" class="nav-burger" :class="{ active }" @click="toggle">
    <figure class="nav-burger-line" role="presentation"></figure>
    <figure class="nav-burger-line" role="presentation"></figure>
    <figure class="nav-burger-line" role="presentation"></figure>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBurger',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
});
</script>

<style lang="scss" scoped>
.nav-burger {
  padding: 0;
  background: transparent;
  outline: none;
  border: none;
  display: block;
  cursor: pointer;

  // Fix button spacing
  margin-bottom: -1px;
}

.nav-burger-line {
  margin: 3px 0;
  background-color: white;
  display: block;
  width: 16px;
  height: 3px;

  transition:
    transform 100ms ease-in-out,
    opacity 100ms ease-in-out;

  .active & {
    &:nth-child(1) { transform: translate(0, 6px) rotate(-45deg); }
    &:nth-child(3) { transform: translate(0, -6px) rotate(45deg); }
    &:nth-child(2) { opacity: 0.0; }
  }
}
</style>
