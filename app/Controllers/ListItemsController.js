import { ProxyState } from "../AppState.js";
import { listItemsService } from "../Services/ListItemsService.js";
import { saveState } from "../Utils/LocalStorage.js";

//Public
export default class ListItemsController {

  addListItem(taskId) {
    window.event.preventDefault()
    let form = window.event.target
    let rawListItem = {
      itemName: form['itemName'].value,
      taskId: taskId,
    }
    listItemsService.addListItem(rawListItem)
    // @ts-ignore
    form.reset()
    
  }

  deleteListItem(id) {
    listItemsService.deleteListItem(id)
  }

  toggleListItem(bool, id){


    listItemsService.toggleListItem(bool, id)
  }
}