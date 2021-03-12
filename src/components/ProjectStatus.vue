<template>
  <section class="section">
    <StatusGroup>
      <StatusItem head="$89,914" muted="of $100,000 backed"/>
      <StatusItem head="5,007" muted="total backers"/>
      <StatusItem head="56" muted="days left"/>
    </StatusGroup>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StatusGroup from '@/components/StatusGroup.vue';
import StatusItem from '@/components/StatusItem.vue';

export default defineComponent({
  name: 'ProjectStatus',
  components: {
    StatusGroup,
    StatusItem,
  },
});
</script>
