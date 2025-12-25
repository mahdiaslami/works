import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { container, WorkService, type Work } from '@/domain'
import { Category } from '@/domain/categories/category'

export const useWorkStore = defineStore('work', () => {
  const workService = container.make<WorkService>(WorkService)
  const categories: Ref<Category[]> = ref<Category[]>([])

  workService.categories().then((c) => categories.value = c)

  return { categories }
})