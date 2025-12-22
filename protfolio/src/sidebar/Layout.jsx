import React from 'react';
import { Outlet } from 'react-router-dom'; // Key import!
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div > 
      <Sidebar />
       <main >
        <Outlet /> 
      </main>
      
    </div>
  );
};

export default Layout;