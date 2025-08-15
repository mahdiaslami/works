import Subject, { type SubjectAttribute } from "./Subject";

export default class SubjectRepository {
    getAll(): Subject[] {
        const list = getFromLocalStorage()

        return list.map((a: SubjectAttribute) => new Subject(a))
    }

    save(s: Subject) {

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