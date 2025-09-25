<script setup lang="ts">
import { ref } from 'vue';
import Select from '@/components/ui/select/Select.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import LabelTable from '@/components/features/label/LabelTable.vue';
import Label, { type LabelAttributes } from '@/app/Label';
import { factory } from '@/support/helper';

const labels = ref<Label[]>(
  factory('label').count(10).create() as Label[]
);

const newLabelType = ref('');
const newLabelName = ref('');
const newLabelValueType = ref('');

const addLabel = () => {
  if (!newLabelName.value || !newLabelType.value || !newLabelValueType.value) {
    alert('Please fill in all fields');
    return;
  }

  const newLabel = {
    id: labels.value.length + 1,
    type: newLabelType.value,
    name: newLabelName.value,
    valueType: newLabelValueType.value,
    valueItems: [],
  } as LabelAttributes;

  labels.value.push(new Label(newLabel));

  // Reset form fields
  newLabelType.value = '';
  newLabelName.value = '';
  newLabelValueType.value = '';
};
</script>

<template>
  <div class="max-w-screen-xl mx-auto py-10">
    <LabelTable :list="labels" />
  </div>

  <div class="mt-8 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Add New Label</h2>
    <form @submit.prevent="addLabel"
      class="flex flex-col gap-4">

      <!-- Label Type Select -->
      <div>
        <label for="label-type"
          class="block text-sm font-medium text-gray-700">Type</label>
        <Select id="label-type" placeholder="Select Type">
          <SelectItem value="Category">Category</SelectItem>
          <SelectItem value="Tag">Tag</SelectItem>
        </Select>
      </div>

      <!-- Label Name Input -->
      <div>
        <label for="label-name"
          class="block text-sm font-medium text-gray-700">Name</label>
        <Input id="label-name"
          v-model="newLabelName"
          placeholder="Enter Label Name" />
      </div>

      <!-- Label Value Type Select -->
      <div>
        <label for="label-value-type"
          class="block text-sm font-medium text-gray-700">Value Type</label>
        <Select id="label-value-type"
          v-model="newLabelValueType">
          <SelectItem value=""
            disabled>Select Value Type</SelectItem>
          <SelectItem value="String">String</SelectItem>
          <SelectItem value="Number">Number</SelectItem>
          <SelectItem value="Boolean">Boolean</SelectItem>
        </Select>
      </div>

      <!-- Submit Button -->
      <div class="md:col-span-3 flex justify-end">
        <Button type="submit">Add Label</Button>
      </div>

    </form>
  </div>

</template>

<style scoped>
/* Add any specific styles here if needed, though Tailwind should cover most */
</style>