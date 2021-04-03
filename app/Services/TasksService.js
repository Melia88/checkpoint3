import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
import Task from "../Models/Task.js";
import { listItemsService } from "./ListItemsService.js";


class TasksService {
  deleteTask(id) {
    
    if(window.confirm('You Sure About That Delete?')){
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)

    }
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
