
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import ModalOverlay from './ModalOverlay.vue';
import ModalHeader from './ModalHeader.vue';
import ModalContent from './ModalContent.vue';

interface Props {
  modelValue: boolean;
  title?: string;
  required?: boolean;
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'close'): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  title: '',
  required: false,
});

const handleOverlayClick = () => {
  if (!props.required) {
    emit('update:modelValue', false);
    emit('close');
  }
};

const handleCloseClick = () => {
  if (!props.required) {
    emit('update:modelValue', false);
    emit('close');
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <ModalOverlay
          :required="required"
          @close="handleOverlayClick"
        />

        <div
          class="relative bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mx-auto mt-10"
          role="document"
        >
          <ModalHeader
            :title="title"
            :required="required"
            @close="handleCloseClick"
          />
          <ModalContent>
            <slot></slot>
          </ModalContent>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Transition styles for modal fade effect */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
</style>