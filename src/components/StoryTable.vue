<script setup lang="ts">
import type Story from '@/app/Story';
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
  list: Story[]
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
      <TableRow v-for="story in list"
        :key="story.id">
        <TableCell>
          {{ story.title }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>