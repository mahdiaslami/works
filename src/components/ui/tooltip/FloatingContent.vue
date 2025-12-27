<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue';
import { type TooltipContext } from './context';
import { arrow, autoUpdate, computePosition, offset, type Placement } from '@floating-ui/dom';

const props = defineProps<{
  placement?: Placement;
}>()

const context = inject<TooltipContext>('tooltip-state');
if (!context) throw new Error("TooltipContent must be used inside Tooltip");

const floatingEl = ref<HTMLElement | null>(null);
const arrowEl = ref<HTMLElement | null>(null);

const x = ref(0);
const y = ref(0);
const arrowStyle = ref<{
  left?: string;
  right?: string;
  top?: string,
  bottom?: string
}>({})

let cleanup: (() => void) | undefined;
const timeoutId: ReturnType<typeof setTimeout> | null = null;

const update = () => {
  if (!context.reference.value || !floatingEl.value) return;

  computePosition(context.reference.value, floatingEl.value, {
    placement: props.placement,
    middleware: [
      offset(10),
      arrow({ element: arrowEl.value! })
    ],
  }).then((pos) => {
    x.value = pos.x;
    y.value = pos.y;

    if (pos.middlewareData.arrow) {
      const basePlacement = pos.placement.split('-')[0] as ('top' | 'bottom' | 'left' | 'right');
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[basePlacement];

      const { x, y } = pos.middlewareData.arrow

      arrowStyle.value = {
        left: x ? x + 'px' : '',
        top: y ? y + 'px' : '',
        [staticSide]: '-5px',
      }
    }
  });
};

onMounted(() => {
  if (!context.reference.value || !floatingEl.value) return;
  cleanup = autoUpdate(context.reference.value, floatingEl.value, update);
})

onUnmounted(() => {
  cleanup?.()
  if (timeoutId) clearTimeout(timeoutId);
})

</script>

<template>
  <div ref="floatingEl"
    class="fixed bg-white shadow-lg border z-[1000] rounded-lg p-4 pointer-events-none"
    :style="{
      top: `${y}px`,
      left: `${x}px`,
    }">
    <slot></slot>
    <div ref="arrowEl"
      class="absolute size-[10px] bg-white rotate-45 hidden"
      :style="arrowStyle"></div>
  </div>
</template>