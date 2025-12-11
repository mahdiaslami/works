import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { container, WorkService, type Work } from '@/domain'

export const useWorkStore = defineStore('work', () => {
  const workService = container.make<WorkService>(WorkService)
  const works: Ref<Work[]> = ref<Work[]>([])

  workService.get().then((v) => works.value = v)

  return { works }
})