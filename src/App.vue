<template>
  <TheHeader>
    <nav>Navbar</nav>
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
import BaseButton from './components/BaseButton.vue';
import BaseButtonIcon from './components/BaseButtonIcon.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    BaseButton,
    BaseButtonIcon,
  },
  computed: {
    IconBookmark: () => IconBookmark,
  },
});
</script>
