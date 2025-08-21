<script setup lang="ts">
import { provide } from 'vue';

const props = defineProps<{
  name: string
}>()

provide('kanban-board-name', props.name)

</script>

<template>
  <div class="p-8">
    <div class="flex space-x-4">
      <slot></slot>
    </div>
  </div>
</template>