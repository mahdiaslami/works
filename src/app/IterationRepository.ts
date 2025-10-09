import Iteration, { type IterationAttributes } from "./Iteration";

export default class IterationRepository {
  all(): Iteration[] {
    const list = getFromLocalStorage();
    return list.map((a: IterationAttributes) => new Iteration(a));
  }

  save(iteration: Iteration) {
    const list = getFromLocalStorage();
    list.push(iteration);
    saveInLocalStorage(list);
  }
}

const localStorageKey = '/v1/iterations';

function getFromLocalStorage(): any[] {
  const str = localStorage.getItem(localStorageKey) ?? '[]';
  return tryParse(str) ?? [];
}

function tryParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

function saveInLocalStorage(list: any[]) {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(list)
  );
}