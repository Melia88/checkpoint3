import TasksController from './Controllers/TasksController.js';
import ListItemsController from './Controllers/ListItemsController.js';

class App {
  tasksController = new TasksController();

  listItemsController = new ListItemsController()
}

window["app"] = new App();
