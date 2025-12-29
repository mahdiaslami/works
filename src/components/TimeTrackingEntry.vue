<script setup lang="ts">
import { formatGitLabDuration } from '@/utils/helper';
import IconClock from './icons/IconClock.vue';
import IconTimer from './icons/IconTimer.vue';

defineProps<{
  type: 'estimate' | 'time-spend',
  selfTime: number,
  childrenTime: number
}>()

</script>

<template>
  <div class="text-slate-600">
    <div class="flex flex-row items-center mb-4">
      <IconClock v-if="type === 'estimate'" />
      <IconTimer v-else />

      <span class="ms-2">
        {{ type === 'estimate' ? 'Estimate' : 'Time Spend' }}
      </span>
    </div>

    <div class="mb-1">
      <span class="text-slate-400">Self:</span> {{ formatGitLabDuration(selfTime) }}
    </div>
    <div class="mb-1">
      <span class="text-slate-400">Child:</span> {{ formatGitLabDuration(childrenTime) }}
    </div>
  </div>
</template>