import { ref } from 'vue'
import { defineStore } from 'pinia'
import { container, WorkService, Work } from '@/domain'

export const useWorkStore = defineStore('work', () => {
  const workService = container.make<WorkService>(WorkService)
  const works = ref<Work[]>([])

  workService.get().then((v) => works.value = v)

  function setWorks(items: Work[]) {
    works.value = items
  }

  function addWork(item: Work) {
    works.value.push(item)
  }

  return { works, setWorks, addWork }
})