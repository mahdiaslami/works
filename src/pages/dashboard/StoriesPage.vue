<script setup lang="ts">
import { storyService } from '@/app';
import DashboardHeader from '@/components/DashboardHeader.vue';
import StoriesPageBreadcrumb from '@/components/StoriesPageBreadcrumb.vue';
import StoryTable from '@/components/StoryTable.vue';
import TableContainer from '@/components/TableContainer.vue';

const stories = storyService.all();

</script>

<template>
  <DashboardHeader>
    <StoriesPageBreadcrumb />
  </DashboardHeader>

  <div class="px-4 pb-4">
    <TableContainer>
      <StoryTable :list="stories" />
    </TableContainer>
  </div>
</template>