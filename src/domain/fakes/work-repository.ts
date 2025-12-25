import type { WorkRepository as IWorkRepository } from '../contracts/work-repository';
import { Work } from '../works/work';
import { WorkCollection } from '../works/work-collection';
import { fakeWork } from '../support/factory';
import type { User } from '@/types/gitlab';
import type { Issue } from '../support/gitlab';

export class WorkRepository implements IWorkRepository {
  constructor() { }

  async issuesCreatedByMe(): Promise<WorkCollection> {
    const items = issues.map((i) => new Work(i))
      .filter((w) => w.author === me);

    return new WorkCollection(items);
  }

  async issuesAssignedToMe(): Promise<WorkCollection> {
    const items = issues.map((i) => new Work(i))
      .filter((w) => w.assignee === me);

    return new WorkCollection(items);
  }

  async issuesReactedByPencil(): Promise<WorkCollection> {
    return new WorkCollection([]);
  }
}

// --- Data ---

const me = {
  id: 1,
  username: 'mahdi.aslami',
  name: 'Mahdi Aslami',
  avatarUrl: '',
  webUrl: ''
} as User;

const issues: Issue[] = [
  { ...fakeWork(), author: me },
  { ...fakeWork(), author: me, assignee: me },
  { ...fakeWork(), assignee: me },
  { ...fakeWork(), author: me },

  { ...fakeWork(), assignee: me },
  { ...fakeWork(), assignee: me },
];

// Nested
issues[0]!.description = `
[task]

- ${issues[1]!.webUrl}+
- ${issues[2]!.webUrl}+s

[/task]
`

issues[3]!.description = `[parent ${issues[2]!.webUrl}]`

// Closed & Opened
issues[0]!.state = 'closed'
issues[1]!.state = 'closed'
issues[2]!.state = 'closed'
issues[3]!.state = 'opened' // a child of child
issues[4]!.state = 'opened' // a root
issues[5]!.state = 'closed' // a root