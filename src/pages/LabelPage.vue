<script setup lang="ts">
import { ref } from 'vue';
import Table from '@/components/ui/table/Table.vue';
import TableHeader from '@/components/ui/table/TableHeader.vue';
import TableBody from '@/components/ui/table/TableBody.vue';
import TableHead from '@/components/ui/table/TableHead.vue';
import TableRow from '@/components/ui/table/TableRow.vue';
import TableCell from '@/components/ui/table/TableCell.vue';

// Mock data for labels
const labels = ref([
  {
    id: 1,
    type: 'Category',
    name: 'Priority',
    value: 'High',
    valueType: 'String',
    valueItems: [],
  },
  {
    id: 2,
    type: 'Tag',
    name: 'Status',
    value: 'In Progress',
    valueType: 'String',
    valueItems: [],
  },
  {
    id: 3,
    type: 'Category',
    name: 'Urgency',
    value: 'Medium',
    valueType: 'String',
    valueItems: [],
  },
  {
    id: 4,
    type: 'Tag',
    name: 'Assignee',
    value: 'John Doe',
    valueType: 'String',
    valueItems: [],
  },
  {
    id: 5,
    type: 'Category',
    name: 'Complexity',
    value: 'Low',
    valueType: 'String',
    valueItems: [],
  },
]);
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Value Type</TableHead>
          <TableHead>Value Items</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="label in labels"
          :key="label.id"
          class="border-b border-gray-200 hover:bg-gray-50">
          <TableCell>{{ label.id }}</TableCell>
          <TableCell>{{ label.type }}</TableCell>
          <TableCell>{{ label.name }}</TableCell>
          <TableCell>{{ label.value }}</TableCell>
          <TableCell>{{ label.valueType }}</TableCell>
          <TableCell>{{ label.valueItems.join(', ') }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<style scoped>
/* Add any specific styles here if needed, though Tailwind should cover most */
</style>