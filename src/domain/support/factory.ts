import { faker } from '@faker-js/faker';

import type { User, Issue, MergeRequest } from '../../types/gitlab';

export function fakeUser(): User {

  return {
    id: faker.number.int({ min: 1, max: 99999 }),
    username: faker.internet.username(),
    name: faker.person.fullName(),
    avatarUrl: faker.image.avatar(),
    webUrl: faker.internet.url()
  } as unknown as User;
}

function fakeWork(kind: 'issue' | 'merge_request' = 'issue', baseProjectId = 1): Issue | MergeRequest {
  const iid = faker.number.int({ min: 100, max: 9999 });
  const id = faker.number.int({ min: 1, max: 999999 });
  const typePath = kind === 'issue' ? 'issues' : 'merge_requests';
  return {
    id,
    iid,
    title: faker.lorem.sentence(),
    author: fakeUser(),
    assignee: faker.datatype.boolean() ? fakeUser() : null,
    webUrl: `https://gitlab.example.com/project/${baseProjectId}/-/` + typePath + `/${iid}`
  } as unknown as Issue | MergeRequest;
}

export function works(count = 3): (Issue | MergeRequest)[] {
  const items: (Issue | MergeRequest)[] = [];
  for (let i = 0; i < count; i++) {
    const kind: 'issue' | 'merge_request' = i % 2 === 0 ? 'issue' : 'merge_request';
    items.push(fakeWork(kind, 1));
  }
  return items;
}