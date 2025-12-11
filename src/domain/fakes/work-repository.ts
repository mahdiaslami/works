import type { WorkRepository as IWorkRepository } from '../contracts/work-repository';
import { Work } from '../works/work';
import { WorkCollection } from '../works/work-collection';
import { fakeUser } from '../support/factory';

export class WorkRepository implements IWorkRepository {
  constructor() {}

  async issuesCreatedByMe(): Promise<WorkCollection> {
    const me = {
      id: 1,
      username: 'mahdi.aslami',
      name: 'Mahdi Aslami',
      avatarUrl: '',
      webUrl: ''
    } as unknown as any;

    const other = fakeUser();

    const created1 = {
      id: 101,
      iid: 1001,
      title: 'Fake issue created by me (assigned to me)',
      author: me,
      assignee: me,
      description: `
[task]

- https://gitlab.example.com/project/1/-/issues/1002
- https://gitlab.example.com/project/1/-/issues/2002

[/task]
`,
      webUrl: 'https://gitlab.example.com/project/1/-/issues/1001'
    };

    const created2 = {
      id: 102,
      iid: 1002,
      title: 'Fake issue created by me (assigned to someone else)',
      author: me,
      assignee: other,
      description: '',
      webUrl: 'https://gitlab.example.com/project/1/-/issues/1002'
    };

    const created3 = {
      id: 102,
      iid: 1002,
      title: 'Fake issue created by me (without assignee)',
      author: me,
      assignee: null,
      description: '',
      webUrl: 'https://gitlab.example.com/project/1/-/issues/1003'
    };

    const items = [new Work(created1), new Work(created2), new Work(created3)];
    return new WorkCollection(items);
  }

  async issuesAssignedToMe(): Promise<WorkCollection> {
    const me = {
      id: 1,
      username: 'mahdi.aslami',
      name: 'Mahdi Aslami',
      avatarUrl: '',
      webUrl: ''
    } as unknown as any;

    const other = fakeUser();

    const assigned1 = {
      id: 101,
      iid: 1001,
      title: 'Fake issue created by me (assigned to me)',
      author: me,
      assignee: me,
      description: '',
      webUrl: 'https://gitlab.example.com/project/1/-/issues/1001'
    };

    const assigned2 = {
      id: 202,
      iid: 2002,
      title: 'Fake issue assigned to me (created by someone else)',
      author: other,
      assignee: me,
      description: '',
      webUrl: 'https://gitlab.example.com/project/1/-/issues/2002'
    };

    const items = [new Work(assigned1), new Work(assigned2)];
    return new WorkCollection(items);
  }
}