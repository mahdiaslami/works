<script setup lang="ts">
import { ref, provide, } from 'vue';
import { type TooltipContext } from './context';


const isVisible = ref(false);
const reference = ref<HTMLElement | null>(null);

provide<TooltipContext>('tooltip-state', {
  reference,
  isVisible,
});
</script>

<template>
  <slot></slot>
</template>