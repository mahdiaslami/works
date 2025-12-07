import { Work } from './work';

export class ToolCollection {
  private _items: Work[];

  constructor(items?: Work[]) {
    this._items = items ?? [];
  }

  get items(): Work[] {
    return this._items;
  }

  get length(): number {
    return this._items.length;
  }

  add(item: Work): void {
    this._items.push(item);
  }

  addMany(items: Work[]): void {
    this._items.push(...items);
  }

  findById(id: number): Work | undefined {
    return this._items.find(i => i.id === id);
  }

  toArray(): Work[] {
    return [...this._items];
  }
}