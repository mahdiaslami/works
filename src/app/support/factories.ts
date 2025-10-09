import Label from "@/app/Label";
import Factory from "./Factory";
import { randomBetween } from "./helper";
import { faker } from "@faker-js/faker";
import Story from "@/app/Story";

Factory.define('label', () => {
  return new Label({
    id: Date.now(),
    type: randomBetween(['system', 'user']),
    name: faker.color.human(),
    valueType: randomBetween(['none', 'string', 'number',]),
    valueItems: []
  })
})

Factory.define('story', () => {
  return new Story({
    id: Date.now(),
    title: faker.lorem.sentence(5)
  })
})