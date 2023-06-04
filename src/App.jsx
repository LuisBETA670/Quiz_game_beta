
import { Route, Routes } from 'react-router-dom'
import GameHi from './Gameini'
import Start from './Start'
import {useState} from 'react'
import Capture from './Capture'
import Game from './Game'

function App() {
  const [state, setState] = useState();
  
  if (!state) {
    console.log(state)
    return <Start setState={setState}/>
  }
  return (
    <>
      {/* <HomeStart/> */}
      <Routes>
        <Route path='/' element={<GameHi/>}/>
        <Route path='/Captura' element={<Capture/>}/>
        <Route path='/Game' element={<Game/>}/>
      </Routes>
    </>
  )
}

export default App