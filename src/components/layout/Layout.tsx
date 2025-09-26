import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { logoutUser } from '../../services/authService';
import Footer from './Footer';

const Layout: React.FC = () => {
  const { currentUser, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // Determinar si estamos en el landing page
  const isLandingPage = location.pathname === '/';

  return (
    <div className={`flex flex-col min-h-screen ${isLandingPage ? 'bg-white' : 'bg-gray-50'}`}>
      {/* Header - Solo mostrar en páginas que no sean el landing */}
      {!isLandingPage && (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.57.53 1.32 1.47 1.6v-3.35L9.6 12.5c-.94-.47-1.4-1.25-1.4-2.35 0-1.86 1.51-2.78 3.14-3.12V5h2.67v2.02c1.52.38 2.65 1.43 2.79 3.16h-1.97c-.1-.87-.54-1.49-1.32-1.67v3.08l1.41.44c1.26.41 2.01 1.24 2.01 2.62 0 1.7-1.4 2.94-3.1 3.29z"></path>
                </svg>
                <span className="text-xl font-semibold text-gray-800">Finanzas Seguras</span>
              </Link>

              {/* Navegación de escritorio */}
              <nav className="hidden md:flex items-center space-x-6">
                {currentUser ? (
                  <>
                    <Link
                      to="/dashboard"
                      className={`text-gray-600 hover:text-primary-600 ${location.pathname === '/dashboard' ? 'text-primary-600 font-medium' : ''}`}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/transactions"
                      className={`text-gray-600 hover:text-primary-600 ${location.pathname === '/transactions' ? 'text-primary-600 font-medium' : ''}`}
                    >
                      Transacciones
                    </Link>

                    <div className="flex items-center ml-6 space-x-4">
                      <span className="text-sm text-gray-600">
                        {currentUser.displayName || currentUser.email}
                        {currentUser.role === 'asesor' && (
                          <span className="ml-2 px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">
                            Asesor
                          </span>
                        )}
                      </span>
                      <button onClick={handleLogout} className="text-gray-600 hover:text-red-600">
                        Cerrar sesión
                      </button>
                    </div>
                  </>
                ) : (
                  !isLoading && (
                    <>
                      <Link
                        to="/about"
                        className={`text-gray-600 hover:text-primary-600 ${location.pathname === '/about' ? 'text-primary-600 font-medium' : ''}`}
                      >
                        Nosotros
                      </Link>
                      <Link
                        to="/services"
                        className={`text-gray-600 hover:text-primary-600 ${location.pathname === '/services' ? 'text-primary-600 font-medium' : ''}`}
                      >
                        Servicios
                      </Link>
                      <Link
                        to="/contact"
                        className={`text-gray-600 hover:text-primary-600 ${location.pathname === '/contact' ? 'text-primary-600 font-medium' : ''}`}
                      >
                        Contacto
                      </Link>
                      <Link to="/login" className="text-gray-600 hover:text-primary-600">
                        Iniciar sesión
                      </Link>
                      <Link to="/register" className="btn-primary">
                        Registrarse
                      </Link>
                    </>
                  )
                )}
              </nav>

              {/* Botón menú móvil */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Menú móvil */}
            {isMenuOpen && (
              <nav className="md:hidden py-3 mt-3 border-t border-gray-200">
                {currentUser ? (
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/dashboard"
                      className={`text-gray-600 hover:text-primary-600 py-2 ${location.pathname === '/dashboard' ? 'text-primary-600 font-medium' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/transactions"
                      className={`text-gray-600 hover:text-primary-600 py-2 ${location.pathname === '/transactions' ? 'text-primary-600 font-medium' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Transacciones
                    </Link>

                    <div className="pt-3 mt-3 border-t border-gray-200">
                      <div className="text-sm text-gray-600 mb-2">
                        {currentUser.displayName || currentUser.email}
                        {currentUser.role === 'asesor' && (
                          <span className="ml-2 px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">
                            Asesor
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                ) : (
                  !isLoading && (
                    <div className="flex flex-col space-y-3">
                      <Link
                        to="/about"
                        className={`text-gray-600 hover:text-primary-600 py-2 ${location.pathname === '/about' ? 'text-primary-600 font-medium' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Nosotros
                      </Link>
                      <Link
                        to="/services"
                        className={`text-gray-600 hover:text-primary-600 py-2 ${location.pathname === '/services' ? 'text-primary-600 font-medium' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Servicios
                      </Link>
                      <Link
                        to="/contact"
                        className={`text-gray-600 hover:text-primary-600 py-2 ${location.pathname === '/contact' ? 'text-primary-600 font-medium' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contacto
                      </Link>
                      <div className="border-t border-gray-200 pt-3 mt-3">
                        <Link
                          to="/login"
                          className="text-gray-600 hover:text-primary-600 py-2 block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Iniciar sesión
                        </Link>
                        <Link
                          to="/register"
                          className="btn-primary inline-block text-center mt-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Registrarse
                        </Link>
                      </div>
                    </div>
                  )
                )}
              </nav>
            )}
          </div>
        </header>
      )}

      {/* Landing Page Navbar - Solo para la página principal */}
      {isLandingPage && (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.57.53 1.32 1.47 1.6v-3.35L9.6 12.5c-.94-.47-1.4-1.25-1.4-2.35 0-1.86 1.51-2.78 3.14-3.12V5h2.67v2.02c1.52.38 2.65 1.43 2.79 3.16h-1.97c-.1-.87-.54-1.49-1.32-1.67v3.08l1.41.44c1.26.41 2.01 1.24 2.01 2.62 0 1.7-1.4 2.94-3.1 3.29z"></path>
                </svg>
                <span className="text-xl font-bold text-white">Finanzas Seguras</span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#beneficios"
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Beneficios
                </a>
                <a
                  href="#nosotros"
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Nosotros
                </a>
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                  Registrarse
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-blue-900 bg-opacity-95 rounded-lg mt-2 p-4">
                <div className="flex flex-col space-y-4">
                  <a href="#beneficios" className="text-white hover:text-yellow-300 py-2">
                    Beneficios
                  </a>
                  <a href="#nosotros" className="text-white hover:text-yellow-300 py-2">
                    Nosotros
                  </a>
                  <Link to="/login" className="text-white hover:text-yellow-300 py-2">
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-lg text-center"
                  >
                    Registrarse
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
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
