import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import CustomerList from './components/CustomerList'
import CustomerForm from './components/CustomerForm'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

const App = () => {
  const [selectedCustomerID, setCustomerID] = useState()
  const [selectedProductID, setProductID] = useState()

  const handleCustomerSelect = (customerId) => {
    setCustomerID(customerId)
  }

  const handleProductSelect = (productId) => {
    setProductID(productId)
  }

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers/show' element={<CustomerList onCustomerSelect={handleCustomerSelect}/>} />
        <Route path='/customers/form' element={<CustomerForm />} />
        <Route path='/customers/form/:id' element={<CustomerForm customerId={selectedCustomerID}/>} />
        <Route path='/products/show' element={<ProductList onProductSelect={handleProductSelect}/>} />
        <Route path='/products/form' element={<ProductForm />} />
        <Route path='/products/form/:id' element={<ProductForm productId={selectedProductID}/>} />
      </Routes>
    </>
  )
}

export default App