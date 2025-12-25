import { Container } from "@halliganjs/service-container";
import { WorkRepository } from "./works/work-repository";
import { WorkService } from "./services/work-service";
import { GitLab } from "./support/gitlab";
import { WorkRepository as FakeWorkRepository } from "./fakes/work-repository";


export const container = new Container

container.binding(
  GitLab, 
  () => new GitLab(import.meta.env.VITE_GITLAB_BASE_URL, import.meta.env.VITE_GITLAB_TOKEN)
)

container.binding(WorkRepository, (c) => {
  if (isTrue(import.meta.env.VITE_FAKE)) {
    return new FakeWorkRepository();
  }
  return new WorkRepository(c.make(GitLab));
})
container.binding(WorkService, (c) => new WorkService(c.make(WorkRepository)))

function isTrue(env: any) {
  return env === 'true' || env === true
}