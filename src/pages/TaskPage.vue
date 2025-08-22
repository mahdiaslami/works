<script setup lang="ts">
import KanbanColumn from '@/components/block/KanbanColumn.vue';
import KanbanCard from '@/components/block/KanbanCard.vue';
import KanbanBoard from '@/components/block/KanbanBoard.vue';
import Select from '@/components/ui/select/Select.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import { ref } from 'vue';

const selectedOption = ref('1'); // Default selected value

const handleSelect = (event: Event) => {
  console.log('Select event triggered:', event);
  // You can access the selected value from the v-model bound to Select
};
</script>

<template>
  <div class="max-w-screen-xl mx-auto py-10">
    <h1 class="text-2xl font-bold mb-2">Kanban Board</h1>

    <KanbanBoard name="development"
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

    <h2 class="text-xl font-bold mb-4">Custom Select Example</h2>

    <Select @select="handleSelect"
      class="w-64">
      <SelectItem value="1">Option Foo</SelectItem>
      <SelectItem value="2">Option Bar</SelectItem>
      <SelectItem value="3">Option Baz</SelectItem>
    </Select>
  </div>
</template>