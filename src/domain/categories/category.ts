import { WorkCollection } from '../works/work-collection';

export class Category {
  constructor(
    public id: number,
    public name: string,
    public slugs: string[],
    public works: WorkCollection = new WorkCollection()
  ) { }
}