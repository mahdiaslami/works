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
  <div class="p-4 pt-0">
    <IterationTable :list="iterations" />
  </div>
</template>