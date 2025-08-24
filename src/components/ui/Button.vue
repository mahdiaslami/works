<script setup lang="ts">

</script>

<template>
  <button class="px-3 py-1.5 text-sm font-semibold text-white transition-colors 
    duration-200 ease-in-out rounded-md bg-cyan-500 hover:bg-cyan-600 
    focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50 
      disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed">
    <slot></slot>
  </button>
</template>