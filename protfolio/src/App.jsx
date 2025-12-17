import { useState } from 'react'
import './App.css'
//import Navbar from './Navbar'
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Workfilter from './work/Workfilter';
import Contect from './Form/Contect';
import Layout from './sidebar/Layout'
import Awards from './Awards/Awards';


function App() {
  

  return (
    <div>
          
         <div>
                
            <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element ={<Home/>}></Route>
            <Route path='/About' element ={<About/>}></Route>
            <Route path='/Workfilter' element ={<Workfilter/>}></Route>
            <Route path='/Contect' element ={<Contect/>}></Route>
            <Route path='/Awards' element ={<Awards/>}></Route>
            </Route>
           </Routes>
              
                
   
     
                 </div>
    </div>
      
  )
}

export default App
