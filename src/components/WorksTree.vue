<script setup lang="ts">
import CardList from '@/components/ui/card/CardList.vue';
import WorkCard from './WorkCard.vue';
import type { WorkCollection } from '@/domain/works/work-collection';

defineOptions({
  name: 'WorkTree'
})

defineProps<{
  works: WorkCollection;
}>();

</script>

<template>
  <CardList>
    <template v-for="work in works.toArray()"
      :key="work.id">

      <details v-if="work.children.length">
        <summary class="no-marker">
          <WorkCard :work="work" />
        </summary>

        <WorkTree class="mt-2 ms-4" :works="work.children" />
      </details>

      <WorkCard v-else :work="work" />
    </template>
  </CardList>
</template>