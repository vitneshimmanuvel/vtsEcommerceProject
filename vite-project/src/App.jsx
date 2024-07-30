import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Prodect from './components/Prodect'
import Cart from './components/Cart'
import Cartpage from './components/Cartpage'
import Login from './components/Login'
import {Route,Routes} from "react-router-dom"
import Register from './components/Register'
import Home from './components/Home'
import Carthead from './components/Carthead'
import { useState } from 'react'
import Navkichen from './components/Navkichen'
import Prodectlist from './components/Prodectlist'
function App() {

  

  const [cart ,setcart] = useState([]);
  return (
    <>
    <Routes>
   
    <Route path='/'  element={<Login></Login>}></Route>
    <Route path='/home' element={<Home cart={cart} setcart={setcart} length={cart.length}></Home>}></Route>
    <Route  path='/register' element={<Register></Register>}></Route>
    <Route  path='/prodet' element={<Prodect></Prodect>}></Route>
    <Route path = '/prodect' element={<Navkichen></Navkichen>}></Route>
    <Route path='/cart' element={<Cartpage cart={cart} setcart={setcart}></Cartpage>}></Route>
    <Route path = '/products' element={<Prodectlist/>}></Route>

    </Routes>
   
    </>
  )
}

export default App
