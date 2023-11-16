import React from "react"
import About from './Screens/about.js'
import Navbar from './Screens/navbar.js'
import ProductCard from './Screens/productcard.js'
import Slideshow from './Screens/slideshow.js'
import Login from "./Screens/Login.jsx"
import { Route,Routes } from "react-router-dom"

function New()
{
return(
<>
<Routes>
<Route path="/" element={<Login />}/>
<Route path="/home" element={<Slideshow/>}/>
<Route path="/products" element={<ProductCard />}/>
<Route path="/about" element={<About />}/>
</Routes>
</>
);
}
export default New