import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = ['/signin', '/signup', '/reset-password'].includes(location.pathname);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};
