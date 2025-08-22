<script setup lang="ts">
import KanbanColumn from '@/components/block/KanbanColumn.vue';
import KanbanCard from '@/components/block/KanbanCard.vue';
import KanbanBoard from '@/components/block/KanbanBoard.vue';
</script>

<template>
  <KanbanBoard name="development"
    class="max-w-screen-xl mx-auto"
    @end="(ev) => console.log(ev)">
    <KanbanColumn>
      <KanbanCard>Task 1: Design UI</KanbanCard>
      <KanbanCard>Task 2: Implement Backend API</KanbanCard>
    </KanbanColumn>

    <KanbanColumn>
      <KanbanCard>Task 3: Write Tests</KanbanCard>
    </KanbanColumn>

    <KanbanColumn>
      <KanbanCard>Task 4: Deploy to Staging</KanbanCard>
      <KanbanCard>Task 5: Review and Merge</KanbanCard>
    </KanbanColumn>
  </KanbanBoard>
</template>