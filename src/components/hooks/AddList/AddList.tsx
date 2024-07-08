import { makeAutoObservable } from 'mobx'
import { Lists } from '../../List/types'

//добавление данных
class AddList {
    items: Lists[] = []

    constructor() {
        makeAutoObservable(this)
      }
    
    addItem = async (name: string, descr: string) => {
        const newItem: Lists = {
            id: Date.now(),
            name,
            descr,
            isDone: false,
            list: []
        }
    
        try {
          const response = await fetch('https://6687cd240bc7155dc0192805.mockapi.io/api/list/lists', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newItem),
          })
    
          if (response.ok) {
            const data = await response.json()
            this.items.push(data)
          } else {
            throw new Error('Failed to add item')
          }
        } catch (error) {
          console.log(error)
        }
      }

      
}
export default new AddList()