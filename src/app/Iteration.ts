import AppDate from "./support/AppDate";

export type IterationAttributes = {
  id: number
  startDate: string
  endDate: string
};

export default class Iteration {
  _attributes: IterationAttributes;

  constructor(
    attributes: IterationAttributes = {
      id: Date.now(),
      startDate: AppDate.today().toISOString(),
      endDate: AppDate.today().addDays(14).toISOString(),
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
    return new AppDate(this._attributes.startDate);
  }

  set startDate(v) {
    this._attributes.startDate = (new AppDate(v)).toISOString();
  }

  get endDate() {
    return new AppDate(this._attributes.endDate);
  }

  set endDate(v) {
    this._attributes.endDate = (new AppDate(v)).toISOString();
  }

  toJSON() {
    return this._attributes;
  }
}