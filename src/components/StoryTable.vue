<script setup lang="ts">
import type Task from '@/app/Task';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

defineProps<{
  list: Task[]
}>()

</script>

<template>
  <Table>
    <TableCaption>A list of stories.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
          Title
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="task in list"
        :key="task.id">
        <TableCell>
          {{ task.title }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>