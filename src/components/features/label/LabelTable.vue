<script setup lang="ts">
import type Label from '@/app/Label';
import Table from '@/components/ui/table/Table.vue';
import TableBody from '@/components/ui/table/TableBody.vue';
import TableCell from '@/components/ui/table/TableCell.vue';
import TableHead from '@/components/ui/table/TableHead.vue';
import TableHeader from '@/components/ui/table/TableHeader.vue';
import TableRow from '@/components/ui/table/TableRow.vue';

defineProps<{
  list: Label[]
}>()

</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Type</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Value Type</TableHead>
        <TableHead>Value Items</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="label in list"
        :key="label.id"
        class="border-b border-gray-200 hover:bg-gray-50">
        <TableCell>{{ label.id }}</TableCell>
        <TableCell>{{ label.type }}</TableCell>
        <TableCell>{{ label.name }}</TableCell>
        <TableCell>{{ label.valueType }}</TableCell>
        <TableCell>{{ label.valueItems.join(', ') }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>