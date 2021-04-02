// import ValuesController from "./Controllers/ValuesController.js";
import TasksController from './Controllers/TasksController.js';

class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController();
}

window["app"] = new App();
