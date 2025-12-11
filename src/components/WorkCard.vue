<script setup lang="ts">
import Card from '@/components/ui/card/CardRoot.vue';
import Tag from '@/components/ui/Tag.vue';
import type { Work } from '@/domain';

const { work } = defineProps<{
  work: Work;
}>();
</script>

<template>
  <Card class="flex flex-row items-center p-3">
    <h2 class="text-sm">{{ work.title }}</h2>

    <div class="flex items-center space-x-2 ml-auto">
      <Tag>aut: {{ work.author.username }}</Tag>
      <Tag v-if="work.assignee">ass: {{ work.assignee?.username }}</Tag>
    </div>
  </Card>
</template>