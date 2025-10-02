
type FactoryAttributes = {
  count: number
  type: string
}

const creators: Record<string, () => any> = {}


export default class Factory {
  _attributes: FactoryAttributes

  constructor(attributes: FactoryAttributes) {
    this._attributes = attributes;
  }

  count(value: number) {
    return new Factory({ ...this._attributes, count: value })
  }

  create() {
    const count = this._attributes.count

    if (count === 0) {
      return null
    } else if (count ===1) {
      return creators[this._attributes.type]()
    }
    
    const arr = []

    for (let i = 0; i < this._attributes.count; i++) {
      arr.push(creators[this._attributes.type]());
    }

    return arr
  }

  static define(name: string, callable: () => any) {
    creators[name] = callable
  }
}
