import React from 'react'
import Home from './Components/Home'
import About from './Components/About';
import Workfilter from './work/Workfilter';
import { FaHome } from "react-icons/fa";
import { BsPersonRolodex } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { Link  } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
       
       
         <div>
            <Link to = '/'><FaHome /></Link>
            <Link to  = '/About'><BsPersonRolodex /></Link>
            <Link to = '/Workfilter'><MdWork /></Link>
         </div>
          
    </div>
  )
}

export default Navbar;