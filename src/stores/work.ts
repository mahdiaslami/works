import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { container, WorkService, type Work } from '@/domain'
import { WorkCollection } from '@/domain/works/work-collection'
import { Category } from '@/domain/categories/category'

export const useWorkStore = defineStore('work', () => {
  const workService = container.make<WorkService>(WorkService)
  const works: Ref<WorkCollection> = ref<WorkCollection>(new WorkCollection())
  const categories: Ref<Category[]> = ref<Category[]>([])

  workService.works().then((v) => works.value = v)
  workService.categories().then((c) => categories.value = c)

  return { works, categories }
})