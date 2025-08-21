import Task, { type TaskAttribute } from "./Task";

export default class TaskRepository {
  all(): Task[] {
    const list = getFromLocalStorage()

    return list.map((a: TaskAttribute) => new Task(a))
  }

  save(t: Task) {
    const list = getFromLocalStorage()
    list.push(t)
    saveInLocalStorage(list)
  }
}

const localStorageKey = '/v1/subjects'

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