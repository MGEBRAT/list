import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import './List.css'
import listStore from '../ListStore/ListStore'

const List = () => {
  useEffect(() => {
    listStore.fetchItems()
  }, [])

  return (
    <div className='list__block'>
      <ul className='list__items'>
        {listStore.items.map((item) => (
          <li className='list__item' key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.descr}</p>
            </div>
            <input
              className='list__checkbox'
              type="checkbox"
              checked={item.isDone}
              onChange={() => listStore.toggleItem(item.id)}
            />
            <button onClick={() => listStore.deleteItem(item.id)} >Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default observer(List)