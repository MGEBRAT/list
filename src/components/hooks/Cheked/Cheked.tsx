import { makeAutoObservable } from "mobx"
import { Lists } from "../../List/types"


class Checked {
    items: Lists[] = []

    constructor() {
      makeAutoObservable(this)
    }
  
   //чекбоксы
    toggleItem = async (itemId: number) => {
        const updatedItem = this.items.find((item) => item.id === itemId)
      console.log(updatedItem)
        if (updatedItem) {
          updatedItem.isDone = !updatedItem.isDone
    
            const response = await fetch(`https://6687cd240bc7155dc0192805.mockapi.io/api/list/lists/${itemId}`, {
              method: 'PUT',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(updatedItem),
            })
    
        }
      }
}

export default new Checked()