import { Container } from "@halliganjs/service-container";
import { WorkRepository } from "./works/work-repository";
import { WorkService } from "./services/work-service";
import { GitLab } from "./support/gitlab";
import { WorkRepository as FakeWorkRepository } from "./fakes/work-repository";
import { CategoryRepository } from "./categories/category-repository";

export const container = new Container

container.binding(
  GitLab,
  () => new GitLab(import.meta.env.VITE_GITLAB_BASE_URL, import.meta.env.VITE_GITLAB_TOKEN)
)

container.binding(WorkRepository, (c) => {
  return isTrue(import.meta.env.VITE_FAKE) ?
    new FakeWorkRepository()
    : new WorkRepository(c.make(GitLab));
})

container.binding(CategoryRepository, (c) => {
  return new CategoryRepository
})

container.binding(WorkService, (c) => new WorkService(
  c.make(WorkRepository),
  c.make(CategoryRepository)
))

function isTrue(env: any) {
  return env === 'true' || env === true
}