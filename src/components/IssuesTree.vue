<script setup lang="ts">
import CardList from '@/components/ui/card/CardList.vue';
import IssueCard from './IssueCard.vue';
import type { IssueCollection } from '@/domain/issues/issue-collection';

defineOptions({
  name: 'IssueTree'
})

withDefaults(
  defineProps<{
    issues: IssueCollection;
    depth?: number
  }>(),
  {
    depth: 0
  }
)

</script>

<template>
  <CardList>
    <template v-for="issue in issues.toArray()"
      :key="issue.id">

      <details v-if="issue.children.length">
        <summary class="no-marker">
          <IssueCard :issue="issue"
            :depth="depth"
            has-children />
        </summary>

        <IssueTree class="mt-2"
          :issues="issue.children"
          :depth="depth + 1" />
      </details>

      <IssueCard v-else
        :issue="issue"
        :depth="depth" />
    </template>
  </CardList>
</template>