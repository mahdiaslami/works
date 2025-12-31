import { faker } from '@faker-js/faker';

import type { User, Issue } from '../../types/gitlab';

export function fakeUser(): User {

  return {
    id: faker.number.int({ min: 1, max: 99999 }),
    username: faker.internet.username(),
    name: faker.person.fullName(),
    avatarUrl: faker.image.avatar(),
    webUrl: faker.internet.url()
  } as User;
}

export function fakeIssue(
  projectName = faker.color.human(),
  kind: 'issue' | 'merge_request' = 'issue',
): Issue {
  const iid = faker.number.int({ min: 100, max: 9999 });
  const id = faker.number.int({ min: 1, max: 999999 });
  const typePath = kind === 'issue' ? 'issues' : 'merge_requests';
  return {
    id,
    iid,
    title: faker.lorem.sentence(),
    description: faker.lorem.sentences(5),
    author: fakeUser(),
    assignee: faker.datatype.boolean() ? fakeUser() : null,
    webUrl: `https://gitlab.example.com/project/${projectName}/-/` + typePath + `/${iid}`,
    state: 'opened',
    timeEstimate: faker.number.int({ min: 300, max: 16_000_000 }),
    totalTimeSpent: faker.number.int({ min: 300, max: 1_000_000 }),
  };
}

export function fakeIssues(
  projectName = faker.color.human(),
  count = 1
): Issue[] {
  return Array.from({ length: count }, () => fakeIssue(projectName, 'issue'));
}