import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className={`flex flex-col min-h-screen ${isLandingPage ? 'bg-white' : 'bg-gray-50'}`}>
      {/* Navbar con variante apropiada */}
      {isLandingPage ? (
        <Navbar variant="landing" />
      ) : (
        <Navbar variant="app" />
      )}

      {/* Contenido principal */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Mostrar en todas las páginas */}
      <Footer />
    </div>
  );
};

export default Layout;
