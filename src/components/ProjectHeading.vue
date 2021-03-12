<template>
  <section class="section">
    <h1>Mastercraft Bamboo Monitor Riser</h1>
    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    <div class="button-list">
      <BaseButton>Back this project</BaseButton>
      <BaseButtonIcon :icon="IconBookmark">Bookmark</BaseButtonIcon>
    </div>
  </section>
</template>
<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseButtonIcon from '@/components/BaseButtonIcon.vue';
import IconBookmark from '@/assets/icon-bookmark.svg';

export default {
  name: 'ProjectHeading',
  components: {
    BaseButton,
    BaseButtonIcon,
  },
  computed: {
    IconBookmark: () => IconBookmark,
  },
};
</script>
