import IterationRepository from "./IterationRepository";
import Iteration from "./Iteration";

export default class IterationService {
  private _iterationRepository: IterationRepository;

  constructor() {
    this._iterationRepository = new IterationRepository();
  }

  all(): Iteration[] {
    return this._iterationRepository.all();
  }

  save(iteration: Iteration): void {
    this._iterationRepository.save(iteration);
  }
}