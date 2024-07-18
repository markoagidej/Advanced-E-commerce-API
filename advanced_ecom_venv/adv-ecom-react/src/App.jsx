import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import CustomerList from './components/CustomerList'
import CustomerForm from './components/CustomerForm'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import OrderList from './components/OrderList'
import OrderForm from './components/OrderForm'

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

        <Route path='/orders/show' element={<OrderList />} />
        <Route path='/orders/form' element={<OrderForm productId={selectedProductID}/>} />
        <Route path='/orders/form/:id' element={<OrderForm productId={selectedProductID}/>} />
      </Routes>
    </>
  )
}

export default App