<script setup lang="ts">
import Container from '@/components/layout/BaseContainer.vue';
import WorksTree from '@/components/WorksTree.vue';
import { useWorkStore } from '@/stores/work';

const workStore = useWorkStore();
</script>

<template>
  <Container class="py-10">
    <h1 class="text-3xl font-semibold text-slate-600 pb-2 mb-6 border-b border-slate-200 leading-tight">
      Works
    </h1>

    <WorksTree :works="workStore.works" />
  </Container>
</template>
