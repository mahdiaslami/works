<script setup lang="ts">
import { storyService } from '@/app';
import DashboardHeader from '@/components/DashboardHeader.vue';
import StoriesPageBreadcrumb from '@/components/StoriesPageBreadcrumb.vue';
import StoryTable from '@/components/StoryTable.vue';

const stories = storyService.all();

</script>

<template>
  <DashboardHeader>
    <StoriesPageBreadcrumb />
  </DashboardHeader>
  <div class="rounded-md border mx-4 mb-4 pb-4">
    <StoryTable :list="stories" />
  </div>
</template>