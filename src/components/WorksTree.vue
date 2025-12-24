<script setup lang="ts">
import CardList from '@/components/ui/card/CardList.vue';
import WorkCard from './WorkCard.vue';
import type { WorkCollection } from '@/domain/works/work-collection';

defineOptions({
  name: 'WorkTree'
})

withDefaults(
  defineProps<{
    works: WorkCollection;
    depth: number
  }>(),
  {
    depth: 0
  }
)

</script>

<template>
  <CardList>
    <template v-for="work in works.toArray()"
      :key="work.id">

      <details v-if="work.children.length">
        <summary class="no-marker">
          <WorkCard :work="work"
            :depth="depth" />
        </summary>

        <WorkTree class="mt-2"
          :works="work.children"
          :depth="depth + 1" />
      </details>

      <WorkCard v-else
        :work="work"
        :depth="depth" />
    </template>
  </CardList>
</template>