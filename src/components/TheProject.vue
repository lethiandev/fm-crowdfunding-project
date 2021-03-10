<template>
  <img class="project-logo" src="~@/assets/logo-mastercraft.svg" alt="Mastercraft logo" />
  <section class="section">
    <br /><br /><br /><br /><br /><br />
  </section>
  <section class="section">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheProject',
});
</script>

<style lang="scss" scoped>
.project-logo {
  margin: 0 auto -28px auto;
  display: block;
  width: 56px;
  height: 56px;
}

.section {
  padding: 46px;
  margin-bottom: 26px;
  background-color: white;
  border: solid 1px #f2f2f2;
  border-radius: 8px;
}
</style>
