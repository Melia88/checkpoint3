import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";


class TasksService {
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
  constructor(){

    console.log('From Service');
  }
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask.taskName, rawTask.color)]
    console.log(ProxyState.tasks);
  }
}

export const tasksService = new TasksService();
