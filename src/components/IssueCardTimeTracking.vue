<script setup lang="ts">
import { formatGitLabDuration } from '@/utils/helper';
import TooltipRoot from './ui/tooltip/TooltipRoot.vue';
import TooltipReference from './ui/tooltip/TooltipReference.vue';
import TooltipContent from './ui/tooltip/TooltipContent.vue';
import type { Issue } from '@/domain';
import TimeTrackingEntry from './TimeTrackingEntry.vue';

defineProps<{
  issue: Issue
}>()

</script>

<template>
  <TooltipRoot>
    <TooltipReference>
      <div class="flex flex-col text-xs text-slate-400">
        <div class="w-28 truncate">es: {{ formatGitLabDuration(issue.timeEstimate) }}</div>
        <div class="w-28 truncate">sp: {{ formatGitLabDuration(issue.totalTimeSpent) }}</div>
      </div>
    </TooltipReference>

    <TooltipContent placement="left">
      <div class="text-xs grid grid-cols-2 gap-2 text-slate-700">
        <TimeTrackingEntry type="estimate"
          :self-time="issue.selfTimeEstimate"
          :children-time="issue.children.getTotalTimeEstimate()" />

        <TimeTrackingEntry type="time-spend"
          :self-time="issue.selfTimeSpent"
          :children-time="issue.children.getTotalTimeSpend()" />
      </div>
    </TooltipContent>
  </TooltipRoot>
</template>