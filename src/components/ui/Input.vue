<template>
 <input
 :class="[
 'px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50',
 {
 'border-gray-300 bg-white text-gray-700 focus:border-cyan-500 focus:ring-cyan-500 focus:shadow-md': !disabled,
 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300': disabled,
 },
 ]"
 :disabled="disabled"
 :value="modelValue"
 @input="$emit('update:modelValue', $event.target.value)"
 />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
 disabled: {
 type: Boolean,
 default: false,
 },
 modelValue: {
 type: [String, Number],
 default: '',
 },
});

const emit = defineEmits(['update:modelValue']);
</script>