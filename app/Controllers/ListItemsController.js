import { ProxyState } from "../AppState.js";
import { listItemsService } from "../Services/ListItemsService.js";

// function _draw() {
//   let listItems = ProxyState.listItems;
//   let template = ''
//   listItems.forEach(li => template += li.Template)
//   document.getElementById("list-chk-box").innerHTML = template
// }

//Public
export default class ListItemsController {

  // constructor(){
  //   ProxyState.on("listItems", _draw);
  //   _draw()
  // }
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

  toggleListItem(id){
    // let itemNums = 0
    // let chkBox = document.getElementById('list-chk-box')
    // // @ts-ignore
    // if(chkBox.checked){
    //   console.log('yes checked')
    //   // let listItem = ProxyState.listItems.find(listItem => listItem.id === id && listItem.complete == false).length)
    // // return listItem.complete
    // }
    // else {
    //     console.log('not checked');
    //   listItemsService.toggleListItem(id)
    // }  
    listItemsService.toggleListItem(id)
  }
}