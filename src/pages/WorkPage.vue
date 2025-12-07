<script setup lang="ts">
import Container from '@/components/layout/BaseContainer.vue';
import CardList from '@/components/ui/card/CardList.vue';
import Card from '@/components/ui/card/CardRoot.vue';
import Tag from '@/components/ui/Tag.vue';
import { Work } from '@/domain/works/work';

const works: Work[] = [
  new Work({
    id: 1,
    iid: 101,
    title: 'Implement authentication',
    author: { id: 11, name: 'Alice', username: 'alice' },
    assignee: { id: 12, name: 'Bob', username: 'bob' },
    webUrl: 'https://gitlab.example.com/project/1/-/issues/101'
  }),
  new Work({
    id: 2,
    iid: 102,
    title: 'Add CI pipeline',
    author: { id: 13, name: 'Carol', username: 'carol' },
    assignee: null,
    webUrl: 'https://gitlab.example.com/project/1/-/merge_requests/102'
  }),
  new Work({
    id: 3,
    iid: 103,
    title: 'Refactor components',
    author: { id: 14, name: 'Dave', username: 'dave' },
    assignee: { id: 15, name: 'Eve', username: 'eve' },
    webUrl: 'https://gitlab.example.com/project/1/-/issues/103'
  })
];

</script>

<template>
  <Container class="py-10">
    <h1 class="text-3xl font-semibold text-slate-600 pb-2 mb-6 border-b border-slate-200 leading-tight">
      Works
    </h1>

    <CardList class="grid grid-cols-[auto_auto_1fr] gap-x-4">
      <Card v-for="work in works"
        :key="work.id"
        class="col-span-4 grid grid-cols-subgrid justify-items-start">
        <h2 class="text-sm">{{ work.title }}</h2>

        <Tag>aut: {{ work.author.username }}</Tag>
        <Tag v-if="work.assignee">ass: {{ work.assignee?.username }}</Tag>
      </Card>
    </CardList>
  </Container>
</template>