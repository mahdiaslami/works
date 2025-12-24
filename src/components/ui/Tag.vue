<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'UiTag' })

const props = defineProps({
  label: { type: String, default: '' },
  active: { type: Boolean, default: false }
})

const classes = computed(() => {
  const base = 'px-2.5 py-0.5 rounded-full text-xs font-medium'
  const activeCls = 'bg-sky-200 text-sky-800 border border-sky-300'
  const inactiveCls = 'bg-slate-100 text-slate-700'
  return `${base} ${props.active ? activeCls : inactiveCls}`
})
</script>

<template>
  <span :class="classes" role="status">
    <slot>{{ label }}</slot>
  </span>
</template>

