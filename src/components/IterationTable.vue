<script setup lang="ts">
import type Iteration from '@/app/Iteration';
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
  list: Iteration[]
}>()

</script>

<template>
  <Table>
    <TableCaption>A list of stories.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
          ID
        </TableHead>
        <TableHead>
          Start Date
        </TableHead>
        <TableHead>
          End Date
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="iteration in list"
        :key="iteration.id">
        <TableCell>
          {{ iteration.id }}
        </TableCell>
        <TableCell>
          {{ iteration.startDate.toLocalDateString('en') }}
        </TableCell>
        <TableCell>
          {{ iteration.endDate.toLocalDateString('en') }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>