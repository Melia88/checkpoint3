import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js";



//Private
function _draw() {
  let tasks = ProxyState.tasks;
  let template = ''
  if (tasks.length == 0) {
    template += '<div class="col text-center"><p><em>No Tasks!! Go Have Fun!!</em><p></div>'
  }
  // let tasks = ProxyState.tasks;
  // let template = ''
  tasks.forEach(t => template += t.Template)
  document.getElementById("app").innerHTML = template
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw);
    ProxyState.on("listItems", _draw);
    loadState()
    _draw()
    // console.log('From Controller');
  }

  addTask() {
    window.event.preventDefault()
    let form =  window.event.target
    let rawTask = {
      taskName: form['taskName'].value,
      color: form['color'].value
    }
    tasksService.addTask(rawTask)

    // @ts-ignore
    form.reset()
  }

  deleteTask(id){
    tasksService.deleteTask(id)
  }

}
