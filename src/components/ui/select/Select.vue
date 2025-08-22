<script setup lang="ts">
import { ref, provide } from 'vue';
import IconChevronDown from '@/components/icon/IconChevronDown.vue';
import { useDocumentEventListener } from '@/composables/document-event-listener';

withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  {
    placeholder: 'Select an option'
  }
)

const emit = defineEmits<{
  select: [Event]
}>();

const isOpen = ref(false);
const selectedValue= ref<string | null>(null)

provide('select-on-select', (ev: Event) => {
  emit('select', ev)
  selectedValue.value = (ev.target as HTMLElement).textContent
  isOpen.value = false
});

useDocumentEventListener('click', () => isOpen.value = false)
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      class="inline-flex justify-between items-center w-full rounded-md border 
      border-gray-300 shadow-sm px-4 py-1.5 bg-white text-sm font-medium
      text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0
      focus:border-gray-900"
      @click.stop="isOpen = !isOpen"
    >
      <span>{{ selectedValue || placeholder }}</span>
      <IconChevronDown class="ml-2 size-4" />
    </button>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg
      bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100
      focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <slot></slot>
    </div>
  </div>
</template>