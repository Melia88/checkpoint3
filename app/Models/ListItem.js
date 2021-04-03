  
import { generateId } from "../Utils/GenerateId.js"

export default class ListItem {
  constructor(itemName, taskId, complete = false, id = generateId()) {
    this.itemName = itemName
    this.taskId = taskId
    this.id = id
    this.complete = complete
  }

  get Template() {
    return /*html*/`<ul><input type="checkbox" aria-label="Checkbox for following text input" class="mr-3" id="list-chk-box" onchange="app.listItemsController.toggleListItem(id)">${this.itemName} <i class="fas fa-times ml-2 text-danger" onclick="app.listItemsController.deleteListItem('${this.id}')"></i></ul>`
  }


}