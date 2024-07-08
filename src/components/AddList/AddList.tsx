import React, { useState } from 'react'
import AddLists from '../hooks/AddList/AddList'

const AddList = () => {
  const [name, setName] = useState('')
  const [descr, setDescr] = useState('')

  const handleAdd = () => {
    AddLists.addItem(name, descr)
    setName('')
    setDescr('')
  }

  return (
    <div>
      <h2>Добавить</h2>
      <div>
        <p>название</p>
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <p>описание</p>
        <input type="text" name='descr' value={descr} onChange={(e) => setDescr(e.target.value)} />
      </div>
      <br />
      <button disabled={!name || !descr} onClick={handleAdd}>Добавить</button>
    </div>
  )
}

export default AddList