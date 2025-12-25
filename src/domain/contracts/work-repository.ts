import type { WorkCollection } from '../works/work-collection';

export interface WorkRepository {
  issuesCreatedByMe(): Promise<WorkCollection>;
  issuesAssignedToMe(): Promise<WorkCollection>;
  issuesReactedByPencil(): Promise<WorkCollection>;
}