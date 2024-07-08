import { observer } from "mobx-react-lite"
import List from "../List/List"
import AddList from "../AddList/AddList"
import './App.css'
import HumsterCombat from "../HumsetCombat/HumsterCombat"

const App = observer(() => {
  return (
    <div className='app'>
      <div>
        <h1 className='h1'>Список</h1>
        <div className='list__block'>
          <List />
          <AddList />
          <HumsterCombat />
        </div>
      </div>
    </div>
  )
})

export default App