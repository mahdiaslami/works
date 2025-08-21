<script setup lang="ts">
// No specific props or logic needed for the wrapper itself,
// it mainly provides the container and basic table styling.
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full">
      <slot></slot>
    </table>
  </div>
</template>