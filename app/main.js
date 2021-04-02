// import ValuesController from "./Controllers/ValuesController.js";
import TasksController from './Controllers/TasksController.js';
import ListItemsController from './Controllers/ListItemsController.js'

class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController();

  listItemsController = new ListItemsController()
}

window["app"] = new App();
