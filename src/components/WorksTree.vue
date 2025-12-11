<script setup lang="ts">
import CardList from '@/components/ui/card/CardList.vue';
import WorkCard from './WorkCard.vue';
import type { Work } from '@/domain';
import { computed } from 'vue';

defineOptions({
  name: 'WorkTree'
})

const props = defineProps<{
  works?: Work[];
}>();

const rootWorks = computed(() => props.works?.filter((w) => !w.hasParent()) ?? []);

function hasChildren(work: Work) {
  return !!props.works?.some((w) => w.isMyParent(work.id));
}

function getChildren(work: Work) {
  return props.works?.filter((w) => w.isMyParent(work.id)) ?? [];
}
</script>

<template>
  <CardList>
    <template v-for="work in rootWorks"
      :key="work.id">

      <details v-if="hasChildren(work)">
        <summary class="no-marker">
          <WorkCard :work="work" />
        </summary>

        <CardList class="mt-2 ms-4">
          <WorkCard v-for="childWork in getChildren(work)"
            :key="childWork.id"
            :work="childWork" />
        </CardList>
      </details>

      <WorkCard v-else :work="work" />
    </template>
  </CardList>
</template>