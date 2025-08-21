<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-semibold transition-colors duration-200 ease-in-out',
      {
        'bg-cyan-500 hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50 text-white': !disabled,
        'bg-gray-400 text-gray-600 cursor-not-allowed': disabled,
      },
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>