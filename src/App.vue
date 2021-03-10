<template>
  <TheHeader>
    <TheNavbar></TheNavbar>
  </TheHeader>
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
import TheHeader from './components/TheHeader.vue';
import TheNavbar from './components/TheNavbar.vue';
import BaseButton from './components/BaseButton.vue';
import BaseButtonIcon from './components/BaseButtonIcon.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheNavbar,
    BaseButton,
    BaseButtonIcon,
  },
  computed: {
    IconBookmark: () => IconBookmark,
  },
});
</script>
