import Label from "@/app/Label";
import Factory from "./Factory";
import { randomBetween } from "./helper";
import { faker } from "@faker-js/faker";

Factory.define('label', () => {
  return new Label({
    id: Date.now(),
    type: randomBetween(['system', 'user']),
    name: faker.color.human(),
    valueType: randomBetween(['none', 'string', 'number',]),
    valueItems: []
  })
})