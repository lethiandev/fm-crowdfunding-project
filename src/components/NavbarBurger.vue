<template>
  <button type="button" class="navbar-burger" :class="{ active }" @click="toggle">
    <figure class="navbar-burger-line" role="presentation"></figure>
    <figure class="navbar-burger-line" role="presentation"></figure>
    <figure class="navbar-burger-line" role="presentation"></figure>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarBurger',
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
.navbar-burger {
  margin: 0;
  padding: 0;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}

.navbar-burger-line {
  margin: 3px;
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
