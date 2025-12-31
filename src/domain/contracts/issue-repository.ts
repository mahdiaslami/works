import type { IssueCollection } from '../issues/issue-collection';

export interface IssueRepository {
  issuesCreatedByMe(): Promise<IssueCollection>;
  issuesAssignedToMe(): Promise<IssueCollection>;
  issuesReactedByPencil(): Promise<IssueCollection>;
  issuesReactedByWhiteCheckMark(): Promise<Set<number>>
}