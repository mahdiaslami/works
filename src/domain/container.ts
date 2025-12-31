import { Container } from "@halliganjs/service-container";
import { GitLab } from "./support/gitlab";
import { CategoryRepository as FakeCategoryRepository } from "./fakes/category-repository";
import { CategoryRepository } from "./categories/category-repository";
import { IssueRepository } from "./issues/issue-repository";
import { IssueRepository as FakeIssueRepository } from "./fakes/issue-repository";
import { IssueService } from "./services/issue-service";

export const container = new Container

container.binding(
  GitLab,
  () => new GitLab(import.meta.env.VITE_GITLAB_BASE_URL, import.meta.env.VITE_GITLAB_TOKEN)
)

container.binding(IssueRepository, (c) => {
  return isTrue(import.meta.env.VITE_FAKE) ?
    new FakeIssueRepository()
    : new IssueRepository(c.make(GitLab));
})

container.binding(CategoryRepository, (c) => {
  return isTrue(import.meta.env.VITE_FAKE)
    ? new FakeCategoryRepository()
    : new CategoryRepository()
})

container.binding(IssueService, (c) => new IssueService(
  c.make(IssueRepository),
  c.make(CategoryRepository)
))

function isTrue(env: any) {
  return env === 'true' || env === true
}