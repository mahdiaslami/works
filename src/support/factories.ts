import Label from "@/app/Label";
import Factory from "./Factory";
import { randomBetween } from "./helper";
import { faker } from "@faker-js/faker";
import Task from "@/app/Task";

Factory.define('label', () => {
  return new Label({
    id: Date.now(),
    type: randomBetween(['system', 'user']),
    name: faker.color.human(),
    valueType: randomBetween(['none', 'string', 'number',]),
    valueItems: []
  })
})

Factory.define('task', () => {
  return new Task({
    id: Date.now(),
    title: faker.lorem.sentence(5)
  })
})