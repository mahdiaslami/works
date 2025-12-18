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
];

issues[0]!.description = `
[task]

- ${issues[1]!.webUrl}+
- ${issues[2]!.webUrl}+s

[/task]
`

issues[3]!.description = `[parent ${issues[2]!.webUrl}]`