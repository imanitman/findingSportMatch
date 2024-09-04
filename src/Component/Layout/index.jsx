import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
function Layout() {
  return (
    <div className='min-h-screen'>
      <Header/>
      <main className=''>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
