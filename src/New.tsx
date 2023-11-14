import React from "react"
import AppFunc from "./AppFunc.tsx"
import AppClass from "./AppClass.tsx"
import Display from "./Display.jsx"
import Login from "./Screens/Login.jsx"
import Navbar from './Screens/navbar.js'
import Slideshow from './Screens/slideshow.js'
import ProductCard from './Screens/productcard.js'
import About from './Screens/about.js'
function New()
{
return(
//   {  <AppFunc emotion={"sad"} Age={33} Gender={"MALE"}/>}
// {<AppClass emotion={"sad"} Age={33}/>}
//<Display name="Usman" age="21"/>Log
//<Login/>
<>
<Navbar/>
<Slideshow/>
<ProductCard/>
<About/>
</>
);
}
export default New