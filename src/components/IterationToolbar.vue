<script setup lang="ts">
import { Input } from "@/components/ui/input"
import IterationDialog from "./IterationDialog.vue";
import { iterationService } from "@/app/index";
import Iteration from "@/app/Iteration";

import { defineEmits } from 'vue';

const emit = defineEmits(['saved']);

const handleSaveIteration = async (iteration: Iteration) => {
  await iterationService.save(iteration);
  emit('saved');
};
</script>

<template>
  <div class="flex items-center py-4">
    <Input class="max-w-sm me-auto"
      placeholder="Filter" />

    <IterationDialog @save="handleSaveIteration" />
  </div>
</template>