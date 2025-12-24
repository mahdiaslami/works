<script setup lang="ts">
import Card from '@/components/ui/card/CardRoot.vue';
import Tag from '@/components/ui/Tag.vue';
import type { Work } from '@/domain';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    work: Work;
    depth?: number;
  }>(),
  {
    depth: 0
  }
);

const marginStart = computed(() => props.depth * 16)

</script>

<template>
  <Card class="flex flex-row items-center p-3"
    :style="{ marginInlineStart: marginStart + 'px' }">
    <h2 class="text-sm truncate me-2"
      :style="{ width: `calc(14rem - ${marginStart}px)` }">
      <a :href="work.webUrl"
        target="_blank"
        class="hover:text-sky-600 hover:underline">{{ work.title }}</a>
    </h2>

    <div class="flex items-center space-x-2">
      <Tag class="w-28 truncate">aut: {{ work.author.username }}</Tag>
      <Tag v-if="work.assignee"
        class="w-28 truncate">ass: {{ work.assignee?.username }}</Tag>
    </div>
  </Card>
</template>