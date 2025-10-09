<script setup lang="ts">
import { iterationService } from '@/app';
import DashboardHeader from '@/components/DashboardHeader.vue';
import IterationsPageBreadcrumb from '@/components/IterationsPageBreadcrumb.vue';
import IterationTable from '@/components/IterationTable.vue';

const iterations = iterationService.all()
</script>

<template>
  <DashboardHeader>
    <IterationsPageBreadcrumb />
  </DashboardHeader>
  <div class="rounded-md border mx-4 mb-4 pb-4">
    <IterationTable :list="iterations" />
  </div>
</template>