import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { container, IssueService } from '@/domain'
import { Category } from '@/domain/categories/category'

export const useIssueStore = defineStore('issue', () => {
  const issueService = container.make<IssueService>(IssueService)
  const categories: Ref<Category[]> = ref<Category[]>([])

  issueService.categories().then((c) => categories.value = c)

  return { categories }
})