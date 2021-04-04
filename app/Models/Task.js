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
          <div class="d-flex flex-column">
              <h3>${this.taskName}</h3>
              <div> ${this.ListItemsLeft} / ${this.ListItemTotal}</div>
              </div>
              <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask('${this.id}')" title='Delete Your Task Box'></i>
          </div>
          
          <div class="p-3">
              <ul>
                  ${this.ListItems}
              </ul>
          </div>
          <form class="d-flex p-2" onsubmit="app.listItemsController.addListItem('${this.id}')">
              <input type="text" name="itemName" id="itemName" class="form-control" placeholder="Add Item..." aria-describedby="helpId" minlength="3" maxlength="50" required>
                  
              <button type="submit" class="btn btn-primary" title='Add Your ToDo Here'><i
                      class="fas fa-plus"></i></button>
          </form>
      </div>
    </div>
    `
  }

  get ListItems() {
    let listItems = ProxyState.listItems.filter(i => i.taskId === this.id)
    let template = ''
    listItems.forEach(i => template += i.Template)
    return template
  }

  get ListItemTotal(){
    let listItemTotal = ProxyState.listItems.filter(i => i.taskId === this.id)
    return listItemTotal.length 
  }

  get ListItemsLeft(){
    let listItemsLeft = ProxyState.listItems.filter(li => li.taskId === this.id && li.checked == false)
    return listItemsLeft.length
  }  
}
