import Label, { type LabelAttribute } from "./Label";

export default class LabelRepository {
  all(): Label[] {
    const list = getFromLocalStorage();
    return list.map((a: LabelAttribute) => new Label(a));
  }

  save(label: Label) {
    const list = getFromLocalStorage();
    list.push(label);
    saveInLocalStorage(list);
  }
}

const localStorageKey = '/v1/labels';

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