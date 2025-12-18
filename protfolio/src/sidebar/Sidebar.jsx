import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BsPersonRolodex } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { CgAwards } from "react-icons/cg";
import './Sidebar.css'; // We will make this next

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className='logo'>N</div>
      <div className='list-sidebar'>
        <nav className='nav'>
          <ul className='nav-ul'>
            <li className='list'> <Link to = '/'><FaHome /></Link> </li>
            <li className='list'>  <Link to  = '/About'><BsPersonRolodex /></Link></li>
             {/* <li className='list'><Link to = '/Awards'><CgAwards /></Link></li> */} 
            <li className='list'><Link to = '/Workfilter'><MdWork /></Link></li>
            <li className='list'> <Link to = '/Contect'><IoIosContact /></Link></li>
           
          </ul>
        </nav>
                </div>  

    </div>
    
  );
};

export default Sidebar;