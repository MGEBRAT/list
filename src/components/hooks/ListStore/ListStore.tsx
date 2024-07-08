import { makeAutoObservable } from 'mobx'
import { Lists } from '../../List/types'

class ListStore {
  toggleItem(id: number): void {
    throw new Error('Method not implemented.')
  }
  items: Lists[] = []

  constructor() {
    makeAutoObservable(this)
  }
    //вывод данных
  fetchItems = async () => {
    try {
      const response = await fetch('https://6687cd240bc7155dc0192805.mockapi.io/api/list/lists', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      })

      if (response.ok) {
        const data = await response.json()
        this.items = data
      }
    } catch (error) {
      console.log(error)
    }
  }

}

export default new ListStore()