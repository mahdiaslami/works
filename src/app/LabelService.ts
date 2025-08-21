import LabelRepository from "./LabelRepository";
import Label from "./Label";

export default class LabelService {
  private _labelRepository: LabelRepository;

  constructor() {
    this._labelRepository = new LabelRepository();
  }

  all(): Label[] {
    return this._labelRepository.all();
  }

  save(label: Label): void {
    this._labelRepository.save(label);
  }
}