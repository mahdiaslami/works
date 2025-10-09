import Factory from "./Factory";

export function factory(type: string, count = 1) {
  return new Factory({ count, type})
}

export function randomBetween(arr: any[]): any {
  return arr[randomInt(arr.length - 1)]
}

export function randomInt(max: number, min = 0) {
  return Math.floor(Math.random() * max + min)
}