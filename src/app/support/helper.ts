import Story from "../Story";
import StoryRepository from "../StoryRepository";
import Factory from "./Factory";

export function factory<T>(type: string, count = 1) {
  return new Factory<T>({ count, type})
}

export function randomBetween(arr: any[]): any {
  return arr[randomInt(arr.length - 1)]
}

export function randomInt(max: number, min = 0) {
  return Math.floor(Math.random() * max + min)
}

export function seed() {
  const storyRepository = new StoryRepository();

  (<Story[]>factory<Story>('story', 20).create())
    .forEach((s: Story) => storyRepository.save(s))
}