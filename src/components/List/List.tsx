import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import './List.css'
import listStore from '../hooks/ListStore/ListStore'
import removeList  from '../hooks/RemoveList/RemoveList'
import cheked from '../hooks/Cheked/Cheked'

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
              onChange={() => cheked.toggleItem(item.id)}
            />
            <button onClick={() => removeList.deleteItem(item.id)} >Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default observer(List)