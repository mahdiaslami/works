
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import IconXMark from '../icons/IconXMark.vue';

interface Props {
  title?: string;
  required?: boolean;
}

const emit = defineEmits<{
  (e: 'close'): void;
}>();

withDefaults(defineProps<Props>(), {
  title: '',
  required: false,
});
</script>

<template>
  <div class="flex items-center justify-between pb-4">
    <h3 v-if="title" id="modal-title" class="text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>
    <button
      v-if="!required"
      @click="emit('close')"
      class="p-2 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label="Close modal"
    >
      <IconXMark class="size-6" />
    </button>
  </div>
</template>
