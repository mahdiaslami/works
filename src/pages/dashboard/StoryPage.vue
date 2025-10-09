<script setup lang="ts">
import { storyService } from '@/app';
import DashboardHeader from '@/components/DashboardHeader.vue';
import StoryTable from '@/components/StoryTable.vue';

const stories = storyService.all();

</script>

<template>
  <DashboardHeader />
  <div class="p-4 pt-0">
    <StoryTable :list="stories" />
  </div>
</template>