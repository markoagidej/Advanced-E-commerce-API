import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import CustomerList from './components/CustomerList'
import CustomerForm from './components/CustomerForm'

const App = () => {
  const [selectedCustomerID, setCustomerID] = useState()

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<CustomerList />} />
        <Route path='/customers/form' element={<CustomerForm />} />
      </Routes>
    </>
  )
}

export default App