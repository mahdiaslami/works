
import { Container } from "@halliganjs/service-container";
import { WorkRepository } from "./works/work-repository";
import { WorkService } from "./works/work-service";
import { GitLab } from "./support/gitlab";

export const container = new Container

container.binding(
  GitLab, 
  () => new GitLab(import.meta.env.VITE_GITLAB_BASE_URL, import.meta.env.VITE_GITLAB_TOKEN)
)

container.binding(WorkRepository, (c) => new WorkRepository(c.make(GitLab)))
container.binding(WorkService, (c) => new WorkService(c.make(WorkRepository)))
