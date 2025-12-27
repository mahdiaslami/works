<script setup lang="ts">
import { ref, inject, onMounted } from 'vue';
import { type TooltipContext } from './context';

const context = inject<TooltipContext>('tooltip-state');
if (!context) throw new Error("TooltipReference must be used inside Tooltip");

const el = ref<HTMLElement | null>(null);

onMounted(() => {
  context.reference.value = el.value;
});

const handleMouseEnter = () => context.isVisible.value = true;
const handleMouseLeave = () => context.isVisible.value = false;
</script>

<template>
  <div ref="el"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <slot></slot>
  </div>
</template>
