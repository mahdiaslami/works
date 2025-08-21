import TaskRepository from "./TaskRepository";
import Task from "./Task";

export default class TaskService {
  private _taskRepository: TaskRepository;

  constructor() {
    this._taskRepository = new TaskRepository();
  }

  all(): Task[] {
    return this._taskRepository.all();
  }

  save(task: Task): void {
    this._taskRepository.save(task);
  }
}