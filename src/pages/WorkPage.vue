<script setup lang="ts">
import Container from '@/components/layout/BaseContainer.vue';
import CardList from '@/components/ui/card/CardList.vue';
import WorkCard from '@/components/WorkCard.vue';
import type { Work } from '@/domain';
import { useWorkStore } from '@/stores/work';
import { computed } from 'vue';

const workStore = useWorkStore();

const rootWorks = computed(() => workStore.works?.filter((w) => !w.hasParent()))

function hasChildren(work: Work) {
  return workStore.works.some((w) => w.isMyParent(work.id))
}

function getChildren(work: Work) {
  return workStore.works.filter((w) => w.isMyParent(work.id))
}
</script>

<template>
  <Container class="py-10">
    <h1 class="text-3xl font-semibold text-slate-600 pb-2 mb-6 border-b border-slate-200 leading-tight">
      Works
    </h1>

    <CardList>
      <template v-for="work in rootWorks"
        :key="work.id">

        <details v-if="hasChildren(work)">
          <summary>
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
  </Container>
</template>
