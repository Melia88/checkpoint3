  
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

  toggleListItem(id){
    let itemNums = 0
    let chkBox = document.getElementById('list-chk-box')
    // @ts-ignore
    if(chkBox.checked){
      console.log('yes checked')
    }
    else {
      console.log('not checked');
    }
    // listItemsService.toggleListItem(id)
  }

}