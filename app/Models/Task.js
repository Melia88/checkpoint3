import {ProxyState} from '../AppState.js'
import { generateId } from "../Utils/GeneratedId.js"
export default class Task {
  constructor(taskName, color, id = generateId()) {
      this.taskName = taskName
      this.color = color
      this.id = id
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-4 py-3">
      <div class="task-card shadow bg-white rounded">
          <div class="text-center ${this.color} p-2 d-flex justify-content-between">
              <h3>${this.taskName}</h3>
              <div id="listItemCount"><span class="ListItemCount"> ${ProxyState.listItems.length}/${this.ListItemCount}</span></div>
              <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask('${this.id}')" title='Delete Your Task Box'></i>
          </div>
          
          <div class="p-3">
              <ul>
                  ${this.ListItems}
              </ul>
          </div>
          <form class="d-flex p-2" onsubmit="app.listItemsController.addListItem('${this.id}')">
              <input type="text" name="itemName" id="${this.id}" class="form-control" placeholder="Item Name" aria-describedby="helpId" minlength="3" maxlength="50" required>
                  
              <button type="submit" class="btn btn-success" title='Add Your ToDo Here'><i
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
