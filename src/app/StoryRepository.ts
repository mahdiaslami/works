import Story, { type StoryAttributes } from "./Story";

export default class StoryRepository {
  all(): Story[] {
    const list = getFromLocalStorage()

    return list.map((a: StoryAttributes) => new Story(a))
  }

  save(t: Story) {
    const list = getFromLocalStorage()
    list.push(t)
    saveInLocalStorage(list)
  }
}

const localStorageKey = '/v1/stories'

function getFromLocalStorage(): any[] {
  const str = localStorage.getItem(localStorageKey) ?? '[]'

  return tryParse(str) ?? []
}

function tryParse(s: string) {
  try {
    return JSON.parse(s)
  } catch {
    return null
  }
}

function saveInLocalStorage(list: any[]) {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(list)
  )
}