<script setup lang="ts">
import Card from '@/components/ui/card/CardRoot.vue';
import Tag from '@/components/ui/Tag.vue';
import IconMicroArrowTurnDownRight from '@/components/icons/IconMicroArrowTurnDownRight.vue'
import type { Issue } from '@/domain';
import { computed } from 'vue';
import IconCircleDot from './icons/IconCircleDot.vue';
import IssueCardTimeTracking from './IssueCardTimeTracking.vue';


const props = withDefaults(
  defineProps<{
    issue: Issue;
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
  if (props.issue.state === 'opened') {
    return 'stroke-sky-600'
  } else if (props.issue.effectiveState === 'opened') {
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
      <a :href="issue.webUrl"
        target="_blank"
        class="hover:text-sky-600 hover:underline">{{ issue.title }}</a>
    </h2>

    <div class="flex items-center space-x-2">
      <Tag class="max-w-28 truncate">aut: {{ issue.author.username }}</Tag>
      <Tag v-if="issue.assignee"
        class="max-w-28 truncate">ass: {{ issue.assignee?.username }}</Tag>
    </div>

    <div class="grow"></div>

    <div class="-my-3">
      <IssueCardTimeTracking :issue="issue" />
    </div>
  </Card>
</template>