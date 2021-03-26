<template>
  <div class="status-item">
    <h3 class="status-item-head">{{ head }}</h3>
    <p class="status-item-muted">{{ muted }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StatusItem',
  props: {
    head: {
      type: String,
      required: true,
    },
    muted: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.status-item {
  padding-left: percentage(46 / 636);
  padding-right: percentage(16 / 636);
  flex: 1 1 auto;
  width: 100%;

  &:first-child {
    padding-left: 0;
  }

  &:not(:last-child) {
    border-right: solid 1px #ddd;
  }
}

.status-item-head {
  margin: 0 0 8px 0;
  font-weight: 700;
  font-size: 2em;
}

.status-item-muted {
  margin: 0;
  font-size: 0.95em;
}
</style>
