import {ProxyState} from '../AppState.js'
import { generateId } from "../Utils/GeneratedId.js"
export default class Task {
  constructor(taskName, color, id = generateId()) {
      this.taskName = taskName
      this.color = color
      this.id = id
  }

  get Template() {
    return `
    <div class="col-md-4 py-3">
      <div class="task-card shadow bg-white rounded">
          <div class="text-center ${this.color} p-2 d-flex justify-content-between">
              <h3>${this.taskName}</h3>
              <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask('${this.id}')"></i>
          </div>
          <div id="listItemCount"><span class="ListItemCount"> /${this.ListItemCount}</span></div>
          <div class="p-3">
              <ul>
                  ${this.ListItems}
              </ul>
          </div>
          <form class="d-flex p-2" onsubmit="app.listItemsController.addListItem('${this.id}')">
              <input type="text" name="itemName" id="itemName" class="form-control" placeholder="itemName"
                  aria-describedby="helpId">
              <button type="submit" class="btn btn-success" title='add itemName'><i
                      class="fas fa-plus"></i></button>
          </form>
      </div>
    </div>
    `
  }

  get ListItems() {
    let listItems = ProxyState.listItems.filter(li => li.taskId === this.id)
    let template = ''
    listItems.forEach(li => template += li.Template)
    return template
  }

  get ListItemCount(){
    let listItemCount = ProxyState.listItems.filter(li => li.taskId === this.id && li.complete == false).length
    return listItemCount 
  }

  // get CheckedBox(){
    
  //   let checkedBox = ProxyState.listItems.filter(listItem => listItem.taskId == this.id && listItem.complete == true).length
  //   return checkedBox
  // }
}
