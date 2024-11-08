import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './Components/First'
import { Second, Test } from './Components/Second'
import Layout from './Components/usercomponents/Layout'
import Homepage from './Pages/Homepage'
import Productpage from './Pages/Productpage'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
const Myroute = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* <Route path = '/' element = {<First/>}/>
            <Route path = '/second' element = {<Second/>}/>
            <Route path = '/test' element = {<Test/>}/> */}
            <Route path='/'element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='product'element={<Productpage/>}/>
            <Route path='productdetail/:productId' element={<ProductDetail/>}/>
            <Route path='cart'element={<Cart/>}/>
              <Route path='/register'element={<Register/>}/>

            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default Myroute