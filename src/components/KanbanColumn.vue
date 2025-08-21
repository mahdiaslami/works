<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, inject } from 'vue';
import Sortable from 'sortablejs';

const columnRef = ref(null);
let sortableInstance: Sortable | null = null;
const boardName = inject('kanban-board-name')

onMounted(() => {
  if (columnRef.value) {
    sortableInstance = new Sortable(columnRef.value, {
      group: `kanban-group:${boardName}`,
      animation: 150,
      ghostClass: 'sortable-ghost',
      dragClass: 'sortable-drag',
      // No onEnd or onUpdate needed for basic reordering within the same column
    });
  }
});

onBeforeUnmount(() => {
  if (sortableInstance) {
    sortableInstance.destroy();
  }
});
</script>

<template>
  <div ref="columnRef"
    class="kanban-column flex flex-col">
    <slot></slot>
  </div>
</template>

<style scoped>
.kanban-column {
  @apply p-4 bg-gray-100 rounded-lg min-w-[250px]
}

.sortable-ghost {
  @apply border-2 border-dashed border-gray-400 bg-gray-200 opacity-75;
}

.sortable-drag {
  @apply shadow-lg;
}
</style>