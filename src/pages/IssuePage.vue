<script setup lang="ts">
import Container from '@/components/layout/BaseContainer.vue';
import IssuesTree from '@/components/IssuesTree.vue';
import { useIssueStore } from '@/stores/issue';
import FolderRoot from '@/components/ui/collapsible/FolderRoot.vue';

const issueStore = useIssueStore();
</script>

<template>
  <Container class="py-10">
    <h1 class="text-3xl font-semibold text-slate-600 pb-2 mb-6 border-b border-slate-200 leading-tight">
      Issues
    </h1>

    <FolderRoot v-for="category in issueStore.categories"
      :key="category.id"
      :title="category.name">
      <IssuesTree v-if="category.issues.length > 0"
        class="ms-2 mb-4"
        :issues="category.issues" />
    </FolderRoot>
  </Container>
</template>
