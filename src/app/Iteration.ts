import AppDate from "./support/AppDate";

export type IterationAttributes = {
  id: number
  startDate: AppDate
  endDate: AppDate
};

export default class Iteration {
  _attributes: IterationAttributes;

  constructor(
    attributes: IterationAttributes = {
      id: Date.now(),
      startDate: new AppDate,
      endDate: (new AppDate).addDays(14)
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

  get startDate() {
    return this._attributes.startDate;
  }

  set startDate(v) {
    this._attributes.startDate = v;
  }

  get endDate() {
    return this._attributes.endDate;
  }

  set endDate(v) {
    this._attributes.endDate = v;
  }

  toJSON() {
    return this._attributes;
  }
}