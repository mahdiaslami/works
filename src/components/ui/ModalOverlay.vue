<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
  required?: boolean;
}

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  required: false,
});

const handleClick = () => {
  if (!props.required) {
    emit('close');
  }
};
</script>

<template>
  <div
    class="fixed inset-0 bg-gray-500/50 backdrop-blur-sm transition-opacity"
    :class="{ 'cursor-pointer': !required }"
    @click="handleClick"
  ></div>
</template>

<style scoped>
/* No additional styles needed, Tailwind classes handle appearance. */
/* Transition for opacity is handled by the parent modal's transition */
</style>