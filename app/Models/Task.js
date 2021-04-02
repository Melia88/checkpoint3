import {ProxyState} from '../AppState.js'
import { generateId } from "../Utils/GenerateId.js"
export default class Task {
  constructor(listName, color, id = generateId()) {
      this.listName = listName
      this.color = color
      this.id = id
  }

  get Template() {
    return `
    <div class="col-md-4">
      <div class="task-card shadow bg-white rounded">
          <div class="text-center ${this.color} p-2 d-flex justify-content-between">
              <h3>${this.listName}</h3>
              <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask('${this.id}')"></i>
          </div>
          <div class="p-3">
              <ul>
                  // $ {this.listItem}
              </ul>
          </div>
          <form class="d-flex p-2" onsubmit="app.ingredientsController.addIngredient('${this.id}')">
              <input type="text" name="name" id="name" class="form-control" placeholder="listItem"
                  aria-describedby="helpId">
              <button type="submit" class="btn btn-success" title='add listItem'><i
                      class="fas fa-plus"></i></button>
          </form>
      </div>
    </div>
    `
  }
}