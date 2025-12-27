import type { Ref } from 'vue';

export interface TooltipContext {
  reference: Ref<HTMLElement | null>;
  isVisible: Ref<boolean>;
}
