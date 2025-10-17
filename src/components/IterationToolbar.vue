<script setup lang="ts">
import { Input } from "@/components/ui/input"
import IterationDialog from "./IterationDialog.vue";
import { iterationService } from "@/app/index";
import Iteration from "@/app/Iteration";

const handleSaveIteration = (iteration: Iteration) => {
  iterationService.save(iteration);
};
</script>

<template>
  <div class="flex items-center py-4">
    <Input class="max-w-sm me-auto"
      placeholder="Filter" />

    <IterationDialog @save="handleSaveIteration" />
  </div>
</template>