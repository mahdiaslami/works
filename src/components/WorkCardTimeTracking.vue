<script setup lang="ts">
import { formatGitLabDuration } from '@/utils/helper';
import TooltipRoot from './ui/tooltip/TooltipRoot.vue';
import TooltipReference from './ui/tooltip/TooltipReference.vue';
import TooltipContent from './ui/tooltip/TooltipContent.vue';
import type { Work } from '@/domain';
import TimeTrackingEntry from './TimeTrackingEntry.vue';

defineProps<{
  work: Work
}>()

</script>

<template>
  <TooltipRoot>
    <TooltipReference>
      <div class="flex flex-col text-xs text-slate-400">
        <div class="w-28 truncate">es: {{ formatGitLabDuration(work.timeEstimate) }}</div>
        <div class="w-28 truncate">sp: {{ formatGitLabDuration(work.totalTimeSpent) }}</div>
      </div>
    </TooltipReference>

    <TooltipContent placement="left">
      <div class="text-xs grid grid-cols-2 gap-2 text-slate-700">
        <TimeTrackingEntry type="estimate"
          :self-time="work.selfTimeEstimate"
          :children-time="work.children.getTotalTimeEstimate()" />

        <TimeTrackingEntry type="time-spend"
          :self-time="work.selfTimeSpent"
          :children-time="work.children.getTotalTimeSpend()" />
      </div>
    </TooltipContent>
  </TooltipRoot>
</template>