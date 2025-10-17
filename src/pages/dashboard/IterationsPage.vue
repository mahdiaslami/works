<script setup lang="ts">
import { iterationService } from '@/app';
import DashboardHeader from '@/components/DashboardHeader.vue';
import IterationsPageBreadcrumb from '@/components/IterationsPageBreadcrumb.vue';
import IterationTable from '@/components/IterationTable.vue';
import IterationToolbar from '@/components/IterationToolbar.vue';
import TableContainer from '@/components/TableContainer.vue';

import { ref } from 'vue';

const iterations = ref(iterationService.all());

const refreshIterations = () => {
  iterations.value = iterationService.all();
};
</script>

<template>
  <DashboardHeader>
    <IterationsPageBreadcrumb />
  </DashboardHeader>

  <div class="w-full px-4">
    <IterationToolbar @saved="refreshIterations" />
  </div>

  <div class="px-4 pb-4">
    <TableContainer>
      <IterationTable :list="iterations" />
    </TableContainer>
  </div>
</template>