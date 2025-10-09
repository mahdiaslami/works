<script setup lang="ts">
import StoryTable from '@/components/StoryTable.vue';
import { factory } from '@/support/helper';

const stories = factory('story', 100).create()

</script>

<template>
  <div class="p-4 pt-0">
    <StoryTable :list="stories" />
  </div>
</template>