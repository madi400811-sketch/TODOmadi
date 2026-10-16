import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Home'
import NewContextProvider from './NewContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NewContextProvider>
   <Home/>
    </NewContextProvider>
  )
}

export default App
