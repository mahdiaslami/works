import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { container, WorkService, type Work } from '@/domain'
import { WorkCollection } from '@/domain/works/work-collection'

export const useWorkStore = defineStore('work', () => {
  const workService = container.make<WorkService>(WorkService)
  const works: Ref<WorkCollection> = ref<WorkCollection>(new WorkCollection())

  workService.works().then((v) => works.value = v)

  return { works }
})