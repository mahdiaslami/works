
export type TaskAttributes = {
  id: number
  title: string
}

export default class Task {
  _attributes: TaskAttributes

  constructor(
    attributes: TaskAttributes = { id: Date.now(), title: '' }
  ) {
    this._attributes = attributes
  }

  get id() {
    return this._attributes.id
  }

  set id(v) {
    this._attributes.id = v
  }

  get title() {
    return this._attributes.title
  }

  set title(v) {
    this._attributes.title = v
  }

  toJSON() {
    return this._attributes
  }
}

