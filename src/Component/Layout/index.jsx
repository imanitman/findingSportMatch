import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
function Layout() {
  return (
    <div>
      <h1><Header></Header></h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
