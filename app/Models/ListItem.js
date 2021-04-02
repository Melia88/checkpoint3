  
import { generateId } from "../Utils/GenerateId.js"

export default class ListItem {
  constructor(itemName, taskId, id = generateId()) {
    this.id = id
    this.itemName = itemName
    this.taskId = taskId
  }

  get Template() {
    return `<li>${this.itemName} <i class="fas fa-times ml-2 text-danger" onclick="app.ingredientsController.deleteIngredient('${this.id}')"></i></li>`
  }
}