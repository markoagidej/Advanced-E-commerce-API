import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import CustomerList from './components/CustomerList'
import CustomerForm from './components/CustomerForm'

const App = () => {
  const [selectedCustomerID, setCustomerID] = useState()

  const handleCustomerSelect = (customerId) => {
    setCustomerID(customerId)
  }

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers/show' element={<CustomerList onCustomerSelect={handleCustomerSelect}/>} />
        <Route path='/customers/form' element={<CustomerForm />} />
        <Route path='/customers/form/:id' element={<CustomerForm customerId={selectedCustomerID}/>} />
      </Routes>
    </>
  )
}

export default App