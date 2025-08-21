<script setup lang="ts">
import KanbanColumn from '@/components/KanbanColumn.vue';
import KanbanCard from '@/components/KanbanCard.vue';
import KanbanBoard from '@/components/KanbanBoard.vue';
</script>

<template>
  <KanbanBoard name="development">
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