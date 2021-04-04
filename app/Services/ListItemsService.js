import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListItemsService {
  deleteListItem(id) {

    if(window.confirm('You Sure About That Delete?')){
      ProxyState.listItems = ProxyState.listItems.filter(i => i.id != id)
      saveState()
    }  
  }
  addListItem(rawListItem) {
    ProxyState.listItems.push(new ListItem(rawListItem.itemName, rawListItem.taskId)),
    saveState(),
    ProxyState.listItems = ProxyState.listItems
  }
  toggleListItem(bool, id) {
    ProxyState.listItems.find(i => i.id === id).checked = bool
    saveState()
    ProxyState.listItems = ProxyState.listItems
  }
}

export const listItemsService = new ListItemsService();
