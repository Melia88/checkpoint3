  
import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
import { saveState } from "../Utils/LocalStorage.js";
// import { saveState } from "../Utils/LocalStorage.js";

class ListItemsService {
  // saveState()
  toggleListItem(id) {
    console.log(id);
    debugger
    // lets find the task w this id 
    // TODO its connected, I need to make this render to the page now.
    let listItem = ProxyState.listItems.find(listItem => listItem.id == id)
    if(listItem.complete == true) {
       listItem.complete = false
      //  ProxyState.listItems.length
    }
    else{
       listItem.complete = true
    }
    saveState()
  }
  deleteListItem(id) {

    if(window.confirm('You Sure About That Delete?')){
      ProxyState.listItems = ProxyState.listItems.filter(li => li.id != id)
    }  
     saveState()
  }
  addListItem(rawListItem) {
    // console.log(rawListItem)
    ProxyState.listItems.push(new ListItem(rawListItem.itemName, rawListItem.taskId, false))
    ProxyState.listItems = ProxyState.listItems
    // console.log(ProxyState.listItems);
    saveState()
  }
}

export const listItemsService = new ListItemsService();
