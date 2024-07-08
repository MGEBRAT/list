import { makeAutoObservable } from 'mobx'
import { Lists } from '../../List/types'

class RemoveList {
    items: Lists[] = []

  //удаление
  deleteItem = async (itemId: number) => {
    const deleteItem = this.items.find((item) => item.id === itemId)
          const response = await fetch(`https://6687cd240bc7155dc0192805.mockapi.io/api/list/lists/${itemId}`, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(deleteItem),
        })
}
  
}
export default new RemoveList()