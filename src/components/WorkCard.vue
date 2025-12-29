<script setup lang="ts">
import Card from '@/components/ui/card/CardRoot.vue';
import Tag from '@/components/ui/Tag.vue';
import IconMicroArrowTurnDownRight from '@/components/icons/IconMicroArrowTurnDownRight.vue'
import type { Work } from '@/domain';
import { computed } from 'vue';
import IconCircleDot from './icons/IconCircleDot.vue';
import { formatGitLabDuration } from '@/utils/helper';
import TooltipRoot from './ui/tooltip/TooltipRoot.vue';
import TooltipReference from './ui/tooltip/TooltipReference.vue';
import TooltipContent from './ui/tooltip/TooltipContent.vue';

const props = withDefaults(
  defineProps<{
    work: Work;
    hasChildren?: boolean;
    depth?: number;
  }>(),
  {
    hasChildren: false,
    depth: 0
  }
);

const marginStart = computed(() => props.depth * 16)

const stateColor = computed(() => {
  if (props.work.state === 'opened') {
    return 'stroke-sky-600'
  } else if (props.work.effectiveState === 'opened') {
    return 'stroke-purple-600'
  }

  return 'stroke-slate-300'
})

</script>

<template>
  <Card class="flex flex-row items-center p-3 space-x-2"
    :style="{ marginInlineStart: marginStart + 'px' }">
    <IconCircleDot class="size-5 stroke-2"
      :class="[stateColor]" />

    <IconMicroArrowTurnDownRight v-if="hasChildren"
      class="fill-slate-400 size-4" />

    <h2 class="text-sm truncate text-left"
      :style="{ width: `calc(14rem - ${marginStart + (hasChildren ? 24 : 0)}px)` }"
      dir="auto">
      <a :href="work.webUrl"
        target="_blank"
        class="hover:text-sky-600 hover:underline">{{ work.title }}</a>
    </h2>

    <div class="flex items-center space-x-2">
      <Tag class="max-w-28 truncate">aut: {{ work.author.username }}</Tag>
      <Tag v-if="work.assignee"
        class="max-w-28 truncate">ass: {{ work.assignee?.username }}</Tag>
    </div>

    <div class="grow"></div>

    <div class="flex items-center space-x-2">
      <TooltipRoot>
        <TooltipReference>
          <div class="flex flex-col text-xs -my-3 text-slate-400">
            <div class="w-28 truncate">es: {{ formatGitLabDuration(work.timeEstimate) }}</div>
            <div class="w-28 truncate">sp: {{ formatGitLabDuration(work.totalTimeSpent) }}</div>
          </div>
        </TooltipReference>

        <TooltipContent placement="bottom">
          <div class="text-xs grid grid-cols-2 text-slate-700">
            <div>
              <div class="p-2">Self Estimate: <br> {{ formatGitLabDuration(work.selfTimeEstimate) }}</div>
              <div class="p-2">Child Estimate: <br> {{ formatGitLabDuration(work.children.getTotalTimeEstimate()) }}
              </div>
            </div>

            <div>
              <div class="p-2">Self Spend: <br> {{ formatGitLabDuration(work.selfTimeSpent) }}</div>
              <div class="p-2">Child Spend: <br> {{ formatGitLabDuration(work.children.getTotalTimeSpend()) }}</div>
            </div>
          </div>
        </TooltipContent>
      </TooltipRoot>
    </div>
  </Card>
</template>