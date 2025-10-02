<script setup lang="ts">
import { ref } from 'vue';
import LabelTable from '@/components/features/label/LabelTable.vue';
import Label from '@/app/Label';
import { factory } from '@/support/helper';
import Button from '@/components/ui/Button.vue';
import LabelFromModal from '@/components/features/label/LabelFromModal.vue';

const labels = ref<Label[]>(
  factory('label').count(10).create() as Label[]
);

const isFormModalOpen = ref(false)

</script>

<template>
  <div class="max-w-screen-xl mx-auto py-10">
    <Button @click="isFormModalOpen = true">Add</Button>
    <LabelFromModal v-show="isFormModalOpen" />
    <LabelTable :list="labels" />
  </div>
</template>

<style scoped>
/* Add any specific styles here if needed, though Tailwind should cover most */
</style>