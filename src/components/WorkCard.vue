<script setup lang="ts">
import Card from '@/components/ui/card/CardRoot.vue';
import Tag from '@/components/ui/Tag.vue';
import MicroArrowTurnDownRight from '@/components/icons/MicroArrowTurnDownRight.vue'
import type { Work } from '@/domain';
import { computed } from 'vue';
import CircleDot from './icons/CircleDot.vue';
import { formatDuration } from '@/utils/helper';

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
    <CircleDot class="size-5 stroke-2"
      :class="[stateColor]" />

    <MicroArrowTurnDownRight v-if="hasChildren"
      class="fill-slate-400 size-4" />

    <h2 class="text-sm truncate"
      :style="{ width: `calc(14rem - ${marginStart + (hasChildren ? 24 : 0)}px)` }">
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
      <Tag class="max-w-28 truncate">es: {{ formatDuration(work.timeEstimate) }}</Tag>
      <Tag class="max-w-28 truncate">sp: {{ formatDuration(work.totalTimeSpent) }}</Tag>
    </div>
  </Card>
</template>