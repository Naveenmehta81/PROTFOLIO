import React from 'react';
import { Outlet } from 'react-router-dom'; // Key import!
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div > {/* This Flex makes them side-by-side */}
      
      {/* 1. The Sidebar stays fixed */}
      <Sidebar />

      {/* 2. The content area takes up the rest of the space */}
      <main >
        <Outlet /> 
      </main>
      
    </div>
  );
};

export default Layout;