import type { Issue, User } from "@/types/gitlab";
import { fakeIssues, fakeIssue } from "./factory";

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
  ...openedButCompleted(),
]

function authorAndAssignee() {
  return [
    {
      ...fakeIssue(),
      author: me
    },
    {
      ...fakeIssue(),
      author: me,
      assignee: me
    },
    {
      ...fakeIssue(),
      assignee: me
    },
  ]
}

function nested() {
  const issues = [fakeIssue('nested'), fakeIssue(), fakeIssue(), fakeIssue()]
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

function openedButCompleted() {
  const issues = fakeIssues('opened-but-completed', 2)
  issues[0]!.id = 1000;
  issues[1]!.description = '[Done]'
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
    name: 'Closed & Opened',
    slugs: [
      'closed-and-opened'
    ]
  },
  {
    id: 2,
    name: 'Opened but Completed',
    slugs: [
      'opened-but-completed'
    ]
  },
]