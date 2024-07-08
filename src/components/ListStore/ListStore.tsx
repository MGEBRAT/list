import { makeAutoObservable } from 'mobx'
import { Lists } from '../List/types'

class ListStore {
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
    //чекбоксы
  toggleItem = async (itemId: number) => {
    const updatedItem = this.items.find((item) => item.id === itemId)

    if (updatedItem) {
      updatedItem.isDone = !updatedItem.isDone

      try {
        const response = await fetch(`https://6687cd240bc7155dc0192805.mockapi.io/api/list/lists/${itemId}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(updatedItem),
        })

        if (!response.ok) {
          throw new Error('Failed to update item')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  //удаление
  deleteItem = async (itemId: number) => {
    const deleteItem = this.items.find((item) => item.id === itemId)

    if (deleteItem) {
      this.items = this.items.filter((item) => item.id !== itemId)

      try {
        const response = await fetch(`https://6687cd240bc7155dc0192805.mockapi.io/api/list/lists/${itemId}`, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(deleteItem),
        })

        if (!response.ok) {
          throw new Error('Failed to update item')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

    //добавление данных
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

export default new ListStore()