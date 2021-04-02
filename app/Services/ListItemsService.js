  
import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
// import { saveState } from "../Utils/LocalStorage.js";

class ListItemsService {
  deleteListItem(id) {
    ProxyState.listItems = ProxyState.listItems.filter(li => li.id != id)
    // saveState()

  }
  addListItem(rawListItem) {
    console.log(rawListItem)
    ProxyState.listItems.push(new ListItem(rawListItem.itemName, rawListItem.taskId))
    // saveState()
    ProxyState.listItems = ProxyState.listItems
    console.log(ProxyState.listItems);
  }
}

export const listItemsService = new ListItemsService();