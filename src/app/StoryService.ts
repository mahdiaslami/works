import StoryRepository from "./StoryRepository";
import Story from "./Story";

export default class StoryService {
  private _storyRepository: StoryRepository;

  constructor() {
    this._storyRepository = new StoryRepository();
  }

  all(): Story[] {
    return this._storyRepository.all();
  }

  save(story: Story): void {
    this._storyRepository.save(story);
  }
}