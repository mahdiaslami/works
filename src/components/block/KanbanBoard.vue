<script setup lang="ts">
import type { SortableEvent } from 'sortablejs';
import { provide } from 'vue';

const props = defineProps<{
  name: string
}>()

const emit = defineEmits<{
  end: [SortableEvent]
}>()

provide('kanban-board-name', props.name)
provide('kanban-board-on-end', (ev: SortableEvent) =>{
  emit('end', ev)
})
</script>

<template>
  <div class="p-8">
    <div class="flex space-x-4">
      <slot></slot>
    </div>
  </div>
</template>