<script setup lang="ts">
import FolderOpen from '@/components/icons/FolderOpen.vue';
import FolderClose from '@/components/icons/FolderClose.vue';
import { ref } from 'vue';

defineProps<{
  title: string;
}>()

const opened = ref(false)

function onToggle(ev: Event) {
  const d = ev.currentTarget as HTMLDetailsElement;
  opened.value = d.open
}
</script>

<template>
  <details @toggle="ev => onToggle(ev)">
    <summary class="flex items-center space-x-2 cursor-pointer mb-4">
      <component class="size-6 stroke-slate-500"
        :is="opened ? FolderOpen : FolderClose" />

      <span class="text-slate-700 font-medium">{{ title }}</span>
    </summary>

    <slot></slot>
  </details>
</template>
