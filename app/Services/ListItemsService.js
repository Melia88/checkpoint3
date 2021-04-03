  
import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
// import { saveState } from "../Utils/LocalStorage.js";

class ListItemsService {
  // saveState()
  toggleListItem(id) {
    console.log(id);
    
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

    // let listItemsCount = [listItem]
    // if(listItem.      (id) == true)
    // return false
    // else {
    //   return true
    // }
    
      
    // ProxyState.listItems = ProxyState.listItems
    // need to set complete to true
    
    // if(ProxyState.listItems = ProxyState.listItems(li => li.id == id){

    // }
    // let listItemCount = ProxyState.listItems.filter(li => li.taskId === this.id && li.complete == false).length
    // return listItemCount 
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
