export type LabelAttribute = {
  id: number;
  type: "system" | "user";
  name: string;
  value: string | number;
  valueType: "number" | "string" | "enum";
  valueItems: string[];
};

export default class Label {
  _attributes: LabelAttribute;

  constructor(
    attributes: LabelAttribute = {
      id: Date.now(),
      type: "user",
      name: "",
      value: "",
      valueType: "string",
      valueItems: [],
    }
  ) {
    this._attributes = attributes;
  }

  get id() {
    return this._attributes.id;
  }

  set id(v) {
    this._attributes.id = v;
  }

  get type() {
    return this._attributes.type;
  }

  set type(v) {
    this._attributes.type = v;
  }

  get name() {
    return this._attributes.name;
  }

  set name(v) {
    this._attributes.name = v;
  }

  get value() {
    return this._attributes.value;
  }

  set value(v) {
    this._attributes.value = v;
  }

  get valueType() {
    return this._attributes.valueType;
  }

  set valueType(v) {
    this._attributes.valueType = v;
  }

  get valueItems() {
    return this._attributes.valueItems;
  }

  set valueItems(v) {
    this._attributes.valueItems = v;
  }

  toJSON() {
    return this._attributes;
  }
}