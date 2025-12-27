<script setup lang="ts">
import { inject } from 'vue';
import { type TooltipContext } from './context';
import { type Placement } from '@floating-ui/dom';
import FloatingContent from './FloatingContent.vue';

interface Props {
  placement?: Placement;
}

withDefaults(defineProps<Props>(), {
  placement: 'bottom',
});

const context = inject<TooltipContext>('tooltip-state');
if (!context) throw new Error("TooltipFloatingContent must be used inside Tooltip");


</script>

<template>
  <FloatingContent v-if="context?.isVisible.value"
    :placement="placement">
    <slot></slot>
  </FloatingContent>
</template>
