import { generateId } from "../Utils/GeneratedId.js"

export default class ListItem {
  constructor(itemName, taskId, id = generateId(), checked = false) {
    this.id = id
    this.itemName = itemName
    this.taskId = taskId
    this.checked = checked
  }

  get Template() {
    // return /*html*/`<ul><input type="checkbox" aria-label="List Item Checkbox" class="mr-3" id="listChkBox" onclick="app.listItemsController.toggleListItem(this.checked, '${this.id}') "${this.checked ? "checked" : ''}>${this.itemName} <i class="fas fa-times ml-2 text-danger" onclick="app.listItemsController.deleteListItem('${this.id}')" title='Delete Your ToDo Item'></i></ul>`

    return /*html*/`<div class ="col-12 my-2"><input type="checkbox" aria-label="Task Checkbox" class="mr-2" id="task-ck-box" 
    onclick="app.listItemsController.toggleListItem(this.checked,'${this.id}')" 
    ${this.checked ? 'checked' : ''}>
    ${this.itemName} <i class="fas fa-times ml-3 text-danger" title='Delete Your ToDo'
    onclick="app.listItemsController.deleteListItem('${this.id}')"
    ></i></div>`
    
  }
}