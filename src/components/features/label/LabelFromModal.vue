<script setup lang="ts">
import Select from '@/components/ui/select/Select.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import { reactive } from 'vue';
import { LabelTypes, LabelValueTypes } from '@/app/Label';
import Modal from '@/components/ui/Modal.vue';

const label = reactive({
  name: '',
  type: '',
  valueType: ''
})

function save() {

}
</script>

<template>
  <Modal title="Add new label"
    :required="true">
    <form @submit.prevent="save"
      class="flex flex-col gap-4">

      <!-- Label Type Select -->
      <div>
        <label for="label-type"
          class="block text-sm font-medium text-gray-700">Type</label>
        <Select id="label-type"
          placeholder="Select Type"
          v-model="label.type">
          <SelectItem v-for="type in LabelTypes"
            :value="type">{{ type }}</SelectItem>
        </Select>
      </div>

      <!-- Label Name Input -->
      <div>
        <label for="label-name"
          class="block text-sm font-medium text-gray-700">Name</label>
        <Input id="label-name"
          v-model="label.name"
          placeholder="Enter Label Name" />
      </div>

      <!-- Label Value Type Select -->
      <div>
        <label for="label-value-type"
          class="block text-sm font-medium text-gray-700">Value Type</label>
        <Select id="label-value-type"
          v-model="label.valueType">
          <SelectItem value=""
            disabled>Select Value Type</SelectItem>
          <SelectItem v-for="type in LabelValueTypes"
            :value="type">{{ type }}</SelectItem>
        </Select>
      </div>

      <!-- Submit Button -->
      <div class="md:col-span-3 flex justify-end">
        <Button type="submit">Add Label</Button>
      </div>

    </form>
  </Modal>
</template>