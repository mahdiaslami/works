import type { Issue, User } from "@/types/gitlab";
import { fakeIssues, fakeWork } from "./factory";

export const me = {
  id: 1,
  username: 'mahdi.aslami',
  name: 'Mahdi Aslami',
  avatarUrl: '',
  webUrl: ''
} as User;

export const issues: Issue[] = [
  ...authorAndAssignee(),
  ...nested(),
  ...closedAndOpened(),
]

function authorAndAssignee() {
  return [
    {
      ...fakeWork(),
      author: me
    },
    {
      ...fakeWork(),
      author: me,
      assignee: me
    },
    {
      ...fakeWork(),
      assignee: me
    },
  ]
}

function nested() {
  const issues = [fakeWork('nested'), fakeWork(), fakeWork(), fakeWork()]
  issues[0]!.description = `
[task]

- ${issues[1]!.webUrl}+
- ${issues[2]!.webUrl}+s

[/task]
`
  issues[3]!.description = `[parent ${issues[2]!.webUrl}]`

  return issues
}

function closedAndOpened() {
  const issues = fakeIssues('closed-and-opened', 4)

  issues[0]!.state = 'opened' // a root
  issues[1]!.state = 'closed' // a root

  issues[2]!.state = 'closed' // a root
  issues[3]!.state = 'opened' // a child
  issues[3]!.description = `[parent ${issues[2]!.webUrl}]`

  return issues
}

export const categories = [
  {
    id: 1,
    name: 'Nested',
    slugs: [
      'nested'
    ]
  },
  {
    id: 2,
    name: 'Closed&Opened',
    slugs: [
      'closed-and-opened'
    ]
  },
]