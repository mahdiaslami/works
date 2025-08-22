<script setup lang="ts">
import { inject } from 'vue';

const handleSelect = inject('select-on-select', (ev: Event) => undefined);
</script>

<template>
  <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
    role="menuitem"
    tabindex="-1"
    @click="handleSelect">
    <slot></slot>
  </div>
</template>