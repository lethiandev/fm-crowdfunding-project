<template>
  <img class="icon" :src="icon" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.icon {
  vertical-align: middle;
  display: inline-block;
}
</style>
