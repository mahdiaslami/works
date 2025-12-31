import { IssueCollection } from '../issues/issue-collection';

export class Category {
  constructor(
    public id: number,
    public name: string,
    public slugs: string[],
    public issues: IssueCollection = new IssueCollection()
  ) { }
}