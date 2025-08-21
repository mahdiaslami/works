<script setup lang="ts">
// No specific props or logic needed for TableRow itself.
</script>

<template>
  <tr>
    <slot></slot>
  </tr>
</template>

<style>
tbody > tr {
  @apply hover:bg-gray-50
}
</style>