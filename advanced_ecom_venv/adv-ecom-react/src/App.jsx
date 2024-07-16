import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'

const App = () => {
  const [selectedCustomerID, setCustomerID] = useState()

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<Home />} />
        <Route path='/customers/form' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
