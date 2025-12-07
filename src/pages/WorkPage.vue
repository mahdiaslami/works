<script setup lang="ts">
import Container from '@/components/layout/BaseContainer.vue';
import CardList from '@/components/ui/card/CardList.vue';
import Card from '@/components/ui/card/CardRoot.vue';
import Tag from '@/components/ui/Tag.vue';
import { useWorkStore } from '@/stores/work';

const workStore = useWorkStore();

</script>

<template>
  <Container class="py-10">
    <h1 class="text-3xl font-semibold text-slate-600 pb-2 mb-6 border-b border-slate-200 leading-tight">
      Works
    </h1>

    <CardList class="grid grid-cols-[auto_auto_1fr] gap-x-4">
      <Card v-for="work in workStore.works"
        :key="work.id"
        class="col-span-4 grid grid-cols-subgrid justify-items-start">
        <h2 class="text-sm">{{ work.title }}</h2>

        <Tag>aut: {{ work.author.username }}</Tag>
        <Tag v-if="work.assignee">ass: {{ work.assignee?.username }}</Tag>
      </Card>
    </CardList>
  </Container>
</template>