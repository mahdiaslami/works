interface BaseQueryParam {
  page?: number;
  per_page?: number;
}

// --- Issue
type IssueIn = "title" | "description" | "title,description";

type IssueType =
  | "issue"
  | "incident"
  | "test_case"
  | "task";

type IssueDueDate =
  | "0"
  | "any"
  | "today"
  | "tomorrow"
  | "overdue"
  | "week"
  | "month"
  | "next_month_and_previous_two_weeks";

type IssueHealthStatus =
  | "None"
  | "Any"
  | "on_track"
  | "needs_attention"
  | "at_risk";

type IssueOrderBy =
  | "created_at"
  | "due_date"
  | "label_priority"
  | "milestone_due"
  | "popularity"
  | "priority"
  | "relative_position"
  | "title"
  | "updated_at"
  | "weight";

type IssueScope =
  | "created_by_me"
  | "assigned_to_me"
  | "all";

type IssueSort = "asc" | "desc";

type IssueState =
  | "opened"
  | "closed"
  | "all";

export interface IssueQueryParam extends BaseQueryParam {
  assignee_id?: number;                 // or "None" | "Any" but GitLab uses string keywords
  assignee_username?: string[];

  author_id?: number;
  author_username?: string;

  confidential?: boolean;

  created_after?: string;               // ISO date
  created_before?: string;

  due_date?: IssueDueDate;

  epic_id?: number;                     // or "None" | "Any" (string), but kept number since API value is integer

  health_status?: IssueHealthStatus;

  iids?: number[];

  in?: IssueIn;

  issue_type?: IssueType;

  iteration_id?: number;                // or "None" | "Any"
  iteration_title?: string;

  labels?: string;                      // comma-separated (None, Any, or specific labels)

  milestone_id?: string;                // "None" | "Any" | "Upcoming" | "Started"
  milestone?: string;

  my_reaction_emoji?: string;

  non_archived?: boolean;

  not?: {
    assignee_id?: number;
    assignee_username?: string[];
    author_id?: number;
    author_username?: string;
    iids?: number[];
    iteration_id?: number;
    iteration_title?: string;
    labels?: string;
    milestone?: string;
    milestone_id?: string;
    weight?: number;
  };

  order_by?: IssueOrderBy;

  scope?: IssueScope;

  search?: string;

  sort?: IssueSort;

  state?: IssueState;

  updated_after?: string;               // ISO date
  updated_before?: string;              // ISO date

  weight?: number;                      // "None" or "Any" possible, but typed as number for API compatibility

  with_labels_details?: boolean;
}

// --- Merge Request

type MergeRequestIn = "title" | "description" | "title,description"

type MergeRequestOrderBy =
  | "created_at"
  | "title"
  | "merged_at"
  | "updated_at";

type MergeRequestScope =
  | "created_by_me"
  | "assigned_to_me"
  | "reviews_for_me"
  | "all";

type MergeRequestSort = "asc" | "desc";

type MergeRequestState =
  | "opened"
  | "closed"
  | "locked"
  | "merged"
  | "all";

export interface MergeRequestQueryParam extends BaseQueryParam {
  approved_by_ids?: number[];
  approver_ids?: number[];
  assignee_id?: number;
  author_id?: number;
  author_username?: string;

  created_after?: string;
  created_before?: string;
  deployed_after?: string;
  deployed_before?: string;

  environment?: string;

  in?: MergeRequestIn;

  labels?: string; // comma-separated list (None, Any, or labels)
  merge_user_id?: number;
  merge_user_username?: string;

  milestone?: string;
  my_reaction_emoji?: string;

  not?: {
    labels?: string;
    milestone?: string;
    author_id?: number;
    author_username?: string;
    assignee_id?: number;
    assignee_username?: string;
    reviewer_id?: number;
    reviewer_username?: string;
    my_reaction_emoji?: string;
  };

  order_by?: MergeRequestOrderBy;
  render_html?: boolean;

  reviewer_id?: number;
  reviewer_username?: string;

  scope?: MergeRequestScope;
  search?: string;
  sort?: MergeRequestSort;

  source_branch?: string;
  state?: MergeRequestState;

  target_branch?: string;
  updated_after?: string;
  updated_before?: string;

  view?: "simple";

  with_labels_details?: boolean;
  with_merge_status_recheck?: boolean;

  wip?: "yes" | "no";
}

// --- Todo

type TodoAction =
  | "assigned"
  | "mentioned"
  | "build_failed"
  | "marked"
  | "approval_required"
  | "unmergeable"
  | "directly_addressed"
  | "merge_train_removed"
  | "member_access_requested";

type TodoState = "pending" | "done";

type TodoType =
  | "Issue"
  | "MergeRequest"
  | "Commit"
  | "Epic"
  | "DesignManagement::Design"
  | "AlertManagement::Alert"
  | "Project"
  | "Namespace"
  | "Vulnerability"
  | "WikiPage::Meta";

export interface TodoQueryParam extends BaseQueryParam {
  action?: TodoAction;
  author_id?: number;
  project_id?: number;
  group_id?: number;
  state?: TodoState;
  type?: TodoType;
}

// -- GitLab Entities

export interface User {
  id?: number;
  username?: string;
  name?: string;
  avatarUrl?: string;
  webUrl?: string;
}

export interface MergeRequest {
  id: number,
  iid: number,
  title: string;
  author: User;
  assignee: User | null;
  webUrl: string;
  description: string;
}

export interface Issue {
  id: number,
  iid: number,
  title: string;
  author: User;
  assignee: User | null;
  webUrl: string;
  description: string;
}

export interface Todo {
  target_type: TodoType;
  target?: Issue | MergeRequest | null;
}