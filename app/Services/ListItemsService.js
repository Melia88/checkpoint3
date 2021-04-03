  
import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
// import { saveState } from "../Utils/LocalStorage.js";

class ListItemsService {
  // saveState()
  toggleListItem(id) {
    console.log(id);
    // lets find the task w this id 
    let listItem = ProxyState.listItems.find(listItem => listItem.id === id)
    return listItem.complete
    
    ProxyState.listItems = ProxyState.listItems
    // need to set completed to true
    
    // if(ProxyState.listItems = ProxyState.listItems(li => li.id == id){

    // }
    let listItemCount = ProxyState.listItems.filter(li => li.taskId === this.id && li.complete == false).length
    return listItemCount 
  }
  deleteListItem(id) {

    if(window.confirm('You Sure About That Delete?')){
      ProxyState.listItems = ProxyState.listItems.filter(li => li.id != id)

    }
    
    // saveState()

  }
  addListItem(rawListItem) {
    console.log(rawListItem)
    ProxyState.listItems.push(new ListItem(rawListItem.itemName, rawListItem.taskId, false))
    // saveState()
    ProxyState.listItems = ProxyState.listItems
    console.log(ProxyState.listItems);
  }
}

export const listItemsService = new ListItemsService();
