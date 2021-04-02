  
import { listItemsService } from "../Services/ListItemsService.js";


//Public
export default class ListItemsController {

  addListItem(taskId) {
    window.event.preventDefault()
    let form = window.event.target
    let rawListItem = {
      itemName: form['itemName'].value,
      taskId: taskId
    }
    listItemsService.addListItem(rawListItem)
    // @ts-ignore
    form.reset()
  }

  deleteListItem(id) {
    listItemsService.deleteListItem(id)
  }

}