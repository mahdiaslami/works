import type { State } from '@/types/gitlab';
import { Issue } from './issue';
import { IssueTreeBuilder } from './issue-tree-builder';

export class IssueCollection {
  _items: Issue[];

  constructor(items?: Issue[]) {
    this._items = items ?? [];
  }

  get items(): Issue[] {
    return this._items;
  }

  get length(): number {
    return this._items.length;
  }

  add(item: Issue): void {
    this._items.push(item);
  }

  addMany(items: Issue[]): void {
    this._items.push(...items);
  }

  findById(id: number): Issue | undefined {
    return this._items.find(i => i.id === id);
  }

  toArray(): Issue[] {
    return [...this._items];
  }

  /**
   * Merge this collection with another IssueCollection or an array of Issue.
   * Returns a new IssueCollection instance containing deduplicated issues by webUrl.
   */
  merge(input: Issue[] | IssueCollection): IssueCollection {
    const others: Issue[] = input instanceof IssueCollection ? input.items : input;
    const combined = [...this._items, ...(others ?? [])];

    const map = new Map<string, Issue>();
    for (const item of combined) {
      if (!item) continue;
      const key = item.webUrl;
      if (!map.has(key)) map.set(key, item);
    }

    return new IssueCollection(Array.from(map.values()));
  }

  getOpened() {
    return new IssueCollection(this._items.filter((w) => w.effectiveState === 'opened'))
  }

  withoutCompleted(completed: Set<number>) {
    return new IssueCollection(this._items.filter((w) => !w.isCompleted(completed)))
  }

  buildTree() {
    return new IssueCollection((new IssueTreeBuilder).resolve(this._items))
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