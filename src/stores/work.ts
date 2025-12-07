import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Work } from '@/domain/works/work'

export const useWorkStore = defineStore('work', () => {
  const works = ref<Work[]>([
    new Work({
      id: 1,
      iid: 101,
      title: 'Implement authentication',
      author: { id: 11, name: 'Alice', username: 'alice' },
      assignee: { id: 12, name: 'Bob', username: 'bob' },
      webUrl: 'https://gitlab.example.com/project/1/-/issues/101'
    }),
    new Work({
      id: 2,
      iid: 102,
      title: 'Add CI pipeline',
      author: { id: 13, name: 'Carol', username: 'carol' },
      assignee: null,
      webUrl: 'https://gitlab.example.com/project/1/-/merge_requests/102'
    }),
    new Work({
      id: 3,
      iid: 103,
      title: 'Refactor components',
      author: { id: 14, name: 'Dave', username: 'dave' },
      assignee: { id: 15, name: 'Eve', username: 'eve' },
      webUrl: 'https://gitlab.example.com/project/1/-/issues/103'
    })
  ])

  function setWorks(items: Work[]) {
    works.value = items
  }

  function addWork(item: Work) {
    works.value.push(item)
  }

  return { works, setWorks, addWork }
})