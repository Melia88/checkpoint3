import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
import Task from "../Models/Task.js";


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    tasks: ProxyState.tasks,
    listItems: ProxyState.listItems
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.tasks = data.tasks.map(task => new Task(task.taskName, task.color, task.id));
    ProxyState.listItems = data.listItems.map(listItem => new ListItem(listItem.itemName, listItem.taskId, listItem.id));
  }
}