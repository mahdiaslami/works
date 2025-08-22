import { onMounted, onUnmounted } from "vue";

export function useDocumentEventListener(type: keyof DocumentEventMap, listener: (ev: Event) => void) {
  onMounted(() => document.addEventListener(type, listener))
  onUnmounted(() => document.removeEventListener(type, listener))
}