<template>
  <BaseButton>
    Back this project
  </BaseButton>
  <BaseButtonIcon :icon="IconBookmark">
    Bookmark
  </BaseButtonIcon>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconBookmark from './assets/icon-bookmark.svg';
import BaseButton from './components/BaseButton.vue';
import BaseButtonIcon from './components/BaseButtonIcon.vue';

export default defineComponent({
  name: 'App',
  components: {
    BaseButton,
    BaseButtonIcon,
  },
  computed: {
    IconBookmark: () => IconBookmark,
  },
});
</script>
