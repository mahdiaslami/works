import type { State } from '@/types/gitlab';
import { Work } from './work';
import { WorkTreeBuilder } from './work-tree-builder';

export class WorkCollection {
  _items: Work[];

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

  /**
   * Merge this collection with another WorkCollection or an array of Work.
   * Returns a new WorkCollection instance containing deduplicated works by webUrl.
   */
  merge(input: Work[] | WorkCollection): WorkCollection {
    const others: Work[] = input instanceof WorkCollection ? input.items : input;
    const combined = [...this._items, ...(others ?? [])];

    const map = new Map<string, Work>();
    for (const item of combined) {
      if (!item) continue;
      const key = item.webUrl;
      if (!map.has(key)) map.set(key, item);
    }

    return new WorkCollection(Array.from(map.values()));
  }

  getOpened() {
    return new WorkCollection(this._items.filter((w) => w.effectiveState === 'opened'))
  }

  buildTree() {
    return new WorkCollection((new WorkTreeBuilder).resolve(this._items))
  }

  getEffectiveState(): State {
    return this._items.some((w) => w.effectiveState === 'opened') ? 'opened' : 'closed'
  }

  getTotalTimeEstimate() {
    return this._items.reduce(
      (sum, child) => sum + child.selfTimeEstimate,
      0
    )
  }

  getTotalTimeSpend() {
    return this._items.reduce(
      (sum, child) => sum + child.totalTimeSpent,
      0
    )
  }
}