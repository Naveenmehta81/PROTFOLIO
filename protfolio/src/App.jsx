import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Workfilter from './work/Workfilter';
// import { Sidebar } from './sidebar/sidebar';

function App() {
  

  return (
    <div>
          <div>
          <Navbar/>
         </div>
         <div>
          
                  <Routes>
            <Route path='/' element ={<Home/>}></Route>
            <Route path='/About' element ={<About/>}></Route>
            <Route path='/Workfilter' element ={<Workfilter/>}></Route>
           </Routes>
   
     
                 </div>
    </div>
      
  )
}

export default App
